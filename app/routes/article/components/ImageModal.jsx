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

const ImageModal = ({
  localImage,
  handleChangeImageUrl,
  handleChangeImage,
}) => {
  const sizes = Object.keys(localImage?.sizes || {}) || {};

  return (
    <div>
      <Page>
        <Layout>
          <Layout.Section variant="oneThird">
            <LegacyCard title="Informations générales">
              <LegacyCard.Section>
                <TextField
                  label="Texte alternatif"
                  onChange={(value) => handleChangeImage("alt", value)}
                  autoComplete="off"
                  value={localImage?.alt || ""}
                  clearButton
                  onClearButtonClick={() => handleChangeImage("alt", "")}
                />

                {/* Légende */}
                <TextField
                  label="Légende"
                  onChange={(value) => handleChangeImage("caption", value)}
                  autoComplete="off"
                  value={localImage?.caption || ""}
                  clearButton
                  onClearButtonClick={() => handleChangeImage("caption", "")}
                />
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <LegacyCard title="Sources des Images">
              <LegacyCard.Section>
                <BlockStack gap={{ xs: "400" }}>
                  {sizes.map((size) => (
                    <LegacyStack key={size} alignment="center">
                      <TextField
                        label={`URL pour ${size}`}
                        onChange={(value) => handleChangeImageUrl(size, value)}
                        autoComplete="off"
                        value={localImage.sizes?.[size] || ""}
                        clearButton
                        onClearButtonClick={() =>
                          handleChangeImageUrl(size, "")
                        }
                        suffix={
                          <div style={{ width: 40, height: 40 }}>
                            <ImageUploader
                              file={localImage.sizes?.[size]}
                              setFile={(file) =>
                                handleChangeImageUrl(size, file)
                              }
                            />
                          </div>
                        }
                      />
                    </LegacyStack>
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
