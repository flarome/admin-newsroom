import React, { useCallback } from "react";
import {
  BlockStack,
  Card,
  InlineStack,
  Select,
  Button,
} from "@shopify/polaris";
import { ViewIcon } from "@shopify/polaris-icons";

const Template = ({
  templates: options,
  template,
  setTemplate,
  url,
  isPublished,
}) => {
  const handleSelectChange = useCallback((value) => setTemplate(value), []);

  return (
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }}>
        <InlineStack
          align="space-between"
          blockAlign="center"
          wrap
          gap={{ xs: "200" }}
          direction={{ xs: "row" }}
        >
          <h2
            className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold"
            tabIndex="-1"
          >
            Boutique en ligne
          </h2>
          {url && isPublished && (
            <span>
              <Button
                url={url + "?view=" + template}
                variant="tertiary"
                size="medium"
                textAlign="center"
                icon={ViewIcon}
                target="_blank"
                rel="noopener noreferrer"
              />
            </span>
          )}
        </InlineStack>

        <BlockStack gap={{ xs: "500" }}>
          <div>
            <Select
              label="Modèle de thème"
              options={options}
              onChange={handleSelectChange}
              value={template}
            />
          </div>
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default Template;
