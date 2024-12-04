import React, { useState } from "react";
import EditorText from "../../Editor";
import { TextField, FormLayout, Card, BlockStack, InlineStack, Text, Button, Bleed, Divider, TextContainer } from "@shopify/polaris";
const Extrait = ({ setExtrait, extrait }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }}>
        <InlineStack align="space-between" wrap direction={{ xs: "row" }}>
          <h2 className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold" tabIndex="-1">
            Extrait
          </h2>

          <button onClick={() => setIsOpen(!isOpen)} className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPlain Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
            <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">{isOpen ? "Fermer" : `Ajouter un extrait`}</span>
          </button>
        </InlineStack>
        <TextContainer>
          <p>Ajoutez un résumé de l’article qui s’affichera sur votre page d’accueil ou votre blog.</p>

          {isOpen && (
            <div className="v7Z1h">
              <div class="Polaris-Labelled--hidden">
                <div class="Polaris-Labelled__LabelWrapper">
                  <div class="Polaris-Label">
                    <label id="contentLabel" for="extrait" class="Polaris-Label__Text">
                      <span class="Polaris-Text--root Polaris-Text--bodyMd">Ajoutez un résumé de l’article qui s’affichera sur votre page d’accueil ou votre blog.</span>
                    </label>
                  </div>
                </div>
                <div class="Polaris-Connected">
                  <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">

                    <EditorText content={extrait} setContent={setExtrait} selector="extrait" />

                  </div>
                </div>
              </div>


             
            </div>
          )}
        </TextContainer>
      </BlockStack>
    </Card>
  );
};

export default Extrait;
