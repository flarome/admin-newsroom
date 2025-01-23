import React from "react";
import {
  TextField,
  LegacyStack,
  LegacyCard,
  BlockStack,
  Layout,
  Page,
} from "@shopify/polaris";
import { ImageUploader } from "../modules/uploader";
import EditorText from "../../../tinymce/LegendEditor";
const ImageModal = ({
  localImage,
  handleChangeImageUrl,
  handleChangeImage,
}) => {
  return (
    <div>
      <Page>
        <Layout>
          <Layout.Section variant="fullWidth">
            <LegacyCard title="Informations générales" subdued>
              <LegacyCard.Section>
                <TextField
                  label="Texte alternatif"
                  onChange={(value) => handleChangeImage("alt", value)}
                  autoComplete="off"
                  value={localImage?.alt || ""}
                  clearButton={true}
                  onClearButtonClick={() => handleChangeImage("alt", "")}
                />

             

                <TextField
                  label="Légende"
                  onChange={(value) => handleChangeImage("caption", value)}
                  autoComplete="off"
                  value={localImage?.caption || ""}
                  clearButton={true}
                  onClearButtonClick={() => handleChangeImage("caption", "")}
                />
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section variant="fullWidth">
            <LegacyCard title="Sources des Images">
              <LegacyCard.Section>
                <BlockStack gap={{ xs: "400" }}>
                  {Object.keys(localImage?.sizes || []).map((size) => (
                    <TextField
                      label={`URL pour ${size}`}
                      onChange={(value) => handleChangeImageUrl(size, value)}
                      autoComplete="off"
                      value={
                        localImage.sizes?.[size] &&
                        localImage.sizes?.[size] instanceof File
                          ? localImage.sizes?.[size].name
                          : localImage.sizes?.[size] || ""
                      }
                      clearButton
                      onClearButtonClick={() => handleChangeImageUrl(size, "")}
                      suffix={
                        <div style={{ width: 40, height: 40 }}>
                          <ImageUploader
                            file={localImage.sizes?.[size]}
                            setFile={(file) => handleChangeImageUrl(size, file)}
                          />
                        </div>
                      }
                    />
                  ))}
                </BlockStack>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
};

export default ImageModal;
