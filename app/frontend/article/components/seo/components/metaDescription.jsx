import { memo } from "react";
import { TextField, FormLayout } from "@shopify/polaris";
import { Controller, useFormContext } from "react-hook-form";
import { prefix } from "../../../config/ids";
import { form as FormFieldsMap } from "../../../../../data/article/config/fieldMap";
import { getFieldPath } from "../../../../../utils/getFieldPath";

export const fieldPath = getFieldPath(FormFieldsMap, [
  "seo",
  "metaDescription",
]);
const maxLength = 160;

function SeoMetaDescription() {
  const { control } = useFormContext();

  return (
    <FormLayout>
      <Controller
        name={fieldPath}
        control={control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <TextField
            name={`${prefix}.${fieldPath}`}
            label="Méta-description"
            id={`${prefix}:${fieldPath}`}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
            error={error?.message}
            autoComplete="off"
            maxLength={maxLength}
            type="text"
            multiline={3}
            showCharacterCount
          />
        )}
      />
    </FormLayout>
  );
}

export default memo(SeoMetaDescription);
