import React, { useState, useCallback, useMemo } from "react";

import { Button, Popover, Icon, DatePicker, TextField, Box, LegacyStack, ChoiceList, Text, BlockStack, Card, Autocomplete } from "@shopify/polaris";
import { CalendarIcon, ClockIcon } from "@shopify/polaris-icons";

const Visible = ({ isPublished, setPublished, date: initalDate, setDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = useCallback(() => setIsOpen(isOpen => !isOpen), []);

  const [popoverActive, setPopoverActive] = useState(false);

  const handleBlur = event => {
    const popoverContent = document.querySelector(".Polaris-Popover");
    if (popoverContent && !popoverContent.contains(event.relatedTarget)) {
      setPopoverActive(false);
    }
  };

  const isValidDate = useCallback(date => {
    if (!date) return false; // Vérifie si la date existe

    // Si la date est une chaîne de caractères, on vérifie si elle est vide après trim
    if (typeof date === "string") {
      return date.trim() !== "";
    }

    // Si la date est une instance de Date, on vérifie sa validité
    if (date instanceof Date) {
      return !isNaN(date.getTime());
    }

    return false; // Si ce n'est ni une chaîne, ni une instance de Date valide
  }, []);

  const date = useMemo(() => {
    const valide = new Date(initalDate);
    return isValidDate(valide) ? valide : new Date();
  }, [initalDate]);

  // Initialisation de l'heure à partir de la date ou par défaut
  const initialHours = useMemo(() => {
    return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  }, [date]);

  // État pour l'heure
  const [hours, setHoursValue] = useState(initialHours);

  // Initialisation de selectedDates
  const initializeSelectedDates = useMemo(() => {
    return { start: date, end: date };
  }, [date]);

  // État pour selectedDates
  const [selectedDates, setSelectedDates] = useState(initializeSelectedDates);

  // Cette fonction est appelée lorsqu'une modification des dates ou des heures est effectuée
  const handleDateChange = useCallback(() => {
    const [hoursPart, minutesPart] = hours.split(":").map(num => parseInt(num, 10));
    const datePart = selectedDates.start;

    // Vérifie si la date ou les valeurs d'heures sont invalides
    if (!isValidDate(datePart) || isNaN(hoursPart) || isNaN(minutesPart)) {
      return;
    }

    // Crée une nouvelle instance de Date combinée avec les heures et les minutes
    const combinedDate = new Date(datePart);
    combinedDate.setHours(hoursPart, minutesPart, 0, 0);

    if (isValidDate(combinedDate)) {
      // Met à jour la date combinée en ISO
      setDate(combinedDate.toISOString());
    }
  }, [selectedDates, hours]); // Cette fonction est appelée uniquement si selectedDates ou hours changent

  // Fonction pour initialiser l'état
  const initializeDate = useMemo(() => {
    return { month: date.getMonth(), year: date.getFullYear() };
  }, [date]);

  // Initialisation de l'état
  const [{ month, year }, setDateCalendar] = useState(initializeDate);
  const handleMonthChange = useCallback((month, year) => setDateCalendar({ month, year }), []);

  const handleDateChage = useCallback(
    value =>
      setSelectedDates({
        start: new Date(value.start),
        end: new Date(value.end),
      }),

    [],
  );

  const deselectedOptions = useMemo(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const times = [];

    // Vérifier si la date sélectionnée est aujourd'hui
    const isToday = selectedDates.start.toDateString() === now.toDateString();

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute++) {
        const formattedTime = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;

        // Si la date sélectionnée est aujourd'hui, on exclut les horaires futurs
        if (isToday) {
          if (hour > currentHour || (hour === currentHour && minute > currentMinute)) {
            continue; // Exclure cette heure/minute
          }
        }

        times.push({ value: formattedTime, label: formattedTime });
      }
    }

    return times;
  }, [selectedDates]);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    value => {
      setHoursValue(value);
      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions.filter(option => option.label.match(filterRegex));
      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const updateSelection = useCallback(
    selected => {
      const selectedValue = selected.map(selectedItem => {
        const matchedOption = options.find(option => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });

      setSelectedOptions(selected);
      setHoursValue(selectedValue[0] || "");
    },
    [options],
  );

  // Callback pour formater la date au format "jour/mois/année"
  const formatDate = useCallback(date => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }, []); // Il n'y a pas de dépendances ici, donc la fonction est mémorisée et ne sera recalculée qu'au premier rendu

  return (
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }}>
        <h2 className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold" tabIndex="-1">
          Visibilité
        </h2>

        <LegacyStack vertical spacing="loose" alignment="leading">
          <LegacyStack.Item>
            <ChoiceList
              title="Visibilité"
              titleHidden
              choices={[
                { label: `Visible ${isPublished ? `(en date du ${formatDate(selectedDates.start)} à ${hours})` : ""}`, value: "visible" },
                { label: "Masqué", value: "hidden" },
              ]}
              selected={isPublished ? "visible" : "hidden"}
              onChange={(selected, name) => setPublished(selected.includes("visible"))} // Ou simplement `handleChange` si pas besoin d'ajuster
            />
          </LegacyStack.Item>

          {isOpen && (
            <LegacyStack.Item>
              <Box paddingBlockEnd={{ xs: "100" }}>
                <span aria-hidden="true">{isPublished ? "Date de visibilité" : "Date de création"}</span>
              </Box>

              <LegacyStack distribution="fillEvenly" spacing="tight">
                <LegacyStack.Item>
                  <Popover
                    active={popoverActive}
                    activator={
                      <TextField
                        prefix={<Icon source={CalendarIcon} tone="neutral" />}
                        label={isPublished ? "Date de visibilité" : "Date de création"}
                        labelHidden
                        autoComplete="off"
                        value={formatDate(selectedDates.start)}
                        onFocus={() => setPopoverActive(true)} // Ferme le Popover si le champ perd le focus
                        onBlur={handleBlur} // Ferme le Popover si le champ perd le focus
                        onChange={(value, id) => setDate(value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                        type="text"
                        spellCheck={false}
                        placeholder={formatDate(new Date())}
                      />
                    }
                    onClose={() => setPopoverActive(false)} // Ferme le Popover
                    preferredAlignment="center"
                    preferredPosition="below"
                    autofocusTarget="none"
                    preventCloseOnChildOverlayClick={true}
                  >
                    <Popover.Section>
                      <div tabIndex="-1" className="wRuRU">
                        <DatePicker
                          month={month}
                          year={year}
                          disableDatesAfter={new Date()} // Empêche les dates après la date actuelle
                          onChange={value => {
                            handleDateChage(value);
                            setPopoverActive(false); // Ferme après sélection
                          }}
                          onMonthChange={handleMonthChange}
                          selected={selectedDates}
                        />
                      </div>
                    </Popover.Section>
                  </Popover>
                </LegacyStack.Item>
                <LegacyStack.Item>
                  <Autocomplete options={options} selected={selectedOptions} onSelect={updateSelection} textField={<Autocomplete.TextField prefix={<Icon source={ClockIcon} tone="neutral" />} suffix="UTC+1" label="Heure de visibilité" labelHidden autoComplete="off" value={hours} onChange={updateText} type="text" />} />
                </LegacyStack.Item>
              </LegacyStack>
            </LegacyStack.Item>
          )}
          <LegacyStack.Item>
            <Button
              variant="plain"
              size="medium"
              textAlign="center"
              onClick={() => {
                handleChange();
                handleDateChange(); // Ferme après sélection
              }}
            >
              <Text variant="bodyMd" fontWeight="regular" as="span">
                {isOpen ? "Valider" : `${isPublished ? "Définir la date de visibilité" : "Définir la date de création"}`}
              </Text>
            </Button>
          </LegacyStack.Item>
        </LegacyStack>
      </BlockStack>
    </Card>
  );
};

export default Visible;
