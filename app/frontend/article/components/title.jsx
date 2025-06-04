
import { TextField, FormLayout } from "@shopify/polaris";
import { Controller, useFormContext } from "react-hook-form";
import { prefix } from "../config/ids";
import { form as FieldsMap } from "../../../data/article/config/fieldMap";

export const fieldPath = FieldsMap.title;

const Title = () => {
  const { control } = useFormContext();

  return (
    <FormLayout>
      <Controller
        name={fieldPath}
        control={control}
        rules={{ required: "Le titre est obligatoire" }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <TextField
            name={`${prefix}.${fieldPath}`}
            label="Titre"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error?.message}
            id={`${prefix}:${fieldPath}`}
            type="text"
            requiredIndicator
            clearButton
            onClearButtonClick={() => onChange("")}
            placeholder="Ex. : article de blog sur vos derniers produits ou offres"
          />
        )}
      />
    </FormLayout>
  );
};

export default Title;
