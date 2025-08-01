import { useState, useCallback, useMemo, useEffect, memo } from "react";
import {
  Button,
  Text, 
  BlockStack,
  InlineStack,
  Box,
  LegacyStack,
  ChoiceList,
  Select, 
  Popover,
  OptionList,
  TextField,
  Modal as PolarisModal,
  DatePicker,
  Icon,
  Tooltip,
  InlineGrid,
} from "@polaris/npm";
import { Card as CardV2 } from "@polaris/internal";
import {
  CalendarTimeIcon,
  CalendarIcon,
  ClockIcon,
  EditIcon,
  DeleteIcon,
} from "@shopify/polaris-icons";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { DateTime } from "luxon";
import { getTimeZones } from "@vvo/tzdb";
import _ from "lodash";
import { form as formFieldMap } from "../../../data/article/config/fieldMap";
import { relevantZones } from "../config/timezones";
import { prefix } from "../config/ids";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { form as formFieldStates} from "../../../data/article/config/fieldState";
export const publishedFieldPath = formFieldMap.published;
export const publishDateFieldPath = formFieldMap.publishDate;

export const defaultPublishedDate = formFieldStates.publishDate

const modalId = `${prefix}:visibility`;

const allTimeZones = getTimeZones({ includeUtc: true });



import { isValidDate, getValidDate, dateToLocale } from "../../../utils/date";
import { PolarisProvider } from "../../../polaris/npm";

function useTimeZoneOptions(selectedDate) {
  return useMemo(() => {
    const date = DateTime.fromJSDate(selectedDate || new Date());
    return allTimeZones
      .filter((tz) => relevantZones.includes(tz.name))
      .map((tz) => {
        const offset = date.setZone(tz.name).toFormat("ZZ");
        return {
          label: `${tz.name} (UTC${offset})`,
          value: tz.name,
        };
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [selectedDate]);
}

function pad(n) {
  return n.toString().padStart(2, "0");
}

const AM_PM_OPTIONS = [
  { label: "AM", value: "AM" },
  { label: "PM", value: "PM" },
];

const FORMAT_OPTIONS = [
  { label: "24 heures", value: "24" },
  { label: "12 heures (AM/PM)", value: "12" },
];

const DateModal = memo(function DateModal({
  open,
  onClose,
  timeZone,
  setTimeZone,
  initialDate,
}) {
  const { setValue} = useFormContext();


  // FORMAT 24/12h STATE
  const [hourFormat, setHourFormat] = useState("24"); // "24" ou "12"

  const luxonInit = useMemo(
    () => DateTime.fromJSDate(initialDate).setZone(timeZone),
    [initialDate, timeZone],
  );

  // States pour chaque morceau de date et heure
  const [year, setYear] = useState(luxonInit.year);
  const [month, setMonth] = useState(luxonInit.month);
  const [day, setDay] = useState(luxonInit.day);
  const [hour, setHour] = useState(luxonInit.hour);
  const [minute, setMinute] = useState(luxonInit.minute);
  const [selectedTz, setSelectedTz] = useState(timeZone);

  // Format 12h: on mémorise aussi AM/PM (synchronisé au switch)
  const [ampm, setAmpm] = useState(luxonInit.hour < 12 ? "AM" : "PM");

  // Saisie utilisateur brute
  const [inputDate, setInputDate] = useState(luxonInit.toFormat("yyyy-MM-dd"));
  const [inputHour, setInputHour] = useState(
    hourFormat === "24"
      ? luxonInit.toFormat("HH:mm")
      : `${pad(luxonInit.hour % 12 === 0 ? 12 : luxonInit.hour % 12)}:${pad(
          luxonInit.minute,
        )}`,
  );

  const [pickerYear, setPickerYear] = useState(year);

  const [pickerMonth, setPickerMonth] = useState(month);

  const handleMonthChange = useCallback((month, year) => {
    setPickerMonth(month + 1);
    setPickerYear(year);
  }, []);

  // Pour compléter les parties manquantes intelligemment
  const [lastValidDay, setLastValidDay] = useState(luxonInit.day);
  const [lastValidMonth, setLastValidMonth] = useState(luxonInit.month);

  // Réinitialisation à chaque ouverture
  useEffect(() => {
    setYear(luxonInit.year);
    setMonth(luxonInit.month);
    setDay(luxonInit.day);
    setHour(luxonInit.hour);
    setMinute(luxonInit.minute);
    setSelectedTz(timeZone);

    setAmpm(luxonInit.hour < 12 ? "AM" : "PM");

    setInputDate(luxonInit.toFormat("yyyy-MM-dd"));

    setPickerMonth(luxonInit.month);
    setPickerYear(luxonInit.year);

    setLastValidDay(luxonInit.day);
    setLastValidMonth(luxonInit.month);
  }, [open, initialDate, timeZone, luxonInit]);

  // Conversion automatique lors du switch de format

  const handleHourFormatChange = useCallback(
    (value) => {
      setHourFormat(value);

      if (value === "24") {
        // Format 24h : simple affichage HH:mm
        setInputHour(`${pad(hour)}:${pad(minute)}`);
      } else {
        // Format 12h : conversion + recalcul AM/PM
        const isPM = hour >= 12;
        const h12 = hour % 12 === 0 ? 12 : hour % 12;
        setAmpm(isPM ? "PM" : "AM");
        setInputHour(`${pad(h12)}:${pad(minute)}`);
      }
    },
    [hour, minute],
  );

  // ---- Heure ----
  // Pour le 24h : HH:mm  /  Pour le 12h : HH:mm + AM/PM
  const handleHourBlur = useCallback(() => {
    if (hourFormat === "24") {
      const match = inputHour.match(/^(\d{1,2})(?::(\d{2}))?$/);
      let h = hour,
        m = minute;
      if (match) {
        h = Number(match[1]);
        m = match[2] ? Number(match[2]) : 0;
      }
      if (h >= 0 && h < 24 && m >= 0 && m < 60) {
        setHour(h);
        setMinute(m);
        setInputHour(`${pad(h)}:${pad(m)}`);
      } else {
        setInputHour(`${pad(hour)}:${pad(minute)}`);
      }
    } else {
      // 12h
      const match = inputHour.match(/^(\d{1,2})(?::(\d{2}))?$/);
      let h = hour % 12 === 0 ? 12 : hour % 12;
      let m = minute;
      if (match) {
        h = Number(match[1]);
        m = match[2] ? Number(match[2]) : 0;
      }
      // Correction automatique sur blur
      if (h >= 1 && h <= 12 && m >= 0 && m < 60) {
        // Convertit en 24h interne selon AM/PM
        let h24 = ampm === "PM" ? (h === 12 ? 12 : h + 12) : h === 12 ? 0 : h;
        setHour(h24);
        setMinute(m);
        setInputHour(`${pad(h)}:${pad(m)}`);
      } else {
        const h12 = hour % 12 === 0 ? 12 : hour % 12;
        setInputHour(`${pad(h12)}:${pad(minute)}`);
      }
    }
  }, [inputHour, hour, minute, hourFormat, ampm]);

  // Saisie live
  const handleHourChange = useCallback(
    (val) => {
      setInputHour(val);
      // Mise à jour live des states si la saisie est parfaite
      const match = val.match(/^(\d{1,2}):(\d{2})$/);
      if (match) {
        let h = Number(match[1]);
        let m = Number(match[2]);
        if (hourFormat === "24") {
          if (h >= 0 && h < 24 && m >= 0 && m < 60) {
            setHour(h);
            setMinute(m);
          }
        } else {
          if (h >= 1 && h <= 12 && m >= 0 && m < 60) {
            let h24 =
              ampm === "PM" ? (h === 12 ? 12 : h + 12) : h === 12 ? 0 : h;
            setHour(h24);
            setMinute(m);
          }
        }
      }
    },
    [hourFormat, ampm],
  );

  // AM/PM toggle pour le 12h
  const handleAmpmChange = useCallback(
    (val) => {
      setAmpm(val);
      // Conversion directe de hour interne
      const match = inputHour.match(/^(\d{1,2}):(\d{2})$/);
      if (match) {
        let h = Number(match[1]);
        let h24 = val === "PM" ? (h === 12 ? 12 : h + 12) : h === 12 ? 0 : h;
        setHour(h24);
      } else {
        // Si rien en saisie, update juste l'état
        setHour((prevHour) => {
          let h12 = prevHour % 12 === 0 ? 12 : prevHour % 12;
          return val === "PM"
            ? h12 === 12
              ? 12
              : h12 + 12
            : h12 === 12
              ? 0
              : h12;
        });
      }
    },
    [inputHour],
  );
  // Validation date/heure (on n'utilise pas le résultat pour bloquer, juste pour savoir si on peut update)
  const dateIsValid = useMemo(() => {
    const dt = DateTime.fromObject(
      { year, month, day, hour, minute, second: 0, millisecond: 0 },
      { zone: selectedTz },
    );
    return dt.isValid;
  }, [year, month, day, hour, minute, selectedTz]);

  const luxonDate = useMemo(() => {
    if (!dateIsValid) return null;
    return DateTime.fromObject(
      { year, month, day, hour, minute, second: 0, millisecond: 0 },
      { zone: selectedTz },
    );
  }, [year, month, day, hour, minute, selectedTz, dateIsValid]);

  const tzOptions = useTimeZoneOptions(
    luxonDate ? luxonDate.toJSDate() : new Date(),
  );

  // Correction intelligente au blur de la date
  const handleDateBlur = useCallback(() => {
    // YYYY-MM-DD ou YYYY-MM ou YYYY
    const match = inputDate.match(/^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/);
    let newYear = year,
      newMonth = month,
      newDay = day;
    if (match) {
      newYear = Number(match[1]);
      if (match[2]) {
        newMonth = Number(match[2]);
        setLastValidMonth(newMonth);
      } else {
        newMonth = lastValidMonth;
      }
      if (match[3]) {
        newDay = Number(match[3]);
        setLastValidDay(newDay);
      } else {
        newDay = lastValidDay;
      }
    }
    // Corrige automatiquement si jour dépassé
    const dt = DateTime.fromObject(
      { year: newYear, month: newMonth, day: newDay, hour, minute },
      { zone: selectedTz },
    );
    if (dt.isValid) {
      setYear(newYear);
      setMonth(newMonth);
      setDay(newDay);
      setInputDate(dt.toFormat("yyyy-MM-dd"));

      setPickerMonth(newMonth);
      setPickerYear(newYear);
    } else {
      // Si vraiment pas valide, on restaure l'ancienne valeur correcte
      setInputDate(`${year}-${pad(month)}-${pad(day)}`);
    }
  }, [
    inputDate,
    hour,
    minute,
    selectedTz,
    lastValidDay,
    lastValidMonth,
    year,
    month,
    day,
  ]);


  const handleDateChange = useCallback(
    (val) => {
      // Autorise format flexible : YYYY-M-D ou YYYY-MM-DD
      const match = val.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
      setInputDate(val); // Toujours mettre à jour l'affichage brut

      if (match) {
        const y = Number(match[1]);
        const m = Number(match[2]);
        const d = Number(match[3]);

        const dt = DateTime.fromObject(
          { year: y, month: m, day: d, hour, minute },
          { zone: selectedTz },
        );

        if (dt.isValid) {
          setYear(y);
          setMonth(m);
          setDay(d);

          setPickerMonth(m);
          setPickerYear(y);

          setLastValidDay(d);
          setLastValidMonth(m);
        }
      }
    },
    [hour, minute, selectedTz],
  );

  const handleTzChange = useCallback((val) => setSelectedTz(val), []);

  // Validation finale (uniquement si date complète et valide)

  const handleValidate = useCallback(() => {
    if (!dateIsValid || !luxonDate) return;


    setValue(publishDateFieldPath, luxonDate.toJSDate(), {
      shouldValidate: true,
      shouldDirty: true,
    });


      
    const now = DateTime.now().setZone(selectedTz);
    setValue(publishedFieldPath, luxonDate <= now, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setTimeZone(selectedTz);
    onClose();
  }, [dateIsValid, luxonDate, selectedTz, setValue, setTimeZone, onClose]);

  // popover horaire
  const [popoverActive, setPopoverActive] = useState(false);

  // Génère les heures par pas de 30 min
  const hourOptions = useMemo(() => {
    const res = [];

    if (hourFormat === "24") {
      for (let h = 0; h < 24; ++h) {
        for (let m = 0; m < 60; m += 30) {
          res.push(`${pad(h)}:${pad(m)}`);
        }
      }
    } else {
      for (let h = 0; h < 12; ++h) {
        for (let m = 0; m < 60; m += 30) {
          res.push(`${pad(h)}:${pad(m)}`);
        }
      }
    }
    return res;
  }, [hourFormat]);

  // Handler : sélection depuis la liste
  const handlePopoverSelect = useCallback(
    (selected) => {
      setInputHour(selected);
      // Gestion 24h/12h automatique
      if (hourFormat === "24") {
        const [h, m] = selected.split(":").map(Number);
        setHour(h);
        setMinute(m);
      } else {
        let [h, m] = selected.split(":").map(Number);
        let pm = ampm === "PM";
        // Correction de l'AM/PM selon la valeur choisie
        if (h >= 12) {
          pm = true;
          if (h > 12) h -= 12;
        } else if (h === 0) {
          h = 12;
          pm = false;
        }
        setAmpm(pm ? "PM" : "AM");
        setInputHour(`${pad(h)}:${pad(m)}`);
        setHour(pm ? (h === 12 ? 12 : h + 12) : h === 12 ? 0 : h);
        setMinute(m);
      }
      setPopoverActive(false);
    },
    [setInputHour, hourFormat, ampm],
  );

  const handleHourInputFocus = useCallback(() => setPopoverActive(true), []);
  const handlePopoverClose = useCallback(() => setPopoverActive(false), []);

  const [isEditingDate, setIsEditingDate] = useState(false);

  return (
    <Modal id={modalId} open={open} onHide={onClose}>
      <TitleBar title="Définir la date de visibilité">
        <button variant="primary" onClick={handleValidate}>
          Définir la date de visibilité
        </button>

        <button onClick={onClose}>Annuler</button>
      </TitleBar>
      <PolarisProvider>

        <PolarisModal.Section>
          <LegacyStack vertical>
            <LegacyStack.Item>
              <Text tone="subdued" variant="bodyMd">
                Programmer la publication à cette date, heure et fuseau :
              </Text>
            </LegacyStack.Item>
            <LegacyStack.Item>
              <InlineGrid columns={{ xs: "1fr 1fr" }} gap={{ xs: "400" }}>
                <LegacyStack distribution="fillEvenly" spacing="baseTight">
                  <LegacyStack.Item>
                    <Select
                      labelHidden
                      label="Fuseau horaire"
                      options={tzOptions}
                      value={selectedTz}
                      onChange={handleTzChange}
                    />
                  </LegacyStack.Item>

                  <LegacyStack.Item>
                    <Select
                      labelHidden
                      label="Format de l'heure"
                      options={FORMAT_OPTIONS}
                      value={hourFormat}
                      onChange={handleHourFormatChange}
                    />
                  </LegacyStack.Item>
                </LegacyStack>

                <LegacyStack distribution="fillEvenly" spacing="baseTight">
                  <LegacyStack.Item>
                    <TextField
                      labelHidden
                      prefix={<Icon source={CalendarIcon} />}
                      label="Date (AAAA-MM-JJ)"
                      value={
                        isEditingDate
                          ? inputDate
                          : (luxonDate?.toLocaleString(DateTime.DATE_FULL) ??
                            "")
                      }
                      onChange={handleDateChange}
                      onBlur={(e) => {
                        setIsEditingDate(false);
                        handleDateBlur(e);
                      }}
                      onFocus={() => setIsEditingDate(true)}
                      autoComplete="off"
                      placeholder="Date (AAAA-MM-JJ)"
                      type="text"
                    />
                  </LegacyStack.Item>

                  <LegacyStack.Item>
                    <Popover
                      active={popoverActive}
                      activator={
                        <TextField
                          labelHidden
                          prefix={<Icon source={ClockIcon} />}
                          label={
                            hourFormat === "24"
                              ? "Heure (HH:mm)"
                              : "Heure (HH:mm AM/PM)"
                          }
                          value={inputHour}
                          onFocus={handleHourInputFocus}
                          onChange={handleHourChange}
                          onBlur={handleHourBlur}
                          autoComplete="off"
                          placeholder={hourFormat === "24" ? "14:30" : "02:30"}
                          type="text"
                        />
                      }
                      preferInputActivator
                      autofocusTarget="none"
                      onClose={handlePopoverClose}
                      preferredAlignment="left"
                      fullWidth
                    >
                      <Box
                        padding="200"
                        style={{ maxHeight: 300, overflowY: "auto" }}
                      >
                        <OptionList
                          options={hourOptions.map((val) => ({
                            value: val,
                            label: val,
                          }))}
                          selected={[inputHour]}
                          onChange={([val]) => handlePopoverSelect(val)}
                        />
                      </Box>
                    </Popover>
                  </LegacyStack.Item>

                  {hourFormat === "12" && (
                    <LegacyStack.Item>
                      <Select
                        labelHidden
                        label="AM/PM"
                        options={AM_PM_OPTIONS}
                        value={ampm}
                        onChange={handleAmpmChange}
                      />
                    </LegacyStack.Item>
                  )}
                </LegacyStack>
              </InlineGrid>
            </LegacyStack.Item>

            <LegacyStack.Item>
              <Box paddingBlockStart={{ xs: "300" }}>
                <DatePicker
                  month={pickerMonth - 1}
                  year={pickerYear}
                  multiMonth
                  onMonthChange={handleMonthChange}
                  onChange={({ start }) => {
                    const newDate = DateTime.fromJSDate(start).setZone(
                      selectedTz,
                      {
                        keepLocalTime: true,
                      },
                    );
                    setYear(newDate.year);
                    setMonth(newDate.month);
                    setDay(newDate.day);
                    setInputDate(newDate.toFormat("yyyy-MM-dd"));
                    setLastValidDay(newDate.day);
                    setLastValidMonth(newDate.month);
                  }}
                  selected={{
                    start: luxonDate?.toJSDate() ?? new Date(),
                    end: luxonDate?.toJSDate() ?? new Date(),
                  }}
                />
              </Box>
            </LegacyStack.Item>
          </LegacyStack>
        </PolarisModal.Section>
      </PolarisProvider>
    </Modal>
  );
});



const DateVisibility = () => {
  const shopify = useAppBridge();
  const { control, setValue } = useFormContext();
  const isPublished = useWatch({ control, name: publishedFieldPath }) || false;

  const [timeZone, setTimeZone] = useState("Europe/Paris");
  const publishedDate = useWatch({ control, name: publishDateFieldPath });

  const has = isValidDate(publishedDate) ? true : false;
  const dateSend = getValidDate(publishedDate);

  const handleClear = () => {
    setValue(publishDateFieldPath, defaultPublishedDate, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setModalOpen(true);
    shopify.modal.show(modalId);
  }, [shopify]);
  const handleModalClose = useCallback(() => {
    shopify.modal.hide(modalId);
    setModalOpen(false);
  }, [shopify]);

  return (
    <CardV2>
      <BlockStack gap={{ xs: "100" }} inlineAlign="stretch">
        <InlineStack wrap align="space-between" direction={{ xs: "row" }}>
          <Text as="h2" variant="headingSm" fontWeight="semibold">
            Visibilité
          </Text>

          {!has && !isPublished && (
            <Box>
              <Tooltip content="Définir la date de visibilité">
                <Button
                  icon={CalendarTimeIcon}
                  variant="plain"
                  size="medium"
                  textAlign="center"
                  accessibilityLabel="Définir la date de visibilité"
                  onClick={handleModalOpen}
                  ariaControls={modalId}
                  ariaExpanded={modalOpen}
                />
              </Tooltip>
            </Box>
          )}
        </InlineStack>

        <Controller
          name={publishedFieldPath}
          control={control}
          render={({ field: { value, onChange } }) => (
            <ChoiceList
              title="Visibilité"
              titleHidden
              choices={[
                {
                  label: "Visible",
                  helpText: value && (
                    <InlineStack
                      wrap={false}
                      align="space-between"
                      blockAlign="start"
                      gap={{ xs: "200" }}
                      direction={{ xs: "row" }}
                    >
                      <Text variant="bodyMd" tone="subdued" as="span">
                        Visible à partir du {dateToLocale(dateSend, timeZone)}
                      </Text>

                      <Box>
                        <span>
                          <Tooltip content="Modifier la date de visibilité">
                            <Button
                              variant="plain"
                              size="medium"
                              textAlign="center"
                              accessibilityLabel="Modifier la date de visibilité"
                              icon={<Icon source={EditIcon} />}
                              onClick={handleModalOpen}
                            />
                          </Tooltip>
                        </span>
                      </Box>
                    </InlineStack>
                  ),
                  value: "visible",
                },
                {
                  label: "Masqué",
                  helpText: !value && has && (
                    <InlineStack
                      wrap={false}
                      align="space-between"
                      blockAlign="start"
                      gap={{ xs: "200" }}
                      direction={{ xs: "row" }}
                    >
                      <Text variant="bodyMd" tone="subdued" as="span">
                        Deviendra visible le {dateToLocale(dateSend, timeZone)}
                      </Text>

                      <InlineStack
                        align="space-between"
                        wrap={false}
                        gap={{ xs: "400", sm: "200" }}
                        direction={{ xs: "row" }}
                      >
                        <Box>
                          <span>
                            <Tooltip content="Modifier la date de visibilité">
                              <Button
                                variant="plain"
                                size="medium"
                                textAlign="center"
                                accessibilityLabel="Modifier la date de visibilité"
                                icon={<Icon source={EditIcon} />}
                                onClick={handleModalOpen}
                              />
                            </Tooltip>
                          </span>
                        </Box>
                        <Box>
                          <span>
                            <Tooltip content="Effacer la date de visibilité">
                              <Button
                                variant="plain"
                                size="medium"
                                textAlign="center"
                                accessibilityLabel="Effacer la date de visibilité"
                                icon={<Icon source={DeleteIcon} />}
                                onClick={handleClear}
                              />
                            </Tooltip>
                          </span>
                        </Box>
                      </InlineStack>
                    </InlineStack>
                  ),
                  value: "hidden",
                },
              ]}
              selected={value ? "visible" : "hidden"}
              onChange={(selected) => {
                const visible =  Array.isArray(selected) ? selected.includes("visible") : selected === "visible";
                onChange(visible);

                const now = DateTime.now().setZone(timeZone);
                const date = DateTime.fromJSDate(dateSend).setZone(timeZone);

                if (!visible && date < now) {
                  setValue(publishDateFieldPath, defaultPublishedDate, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                } else if (visible && date > now) {
                  setValue(publishDateFieldPath, new Date(), {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }
              }}
            />
          )}
        />
      </BlockStack>
      <DateModal
        open={modalOpen}
        onClose={handleModalClose}
        timeZone={timeZone}
        setTimeZone={setTimeZone}
        initialDate={dateSend}
      />
    </CardV2>
  );
};

export default DateVisibility;
