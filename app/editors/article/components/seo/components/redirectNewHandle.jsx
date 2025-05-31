import { memo, useEffect } from "react";
import { Checkbox, FormLayout } from "@shopify/polaris";
import { prefix } from "../../../config/ids";
import { form as FormFieldsMap } from "../../../config/fieldMap";
import { getFieldPath } from "../../../utils/getFieldPath";
import { useArticle } from "../../../context/articleContext";
import _ from "lodash";
import { fieldPath as handleFieldPath } from "./handle";
import { useFormContext, useWatch, Controller } from "react-hook-form";

export const fieldPath = getFieldPath(FormFieldsMap, ["seo", "redirect"]);

function SeoRedirectCheckbox() {
  const { article } = useArticle();
  const { control, setValue } = useFormContext();

  const staticArticleHandle = article.handle;
  const formHandle = useWatch({ name: handleFieldPath }) || "";
   const field = useWatch({ name: fieldPath }) || "";

 useEffect(() => {
    if (field === true && formHandle === staticArticleHandle) {
      setValue(fieldPath, false);
    }
  }, [formHandle, staticArticleHandle]);

  if (!staticArticleHandle || staticArticleHandle === formHandle) return null;
  return (
    <FormLayout>
      <Controller
        name={fieldPath}
        control={control}
        render={({
          field: { value, onChange },
          fieldState: { error },
        }) => (
          <Checkbox
            name={`${prefix}.${fieldPath}`}
            label={`Créer une redirection de ${staticArticleHandle} → ${formHandle}`}
            checked={value || false}
            onChange={onChange}
            error={error?.message}
            id={`${prefix}:${fieldPath}`}
          />
        )}
      />
    </FormLayout>
  );
}
export default memo(SeoRedirectCheckbox);
