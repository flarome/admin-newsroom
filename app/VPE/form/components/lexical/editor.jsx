// Fonction pour échapper le HTML
function escapeHtml(text) {
  return text.replace(/[&<>"']/g, function (m) {
    return (
      {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[m] || m
    );
  });
}

// Version inline ONLY : rend le contenu, n'écrit une balise que si elle est dans INLINE_TAGS, sinon écrase la balise (récursif)
function renderLexicalJsonToHtml(node) {
  if (!node) return "";

  // Si c'est un node de lien (link)
  if (node.type === "link" && node.url) {
    const content = (node.children || []).map(renderLexicalJsonToHtml).join("");
    return `<a href="${escapeHtml(node.url)}">${content}</a>`;
  }

  // Si c'est un node texte (toujours inline)
  if (node.type === "text") {
    const text = escapeHtml(node.text || "");
    const isBold = (node.format & 1) !== 0;
    const isItalic = (node.format & 2) !== 0;
    const isUnderline = (node.format & 8) !== 0;
    const isCode = (node.format & 16) !== 0;
    const wrap = (content, tag) => `<${tag}>${content}</${tag}>`;
    const wrappers = [];
    if (isBold) wrappers.push("strong");
    if (isItalic) wrappers.push("em");
    if (isUnderline) wrappers.push("u");
    if (isCode) wrappers.push("code");
    return wrappers.reduce((acc, tag) => wrap(acc, tag), text);
  }

  // Si c'est une balise inline custom (genre lien), à compléter ici si besoin
  // Si besoin tu peux ajouter d'autres types inline personnalisés ici

  // Sinon, pour tout le reste (blocks ou inconnus), rend juste les enfants à la suite
  if (node.children) {
    return node.children.map(renderLexicalJsonToHtml).join("");
  }

  // Rien à rendre
  return "";
}

import React, { useRef, useEffect } from "react";
import "./styles.css";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

// transformer
import * as lexicalHtml from "@lexical/html";
const { $generateNodesFromDOM, $generateHtmlFromNodes } = lexicalHtml;

import * as pkj from "lexical";
const { $isTextNode, ParagraphNode, TextNode, isHTMLElement, $getRoot } = pkj;

import ExampleTheme from "./theme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { parseAllowedColor, parseAllowedFontSize } from "./styleConfig";

const placeholder = "Enter some rich text...";


const INLINE_TAGS = [
  "STRONG", "B", "I", "EM", "U", "A", "SPAN", "BR", "CODE", "SUB", "SUP", "MARK", "SMALL", "DEL", "INS", "S"
];
const isBlockTag = tag => !INLINE_TAGS.includes(tag);

function flattenBlocksToInline(fragment) {
  const outputFragment = document.createDocumentFragment();
  function recursiveAppend(node, parentFragment) {
    if (node.nodeType === Node.ELEMENT_NODE && isBlockTag(node.tagName)) {
      Array.from(node.childNodes).forEach(child => recursiveAppend(child, parentFragment));
    } else {
      parentFragment.appendChild(node.cloneNode(true));
    }
  }
  Array.from(fragment.childNodes).forEach(child => recursiveAppend(child, outputFragment));
  return outputFragment;
}


function removeEmptySpans(element) {
  if (!element) return element;

  if (
    element.nodeType === Node.ELEMENT_NODE &&
    element.tagName === "SPAN"
  ) {
    // Vérifie si le span est totalement vide d'attributs utiles
    const attrs = element.getAttributeNames().filter(name => !!element.getAttribute(name));
    if (attrs.length === 0) {
      // Si un seul enfant, retourne l'enfant (aplati)
      if (element.childNodes.length === 1) {
        return removeEmptySpans(element.firstChild);
      }
      // Plusieurs enfants : retourne tous les enfants (aplati dans un fragment)
      const fragment = document.createDocumentFragment();
      Array.from(element.childNodes).forEach(child => {
        fragment.appendChild(removeEmptySpans(child));
      });
      return fragment;
    }
  }
  // Sinon, parcourt récursivement les enfants
  if (element.childNodes) {
    // Attention, parcours à l’envers pour éviter bugs de mutation du DOM
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      const child = element.childNodes[i];
      const cleaned = removeEmptySpans(child);
      if (cleaned !== child) {
        element.replaceChild(cleaned, child);
      }
    }
  }
  return element;
}

function cleanDoubleBold(element) {
  if (!element) return element;
  if (
    element.nodeType === Node.ELEMENT_NODE &&
    element.tagName === "B" &&
    element.childNodes.length === 1 &&
    element.firstChild.nodeType === Node.ELEMENT_NODE &&
    element.firstChild.tagName === "STRONG"
  ) {
    // Remplace le <b> par son <strong>
    return cleanDoubleBold(element.firstChild);
  }
  if (element.childNodes) {
    for (let i = 0; i < element.childNodes.length; i++) {
      const cleaned = cleanDoubleBold(element.childNodes[i]);
      if (cleaned !== element.childNodes[i]) {
        element.replaceChild(cleaned, element.childNodes[i]);
      }
    }
  }
  return element;
}

const exportBlockAsFlattenedFragment = (editor, target) => {
  const output = target.exportDOM(editor);
  if (output && output.element) {
    const fragment = flattenBlocksToInline(output.element);
    const cleanedFragment = removeEmptySpans(fragment);
    const finalFragment = cleanDoubleBold(cleanedFragment);
    output.element = finalFragment;
  }
  return output;
};

// Export config et importMap (inchangés)
const removeStylesExportDOM = (editor, target) => {
  const output = target.exportDOM(editor);
  if (output && isHTMLElement(output.element)) {
    for (const el of [
      output.element,
      ...output.element.querySelectorAll('[style],[class],[dir="ltr"]'),
    ]) {
      el.removeAttribute("class");
      el.removeAttribute("style");
      if (el.getAttribute("dir") === "ltr") {
        el.removeAttribute("dir");
      }
    }
  }
  return output;
};
const exportMap = new Map([
  [ParagraphNode, exportBlockAsFlattenedFragment],
  [TextNode, removeStylesExportDOM],
]);
const getExtraStyles = (element) => {
  let extraStyles = "";
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);
  if (fontSize !== "" && fontSize !== "15px") {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== "" && backgroundColor !== "rgb(255, 255, 255)") {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== "" && color !== "rgb(0, 0, 0)") {
    extraStyles += `color: ${color};`;
  }
  return extraStyles;
};
const constructImportMap = () => {
  const importMap = {};
  for (const [tag, fn] of Object.entries(TextNode.importDOM() || {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) return null;
      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);
          if (
            output === null ||
            output.forChild === undefined ||
            output.after !== undefined ||
            output.node !== null
          ) {
            return output;
          }
          const extraStyles = getExtraStyles(element);
          if (extraStyles) {
            const { forChild } = output;
            return {
              ...output,
              forChild: (child, parent) => {
                const textNode = forChild(child, parent);
                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }
                return textNode;
              },
            };
          }
          return output;
        },
      };
    };
  }
  return importMap;
};

const editorConfig = {
  html: { export: exportMap, import: constructImportMap() },
  namespace: "React.js Demo",
  nodes: [ParagraphNode, TextNode],
  onError(error) {
    throw error;
  },
  theme: ExampleTheme,
};

// ChangePlugin pour notify le parent à chaque modif
function MyOnChangePlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState, editor);
    });
  }, [editor, onChange]);
  return null;
}

import { ActionList, AppProvider, Popover } from "@polaris/npm";

import polarisTranslations from "@shopify/polaris/locales/fr.json";


export const Inline = ({ value: data, onChange: setData }) => {
  // Pour éviter une boucle infinie si l'output HTML ne change pas
  const lastHtmlRef = useRef(null);



  // La config, version propre
  const editorConfigWithInitialState = {
    ...editorConfig,
    editorState: (editor) => {
      // Cette fonction est exécutée à l'init de l'éditeur, côté client !
      // On parse le HTML de base
      const parser = new DOMParser();
      const dom = parser.parseFromString(data, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      const root = $getRoot();
      root.clear();
      // Si nodes contient uniquement un TextNode, on l'enveloppe dans un ParagraphNode (Lexical exige des ElementNode à la racine)
      if (nodes.length === 1 && nodes[0].__type === "text") {
        const paragraph = new ParagraphNode();
        paragraph.append(nodes[0]);
        root.append(paragraph);
      } else {
        root.append(...nodes);
      }
      // Pas besoin de return : Lexical utilise la mutation du root
    },
  };

  // À chaque changement, exporte le HTML et notifie le parent S'IL Y A UN CHANGEMENT
  function onChange(editorState, editor) {
    editor.read(() => {
      const json = editorState.toJSON();
      const html = renderLexicalJsonToHtml(json.root);

      console.log('html', html);
     
      if (html !== lastHtmlRef.current) {
        lastHtmlRef.current = html;
        setData(html);
      }
    });
  }

  return (
    <LexicalComposer initialConfig={editorConfigWithInitialState}>
      
      <ToolbarPlugin />
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="editor-input"
              aria-placeholder={placeholder}
              placeholder={
                <div className="editor-placeholder">{placeholder}</div>
              }
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <MyOnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
};
