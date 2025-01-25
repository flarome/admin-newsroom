import {generateImageSources,  extractImageData, generateImageZipFile} from "./modules";
import { mceToData } from "../../generateContent";
import { generateCustomUUID } from "../../../modules/uuid";
import path from "path";
export function html(element) {



    const {img, imgMetadata, alt, uuid, srcs, caption, downloadFile} = extractImageData(element);

    const { imgSmall, imgMedium, mainImg } = generateImageSources(srcs, element?.imagesrc || null);

    // Construire le HTML pour l'image uniquement si des données sont disponibles
    if (mainImg || imgSmall || imgMedium) {
      return `
        <figure class="image component image-inline ${
          element["body-copy-wide"] ? "body-copy-wide" : ""
        }" ${alt ? `aria-label="Média, ${alt}"` : ""}>
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
                <img class="picture-image" ${mainImg} alt="${alt}" />
                </picture>
              </div>
            </div>
          </div>
          ${
            caption || downloadFile
              ? `
              <div class="image-description">
                ${caption ? `<div class="image-caption">${caption}</div>` : ""}
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

    return "";
}






export async function json(element, shopify, cdnUrl, dataJson, img, handle) {
  // Remplir les informations supplémentaires
  // const dataJson = mceToData(element)?.data || {};

   // const img = dataJson.imagesrc ||  dataJson.large2x ||  dataJson.large || dataJson.medium2x || dataJson.medium || dataJson.small2x || dataJson.small ;

  const imgName = img ? path.basename(img.split("?")[0]) : "";
  const uuid = generateCustomUUID(img);

  return {
    [dataJson.imageLayout]: {
      "body-copy-wide": true,
      imagesrc: img,
      caption: dataJson.caption,
      downloadFile:
        (await generateImageZipFile(img, dataJson.alt, shopify, cdnUrl, `newsroom_${handle}_media_${uuid}.zip`), handle) ||
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