import { memo } from "react";
import { TextField, FormLayout } from "@shopify/polaris";
import { Controller, useFormContext } from "react-hook-form";
import { prefix } from "../../../config/ids";
import { form as FormFieldsMap } from "../../../config/fieldMap";
import { getFieldPath } from "../../../utils/getFieldPath";
import { useGetBlog } from "../../../selectors/blogs";
import { useGetHandleByTitle } from "../../../selectors/form";

// Exemple : ["seo", "urlAnchor"]
export const fieldPath = getFieldPath(FormFieldsMap, ["seo", "urlAnchor"]);

function SeoHandle() {
  const { control } = useFormContext();
  const blog = useGetBlog();
  const handlePlaceholder = useGetHandleByTitle();

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
            label="Ancre d’URL"
            id={`${prefix}:${fieldPath}`}
            value={value || ""}
            onChange={onChange}
            onBlur={onBlur}
            error={error?.message}
            autoComplete="off"
            type="text"
            prefix={`blogs/${blog.handle || ""}/`}
            placeholder={handlePlaceholder}
            clearButton
            onClearButtonClick={() => onChange("")}
          />
        )}
      />
    </FormLayout>
  );
}

export default memo(SeoHandle);
