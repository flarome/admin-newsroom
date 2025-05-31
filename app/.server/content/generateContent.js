import { JSDOM } from "jsdom";


import { extractDataJson } from "../../shared-instances/content/normalizeData";

import {
  generateHtmlText,
  generateJsonText,
  generateHtmlImageInline, 
  generateJsonImageInline,
  generateJsonImageBig, 
  generateHtmlImageBig,
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
export async function htmlToJson(htmlString, shopify, cdnUrl, handle) {
  const dom = new JSDOM(htmlString);
  const elements = Array.from(
    dom.window.document.body?.children || dom.window.document.children
  );

  const bodyCopyTemplate = {
    bodyCopy: { content: [], pagebodysmall: false, dropcaps: false },
  };

  const allImages = [];

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

    if (type === "text" || type === "P" || element.tagName === "P") {
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

    if (type === "image") {
      const dataJson = mceToData(element)?.data || {};
      const layout = dataJson.imageLayout || "imageInline";
      const img = dataJson.imagesrc ||  dataJson.large2x ||  dataJson.large || dataJson.medium2x || dataJson.medium || dataJson.small2x || dataJson.small ;
  
      if (img && img.trim() !== "") {
        allImages.push(img)
      } 

      if (layout === "imageInline") {
        const figureData = await generateJsonImageInline(element, shopify, cdnUrl, dataJson, img, handle);
        return figureData
        ? {
            body: addCurrentBodyCopyToBody(body, currentBodyCopy).concat(figureData),
            currentBodyCopy: { ...bodyCopyTemplate },
            quoteCounter,
          }
        : state;
      } else if  (layout === "imageBig") {
        const figureData = await generateJsonImageBig(element, shopify, cdnUrl, dataJson, img, handle);
        return figureData
          ? {
              body: addCurrentBodyCopyToBody(body, currentBodyCopy).concat(figureData),
              currentBodyCopy: { ...bodyCopyTemplate },
              quoteCounter,
            }
          : state;
      }



    
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

  return {
    
    jsonContent: finalBody,
    allMedias: allImages
    
  };
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
    } else if (component.imageBig) {
      // Si une image arrive, on ferme les div ouverts
      if (isOpen) {
        html += `
              </div>
            </div>
          `;
        isOpen = false;
      }

      html += generateHtmlImageBig(component.imageBig || {});
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

export function generateCopyContent(inputHtml) {
  // Charger le contenu HTML dans JSDOM
  const dom = new JSDOM(inputHtml);
  const document = dom.window.document;

  // Liste des éléments à supprimer complètement
  const elementsToRemove = ["div", "video", "img", "figure", "picture"];

  // Supprimer les éléments non souhaités
  elementsToRemove.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  });

  // Supprimer les attributs indésirables des éléments restants
  document.querySelectorAll("*").forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (
        attr.name === "class" ||
        attr.name === "style" ||
        attr.name === "id" ||
        attr.name.startsWith("data-")
      ) {
        el.removeAttribute(attr.name); // Supprime les attributs indésirables
      }
    });
  });

  // Convertir les nœuds restants en paragraphes propres
  const paragraphs = [];
  document.body.childNodes.forEach((node) => {
    if (node.nodeType === dom.window.Node.TEXT_NODE) {
      const trimmedText = node.textContent.trim();
      if (trimmedText) {
        paragraphs.push(`<p>${trimmedText}</p>`);
      }
    } else if (
      node.nodeType === dom.window.Node.ELEMENT_NODE &&
      node.textContent.trim()
    ) {
      const cleanedContent = node.innerHTML.trim();
      paragraphs.push(`<p>${cleanedContent}</p>`);
    }
  });

  // Ajouter l'en-tête au début
  const headerContent = `

`;

  // Générer le contenu final avec l'en-tête et les paragraphes
  const finalContent = `${headerContent}\n${paragraphs.join("\n")}`;

  // Minimiser le contenu final
  const minimizedContent = finalContent
    .replace(/\s+/g, " ") // Remplace plusieurs espaces par un seul espace
    .replace(/>\s+</g, "><") // Supprime les espaces inutiles entre les balises
    .trim(); // Supprime les espaces en début et fin

  return minimizedContent;
}



export default async function generateHtml(inputHtml, shopify, cdnUrl, handle) {
  console.log("inputHtml", inputHtml);

  // Conversion HTML → JSON
  const { jsonContent, allMedias } = await htmlToJson(inputHtml, shopify, cdnUrl, handle);
  console.log("JSON généré :", JSON.stringify(jsonContent, null, 2));

const copyContent = generateCopyContent(inputHtml);
  // Conversion JSON → HTML
  const rebuiltHtml = jsonToHtml(jsonContent);
  console.log("HTML reconstruit :", rebuiltHtml);

  return {
    copyContent,
    originalHtml: inputHtml,
    rebuiltHtml,
    jsonContent,
    allsArticleMediaUrl: allMedias
  };
}
