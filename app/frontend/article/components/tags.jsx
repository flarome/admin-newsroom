import { useState, useMemo, useCallback } from "react";
import {
  Autocomplete,
  Tag,
  FormLayout,
  BlockStack,
  InlineStack,
} from "@polaris/npm";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { PlusCircleIcon } from "@shopify/polaris-icons";
import _ from "lodash";

import { useArticle } from "../context/articleContext";
import { prefix } from "../config/ids";
import { form as FieldsMap } from "../../../data/article/config/fieldMap";

export const fieldPath = FieldsMap.tags;

const Tags = () => {
  const { allArticlesTags } = useArticle();
  const { control, setValue } = useFormContext();

  const selectedOptions = useWatch({ control, name: fieldPath }) || [];

  const deselectedOptions = useMemo(
    () => allArticlesTags.map((tag) => ({ value: tag, label: tag })),
    [allArticlesTags],
  );

  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const filtered = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(filtered);
    },
    [deselectedOptions],
  );

  const removeTag = useCallback(
    (tag) => {
      setValue(
        fieldPath,
        selectedOptions.filter((t) => t !== tag),
        { shouldValidate: true, shouldDirty: true },
      );
    },
    [selectedOptions, setValue],
  );

  const onAdd = useCallback(
    (tag) => {
      const trimmedTag = tag.trim();
      const exists = selectedOptions.some(
        (existing) =>
          existing.trim().toLowerCase() === trimmedTag.toLowerCase(),
      );

      if (!exists) {
        setValue(
          fieldPath,
          [...selectedOptions, trimmedTag],
          { shouldValidate: true, shouldDirty: true },
        );
      }
      setInputValue("");
    },
    [selectedOptions, setValue],
  );

  const hasTagInput = inputValue.trim() !== "";
  const placeholder = useMemo(() => {
    if (!allArticlesTags?.length) return "";
    const base = allArticlesTags.slice(0, 3).map(capitalize);
    return base.join(", ") + (allArticlesTags.length > 3 ? "..." : "");
  }, [allArticlesTags]);

  return (
    <FormLayout>
      <BlockStack gap="200">
        <Controller
          control={control}
          name={fieldPath}
          defaultValue={[]}
          render={({ field: { onChange, value = [] }, fieldState: { error }}) => (
            <Autocomplete
              allowMultiple
              preferredPosition="above"
              options={options}
              selected={value}
              onSelect={onChange}
              textField={
                <Autocomplete.TextField
                  name={`${prefix}.${fieldPath}`}
                  id={`${prefix}:${fieldPath}`}
                  onChange={updateText}
                  value={inputValue}
                  error={error?.message}
                  label="Balises"
                  placeholder={placeholder}
                  autoComplete="off"
                  autoCapitalize="off"
                  maxLength={255}
                />
              }
              listTitle={
                options.length > 0
                  ? "Balises fréquemment utilisées"
                  : undefined
              }
              actionBefore={
                hasTagInput &&
                allArticlesTags.every(
                  (tag) =>
                    tag.trim().toLowerCase() !==
                    inputValue.trim().toLowerCase(),
                )
                  ? {
                      accessibilityLabel: `Ajouter le tag ${inputValue}`,
                      content: `Ajouter "${inputValue}"`,
                      icon: PlusCircleIcon,
                      onAction: () => onAdd(inputValue),
                    }
                  : undefined
              }
            />
          )}
        />

        {selectedOptions.length > 0 && (
          <InlineStack gap="100">
            {selectedOptions.map((tag) => (
              <Tag key={tag} onRemove={() => removeTag(tag)}>
                {tag}
              </Tag>
            ))}
          </InlineStack>
        )}
      </BlockStack>
    </FormLayout>
  );
};

export default Tags;

// Helper
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}