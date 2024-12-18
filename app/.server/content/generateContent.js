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
  const dropcaps = data.dropcaps ? Boolean(data.dropcaps) : false;
    

  return {
    data: data?.local || {},
    type,
    location,
    dropcaps
  };
}

    // Nettoyer le contenu HTML pour retirer les éléments avec data-mce-ignore
   /* const cleanedHtml = cleanHtml(element).trim();

    if (cleanedHtml === "" || cleanedHtml === "&nbsp;") {
      // Si l'élément est vide, fermer le bodyCopy actuel et en ouvrir un nouveau
      if (currentBodyCopy.bodyCopy.content.length > 0) {
        body.push(currentBodyCopy); // Ajouter l'actuel au tableau
        currentBodyCopy = bodyCopy; // Nouveau bodyCopy
      }
      continue; // Passer au prochain élément
    }*/

      
/*
export async function htmlToJson(htmlString, shopify, cdnUrl) {
  const dom = new JSDOM(htmlString);
  const elements = Array.from(
    dom.window.document.body?.children || dom.window.document.children
  );

  const bodyCopyTemplate = {
    bodyCopy: { content: [], pagebodysmall: false, dropcaps: false },
  };
  const body = [];
  let currentBodyCopy = { ...bodyCopyTemplate };
  let isDropcapsSection = false; // Suivi de la section en cours avec dropcaps

  let quoteCounter = 0;


  const addCurrentBodyCopyToBody = () => {
    
    if (currentBodyCopy.bodyCopy.content.length > 0) {
      body.push(currentBodyCopy);
      currentBodyCopy = { ...bodyCopyTemplate }; // Reset bodyCopy
    }
  };

  for (const element of elements) {
    const { type, dropcaps } = mceToData(element);

    if (dropcaps) {
      console.log('ifdfdss', element, isDropcapsSection);
      if (isDropcapsSection) {
       
        // Terminer la section précédente si une nouvelle dropcaps est rencontrée
        addCurrentBodyCopyToBody();
      }

      isDropcapsSection = true; // Activer une nouvelle section avec dropcaps
      currentBodyCopy.bodyCopy.dropcaps = true;
    }


    switch (type) {
      case "text":
      case "P": {
        const data = generateJsonText(element);
        if (data) currentBodyCopy.bodyCopy.content.push(data);
        break;
      }
      case "header": {
        const data = generateJsonHeader(element);
        if (data) currentBodyCopy.bodyCopy.content.push(data);
        break;
      }
      case "header-secondary": {
        const data = generateJsonHeaderSecondary(element);
        if (data) currentBodyCopy.bodyCopy.content.push(data);
        break;
      }
      case "quote": {
        quoteCounter++;
        const quoteData = generateJsonQuote(element, quoteCounter);
        if (quoteData) {
          addCurrentBodyCopyToBody();
          body.push(quoteData);
        }
        break;
      }
      case "imageInline": {
        const figureData = await generateJsonImageInline(element, shopify, cdnUrl);
        if (figureData) {
          addCurrentBodyCopyToBody();
          body.push(figureData);
        }
        break;
      }
      default:
        break;
    }
  }

  // Add the last bodyCopy to the body array if not empty
  addCurrentBodyCopyToBody();

  return body;
}*/
export async function htmlToJson(htmlString, shopify, cdnUrl) {
  const dom = new JSDOM(htmlString);
  const elements = Array.from(
    dom.window.document.body?.children || dom.window.document.children
  );

  const bodyCopyTemplate = {
    bodyCopy: { content: [], pagebodysmall: false, dropcaps: false },
  };

  const addCurrentBodyCopyToBody = (body, currentBodyCopy) =>
    currentBodyCopy.bodyCopy.content.length > 0
      ? [...body, currentBodyCopy]
      : body;

  const processElement = async (element, state) => {
    const { body, currentBodyCopy, quoteCounter } = state;
    const { type, dropcaps } = mceToData(element);

    if (dropcaps) {
      // Nouvelle section avec dropcaps
      const newBody = addCurrentBodyCopyToBody(body, currentBodyCopy);
      const updatedCurrentBodyCopy = {
        ...bodyCopyTemplate,
        bodyCopy: { ...bodyCopyTemplate.bodyCopy, dropcaps: true },
      };
      const data = generateJsonText(element);
      return data
        ? {
            body: newBody,
            currentBodyCopy: {
              ...updatedCurrentBodyCopy,
              bodyCopy: {
                ...updatedCurrentBodyCopy.bodyCopy,
                content: [data],
              },
            },
            quoteCounter,
          }
        : { body: newBody, currentBodyCopy: updatedCurrentBodyCopy, quoteCounter };
    }

    if (type === "text" || type === "P") {
      const data = generateJsonText(element);
      return data
        ? {
            body,
            currentBodyCopy: {
              ...currentBodyCopy,
              bodyCopy: {
                ...currentBodyCopy.bodyCopy,
                content: [...currentBodyCopy.bodyCopy.content, data],
              },
            },
            quoteCounter,
          }
        : state;
    }

    if (type === "header") {
      const data = generateJsonHeader(element);
      return data
        ? {
            body,
            currentBodyCopy: {
              ...currentBodyCopy,
              bodyCopy: {
                ...currentBodyCopy.bodyCopy,
                content: [...currentBodyCopy.bodyCopy.content, data],
              },
            },
            quoteCounter,
          }
        : state;
    }
     
    if (type === "header-secondary") {
      const data = generateJsonHeaderSecondary(element);
      return data
        ? {
            body,
            currentBodyCopy: {
              ...currentBodyCopy,
              bodyCopy: {
                ...currentBodyCopy.bodyCopy,
                content: [...currentBodyCopy.bodyCopy.content, data],
              },
            },
            quoteCounter,
          }
        : state;
    }
    

    if (type === "quote") {
      const updatedQuoteCounter = quoteCounter + 1;
      const quoteData = generateJsonQuote(element, updatedQuoteCounter);
      return quoteData
        ? {
            body: addCurrentBodyCopyToBody(body, currentBodyCopy).concat(quoteData),
            currentBodyCopy: { ...bodyCopyTemplate },
            quoteCounter: updatedQuoteCounter,
          }
        : state;
    }

    if (type === "imageInline") {
      const figureData = await generateJsonImageInline(element, shopify, cdnUrl);
      return figureData
        ? {
            body: addCurrentBodyCopyToBody(body, currentBodyCopy).concat(figureData),
            currentBodyCopy: { ...bodyCopyTemplate },
            quoteCounter,
          }
        : state;
    }

    return state;
  };

  const initialState = {
    body: [],
    currentBodyCopy: { ...bodyCopyTemplate },
    quoteCounter: 0,
  };

  const finalState = await elements.reduce(
    async (statePromise, element) =>
      processElement(element, await statePromise),
    Promise.resolve(initialState)
  );

  const finalBody = addCurrentBodyCopyToBody(finalState.body, finalState.currentBodyCopy);

  return finalBody;
}




export function jsonToHtml(jsonContent) {
  let html = ""; // Contient le HTML généré
  let isOpen = false; // Indique si les div conteneurs principaux sont ouverts

  jsonContent.forEach((component) => {
    if (component.bodyCopy) {
    
      if (isOpen) {
        html += `
              </div>
            </div>
          `;
        isOpen = false;
      }
      // Vérifie si on doit ouvrir les div principaux

        html += `
            <div class="pagebody ${component.bodyCopy.pagebodysmall ? "pagebodysmall" : ""} text component ${component.bodyCopy.dropcaps ? "dropcaps" : ""}">
              <div class="component-content">
          `;
        isOpen = true;
      

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
