import {
  Select,
  Icon,
  Tooltip,
  Button,
  Text,
  BlockStack,
  InlineStack,
} from "@polaris/npm";
import { Card as CardV2 } from "@polaris/internal";
import _ from "lodash";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { ViewIcon } from "@shopify/polaris-icons";
import { useArticle } from "../context/articleContext";
import { prefix } from "../config/ids";
import { useGetUrl } from "../selectors/article";
import { defaultLayoutName, fieldPath } from "../ui/layout";


const Template = () => {
  const { availableTemplateOptions, hasArticle, article } = useArticle();
  const { control } = useFormContext();

  const selectedValue = useWatch({ name: fieldPath }) || "";

  const options =
    availableTemplateOptions?.map((name) => {
      const label = 
        name === defaultLayoutName
          ? "Modèle par défaut : Article de blog"
          : name

      const value = name === defaultLayoutName ? name : label;

      return { value, label };
    }) ?? [];
    
const url = useGetUrl();

const previewUrl =
  hasArticle && article?.isPublished
    ? `${url}${selectedValue ? `?view=${selectedValue}` : ""}`
    : undefined;
  return (
    <CardV2>
      <BlockStack gap="200">
        <InlineStack
          align="space-between"
          blockAlign="center"
          wrap
          gap={{ xs: "200" }}
        >
          <Text as="h2" variant="headingSm" fontWeight="semibold">
            Modèle de thème
          </Text>

          <Tooltip
            content={
              previewUrl
                ? "Afficher le modèle"
                : hasArticle && !article.isPublished
                  ? "Publiez l'article pour activer l’affichage du modèle"
                  : "Enregistrez l'article pour activer l’affichage du modèle"
            }
          >
            <Button
              icon={<Icon source={ViewIcon} />}
              url={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="plain"
              size="medium"
              accessibilityLabel="Prévisualiser le modèle"
              disabled={!Boolean(previewUrl)}

            
            />
          </Tooltip>
        </InlineStack>

        <Controller
          name={fieldPath}
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Select
              label="Modèle de thème"
              name={`${prefix}.${fieldPath}`}
              id={`${prefix}:${fieldPath}`}
              options={options}
              value={value || defaultLayoutName}
              onChange={onChange}
              error={error?.message}
            />
          )}
        />
      </BlockStack>
    </CardV2>
  );
};

export default Template;
