import React from "react";
import { Editor as Tinymce } from "@tinymce/tinymce-react";
import setup from "./config/setup";
import toolbar from "./config/toolbar";
import StyleFormats from "./config/ styleFormats";
import contentCss from "./config/contentCss";
import plugins from "./config/plugins";
const EditorText = ({ content, setContent, selector }) => {
  return (
    <Tinymce
      id={selector}
      apiKey={"wcr06vyzq85sxcjii3v94cpkkmhw6b25c503p27kw5tcrjzn"}
      value={content}
      onEditorChange={(newContent) => setContent(newContent)}
      init={{
        language: "fr_FR",
  
        verify_html: false, // Désactive la validation du HTML (préserve le contenu tel quel)
        entity_encoding: "raw", // Conserve les entités HTML sans les encoder
        inline: false, // Désactive l'édition inline si activée
        valid_elements: "*[*]", // Autorise tous les éléments et attributs (aucune restriction)
        valid_children: "+body[style|script|div],+div[style|p|a]", // Facultatif : autorise des structures spécifiques
        cleanup: false, // Désactive tout nettoyage du HTML
        paste_as_text: true, // Colle le contenu brut
        convert_urls: false, // Empêche la conversion automatique des URLs
        preserve_cdata: true, // Conserve les données CDATA telles quelles

         // forced_root_block: 'p',

         forced_root_block_attrs: {
          'data-json': '{}'
        },
 newline_behavior: 'block',
        autoresize_bottom_margin: 50, // Marge en bas pour éviter le chevauchement

        max_height: 600,
        min_height: 315,
        height: 315, // Hauteur de démarrage (sera écrasée par 'autoresize')
        menubar: false,
        branding: false,
        toolbar_mode: "wrap",
        plugins: plugins,
        toolbar: toolbar,

        setup: (editor) => {
          setup(editor);
        },

        style_formats: StyleFormats,
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
        content_css: contentCss
      
        }}
    />
  );
};

export default EditorText;
