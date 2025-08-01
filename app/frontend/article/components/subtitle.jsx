// components/Subtitle.jsx
import { TextField, FormLayout } from "@polaris/npm";
import { Controller, useFormContext } from "react-hook-form";
import { prefix } from "../config/ids";
import { form as FieldsMap } from "../../../data/article/config/fieldMap";

export const fieldPath = FieldsMap.subTitle;

const Subtitle = () => {
  const { control } = useFormContext();

  return (
    <FormLayout>
      <Controller
        name={fieldPath}
        control={control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <TextField

            name={`${prefix}.${fieldPath}`}
            label="Sous-Titre"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error?.message}
            id={`${prefix}:${fieldPath}`}
            type="text"
            multiline={2}
            clearButton
            onClearButtonClick={() => onChange("")}
            placeholder="p. ex. Résumé de l'article"
          />
        )}
      />
    </FormLayout>
  );
};

export default Subtitle;
