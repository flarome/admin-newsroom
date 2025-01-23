import React, { useState, useMemo, useCallback, useEffect } from "react";
import * as lodash from "lodash";
const { isEqual } = lodash;

import ImageModal from "./ImageModal";
import { Modal, Icon, Card, BlockStack } from "@shopify/polaris";
import { ChevronDownIcon } from "@shopify/polaris-icons";

import {
  SaveBar,
  useAppBridge,
  Modal as BModal,
  TitleBar,
} from "@shopify/app-bridge-react";

import { getImageInfo } from "../../modules/getInfo";

const modalId = "mainImage";

const MainImage = ({ mainImage, setMainImage }) => {
  // Shopify Provider
  const shopify = useAppBridge();

  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour ouvrir/fermer le modal pour l'image principale

  const { mainImageScare, mainImageAlt } = useMemo(() => {
    return getImageInfo(mainImage);
  }, [mainImage]);

  const [localImage, setLocalImage] = useState(mainImage);

  // before leave
  useEffect(() => {
    setLocalImage(mainImage);
  }, [mainImage]); // Déclenche l'effet chaque fois que `isModified` change

  const isModified = useMemo(() => {
    return !isEqual(localImage, mainImage);
  }, [localImage, mainImage]);

  const handleModifiedBanner = useCallback(() => shopify.modal.toggle(modalId));

  const handleSave = () => {
    setMainImage(localImage);
    handleModifiedBanner();
  };

  const handleAnnule = () => {
    handleModifiedBanner();
    setLocalImage(mainImage);
  };

  // Fonction pour mettre à jour l'URL d'une taille spécifique
  const handleChangeImageUrl = (size, value) => {
    setLocalImage((prevState) => ({
      ...prevState,
      sizes: {
        ...prevState.sizes,
        [size]: value,
      },
    }));
  };

  const handleChangeImage = (id, value) => {
    setLocalImage((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }}>
        <div className="Polaris-TextContainer">
          <h2
            className="Polaris-Text--root Polaris-Text--headingMd"
            tabIndex="-1"
          >
            Image vedette
          </h2>
          <div className="Polaris-Labelled--hidden">
            <div className="Polaris-Labelled__LabelWrapper">
              <div className="Polaris-Label">
                <label
                  id="image-upload-label"
                  htmlFor="image-upload"
                  className="Polaris-Label__Text"
                >
                  <span className="Polaris-Text--root Polaris-Text--bodyMd">
                    Importer une image
                  </span>
                </label>
              </div>
            </div>
            <div
              className="Polaris-DropZone Polaris-DropZone--hasOutline Polaris-DropZone--sizeLarge"
              aria-disabled="false"
            >
              <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--visuallyHidden">
                <input
                  id="image-upload"
                  accept="image/*"
                  type="file"
                  autoComplete="off"
                />
              </span>
              <div className="Polaris-DropZone__Container">
                <div className="UPK5h">
                  {mainImageScare ? (
                    <img
                      alt={mainImageAlt}
                      src={mainImageScare}
                      className="uuNxX"
                    />
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
                        <button
                          onClick={handleModifiedBanner}
                          className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
                          type="button"
                        >
                          <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">
                            Ajouter une image
                          </span>
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
                <button
                  onClick={handleModifiedBanner}
                  className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPlain Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--disclosure"
                  type="button"
                  tabIndex="0"
                  aria-controls=":rmq:"
                  aria-owns=":rmq:"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">
                    Mise à jour
                  </span>
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
      </BlockStack>

      <BModal id={modalId} variant="large">
        <TitleBar title="Image Principale">
          <button onClick={handleSave} variant="primary" disabled={!isModified}>
            Appliquer
          </button>
          <button tone="default" onClick={handleAnnule}>
            Annuler
          </button>
        </TitleBar>

        <ImageModal
          localImage={localImage}
          handleChangeImageUrl={handleChangeImageUrl}
          handleChangeImage={handleChangeImage}
        />
      </BModal>
    </Card>
  );
};

export default MainImage;
