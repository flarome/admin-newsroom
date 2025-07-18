import { useState, useMemo } from "react";
import {
  Card,
  BlockStack,
  Box,
  Divider,
  Button,
  Collapsible,
  Text,
  InlineGrid,
} from "@shopify/polaris";
import { Card as CardV2 } from "@polaris/22.1.0";
import { EditIcon } from "@shopify/polaris-icons";
import { useWatch } from "react-hook-form";
import { useArticle } from "../../context/articleContext";
import { prefix } from "../../config/ids";
import { useGetBlog } from "../../selectors/blogs";
import MetaDescription from "./components/metaDescription";
import MetaTitle from "./components/metaTitle";
import Handle from "./components/handle";
import RedirectNewHandle from "./components/redirectNewHandle";
import { getFieldRoot } from "../../../../utils/getFieldPath";
import { form as FormFieldsMap } from "../../../../data/article/config/fieldMap";
import { fieldPath as TitleFieldPath } from "../title";
import { fieldPath as metaDescriptionPath } from "./components/metaDescription";
import { fieldPath as metaTitlePath } from "./components/metaTitle";
import { fieldPath as handlePath } from "./components/handle";
import { publishDateFieldPath } from "../visible";
import _ from "lodash";
import { getValidDate } from "../../../../utils/date";
import { formatHandlePrefix } from "../../../../data/article/input/helpers/handle";
import { toShopifySlug } from "../../../../utils/str";

// ID unique pour le composant Collapsible (accessibilité)
const collapsibleId = `${prefix}:${getFieldRoot(FormFieldsMap, ["seo"])}:collapsible`;

const Seo = () => { 
  const { shop } = useArticle();
  const [open, setOpen] = useState(false);

  // --- Hooks RHF pour surveiller les champs SEO ---
  const metaTitle = useWatch({ name: metaTitlePath }) || "";
  const metaDescription = useWatch({ name: metaDescriptionPath }) || "";
  const handle = useWatch({ name: handlePath }) || "";
  const title = useWatch({ name: TitleFieldPath }) || "";
  const publishedDate = useWatch({ name: publishDateFieldPath });
  const validDate = getValidDate(publishedDate);

  const blog = useGetBlog();
  const blogHandle = blog?.handle || "";
  const shopUrl = shop.url;
   const shopName = shop.name;

  const previewDescription = useMemo(
    () => _.truncate(metaDescription.trim(), { length: 145, omission: "…" }),
    [metaDescription]
  );

  const seoUrl = useMemo(
    () =>
      `${shopUrl} › blogs › ${blogHandle} › ${formatHandlePrefix(validDate)}${handle || toShopifySlug(title)}`,
    [shopUrl, blogHandle, handle, title]
  );

  return (
    <CardV2 padding={{ xs: "0" }}>
      <Box padding={{ xs: "400" }}>
        <BlockStack gap={{ xs: "200" }}>
          <InlineGrid columns={{ xs: "1fr auto" }}>
            <Text as="h2" variant="headingSm" fontWeight="semibold">
              Aperçu du référencement sur les moteurs de recherche
            </Text>
            <Button
              aria-expanded={open}
              aria-controls={collapsibleId}
              variant={open ? "plain" : "tertiary"}
              icon={open ? undefined : EditIcon}
              onClick={() => setOpen((v) => !v)}
              accessibilityLabel={open ? "Fermer" : "Modifier le SEO"}
            >
              {open ? <Text as="span" variant="bodyMd">Fermer</Text> : undefined}
            </Button>
          </InlineGrid> 

          {/* Aperçu SEO */}
          {metaTitle || title ? (
            <Box paddingBlockStart={{ xs: "100" }}>
              <BlockStack gap={{ xs: "200" }}>
                <BlockStack>
                  <Text variant="bodyLg">{shopName}</Text>
                  <Text variant="bodySm" tone="subdued">
                    {seoUrl}
                  </Text>
                </BlockStack>
                <BlockStack gap={{ xs: metaDescription ? "150" : "0" }}>
                  <Text variant="headingLg" as="span">
                    <span style={{ color: "var(--p-color-text-link)", wordBreak: "break-all" }}>
                      {metaTitle || title}
                    </span>
                  </Text>
                  <Text variant="bodyMd" tone="subdued">
                    {previewDescription}
                  </Text>
                </BlockStack>
              </BlockStack>
            </Box>
          ) : (
            <Text variant="bodyMd">
              Ajoutez un titre et une description pour voir l’aperçu SEO.
            </Text>
          )}
        </BlockStack>
      </Box>

      <Collapsible
        open={open}
        id={collapsibleId}
        transition={{ duration: "200ms", timingFunction: "ease-in-out" }}
        expandOnPrint
      >
        <Divider borderColor="border-secondary" borderWidth="025" />
        <Box padding={{ xs: "400" }}>
          <BlockStack gap={{ xs: "400" }}>
            <MetaTitle />
            <MetaDescription />
            <Handle />
            <RedirectNewHandle />
          </BlockStack>
        </Box>
      </Collapsible>
    </CardV2>
  );
};

export default Seo;
