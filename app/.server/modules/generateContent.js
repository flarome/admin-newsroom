import { JSDOM } from "jsdom";
import AdmZip from "adm-zip";
import fetch from "node-fetch";
import crypto from "crypto"; 
import path from "path";
import handle from "../../global-modules/utils/handle";

import { extractImageDataJson } from "../../shared-instances/content/media/normalizeImageData";
import uploadToShopify from "../uploadFile";
import fs from "fs";

/**
 * Génère un UUID basé sur la position, la date/heure et un namespace personnalisé.
 * @param {string} name - Nom ou chaîne de caractères pour générer l'UUID.
 * @param {string} id - Namespace personnalisé (par exemple une chaîne git).
 * @returns {string} - UUID unique.
 */
function generateCustomUUID(name, id) {
  // Concaténer l'ID et le nom du fichier pour créer un nom unique
  const name1 = id + name;

  // Générer un hachage SHA-256 basé sur cette concaténation
  const hash = crypto.createHash("sha256").update(name1).digest("hex");

  // Formater le hachage pour ressembler à un UUID
  const uuidLike = `${hash.substring(0, 8)}-${hash.substring(8, 12)}-${hash.substring(12, 16)}-${hash.substring(16, 20)}-${hash.substring(20, 32)}`;

  return uuidLike;
}



export function supprimerDivEtGarderLesAutres(texteHTML) {
  // Créer un document DOM avec JSDOM
  const dom = new JSDOM(texteHTML);
  const document = dom.window.document;

  // Supprimer toutes les balises <div>
  const divs = document.querySelectorAll("div");
  divs.forEach(function (div) {
    div.parentNode.removeChild(div);
  });

  // Retourner le texte sans les <div>, mais avec les autres balises HTML
  return document.body.innerHTML;
}








async function generateZipFile(uuid, img, altText, shopify, retry = false) {
  try {
    const imgName = path.basename(img);

    // Étape 1 : Télécharger l'image
    const response = await fetch(img);
    if (!response.ok) {
      throw new Error(
        `Erreur lors du téléchargement de l'image : ${response.statusText}`
      );
    }
    const imageBuffer = await response.buffer();

    // Étape 2 : Créer le fichier ZIP
    const zip = new AdmZip();

    // Ajouter l'image au ZIP
    zip.addFile(imgName, imageBuffer);

    // Ajouter le fichier legal_notice.rtf au ZIP

    // Ajouter le fichier RTF au ZIP
// Définir le chemin local du fichier RTF
const rtfPath = path.resolve(__dirname, "../../data-shopify/blog/legal/media.rtf"); // Chemin absolu

// Ajouter le fichier RTF au ZIP
zip.addLocalFile(rtfPath, '', "LEGAL_NOTICE.rtf");

    // Définir le chemin temporaire
    const baseDir = path.resolve();
    const tempDir = path.join(
      baseDir,
      "tmp",
      handle(process.cwd()), 
      handle(Date.now().toString())
    );
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    let zipName = `newsroom_article_${uuid}_${path.basename(
      img,
      path.extname(img)
    )}.zip`;
    const zipPath = path.join(tempDir, zipName);

    // Écriture du ZIP sur le disque
    zip.writeZip(zipPath);

    // Étape 3 : Envoyer le fichier ZIP à Shopify
    const uploadedFileUrl = await uploadToShopify(
      shopify,
      zipName,
      zipPath,
      "application/zip",
      altText,
      true
    );

    // Nettoyer le fichier temporaire
    fs.unlinkSync(zipPath);

    // Gestion des réponses de Shopify
    if (uploadedFileUrl?.url) {
      return uploadedFileUrl.url;
    } else if (
      uploadedFileUrl?.fileStatus &&
      ["PROCESSING", "READY", "UPLOADED"].includes(uploadedFileUrl.fileStatus)
    ) {
      return zipName;
    } else if (
      uploadedFileUrl?.fileStatus === "FAILED" &&
      !retry
    ) {
      // Retenter avec un nom modifié
      const timestamp = new Date()
        .toISOString()
        .replace(/[-:.TZ]/g, "");
      zipName = `retry_${uuid}_${timestamp}_${path.basename(
        img,
        path.extname(img)
      )}.zip`;
      return await generateZipFile(uuid, img, altText, shopify, true);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erreur :", error.message);
    return null;
  }
}



async function generateJsonImage(dataJson, shopify) {
  // Remplir les informations supplémentaires
  const img = dataJson.imagesrc;
  const imgName = img ? img.split("/").pop() : "";
  const uuid = generateCustomUUID(imgName, Date.now().toString());

  return {
    [dataJson.imageLayout]: {
      "body-copy-wide": true,
      imagesrc: img,
      caption: dataJson.caption,
      downloadFile:
        (await generateZipFile(uuid, img, dataJson.alt, shopify)) || null,
      dropcap: false, // Définir selon vos besoins
      modal: false, // Définir selon vos besoins
      clipboardText: "Copied to clipboard", // Optionnel
      analytics: {
        asset: imgName,
      },
      image: {
        metadata: {
          alt: dataJson.alt,
          uuid: uuid,
          srcs: {
            medium: dataJson.medium,
            small: dataJson.small,
            large: dataJson.large,
            large2x: dataJson.large2x,
            medium2x: dataJson.medium2x,
            small2x: dataJson.small2x,
          },
        },
      },
    },
  };
}
export async function htmlToJson(htmlString, shopify) {
  const dom = new JSDOM(htmlString);
  const elements = Array.from(
    dom.window.document.body
      ? dom.window.document.body.children
      : dom.window.document.children,
  );

  const body = [];
  let currentBodyCopy = { bodyCopy: { content: [] } };

  for (const element of elements) {
    if (element.tagName === "P") {
      // Ajouter un paragraphe au bodyCopy
      currentBodyCopy.bodyCopy.content.push({
        type: "text",
        text: element.textContent.trim(),
      });
    } else if (["H1", "H2", "H3"].includes(element.tagName)) {
      // Ajouter un header au bodyCopy
      currentBodyCopy.bodyCopy.content.push({
        type: "header",
        text: element.textContent.trim(),
        level: parseInt(element.tagName.charAt(1), 10),
      });
    } else if (element.tagName === "FIGURE") {
      // Extraire les données JSON de la figure
      const figureDataJson = extractImageDataJson(element);

      // Appeler une fonction asynchrone et attendre son résultat
      const figureData = await generateJsonImage(figureDataJson, shopify);

      if (figureData) {
        // Ajouter le bodyCopy en cours au tableau body, s'il n'est pas vide
        if (currentBodyCopy.bodyCopy.content.length > 0) {
          body.push(currentBodyCopy);
          currentBodyCopy = { bodyCopy: { content: [] } }; // Réinitialiser bodyCopy
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

// Convertit JSON → Ancien HTML
export function jsonToOldHtml(jsonContent) {
  return jsonContent
    .map((component) => {
      if (component.bodyCopy) {
        return component.bodyCopy.content
          .map((contentItem) => {
            if (contentItem.type === "text") {
              return `<p>${contentItem.text}</p>`;
            } else if (contentItem.type === "header") {
              return `<${"h" + contentItem.level}>${contentItem.text}</${"h" + contentItem.level}>`;
            }
          })
          .join("");
      } else if (component.imageInline) {
        return `<img src="${component.imageInline.src}" alt="${component.imageInline.alt}" />`;
      } else {
        return `<!-- Composant inconnu -->`;
      }
    })
    .join("");
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
            return `<div class="pagebody-copy">${contentItem.text}</div>`;
          } else if (contentItem.type === "header") {
            if (contentItem.level === 2) {
              return `<h2 class="pagebody-header"><strong>${contentItem.text}</strong></h2>`;
            } else if (contentItem.level === 3) {
              return `<div class="pagebody-copy"><strong>${contentItem.text}</strong></div>`;
            } else {
              return `<h1 class="pagebody-header"><strong>${contentItem.text}</strong></h1>`;
            }
          }
        })
        .join("");
    } else if (component.imageInline) {
      // Si une image arrive, on ferme les div ouverts
      if (isOpen) {
        html += `
              </div>
            </div>
          `;
        isOpen = false;
      }

      // Ajoute l'image avec un conteneur propre
      html += `
          <div class="pagebody text component">
            <div class="component-content">
              <img src="${component.imageInline.src}" alt="${component.imageInline.alt}" />
            </div>
          </div>
        `;
    } else {
      // Gestion d'un type inconnu
      if (!isOpen) {
        html += `
            <div class="pagebody text component">
              <div class="component-content">
          `;
        isOpen = true;
      }
      html += `<div class="unknown-component">Composant inconnu</div>`;
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

export async function generateHtml(inputHtml, shopify) {
  console.log("inputHtml", inputHtml);

  // Conversion HTML → JSON
  const jsonContent = await htmlToJson(
    supprimerDivEtGarderLesAutres(inputHtml),
    shopify,
  );
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
