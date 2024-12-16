import React, { useState } from "react";
import {
  TextField,
  Card,
  BlockStack,
  InlineStack,
  TextContainer,
} from "@shopify/polaris";
const Extrait = ({ setExtrait, extrait }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }}>
        <InlineStack align="space-between" wrap direction={{ xs: "row" }}>
          <h2
            className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold"
            tabIndex="-1"
          >
            Extrait
          </h2>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPlain Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
            type="button"
          >
            <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">
              {isOpen ? "Fermer" : `Ajouter un extrait`}
            </span>
          </button>
        </InlineStack>
        <TextContainer>
          <p>
            Ajoutez un résumé de l’article qui s’affichera sur votre page
            d’accueil ou votre blog.
          </p>

          {isOpen && (
            <div className="v7Z1h">
              <TextField
                label="Ajoutez un résumé de l’article qui s’affichera sur votre page d’accueil ou votre blog."
                labelHidden
                onChange={(e) => setExtrait(e.target.value)}
                autoComplete="off"
                value={extrait}
                id={extrait}
                type="text"
                multiline={4}
                clearButton={true}
                onClearButtonClick={() => setExtrait("")} // Callback pour gérer l'effacement
              />
            </div>
          )}
        </TextContainer>
      </BlockStack>
    </Card>
  );
};

export default Extrait;
