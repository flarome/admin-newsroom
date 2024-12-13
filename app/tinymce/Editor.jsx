import React from "react";
import { Editor as Tinymce } from "@tinymce/tinymce-react";
import setup from "./setup";

const EditorText = ({ content, setContent, selector }) => {
  return (
    <Tinymce
      id={selector}
      apiKey={"3vdnn17de1i4j6h9fh5l9g1fr75h4qtg2jpf2fts725i2y71"}
      value={content}
      onEditorChange={(newContent) => setContent(newContent)}
    
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

        autoresize_bottom_margin: 50, // Marge en bas pour éviter le chevauchement

        max_height: 600,
        min_height: 315,
        height: 315, // Hauteur de démarrage (sera écrasée par 'autoresize')
        menubar: false,
        branding: false,
        toolbar_mode: "wrap",
        plugins: [
          "autoresize",
          "code",
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "link",
          "lists",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
          "checklist",
          "casechange",
          "formatpainter",
          "a11ychecker",
          "tinymcespellchecker",
          "permanentpen",
          "powerpaste",
          "advtable",
          "advcode",
          "advtemplate",
          "tableofcontents",
          "footnotes",
          "mergetags",
          "autocorrect",
          "typography",
          "markdown",
          "importword",
        ],
        toolbar:
          "spellcheckdialog a11ycheck typography | undo redo | styles bold italic underline strikethrough | checklist numlist bullist indent outdent | alignleft aligncenter alignright | link table | imageSharesheet | mergetags removeformat | emoticons charmap | code", // Ajoutez template ici

        setup: (editor) => {
          setup(editor);
        },

        style_formats: [
          { title: "H2", block: "h2" },
          { title: "H3", block: "h3" },
          { title: "Paragraphe", block: "p" },
        ],
        contextmenu: "advtemplate",
        exportpdf_converter_options: {
          format: "Letter",
          margin_top: "1in",
          margin_right: "1in",
          margin_bottom: "1in",
          margin_left: "1in",
        },
        exportword_converter_options: { document: { size: "Letter" } },
        importword_converter_options: {
          formatting: {
            styles: "inline",
            resets: "inline",
            defaults: "inline",
          },
        },
        advtemplate_templates: [],
        content_style:
          "body { font-family:Arial,sans-serif; font-size:14px } .pagebody-header { font-size:18px; font-weight:bold; } .pagebody-subheader { font-size:16px; font-weight:normal; }",
      }}
    />
  );
};

export default EditorText;
