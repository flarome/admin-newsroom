import React, { useState, useMemo, useEffect } from "react";
import striptags from "striptags";
import { truncateWords } from "../../../global-modules/utils/truncateWords";
import { TextField, FormLayout, Card, BlockStack, InlineStack, Bleed, Divider, Checkbox } from "@shopify/polaris";

const Seo = ({ isNewArticle, errorHandle, blog, metaDescription,  redirectNewHandle, setRedirectNewHandle, initialHandle, setMetaDescription, metaTitle, setMetaTitle, handle, setMetaHandle, title, content: c1 }) => {
  const [isModified, setIsModified] = useState(false); // Tracks if handle is modified

  // Update isModified whenever handle changes
  useEffect(() => {
    setIsModified(handle !== initialHandle);
  }, [handle, initialHandle]);


  const [isOpen, setIsOpen] = useState(false);

  const metaTitleMaxLength = 70; // Limite pour le méta-titre
  const metaDescriptionMaxLength = 160; // Limite pour la méta-description


  const content = useMemo(() => {
    return truncateWords(striptags(c1)?.trim(), 25);
  }, [c1]);


  const blogUrl = blog?.handle;

  return (
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }}>
        <InlineStack align="space-between" wrap direction={{ xs: "row" }}>
          <h2 className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold" tabIndex="-1">
            Aperçu du référencement sur les moteurs de recherche
          </h2>
          <button onClick={() => setIsOpen(!isOpen)} className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPlain Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
            <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">{isOpen ? "Fermer" : `Modifier le SEO de la page`}</span>
          </button>
        </InlineStack>
        <div>
          <p className="_9EpbS">{metaTitle || title}</p>
          <p className="XvacU">{blogUrl}{handle}</p>
          <p className="xthFr">{metaDescription || content}</p>
        </div>
        {isOpen && (
          <div>
            <Bleed marginBlockEnd={{ xs: "400", sm: "500" }} marginInlineStart={{ xs: "400", sm: "500" }} marginInlineEnd={{ xs: "400", sm: "500" }}>
              <Divider />
            </Bleed>

            <BlockStack gap={{ xs: "400" }}>
              <FormLayout>
                <TextField
                  label="Méta-titre de la page"
                  onChange={(value, id) => setMetaTitle(value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                  autoComplete="off"
                  maxLength={metaTitleMaxLength}
                  value={metaTitle}
                  error={false}
                  id="metaTitle"
                  type="text"
                  clearButton={true}
                  onClearButtonClick={id => setMetaTitle("")} // Callback pour gérer l'effacement
                  placeholder={title}
                  showCharacterCount
                />
              </FormLayout>

              <FormLayout>
                <TextField
                  label="Méta-description"
                  onChange={(value, id) => setMetaDescription(value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                  autoComplete="off"
                  maxLength={metaDescriptionMaxLength}
                  value={metaDescription}
                  multiline={4}
                  error={false}
                  id="metaDescription"
                  type="text"
                  placeholder={content}
                  showCharacterCount
                />
              </FormLayout>

              {/* URL et ancre */}
              <FormLayout>
                <TextField
                  label="URL et ancre"
                  onChange={(value, id) => setMetaHandle(value)} // Ou simplement `handleChange` si pas besoin d'ajuster
                  autoComplete="off"
                  value={handle}
                  error={errorHandle || false}
                  id="handle"
                  type="text"
                  clearButton={true}
                  onClearButtonClick={id => setMetaHandle("")} // Callback pour gérer l'effacement
                  placeholder={content}
                  prefix={blogUrl}
                />
              </FormLayout>

              {isModified && !isNewArticle && (
  <FormLayout>

<Checkbox
          label={`Créez une adresse URL de redirection pour ${initialHandle}→${handle}`}
          checked={redirectNewHandle}
          onChange={setRedirectNewHandle}
        />


  </FormLayout>


              ) 
              
            
            }
            </BlockStack>
          </div>
        )}
      </BlockStack>
    </Card>
  );
};

export default Seo;
