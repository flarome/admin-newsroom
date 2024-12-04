import React from "react";
import { TextField, Box } from "@shopify/polaris";

const ImageModal = ({ localImage, handleChangeImageUrl, handleChangeImage }) => {
  return (
    <div className="lInLk">
      <Box paddingBlock={{ xs: "600" }}>

      <Box>
          <Box paddingBlockStart={{ xs: "400" }} paddingInline={{ xs: "400" }}>
            <h2 className="Polaris-Text--root Polaris-Text--headingXs" tabIndex="-1">
              Informations
            </h2>
          </Box>

          <div className="_ResourceListWrapper_qvkap_281">
            <div className="_ResourceListItemsWrapper_qvkap_26">
              <ul className="_ResourceList_qvkap_25 Polaris-ResourceList" aria-live="polite">
                  <li
                    className="Polaris-Box Polaris-ResourceItem__ListItem"
                    style={{
                      "--pc-box-padding-block-start-xs": "var(--p-space-300)",
                    }}
                  >
                    <div className="_ActivatorWrapper_1ivxc_74">
                      <div className="_LegacyRowWrapper_1ivxc_4">
                        <div className="_FormFieldLabelLegacy_1ivxc_38">
                          <p className="Polaris-Text--root Polaris-Text--bodyMd">Url de téléchargement</p>
                        </div>

                        <div className="_EditField_1ivxc_318">
                          <div style={{ display: "contents" }}>
                            <TextField
                              label="Url de téléchargement de l'image principale"
                              labelHidden
                              onChange={(value, id) => handleChangeImage(id, value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                              autoComplete="off"
                              value={localImage?.downloadUrl}
                              id="mainImageDownloadUrl"
                              type="text"
                              clearButton={true}
                              onClearButtonClick={id => handleChangeImage(id, "")} // Callback pour gérer l'effacement
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="Polaris-Box Polaris-ResourceItem__ListItem"
                    style={{
                      "--pc-box-padding-block-start-xs": "var(--p-space-300)",
                    }}
                  >
                    <div className="_ActivatorWrapper_1ivxc_74">
                      <div className="_LegacyRowWrapper_1ivxc_4">
                        <div className="_FormFieldLabelLegacy_1ivxc_38">
                          <p className="Polaris-Text--root Polaris-Text--bodyMd">Texte alternatif</p>
                        </div>

                        <div className="_EditField_1ivxc_318">
                          <div style={{ display: "contents" }}>
                            <TextField
                              label="Texte alternatif de l'image principale"
                              labelHidden
                              onChange={(value, id) => handleChangeImage(id, value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                              autoComplete="off"
                              value={localImage?.alt}
                              id="mainImageAlt"
                              type="text"
                              clearButton={true}
                              onClearButtonClick={id => handleChangeImage(id, "")} // Callback pour gérer l'effacement
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className="Polaris-Box Polaris-ResourceItem__ListItem"
                    style={{
                      "--pc-box-padding-block-start-xs": "var(--p-space-300)",
                    }}
                  >
                    <div className="_ActivatorWrapper_1ivxc_74">
                      <div className="_LegacyRowWrapper_1ivxc_4">
                        <div className="_FormFieldLabelLegacy_1ivxc_38">
                          <p className="Polaris-Text--root Polaris-Text--bodyMd">Légende</p>
                        </div>

                        <div className="_EditField_1ivxc_318">
                          <div style={{ display: "contents" }}>
                            <TextField
                              label="Légende de l'image principale"
                              labelHidden
                              onChange={(value, id) => handleChangeImage(id, value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                              autoComplete="off"
                              value={localImage?.caption}
                              id="mainImageCaption"
                              type="text"
                              clearButton={true}
                              onClearButtonClick={id => handleChangeImage(id, "")} // Callback pour gérer l'effacement
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

              </ul>
            </div>
          </div>
        </Box>
        <Box>
          <Box paddingBlockStart={{ xs: "400" }} paddingInline={{ xs: "400" }}>
            <h2 className="Polaris-Text--root Polaris-Text--headingXs" tabIndex="-1">
              Tailles
            </h2>
          </Box>

          <div className="_ResourceListWrapper_qvkap_281">
            <div className="_ResourceListItemsWrapper_qvkap_26">
              <ul className="_ResourceList_qvkap_25 Polaris-ResourceList" aria-live="polite">
                {Object.keys(localImage?.sizes || {}).map((size, index) => (
                  <li
                    className="Polaris-Box Polaris-ResourceItem__ListItem"
                    key={size}
                    style={{
                      "--pc-box-padding-block-start-xs": "var(--p-space-300)",
                    }}
                  >
                    <div className="_ActivatorWrapper_1ivxc_74">
                      <div className="_LegacyRowWrapper_1ivxc_4">
                        <div className="_FormFieldLabelLegacy_1ivxc_38">
                          <p className="Polaris-Text--root Polaris-Text--bodyMd">{size}</p>
                        </div>

                        <div className="_EditField_1ivxc_318">
                          <div style={{ display: "contents" }}>
                            <TextField
                              label={size}
                              labelHidden
                              onChange={(value, id) => handleChangeImageUrl(size, value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                              autoComplete="off"
                              value={localImage.sizes[size]}
                              id={`mainImageSizes-${index}`}
                              type="text"
                              clearButton={true}
                              onClearButtonClick={id => handleChangeImageUrl(size, "")} // Callback pour gérer l'effacement
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default ImageModal;
