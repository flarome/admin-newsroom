import { useState, useCallback } from "react";
import {
  TextField,
  BlockStack,
  Collapsible,
  Button,
  Text,
  InlineGrid,
  Card,
} from "@shopify/polaris";
import { EditIcon } from "@shopify/polaris-icons";
import { Controller, useFormContext } from "react-hook-form";
import { prefix } from "../config/ids";
import { form as FieldsMap } from "../../../data/article/config/fieldMap";

export const fieldPath = FieldsMap.excerpt;
const collapsibleId = `${prefix}:${fieldPath}:collapsible`;

const Extrait = () => {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <Card>
      <BlockStack gap={{ xs: "200" }}>
        <InlineGrid columns={{ xs: "1fr auto" }}>
          <Text as="h2" variant="headingSm" fontWeight="semibold">
            Extrait
          </Text>
          <Button
            onClick={handleToggle}
            variant={open ? "plain" : "tertiary"}
            size="medium"
            textAlign="center"
            aria-expanded={open}
            aria-controls={collapsibleId}
            icon={open ? undefined : EditIcon}
            accessibilityLabel={open ? "Fermer" : "Modifier l'extrait"}
          >
            {open ? (
              <Text as="span" variant="bodyMd">
                Fermer
              </Text>
            ) : null}
          </Button>
        </InlineGrid>

        <BlockStack gap={{ xs: "200" }}>
          <Text as="p">
            Ajoutez un résumé de l’article qui s’affichera sur votre page
            d’accueil ou votre blog.
          </Text>

          <Collapsible
            open={open}
            id={collapsibleId}
            transition={{ duration: "200ms", timingFunction: "ease-in-out" }}
            expandOnPrint
          >
            <Controller
              name={fieldPath}
              control={control}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <TextField
                  name={`${prefix}.${fieldPath}`}
                  label="Ajoutez un résumé de l’article qui s’affichera sur votre page d’accueil ou votre blog."
                  labelHidden
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error?.message}
                  id={`${prefix}:${fieldPath}`}
                  type="text"
                  multiline={5}
                  clearButton
                  onClearButtonClick={() => onChange("")}
                />
              )}
            />
          </Collapsible>
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default Extrait;
