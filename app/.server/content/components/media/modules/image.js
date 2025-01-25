/**
 * Prépare les attributs `src` et `srcset` pour une image en fonction des sources fournies.
 * @param {Object} srcs - Objet contenant les URLs des images pour différentes tailles.
 * @param {string} srcs.small - URL de l'image en petite taille (1x).
 * @param {string} srcs.small2x - URL de l'image en petite taille (2x).
 * @param {string} srcs.medium - URL de l'image en taille moyenne (1x).
 * @param {string} srcs.medium2x - URL de l'image en taille moyenne (2x).
 * @param {string} srcs.large - URL de l'image en grande taille (1x).
 * @param {string} srcs.large2x - URL de l'image en grande taille (2x).
 * @param {string} fallback - URL de secours si aucune source spécifique n'est trouvée.
 * @returns {Object} - Objet contenant les chaînes prêtes à être utilisées pour chaque taille d'image.
 */
export function generateSources(srcs = {}, fallback = "") {
    const prepareSrcSet = (src1x, src2x) => {
      if (src1x && src2x) {
        return `src="${src1x}" srcset="${src1x} 1x, ${src2x} 2x"`;
      }
      if (src1x) {
        return `src="${src1x}"`;
      }
      if (src2x) {
        return `src="${src2x}"`;
      }
      return "";
    };
  
    return {
      imgSmall: prepareSrcSet(srcs.small, srcs.small2x),
      imgMedium: prepareSrcSet(srcs.medium, srcs.medium2x),
      mainImg: prepareSrcSet(srcs.large, srcs.large2x) || (fallback ? `src="${fallback}"` : "") || prepareSrcSet(srcs.medium, srcs.medium2x) || prepareSrcSet(srcs.small, srcs.small2x),
    };
  }
  
  /**
 * Extrait et structure les données d'un élément.
 * @param {Object} element - L'élément source contenant les informations.
 * @param {Object} element.image - Objet contenant les informations sur l'image.
 * @param {Object} element.image.metadata - Métadonnées de l'image.
 * @param {string} element.image.metadata.alt - Texte alternatif de l'image.
 * @param {string} element.image.metadata.uuid - UUID de l'image.
 * @param {Object} element.image.metadata.srcs - Sources de l'image pour différentes tailles.
 * @param {string} element.caption - Légende de l'élément.
 * @param {string} element.downloadFile - Fichier à télécharger lié à l'élément.
 * @returns {Object} - Objet structuré contenant les données extraites.
 */


  export function extractData(element = {}) {

    const img = element.image || {};
    const imgMetadata = img.metadata || {};
  
    return {
      img,
      imgMetadata,
      alt: imgMetadata.alt || "",
      uuid: imgMetadata.uuid || "",
      srcs: imgMetadata.srcs || {},
      caption: element.caption || "",
      downloadFile: element.downloadFile || "",
    };

    
  }

  import { uploadZipFile } from "../../../../upload/zip";
import { getLegalContent } from "../../../include/media/legal";

import AdmZip from "adm-zip";
import fetch from "node-fetch";
import fs from "fs";

import path from "path";
import { saveFile } from "../../../../modules/save";
//import handle from "../../../../../global-modules/utils/handle"
//import { Readable } from "stream";


  export async function generateZipFile(
    img,
    altText,
    shopify,
    cdnUrl,
    zipName,
    handle1
  ) {
    try {


      if (!img) throw new Error(
        `Pas d'image`,
      );


      const cleanPath =  img.split("?")[0]; // Supprime tout ce qui est après '?'
      const imgName = path.basename(cleanPath);
  
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
  
      // Ajouter le fichier LEGAL_NOTICE.txt au ZIP
      const legalContent = (await getLegalContent());
      zip.addFile("LEGAL_NOTICE.txt", Buffer.from(legalContent, "utf-8"));
  
      // Définir le chemin temporaire
 
  

  // Étape 4 : Générer un Buffer à partir du ZIP
  const zipBuffer = zip.toBuffer();

  // Taille du ZIP
  const zipSize = zipBuffer.length;
  /*

    // Étape 5 : Créer un flux lisible (Readable) à partir du Buffer
    const zipStream = new Readable({
      read() {
        this.push(zipBuffer);
        this.push(null); // Fin du flux
      },
    });
  */

  
      const uploadedFileUrl = await uploadZipFile(cdnUrl, shopify, zipName, altText, true, zipSize, zipBuffer);
  

            // Exécution de `saveArticle` en tâche de fond
            (async () => {
              try {
                await saveFile(zipBuffer, handle1, 'medias/content/' + path.basename(uploadedFileUrl.split("?")[0]), path.basename(uploadedFileUrl.split("?")[0]));
              } catch (error) {
                console.error("Erreur lors de la sauvegarde du zip d'une image :", error);
              }
            })();
      
                
      


  
      return uploadedFileUrl;
    } catch (error) {
      console.error("Erre1ur :", error.message);
      console.error("Erre1ur :", error.stack);
      return null;
      throw error;
     
    }
  }