import { JSDOM } from "jsdom";
import { cleanHtml } from "./html";

import { extractDataJson } from "../../shared-instances/content/normalizeData";

import {
  generateHtmlText,
  generateJsonText,
  generateHtmlImageInline,
  generateJsonImageInline,
  generateHtmlHeader,
  generateJsonHeader,
  generateHtmlHeaderSecondary,
  generateJsonHeaderSecondary,
  generateJsonQuote,
  generateHtmlQuote,
} from "./components";

export function mceToData(element) {
  const data = extractDataJson(element) || {};
  const type = data.type;
  const location = data.location;

  return {
    data: data?.local || {},
    type,
    location,
  };
}
export async function htmlToJson(htmlString, shopify, cdnUrl) {
  const dom = new JSDOM(htmlString);
  const elements = Array.from(
    dom.window.document.body
      ? dom.window.document.body.children
      : dom.window.document.children,
  );

  const bodyCopy = {
    bodyCopy: { content: [], pagebodysmall: false, dropcaps: false },
  };
  const body = [];
  let currentBodyCopy = bodyCopy;
  let quoteCounter = 0; // Compteur pour suivre les positions des quotes

  for (const element of elements) {
    const type = mceToData(element).type;

    // Nettoyer le contenu HTML pour retirer les éléments avec data-mce-ignore
    const cleanedHtml = cleanHtml(element).trim();

    /*if (cleanedHtml === "" || cleanedHtml === "&nbsp;") {
      // Si l'élément est vide, fermer le bodyCopy actuel et en ouvrir un nouveau
      if (currentBodyCopy.bodyCopy.content.length > 0) {
        body.push(currentBodyCopy); // Ajouter l'actuel au tableau
        currentBodyCopy = bodyCopy; // Nouveau bodyCopy
      }
      continue; // Passer au prochain élément
    }*/

    if (type === "text" || element.tagName === "P") {
      const data = generateJsonText(element);

      if (data) {
        currentBodyCopy.bodyCopy.content.push(data);
      }
      // Ajouter un paragraphe au bodyCopy
    } else if (type === "header") {
      const data = generateJsonHeader(element);

      // Ajouter un header au bodyCopy

      if (data) {
        currentBodyCopy.bodyCopy.content.push(data);
      }
    } else if (type === "header-secondary") {
      const data = generateJsonHeaderSecondary(element);

      if (data) {
        currentBodyCopy.bodyCopy.content.push(data);
      }
    } else if (type === "quote") {
      quoteCounter++;
      const quoteData = generateJsonQuote(element, quoteCounter);

      if (quoteData) {
        // Ajouter le bodyCopy en cours au tableau body, s'il n'est pas vide
        if (currentBodyCopy.bodyCopy.content.length > 0) {
          body.push(currentBodyCopy);
          currentBodyCopy = bodyCopy; // Réinitialiser bodyCopy
        }

        body.push({
          ...quoteData, // Inclure toutes les données extraites du <figure>
        });
      }
    } else if (type === "imageInline") {
      // Extraire les données JSON de la figure

      // Appeler une fonction asynchrone et attendre son résultat
      const figureData = await generateJsonImageInline(
        element,
        shopify,
        cdnUrl,
      );

      if (figureData) {
        // Ajouter le bodyCopy en cours au tableau body, s'il n'est pas vide
        if (currentBodyCopy.bodyCopy.content.length > 0) {
          body.push(currentBodyCopy);
          currentBodyCopy = bodyCopy; // Réinitialiser bodyCopy
        }

        body.push({
          ...figureData, // Inclure toutes les données extraites du <figure>
        });
      }
    }
  }

  // Ajouter le dernier bodyCopy au tableau body, s'il n'est pas vide
  if (currentBodyCopy.bodyCopy.content.length > 0) {
    body.push(currentBodyCopy);
  }

  return body;
}

export function jsonToHtml(jsonContent) {
  let html = ""; // Contient le HTML généré
  let isOpen = false; // Indique si les div conteneurs principaux sont ouverts

  jsonContent.forEach((component) => {
    if (component.bodyCopy) {
      // Vérifie si on doit ouvrir les div principaux
      if (!isOpen) {
        html += `
            <div class="pagebody text component">
              <div class="component-content">
          `;
        isOpen = true;
      }

      // Génère les éléments de contenu texte
      html += component.bodyCopy.content
        .map((contentItem) => {
          if (contentItem.type === "text") {
            return generateHtmlText(contentItem || {});
          } else if (contentItem.type === "header-secondary") {
            return generateHtmlHeaderSecondary(contentItem);
          } else if (contentItem.type === "header") {
            return generateHtmlHeader(contentItem);
          }
        })
        .join("");
    } else if (component.pullquote) {
      // Si une image arrive, on ferme les div ouverts
      if (isOpen) {
        html += `
              </div>
            </div>
          `;
        isOpen = false;
      }

      html += generateHtmlQuote(component.pullquote || {});
    } else if (component.imageInline) {
      // Si une image arrive, on ferme les div ouverts
      if (isOpen) {
        html += `
              </div>
            </div>
          `;
        isOpen = false;
      }

      html += generateHtmlImageInline(component.imageInline || {});
    }
  });

  // Vérifie si des div sont encore ouverts à la fin
  if (isOpen) {
    html += `
          </div>
        </div>
      `;
  }

  return html;
}

export default async function generateHtml(inputHtml, shopify, cdnUrl) {
  console.log("inputHtml", inputHtml);

  // Conversion HTML → JSON
  const jsonContent = await htmlToJson(inputHtml, shopify, cdnUrl);
  console.log("JSON généré :", JSON.stringify(jsonContent, null, 2));

  // Conversion JSON → HTML
  const rebuiltHtml = jsonToHtml(jsonContent);
  console.log("HTML reconstruit :", rebuiltHtml);

  return {
    originalHtml: inputHtml,
    rebuiltHtml,
    jsonContent,
  };
}
