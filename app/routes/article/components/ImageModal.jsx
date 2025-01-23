import React from "react";
import { TextField, Box, LegacyStack, Card, Layout } from "@shopify/polaris";
import { ImageUploader } from "../modules/uploader";

const ImageModal = ({ localImage, handleChangeImageUrl, handleChangeImage }) => {
  const sizes = Object.keys(localImage?.sizes || {}) || {};

  return (
    <div>
      <Box

      padding={{xs: '300'}}
      
      >
          <LegacyStack  vertical spacing="tight">
            {/* Texte alternatif */}
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
          </LegacyStack>
    
          <LegacyStack vertical spacing="tight">
            {sizes.map((size) => (
              <LegacyStack key={size} alignment="center">
                <TextField
               
                  label={`URL pour ${size}`}
                 
                  onChange={(value) => handleChangeImageUrl(size, value)}
                  autoComplete="off"
                  value={localImage.sizes?.[size] || ""}
                  clearButton
                  onClearButtonClick={() => handleChangeImageUrl(size, "")}

                  suffix={    <div style={{width: 40, height: 40}}><ImageUploader
                    file={localImage.sizes?.[size]}
                    setFile={(file) => handleChangeImageUrl(size, file)}
                  />
                
                  </div>}
                />
             
              </LegacyStack>
            ))}
          </LegacyStack>
          </Box>
</div>

  );
};

export default ImageModal;