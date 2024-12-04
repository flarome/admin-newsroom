import React, { useState, useMemo, useCallback } from "react";
import * as lodash from 'lodash';
const { isEqual } = lodash;

import ImageModal from "./ImageModal";
import { Button, Frame, Modal, TextContainer, Icon  } from "@shopify/polaris";
import { ChevronDownIcon  } from "@shopify/polaris-icons";

import { getImageInfo } from "../../modules/getInfo";
const MainImage = ({ mainImage, setMainImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour ouvrir/fermer le modal pour l'image principale

  const { mainImageScare, mainImageAlt } = useMemo(() => {
    return getImageInfo(mainImage);
  }, [mainImage]);

  const [localImage, setLocalImage] = useState(mainImage);

  const isModified = useMemo(() => {
    return !isEqual(localImage, mainImage);
  }, [localImage, mainImage]);

  const handleSave = () => {
    setMainImage(localImage);
    handleChange();
  };

  // Fonction pour mettre à jour l'URL d'une taille spécifique
  const handleChangeImageUrl = (size, value) => {
    setLocalImage(prevState => ({
      ...prevState,
      sizes: {
        ...prevState.sizes,
        [size]: value,
      },
    }));
  }; 

  const handleChangeImage = (id, value) => {
    setLocalImage(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleChange = useCallback(() => setIsModalOpen(isModalOpen => !isModalOpen), []);

  return (
    <div
      className="Polaris-ShadowBevel"
      style={{
        "--pc-shadow-bevel-z-index": 32,
        "--pc-shadow-bevel-content-sm": '""',
        "--pc-shadow-bevel-box-shadow-sm": "var(--p-shadow-100)",
        "--pc-shadow-bevel-border-radius-sm": "var(--p-border-radius-300)",
      }}
    >
      <div
        className="Polaris-Box"
        style={{
          "--pc-box-background": "var(--p-color-bg-surface)",
          "--pc-box-min-height": "100%",
          "--pc-box-overflow-x": "clip",
          "--pc-box-overflow-y": "clip",
          "--pc-box-padding-block-start-xs": "var(--p-space-400)",
          "--pc-box-padding-block-end-xs": "var(--p-space-400)",
          "--pc-box-padding-inline-start-xs": "var(--p-space-400)",
          "--pc-box-padding-inline-end-xs": "var(--p-space-400)",
        }}
      >
        <div
          className="Polaris-BlockStack"
          style={{
            "--pc-block-stack-order": "column",
            "--pc-block-stack-gap-xs": "var(--p-space-400)",
            "--pc-block-stack-gap-sm": "var(--p-space-500)",
          }}
        >
          <div className="Polaris-TextContainer">
            <h2 className="Polaris-Text--root Polaris-Text--headingMd" tabIndex="-1">
              Image vedette
            </h2>
            <div className="Polaris-Labelled--hidden">
              <div className="Polaris-Labelled__LabelWrapper">
                <div className="Polaris-Label">
                  <label id="image-upload-label" htmlFor="image-upload" className="Polaris-Label__Text">
                    <span className="Polaris-Text--root Polaris-Text--bodyMd">Importer une image</span>
                  </label>
                </div>
              </div>
              <div className="Polaris-DropZone Polaris-DropZone--hasOutline Polaris-DropZone--sizeLarge" aria-disabled="false">
                <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--visuallyHidden">
                  <input id="image-upload" accept="image/*" type="file" autoComplete="off" />
                </span>
                <div className="Polaris-DropZone__Container">
                  <div className="UPK5h">
                    {mainImageScare ? (
                      <img alt={mainImageAlt} src={mainImageScare} className="uuNxX" />
                    ) : (
                      <div className="Polaris-DropZone-FileUpload Polaris-DropZone-FileUpload--large">
                        <div
                          className="Polaris-BlockStack"
                          style={{
                            "--pc-block-stack-inline-align": "center",
                            "--pc-block-stack-order": "column",
                            "--pc-block-stack-gap-xs": "var(--p-space-200)",
                          }}
                        >
                          <button onClick={() => setIsModalOpen(!isModalOpen)} className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                            <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Ajouter une image</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {mainImageScare && (
              <div
                className="Polaris-InlineStack"
                style={{
                  "--pc-inline-stack-align": "space-between",
                  "--pc-inline-stack-wrap": "wrap",
                  "--pc-inline-stack-flex-direction-xs": "row",
                }}
              >
                <div>
                  <button onClick={() => setIsModalOpen(!isModalOpen)} className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPlain Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button" tabIndex="0" aria-controls=":rmq:" aria-owns=":rmq:" aria-expanded="false" data-state="closed">
                    <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">Mise à jour</span>
                    <span className="Polaris-Button__DisclosureIcon Polaris-Button__Icon">
                      <span className="Polaris-Icon">
                        <Icon source={ChevronDownIcon} tone="inherit" />
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <Modal
            open={isModalOpen}
            title="Image Principale"
            onClose={handleChange}
            primaryAction={{
              content: "Appliquer",
              disabled: !isModified,
              onAction: handleSave,
            }}
            secondaryActions={[
              {
                content: "Annuler",
                onAction: handleChange,
              },
            ]}
          >
            <ImageModal localImage={localImage} handleChangeImageUrl={handleChangeImageUrl}  handleChangeImage={handleChangeImage} />
          </Modal>

          <div
            className="Polaris-Bleed"
            style={{
              "--pc-bleed-margin-block-end-xs": "var(--p-space-400)",
              "--pc-bleed-margin-block-end-sm": "var(--p-space-500)",
              "--pc-bleed-margin-inline-start-xs": "var(--p-space-400)",
              "--pc-bleed-margin-inline-start-sm": "var(--p-space-500)",
              "--pc-bleed-margin-inline-end-xs": "var(--p-space-400)",
              "--pc-bleed-margin-inline-end-sm": "var(--p-space-500)",
            }}
          >
            <hr
              className="Polaris-Divider"
              style={{
                borderBlockStart: "var(--p-border-width-025) solid var(--p-color-border-secondary)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
