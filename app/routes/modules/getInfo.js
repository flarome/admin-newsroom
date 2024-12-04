/**
 * Récupère dynamiquement les informations demandées d'un produit.
 *
 * @param {Array<string>} fields - Liste des champs souhaités (ex : ['title', 'description']).
 * @param {Object} product - L'objet produit à traiter.
 * @param {Number} index - L'index du produit dans la liste.
 * @returns {Object} Un objet contenant uniquement les champs demandés.
 */
import { formatDate } from "../../global-modules/utils/formatDate";
import  parseJSONSafe from "../../global-modules/utils/parseJSONSafe";

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

export function getImageInfo(img) {
  const info = {};
  const sizes = img?.sizes || {};
  info.mainImage = img || defaultImage;
  info.mainImageSizes = sizes;
  info.mainImageAlt = img?.alt;
  info.mainImageScare = sizes.scare || sizes.s132_132 || sizes.s300_300 || sizes.s416_416 || sizes.s600_600 || sizes.s832_832 || sizes.s900_900 || sizes.s1040_832 || sizes.s1102_1960;

  return info;
  
}
export function getArticleInfo(fields, article, local, trr = 30) {
  const contentJson1 = article.metafields?.edges?.find(edge => edge.node.namespace === "article" && edge.node.key === "data_json")?.node?.value || null;

  const contentJson = contentJson1 ? parseJSONSafe(contentJson1) : null;

  const title = article.title;
  return fields.reduce((info, field) => {
    switch (field) {
      case "title":
        info.title = title;
        break;
        case "author":
          info.author = article.author?.name;
          break;
        case "url":
          info.url = article.url;
          break;
      case "subTitle":
        info.subTitle = contentJson?.subtitle;
        break;
      case "extrait":
        info.extrait = article.summary;
        break;
      case "tags":
        // Assigner la liste filtrée à `info.tags`
        info.tags = article.tags && article.tags.length > 0 ? article.tags : [];

        break;
      case "metaTitle": 
        info.metaTitle = "";
        break;
      case "handle":
        info.handle = article.handle;
        break;
      case "metaDescription":
        info.metaDescription = "";
        break;
      case "url":
        info.url = article.onlineStoreUrl || "";
        break;
      case "mainImage":
        const img = contentJson?.media?.mainImage;
        const sizes = img?.sizes || {};
        info.mainImage = img || defaultImage;
        info.mainImageSizes = sizes;
        info.mainImageAlt = img?.alt || title;
        info.mainImageScare = sizes.scare || sizes.s132_132 || sizes.s300_300 || sizes.s416_416 || sizes.s600_600 || sizes.s832_832 || sizes.s900_900 || sizes.s1040_832 || sizes.s1102_1960;
        break;
      case "downloadsAllsMedia":
        info.downloadsAllsMedia = contentJson?.downloadsAllsMedia || "";

        break;
      case "isPublished":
        info.isPublished = article.isPublished;
        break;
      case "template":
        info.template = article.templateSuffix;
        break;
      case "date":
        const date = article.publishedAt || new Date().toISOString();
        info.date = new Date(date).toISOString().split("T")[0];
        break;
      case "content":
        info.content = article.content || article.body || "";
        break;
      case "modified":
        const upadte = article.updatedAt || new Date().toISOString();
        info.lastModified = new Date(upadte);

        const now = new Date();
        const diff = now - new Date(upadte); // Différence en millisecondes

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        // Cas où le temps est inférieur ou égal à 5 minutes
        if (minutes <= 5) {
          info.lastModifiedText = `À l’instant`;
          break;
        }

        // Cas où le temps est supérieur à 5 minutes mais inférieur à 1 heure
        if (minutes < 60) {
          info.lastModifiedText = `Il y a ${minutes} min`;
          break;
        }

        // Cas où le temps est supérieur à 1 heure mais inférieur à 6 heures
        if (hours < 6) {
          const remainingMinutes = minutes % 60; // Minutes restantes après les heures
          if (remainingMinutes === 0) {
            info.lastModifiedText = `Il y a ${hours} h`;
            break;
          }
          info.lastModifiedText = `Il y a ${hours} h ${remainingMinutes} min`;
          break;
        }

        info.lastModifiedText = formatDate(upadte, "fr-FR");
        break;
      case "id":
        info.id = article.id;
        info.splitId = article.id.split("/").pop();
        break;
      default:
        info[field] = ""; // Si le champ demandé n’existe pas, on renvoie `null`
        console.warn(`Le champ ${field} n'est pas reconnu.`);
    }

    return info;
  }, {});
}


