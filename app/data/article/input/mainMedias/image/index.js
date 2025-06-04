import { uploadFiles } from "../../../../../.server/uploadToAdmin/cdn";

import crypto from "crypto";

/**
 * Génère un UUID-like (format v4) stable à partir d'une chaîne (ex: filename).
 * Toujours le même pour une même entrée.
 */
export function stableUUID(input) {
  const hash = crypto.createHash("sha1").update(input).digest("hex");
  return [
    hash.slice(0, 8),
    hash.slice(8, 12),
    "4" + hash.slice(13, 16), // version 4
    ((parseInt(hash.slice(16, 18), 16) & 0x3f) | 0x80).toString(16) +
      hash.slice(18, 20), // variant 10xxxxxx
    hash.slice(20, 32),
  ].join("-");
}

/**
 * Génère les variantes d'image à partir de sources strictes.
 *
 * @param {Object} config - Configuration Shopify
 * @param {Object} meta - Métadonnées de l'article
 * @param {string} meta.handle - Identifiant unique de l'article
 * @param {Object} options - Options associées à l'image
 * @param {string} options.caption
 * @param {string} options.alt
 * @param {Object} options.srcs
 * @param {string} options.srcs.lp
 * @param {string} options.srcs.big
 * @param {string} options.srcs.square
 * @param {string} options.srcs.portrait
 */
export async function tile(config, { handle }, { caption, alt, srcs }) {
  console.log("🟦 tile() appelé avec :", {
    handle,
    caption,
    alt,
    srcs,
  });

  const { lp, big, square, portrait } = srcs;

  const sources = { lp, big, square, portrait };
  const missing = Object.entries(sources).filter(([, v]) => !v);
  if (missing.length > 0) {
    const missingKeys = missing.map(([k]) => k).join(", ");
    console.error("⛔ Sources manquantes :", missingKeys);
    throw new Error(`Les sources suivantes sont manquantes : ${missingKeys}`);
  }

  const now = new Date();
  const YEAR = now.getFullYear();
  const MONTH = String(now.getMonth() + 1).padStart(2, "0");

  const basename = `newsroom_images_${YEAR}_${MONTH}_${handle}_tile`;
  console.log("📦 Basename généré :", basename);

  const files = Object.entries(sources).map(([key, url]) => {
    const ext = url.split(".").pop().split(/\#|\?/)[0];
    const filename = `${basename}_${key}.${ext}`;
    console.log(`📄 Préparation du fichier "${filename}" depuis "${url}"`);
    return {
      filename,
      url,
      altText: alt,
    };
  });

  console.log("🚀 Fichiers préparés pour uploadFiles:", files);

  const uploaded = await uploadFiles(config, files, { ecrase: true });

  console.log("✅ Résultat brut de uploadFiles:", uploaded);

  const images = {
    landscape: uploaded[0]?.url,
    big: uploaded[1]?.url,
    square: uploaded[2]?.url,
    portrait: uploaded[3]?.url,
  };

  console.log("🎯 Images finales reconstituées:", images);

  return {
    mainImage: {
      caption,
      uuid: stableUUID(basename),
      metadata: {
        alt,
        handle,
        srcs: {
          ...images,
        },
      },
    },
  };
}

export default tile;
