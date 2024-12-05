import React from "react";
import { Editor as Tinymce } from "@tinymce/tinymce-react";




/**
 * Composant pour afficher une liste d'articles
 * @param {Object[]} articles - Liste des articles
 * @param {Function} onEdit - Fonction appelée pour éditer un article
 * @param {Function} onDelete - Fonction appelée pour supprimer un article
 */
const EditorText = ({ content, setContent, selector }) => {

  
  return (
    <Tinymce
    id={selector}
    
      apiKey={"3vdnn17de1i4j6h9fh5l9g1fr75h4qtg2jpf2fts725i2y71"}
      value={content}
      onEditorChange={newContent => setContent(newContent)}
      init={{
        language: "fr_FR",
        forced_root_block: false, // Empêche l'ajout automatique de balises <p>
        verify_html: false, // Désactive la validation du HTML (préserve le contenu tel quel)
        entity_encoding: "raw", // Conserve les entités HTML sans les encoder
        inline: false, // Désactive l'édition inline si activée
        content_css: false, // Utilise le style par défaut pour éviter les interférences
        valid_elements: "*[*]", // Autorise tous les éléments et attributs (aucune restriction)
        valid_children: "+body[style|script|div],+div[style|p|a]", // Facultatif : autorise des structures spécifiques
        cleanup: false, // Désactive tout nettoyage du HTML
        paste_as_text: true, // Colle le contenu brut
        convert_urls: false, // Empêche la conversion automatique des URLs
        preserve_cdata: true, // Conserve les données CDATA telles quelles

        height: 315,
        menubar: true,
        plugins: ["code", "anchor", "autolink", "charmap", "codesample", "emoticons", "image", "link", "lists", "media", "searchreplace", "table", "visualblocks", "wordcount", "checklist", "casechange", "formatpainter", "a11ychecker", "tinymcespellchecker", "permanentpen", "powerpaste", "advtable", "advcode", "editimage", "advtemplate", "mentions", "tableofcontents", "footnotes", "mergetags", "autocorrect", "typography", "markdown", "importword"],
        toolbar: "undo redo | inserttemplate addtemplate | blocks | bold italic underline strikethrough | alignleft aligncenter alignright | h2 h3 | checklist numlist bullist indent outdent | link image media table mergetags | spellcheckdialog a11ycheck typography | styles | code  | emoticons charmap | removeformat", // Ajoutez template ici
        style_formats: [
          { title: "H2", block: "h2" },
          { title: "H3", block: "h3" },
          { title: "Paragraphe", block: "p" },
        ],
        contextmenu: "advtemplate",

        exportpdf_converter_options: { format: "Letter", margin_top: "1in", margin_right: "1in", margin_bottom: "1in", margin_left: "1in" },
        exportword_converter_options: { document: { size: "Letter" } },
        importword_converter_options: { formatting: { styles: "inline", resets: "inline", defaults: "inline" } },
        advtemplate_templates: [
          {
            title: "Section FAQ",
            description: "Créer une section FAQ avec un titre et un contenu",
            content: (
              <div class="faq-section">
                <h2 class="faq-title">Titre de la FAQ</h2>
                <p class="faq-content">Texte ou contenu de la FAQ...</p>
              </div>
            ),
          },
          {
            title: "Category 2",
            items: [
              {
                title: "Template 2.1",
                content: "Template 2.1 content",
              },
              {
                title: "Template 2.2",
                content: "Template 2.2 content",
              },
            ],
          },
        ],
        content_style: "body { font-family:Arial,sans-serif; font-size:14px } .pagebody-header { font-size:18px; font-weight:bold; } .pagebody-subheader { font-size:16px; font-weight:normal; }",
      }}
    />
  );
};

export default EditorText;
