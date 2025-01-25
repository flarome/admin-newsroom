import React from "react";
import {
  TextField,
  LegacyCard,
  BlockStack,
  Layout,
  Page,
} from "@shopify/polaris";
import { ImageUploader } from "../modules/uploader";
const ImageModal = ({
  localImage,
  setLocalImage
}) => {


    // Fonction pour mettre à jour l'URL d'une taille spécifique

      
    const handleChangeImageUrl = (size, value) => {
      setLocalImage((prevState) => ({
        ...prevState,
        image: {
          ...prevState.image,
          metadata: {
            ...prevState.image.metadata,
            srcs: {
              ...prevState.image.metadata.srcs,
              [size]: value,
            },
          },
        },
      }));
    };

  
    const handleChangeImageMetadata = (id, value) => {
      setLocalImage((prevState) => ({
        ...prevState,
        image: {
          ...prevState.image,
          metadata: {
            ...prevState.image.metadata,
            [id]: value, // Met à jour uniquement la propriété "alt"
          },
        },
      }));
    };

    const handleChangeImage = (id, value) => {
      setLocalImage((prevState) => ({
        ...prevState,
        [id]: value
      }));
    };
    

  return (
    <div>
      <Page>
        <Layout>
          <Layout.Section variant="fullWidth">
            <LegacyCard title="Informations générales" subdued>
              <LegacyCard.Section>

              <TextField
              id="alt"
  label="Texte alternatif"
  onChange={(value) => {
    handleChangeImageMetadata("alt", value); // Appelle la fonction de gestion des métadonnées
  }}
  autoComplete="off"
  value={localImage?.image?.metadata?.alt || ""} // Accède correctement à la propriété "alt"
  clearButton={true}
  onClearButtonClick={() => handleChangeImageMetadata("alt", "")} // Réinitialise le texte alternatif
/>

             

                <TextField
                  label="Légende"
                  id="caption"
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
                  {Object.keys(localImage?.image?.metadata?.srcs || []).map((size) => (
                    <TextField
                      label={`URL pour ${size}`}
                      onChange={(value) => handleChangeImageUrl(size, value)}
                      autoComplete="off"
                      value={
                        localImage?.image?.metadata?.srcs?.[size]
                       &&
                       localImage.image.metadata.srcs[size] instanceof File
                          ? localImage.image.metadata.srcs[size].name
                          : localImage.image.metadata.srcs[size] || ""
                      }
                      clearButton
                      onClearButtonClick={() => handleChangeImageUrl(size, "")}
                      suffix={
                        <div style={{ width: 40, height: 40 }}>
                          <ImageUploader
                            file={localImage?.image?.metadata?.srcs?.[size]}
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
