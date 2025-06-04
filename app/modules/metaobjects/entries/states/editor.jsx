// ✅ Editor.jsx
import { Controller, useFormContext } from "react-hook-form";
import { useMetaobjectEntriesModal } from "../context/MetaobjetsEntriesModalContext";
import { buildValidations } from "../helpers/validations";
import tinycolor from "tinycolor2";

import {
  Page,
  Layout,
  FormLayout,
  TextField,
  Select,
  Checkbox,
  BlockStack,
  Card,
  InlineGrid,
  Text,
  Button,
  Tooltip,
  Icon,
  Box,
  Popover,
  ColorPicker,
} from "@shopify/polaris";
import { Banner } from "../../../form/components";
import { prefix } from "../config/ids";
import { EditIcon, ClipboardIcon } from "@shopify/polaris-icons";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useEffect, useRef, useState } from "react";

const Handle = () => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const shopify = useAppBridge();
  const handleCollapsibleId = `${prefix}:handle:collapsible`;

  const value = useFormContext().watch("handle");

  const fallbackCopy = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      shopify.toast.show("Ancre copiée");
    } catch (e) {
      console.error("Fallback copy failed", e);
    }
    document.body.removeChild(textarea);
  };

  const handleCopy = async () => {
    if (!document.hasFocus()) return fallbackCopy(value);
    try {
      await navigator.clipboard.writeText(value);
      shopify.toast.show("Ancre copiée dans le presse-papiers");
    } catch (err) {
      fallbackCopy(value);
    }
  };

  return (
    <Card>
      <BlockStack gap={{ xs: "200" }}>
        <InlineGrid columns={{ xs: "1fr auto" }}>
          <Text
            as="h2"
            variant="headingSm"
            fontWeight="semibold"
            id={`${prefix}:label`}
          >
            Ancre
          </Text>

          {!open && (
            <Button
              onClick={() => setOpen(true)}
              variant="tertiary"
              size="medium"
              ariaExpanded={open}
              ariaControls={handleCollapsibleId}
              icon={EditIcon}
              accessibilityLabel="Modifier l’ancre"
            />
          )}
        </InlineGrid>

        <Box>
          {!open && value && (
            <div id={handleCollapsibleId} className="_HandleText_zedp1_9">
              <Tooltip content="Copier l’ancre" preferredPosition="below">
                <button
                  onClick={handleCopy}
                  type="button"
                  className="_CopyButton_zedp1_15"
                  aria-label={`Copier l’ancre : ${value}`}
                >
                  <div className="_CopyHandle_zedp1_43">
                    <code>{value}</code>
                  </div>
                  <div className="_CopyIcon_zedp1_37">
                    <Icon source={ClipboardIcon} tone="subdued" />
                  </div>
                </button>
              </Tooltip>
            </div>
          )}

          {open && (
            <Controller
              name="handle"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  label="Ancre"
                  labelHidden
                  autoFocus
                  value={field.value || ""}
                  onChange={field.onChange}
                  onBlur={() => setOpen(false)}
                  error={error?.message}
                  helpText="La modification aura un impact partout où cette ancre est codée en dur."
                />
              )}
            />
          )}
        </Box>
      </BlockStack>
    </Card>
  );
};

const Editor = () => {


  const { control, setError } = useFormContext();
  const { fieldDefs, hasEntrie, entry } = useMetaobjectEntriesModal();



  return (
    <Page
      title={hasEntrie ? `Modifier ${entry.displayName}` : `Ajouter une entrée`}
    >
      <BlockStack gap={{ xs: "400" }}>
        <Banner />
        <Layout>
          <Layout.Section>
            <BlockStack gap={{ xs: "400" }}>
              {fieldDefs.map((def) => {
                const { key, name, description, type, required } = def;
                const validations = buildValidations(def);
                const label = name || key;

                const path = `values.${key}`;

                return (
                  <FormLayout key={key}>
                    <Controller
                      name={path}
                      control={control}
                      rules={validations.rules}
                      render={({ field: {onChange, value}, fieldState: { error } }) => {
                        if (validations.choices?.length) {
                          return (
                            <Select
                              label={label}
                              options={validations.choices}
                              onChange={onChange}
                              value={value}
                              helpText={description}
                              error={error?.message}
                            />
                          );
                        }

                        switch (type.category) {
                          case "TEXT":
                            return (
                              <TextField
                                label={label}
                                onChange={onChange}
                              value={value}
                                requiredIndicator={required ?? false}
                                autoComplete="off"
                                helpText={description}
                                error={error?.message}
                                clearButton
                                onClearButtonClick={() => onChange("")}
                              />
                            );
                          case "BOOLEAN":
                            return (
                              <Checkbox
                                label={label}
                                checked={Boolean(value)}
                                onChange={onChange}
                                helpText={description}
                                error={error?.message}
                              />
                            );

                          case "COLOR": {
                            const [pickerOpen, setPickerOpen] = useState(false);

                            const baseColor = value?.trim() || "#ffffff";
                            const parsed = tinycolor(baseColor);
                            const safe = parsed.isValid()
                              ? parsed
                              : tinycolor("#ffffff");
                            const hsv = safe.toHsv();

                            const [color, setColor] = useState({
                              hue: hsv.h,
                              saturation: hsv.s,
                              brightness: hsv.v,
                            });

                            const [inputValue, setInputValue] = useState(
                              parsed.isValid() ? parsed.toHexString() : "",
                            );

                            const isFromPickerRef = useRef(false);

                            // ✅ Sync automatique si value change à l’extérieur
                            useEffect(() => {
                              const baseColor =
                                value?.trim() || "#ffffff";
                              const parsed = tinycolor(baseColor);
                              const safe = parsed.isValid()
                                ? parsed
                                : tinycolor("#ffffff");
                              const hsv = safe.toHsv();

                              // Si value change, on remet à jour tempInput sauf si déjà égal
                              if (
                                value?.trim()?.toLowerCase() !==
                                inputValue?.trim()?.toLowerCase()
                              ) {
                                setColor({
                                  hue: hsv.h,
                                  saturation: hsv.s,
                                  brightness: hsv.v,
                                });

                                setInputValue(
                                  parsed.isValid() ? parsed.toHexString() : "",
                                );
                              }
                            }, [value]);

                            const handlePickerChange = (newColor) => {
                      
                              setColor(newColor);

                              const hex = tinycolor({
                                h: newColor.hue,
                                s: newColor.saturation,
                                v: newColor.brightness,
                              }).toHexString();

                              isFromPickerRef.current = true;
                              onChange(hex);
                              setInputValue(hex);
                            };

                            const updateFromText = (value) => {
                              
                              setInputValue(value);

                              const parsed = tinycolor(value);
                              if (!parsed.isValid()) {
                                return;
                              }

                              const hsv = parsed.toHsv();

                              setColor({
                                hue: hsv.h,
                                saturation: hsv.s,
                                brightness: hsv.v,
                              });

                              isFromPickerRef.current = false;

                    
                          
                            };

                            const handleBlur = () => {
                              setPickerOpen(false);

                              const parsed = tinycolor(inputValue);

                              if (inputValue && !parsed.isValid()) {
                                setError(path, {
                                  type: "color",
                                  message: "Couleur non valide",
                                });
                              } else if (parsed.isValid()) {
                                          const hex = parsed.toHexString();
                                onChange(hex);
                                const hsv = parsed.toHsv();
                                setColor({
                                  hue: hsv.h,
                                  saturation: hsv.s,
                                  brightness: hsv.v,
                                });
                              }
                            };

                            return (
                              <Popover
                                sectioned
                                active={pickerOpen}
                                onClose={() => setPickerOpen(false)}
                                autofocusTarget="none"
                                preferInputActivator={true}
                                preferredPosition="below"
                                preferredAlignment="left"
                                activator={
                                  <TextField
                                    placeholder={safe.toHexString()}
                                    label={label}
                                    value={inputValue.toUpperCase()}
                                    onChange={updateFromText}
                                    onFocus={() => {
                                      setPickerOpen(true);
                                    }}
                                    onBlur={handleBlur}
                                    prefix={
                                      <div
                                        role="button"
                                        aria-hidden="true"
                                        onClick={() =>
                                          setPickerOpen((open) => !open)
                                        }
                                      >
                                        <span
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "start",
                                            flexWrap: "nowrap",
                                          }}
                                        >
                                          <span className="_swatchContainer_j9mt6_1 _small_j9mt6_14">
                                            <span
                                              className="_swatch_j9mt6_1 _shadowed_j9mt6_57"
                                              style={{
                                                backgroundColor:
                                                  inputValue ?? undefined,
                                              }}
                                            ></span>
                                          </span>
                                        </span>
                                      </div>
                                    }
                                    error={error?.message}
                                    helpText={description}
                                    autoComplete="off"
                                  />
                                }
                              >
                                <Popover.Pane>
                                  <Popover.Section>
                                    <ColorPicker
                                      color={color}
                                      onChange={handlePickerChange}
                                    />
                                  </Popover.Section>
                                </Popover.Pane>
                              </Popover>
                            );
                          }
                          default:
                            return (
                              <p style={{ color: "gray" }}>
                                Champ <code>{key}</code> non pris en charge
                                (type : <code>{type.category}</code>)
                              </p>
                            );
                        }
                      }}
                    />
                  </FormLayout>
                );
              })}
            </BlockStack>
          </Layout.Section>

          <Layout.Section variant="oneThird">
            <Handle />
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};

export default Editor;
