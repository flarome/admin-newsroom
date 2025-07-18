import { Layout, Text, Button, InlineGrid, Box } from "@shopify/polaris";

import {
  Card as CardV2,
  Page as PageV2,
  AppWrapper as AppWrapperV2,
  PageGroup,
  Text as TextV2,
} from "@polaris/22.1.0";

import { Controller, useFormContext } from "react-hook-form";

import { form as FieldsMap } from "../../../data/article/config/fieldMap";
import { useArticle } from "../context/articleContext";

export const fieldPath = FieldsMap.template;
export const defaultLayoutName = "__default__";
 
export const SelectTypeLayout = () => {
  const { control } = useFormContext();
  const { availableTemplateOptions } = useArticle();

  const options =
    availableTemplateOptions?.map((name) => {
      const label =
        name === defaultLayoutName
          ? "Modèle par défaut : Article de blog"
          : name;

      const value = name === defaultLayoutName ? name : label;

      return { value, label };
    }) ?? [];

  return (
    <Layout>
      <Layout.Section variant="fullWidth">
        <InlineGrid
          columns={{ xs: 3, sm: 2, md: 3, lg: 2, xl: 6 }}
          gap={{ xs: "400" }}
        >
          <Controller
            name={fieldPath}
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                {options.map(({ value: optionValue, label }) => (
                  <CardV2 key={optionValue}>
                    <Box padding={{ xs: "150" }}>
                      <Button
                        primary={value === optionValue}
                        onClick={() => onChange(optionValue)}
                        fullWidth
                      >
                        {label}
                      </Button>
                    </Box>
                  </CardV2>
                ))}
                {error && (
                  <Text color="critical" variant="bodySm">
                    {error.message}
                  </Text>
                )}
              </>
            )}
          />
        </InlineGrid>
      </Layout.Section>
    </Layout>
  );
};
