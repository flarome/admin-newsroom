import { formatDate } from "../../global-modules/utils/formatDate";
import { parseJSONSafe } from "../../global-modules/utils/parseJSONSafe";

import { author } from "../../modules/initialState";

export const defaultImage = {
    downloadUrl: "",
    alt: "",
    caption: "",
    sizes: {
      s551_980: "",
      s1102_1960: "",
      s389_692: "",
      s778_1384: "",
      s416_416: "",
      s832_832: "",
      s207_368: "",
      s414_736: "",
      s132_132: "",
      s264_264: "",
      s300_300: "",
      s600_600: "",
      s369_656: "",
      s738_1312: "",
      s900_900: "",
      s630_1200: "",
      s520_416: "",
      s1040_832: "",
      s603_1072: "",
      s1206_2144: "",
      s810_1440: "",
      s1620_2880: "",
    },
  };

/**
 * Extrait les informations d'une image.
 * @param {Object} img - L'objet image.
 * @returns {Object} Les informations principales de l'image.
 */
export function getImageInfo(img = defaultImage) {
  const sizes = img.sizes || {};
  return {
    mainImage: img,
    mainImageSizes: sizes,
    mainImageAlt: img.alt || "",
    mainImageScare: sizes.scare || sizes.s132_132 || sizes.s300_300 || sizes.s416_416 || sizes.s600_600,
  };
}

/**
 * Extrait les informations de contenu JSON d'un article.
 * @param {Object} data - L'objet contenant les données JSON de contenu.
 * @returns {Object} Les informations principales du contenu.
 */
export function getContent(data = {}) {
  const content = data.content || {};
  return {
    contentJson: content.json || null,
    rebuiltHtml: content.rebuiltHtml || null,
    originalHtml: content.originalHtml || null,
  };
}

/**
 * Extrait les informations demandées d'un article selon une liste de champs.
 * @param {Array<string>} fields - Liste des champs souhaités (ex : ['title', 'description']).
 * @param {Object} article - L'objet article à traiter.
 * @returns {Object} Un objet contenant uniquement les champs demandés.
 */
export function getArticleInfo(fields, article) {
  const contentJson = parseJSONSafe(
    article?.metafields?.edges?.find(
      (edge) => edge.node.namespace === "article" && edge.node.key === "data_json"
    )?.node?.value
  );

  const editor = parseJSONSafe(article?.metafields?.edges?.find(edge => edge.node.namespace === "contact" && edge.node.key === "editor")?.node);

  const now = new Date();

  return fields.reduce((info, field) => {
    switch (field) {
      case "title":
        info.title = article.title || "";
        break;
      case "author":
           info.author = {...author, name: article.author?.name, id: editor.value } 
        break;
      case "url":
        info.url = article.onlineStoreUrl || article.url || "";
        break;
      case "subTitle":
        info.subTitle = contentJson?.subtitle || "";
        break;
      case "extrait":
        info.extrait = article.summary || "";
        break;
      case "tags":
        info.tags = article.tags?.length ? article.tags : [];
        break;
      case "metaTitle":
        info.metaTitle = "";
        break;
      case "metaDescription":
        info.metaDescription = "";
        break;
      case "handle":
        info.handle = article.handle || "";
        break;
      case "mainImage":
        Object.assign(info, getImageInfo(contentJson?.media?.mainImage));
        break;
      case "downloadsAllsMedia":
        info.downloadsAllsMedia = contentJson?.downloadsAllsMedia || "";
        break;
      case "isPublished":
        info.isPublished = article.isPublished || false;
        break;
      case "template":
        info.template = article.templateSuffix || "";
        break;
        case "layout":
          info.layout = contentJson?.layout || {};
          break;
      case "date":
        info.date = article.publishedAt
          ? new Date(article.publishedAt).toISOString().split("T")[0]
          : "";
        break;
      case "content":
        Object.assign(info, getContent(contentJson));
        break;
      case "modified":
        const updatedAt = new Date(article.updatedAt || now);
        info.lastModified = updatedAt.toISOString();
        const diff = now - updatedAt;

        if (diff < 5 * 60 * 1000) {
          info.lastModifiedText = "À l’instant";
        } else if (diff < 60 * 60 * 1000) {
          info.lastModifiedText = `Il y a ${Math.floor(diff / 60000)} min`;
        } else if (diff < 6 * 60 * 60 * 1000) {
          const hours = Math.floor(diff / 3600000);
          const minutes = Math.floor((diff % 3600000) / 60000);
          info.lastModifiedText = minutes
            ? `Il y a ${hours} h ${minutes} min`
            : `Il y a ${hours} h`;
        } else {
          info.lastModifiedText = formatDate(updatedAt, "fr-FR");
        }
        break;
      case "id":
        info.id = article.id || "";
        info.splitId = article.id?.split("/")?.pop() || "";
        break;
      default:
        console.warn(`Le champ "${field}" n'est pas reconnu.`);
        info[field] = null; // Retourne `null` pour les champs non reconnus
    }

    return info;
  }, {});
}
