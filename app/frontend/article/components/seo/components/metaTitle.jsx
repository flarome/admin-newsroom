import { memo } from "react";
import { TextField, FormLayout } from "@shopify/polaris";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { prefix } from "../../../config/ids";
import { form as FormFieldsMap } from "../../../../../data/article/config/fieldMap";
import { getFieldPath } from "../../../../../utils/getFieldPath";
import { fieldPath as TitleFieldPath } from "../../title";

export const fieldPath = getFieldPath(FormFieldsMap, ["seo", "metaTitle"]);
const maxLength = 70;

function SeoMetaTitle() {
  const { control } = useFormContext();

  // Pour générer dynamiquement le placeholder depuis le champ titre
  const title = useWatch({ control, name: TitleFieldPath });
 
  return (
    <FormLayout>
      <Controller
        name={fieldPath}
        control={control}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <TextField
            name={`${prefix}.${fieldPath}`}
            label="Titre de la page"
            id={`${prefix}:${fieldPath}`}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
            error={error?.message}
            autoComplete="off"
            maxLength={maxLength}
            type="text"
            placeholder={title || ""}
            showCharacterCount
            clearButton
           onClearButtonClick={() => onChange("")}
          />
        )}
      />
    </FormLayout>
  );
}

export default memo(SeoMetaTitle);
