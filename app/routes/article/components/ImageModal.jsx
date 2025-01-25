import React, { useEffect, useState } from "react";
import {
  TextField,
  LegacyCard,
  BlockStack,
  Layout,
  Page,
  FormLayout,
  Select,
  ColorPicker,
} from "@shopify/polaris";
import { ImageUploader } from "../modules/uploader";
const ImageModal = ({ localImage, setLocalImage }) => {
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

  const handleChangeImageFormat = (size, value) => {
    setLocalImage((prevState) => ({
      ...prevState,
      image: {
        ...prevState.image,
        metadata: {
          ...prevState.image.metadata,
          format: {
            ...prevState.image.metadata.format,
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
      [id]: value,
    }));
  };

  const alignmentOptions = [
    { label: "Aucun", value: "none" },
    { label: "Centre", value: "center" },
    { label: "Haut", value: "top" },
    { label: "Bas", value: "bottom" },
    { label: "Gauche", value: "left" },
    { label: "Droit", value: "right" },
  ];

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
                  onClearButtonClick={() =>
                    handleChangeImageMetadata("alt", "")
                  } // Réinitialise le texte alternatif
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

<TextField
                    label="Pad Color"
                    value={localImage?.image?.metadata?.format?.padColor}
                    onChange={(value) =>
                      handleChangeImageFormat("padColor", value)
                    }
                    placeholder="Entrez une couleur en hex sans #"
                    autoComplete="off"
                    clearButton={true}
                    onClearButtonClick={() =>    handleChangeImageFormat("padColor", "")}
                  />



                  <Select
                    label="Crop"
                    options={alignmentOptions}
                    onChange={(value) => handleChangeImageFormat("crop", value)}
                    value={localImage?.image?.metadata?.format?.crop}
                  />
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <LegacyCard title="Sources des Images">
              <LegacyCard.Section>
                <BlockStack gap={{ xs: "400" }}>
                  {Object.keys(localImage?.image?.metadata?.srcs || []).map(
                    (size) => (
                      <TextField
                        label={`URL pour ${size}`}
                        onChange={(value) => handleChangeImageUrl(size, value)}
                        autoComplete="off"
                        value={
                          localImage?.image?.metadata?.srcs?.[size] &&
                          localImage.image.metadata.srcs[size] instanceof File
                            ? localImage.image.metadata.srcs[size].name
                            : localImage.image.metadata.srcs[size] || ""
                        }
                        clearButton
                        onClearButtonClick={() =>
                          handleChangeImageUrl(size, "")
                        }
                        suffix={
                          <div style={{ width: "auto", height: "100%" }}>
                            <ImageUploader
                              file={localImage?.image?.metadata?.srcs?.[size]}
                              setFile={(file) =>
                                handleChangeImageUrl(size, file)
                              }
                            />
                          </div>
                        }
                      />
                    ),
                  )}
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
