import { JSDOM } from "jsdom";
import { fileURLToPath } from "url";
import AdmZip from "adm-zip";
import fetch from "node-fetch";
import crypto from "crypto";
import path, { dirname } from "path";
import handle from "../../global-modules/utils/handle";

import { extractDataJson } from "../../shared-instances/content/normalizeData";
import uploadToShopify from "../uploadFile";
import fs from "fs";
import fsPromise from "fs/promises";

const __filename = fileURLToPath(import.meta.url); // Conversion de l'URL du module vers un chemin de fichier
const __dirname = dirname(__filename); // Obtention du répertoire du fichier

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

let fileContent = null;
// Lecture du fichier media.txt
async function getLegalContent() {
  const filePath = path.resolve(
    __dirname,
    "../../data-shopify/blog/legal/media.txt",
  ); // Résoudre le chemin absolu

  if (fileContent !== null) return fileContent; // Si déjà lu, retourner le contenu

  try {
    fileContent = await fsPromise.readFile(filePath, "utf8");
    console.log("Contenu de media.txt chargé :", fileContent);
    return fileContent;
  } catch (err) {
    console.error(
      "Erreur lors de la lecture de media.txt, contenu par défaut utilisé :",
      err.message,
    );
    fileContent = ""; // Utiliser un contenu vide en cas d'erreur
    return fileContent;
  }
}

(async () => {
  await getLegalContent();
})();

async function generateZipFile(
  uuid,
  img,
  altText,
  shopify,
  cdnUrl,
  retry = false,
) {
  try {
    const imgName = path.basename(img);

    // Étape 1 : Télécharger l'image
    const response = await fetch(img);
    if (!response.ok) {
      throw new Error(
        `Erreur lors du téléchargement de l'image : ${response.statusText}`,
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

    // Ajouter le fichier LEGAL_NOTICE.txt au ZIP
    const legalContent = fileContent || (await getLegalContent());
    zip.addFile("LEGAL_NOTICE.txt", Buffer.from(legalContent, "utf-8"));

    // Définir le chemin temporaire
    const baseDir = path.resolve();
    const tempDir = path.join(
      baseDir,
      "tmp",
      handle(process.cwd()),
      handle(Date.now().toString()),
    );
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }

    let zipName = `newsroom_article_media_${uuid}.zip`;
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
      true,
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
      return cdnUrl + zipName;
    } else if (uploadedFileUrl?.fileStatus === "FAILED" && !retry) {
      // Retenter avec un nom modifié
      const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
      zipName = `retry_${uuid}_${timestamp}_${path.basename(
        img,
        path.extname(img),
      )}.zip`;
      return await generateZipFile(uuid, img, altText, shopify, cdnUrl, true);
    } else {
      return null;
    }
  } catch (error) {
    console.error("Erre1ur :", error.message);
    return null;
  }
}

async function generateJsonImage(dataJson, shopify, cdnUrl) {
  // Remplir les informations supplémentaires
  const img = dataJson.imagesrc;

  const imgName = img ? path.basename(img.split("?")[0]) : "";
  const uuid = generateCustomUUID(img, "");

  return {
    [dataJson.imageLayout]: {
      "body-copy-wide": true,
      imagesrc: img,
      caption: dataJson.caption,
      downloadFile:
        (await generateZipFile(uuid, img, dataJson.alt, shopify, cdnUrl)) ||
        null,
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
function cleanHtml(element) {
  const clonedElement = element.cloneNode(true); // Cloner l'élément pour éviter de modifier l'original

  // Fonction récursive pour supprimer les nœuds avec l'attribut data-mce-ignore
  function removeIgnoredNodes(node) {
    if (node.nodeType === 1 && node.hasAttribute("data-mce-ignore")) {
      node.remove(); // Supprimer l'élément si l'attribut existe
    } else if (node.childNodes.length > 0) {
      for (let i = node.childNodes.length - 1; i >= 0; i--) {
        removeIgnoredNodes(node.childNodes[i]); // Vérifier les enfants récursivement
      }
    }
  }

  removeIgnoredNodes(clonedElement);
  return clonedElement.innerHTML; // Récupérer le HTML nettoyé
}
export async function htmlToJson(htmlString, shopify, cdnUrl) {
  const dom = new JSDOM(htmlString);
  const elements = Array.from(
    dom.window.document.body
      ? dom.window.document.body.children
      : dom.window.document.children,
  );

  const body = [];
  let currentBodyCopy = { bodyCopy: { content: [] } };

  for (const element of elements) {
    const data = extractDataJson(element) || {};
    const type = data.type;
    const location = data.location;

    // Nettoyer le contenu HTML pour retirer les éléments avec data-mce-ignore
    const cleanedHtml = cleanHtml(element).trim();

    if (cleanedHtml === "") {
      // Si l'élément est vide, fermer le bodyCopy actuel et en ouvrir un nouveau
      if (currentBodyCopy.bodyCopy.content.length > 0) {
        body.push(currentBodyCopy); // Ajouter l'actuel au tableau
        currentBodyCopy = { bodyCopy: { content: [] } }; // Nouveau bodyCopy
      }
      continue; // Passer au prochain élément
    }

    if (type === "text" || element.tagName === "P") {
      // Ajouter un paragraphe au bodyCopy
      currentBodyCopy.bodyCopy.content.push({
        type: "text",
        location: location || "",
        text: cleanedHtml,
      });
    } else if (type === "header" || type === "header-secondary") {
      // Ajouter un header au bodyCopy
      currentBodyCopy.bodyCopy.content.push({
        type: data.type,
        location: location || "",
        header: cleanedHtml,
      });
    } else if (type === "image") {
      // Extraire les données JSON de la figure

      // Appeler une fonction asynchrone et attendre son résultat
      const figureData = await generateJsonImage(data, shopify, cdnUrl);

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

function generateLocation(item) {
  return item?.location
    ? `
  <strong><span class="pagebody-location">${item.location.toUpperCase()}</span></strong>

  `
    : "";
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
          const location = generateLocation(contentItem);
          if (contentItem.type === "text") {
            return `
            <div class="pagebody-copy">  ${location}${contentItem.text}</div>
            

             

            `;
          } else if (contentItem.type === "header-secondary") {
            return `<h2 class="pagebody-header pagebody-header--secondary">  ${location}${contentItem.header}</h2>`;
          } else if (contentItem.type === "header") {
            return `<h2 class="pagebody-header">  ${location}${contentItem.header}</h2>`;
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

      const element = component.imageInline || {};
      const img = element.image || {};
      const imgMetadata = img.metadata || {};
      const alt = imgMetadata.alt || "";
      const uuid = imgMetadata.uuid || "";
      const srcs = imgMetadata.srcs || {};
      const caption = element.caption || "";
      const downloadFile = element.downloadFile || "";

      // Préparer les sources d'image
      const imgSmall =
        srcs.small && srcs.small2x
          ? `src="${srcs.small}" srcset="${srcs.small} 1x, ${srcs.small2x} 2x"`
          : srcs.small
            ? `src="${srcs.small}"`
            : srcs.small2x
              ? `src="${srcs.small2x}"`
              : "";

      const imgMedium =
        srcs.medium && srcs.medium2x
          ? `src="${srcs.medium}" srcset="${srcs.medium} 1x, ${srcs.medium2x} 2x"`
          : srcs.medium
            ? `src="${srcs.medium}"`
            : srcs.medium2x
              ? `src="${srcs.medium2x}"`
              : "";

      const mainImg =
        srcs.large && srcs.large2x
          ? `src="${srcs.large}" srcset="${srcs.large} 1x, ${srcs.large2x} 2x"`
          : srcs.large
            ? `src="${srcs.large}"`
            : srcs.large2x
              ? `src="${srcs.large2x}"`
              : element.imagesrc
                ? `src="${element.imagesrc}"`
                : "";

      // Construire le HTML pour l'image uniquement si des données sont disponibles
      if (mainImg || imgSmall || imgMedium) {
        html += `
          <figure class="image component image-inline ${
            element["body-copy-wide"] ? "body-copy-wide" : ""
          }" ${alt ? `aria-label="Médias, ${alt}"` : ""}>
            <div class="component-content">
              <div class="image-sharesheet" ${
                img.analytics?.asset
                  ? `data-analytics-activitymap-region-id="${img.analytics.asset}"`
                  : ""
              }>
                <style type='text/css'>
                  .image-${uuid} {
                    width: 100%;
                    padding-top: 56.224487%;
                    height: auto;
                  }
                  @media only screen and (max-width: 1068px) {
                    .image-${uuid} {
                      padding-top: 56.213875%;
                    }
                  }
                  @media only screen and (max-width: 734px) {
                    .image-${uuid} {
                      padding-top: 56.25%;
                    }
                  }
                </style>
                <div class="image-${uuid} image-asset">
                  <picture class="picture">
                    ${imgSmall ? `<source media="(max-width: 734px)" ${imgSmall}/>` : ""}
                    ${imgMedium ? `<source media="(max-width: 1068px)" ${imgMedium}/>` : ""}
                  <img class="picture-image" ${mainImg || imgSmall || imgMedium} alt="${alt}" />
                  </picture>
                </div>
              </div>
            </div>
            ${
              caption || downloadFile
                ? `
                <div class="image-description">
                  ${caption ? `<div>${caption}</div>` : ""}
                  ${
                    downloadFile
                      ? `<a href="${downloadFile}" class="icon-arrowdown icon nr-cta-download" download 
                            aria-label="Télécharger les médias${alt ? `, ${alt}` : ""}">
                          </a>`
                      : ""
                  }
                </div>
              `
                : ""
            }
          </figure>
        `;
      }
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

export async function generateHtml(inputHtml, shopify, cdnUrl) {
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
