import React, { useState, useCallback } from "react";
import {
  TextField,
  Card,
  BlockStack,
  InlineStack,
  Collapsible,
  Button,
  TextContainer,
} from "@shopify/polaris";

import { v4 as uuid } from "uuid";

import { ViewIcon, EditIcon } from "@shopify/polaris-icons";

const id = "extrait-collapsible" + uuid();
const Extrait = ({ setExtrait, extrait }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => setOpen((open) => !open), []);

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

          {open ? (
            <Button
              onClick={handleToggle}
              variant="plain"
              size="medium"
              textAlign="center"
              accessibilityLabel="Fermer"
              ariaExpanded={open}
              ariaControls={id}
            >
              {"Fermer"}
            </Button>
          ) : (
            <Button
              onClick={handleToggle}
              variant="tertiary"
              size="medium"
              textAlign="center"
              ariaExpanded={open}
              ariaControls={id}
              icon={EditIcon}
              accessibilityLabel="Modifier l'extrait"
            ></Button>
          )}
        </InlineStack>
        <TextContainer>
          <p>
            Ajoutez un résumé de l’article qui s’affichera sur votre page
            d’accueil ou votre blog.
          </p>

          <Collapsible
            open={open}
            id={id}
            transition={{ duration: "200ms", timingFunction: "ease-in-out" }}
            expandOnPrint
          >
            <div className="v7Z1h">
              <TextField
                label="Ajoutez un résumé de l’article qui s’affichera sur votre page d’accueil ou votre blog."
                labelHidden
                onChange={(value, id) => setExtrait(value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                autoComplete="off"
                value={extrait}
                id="extrait"
                type="text"
                multiline={5}
                clearButton={true}
                onClearButtonClick={() => setExtrait("")} // Callback pour gérer l'effacement
              />
            </div>
          </Collapsible>
        </TextContainer>
      </BlockStack>
    </Card>
  );
};

export default Extrait;
