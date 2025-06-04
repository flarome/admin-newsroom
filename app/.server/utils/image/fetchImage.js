import { request } from "undici";
import { extname } from "path";
import { URL } from "url";

// 🧠 Cache mémoire basique (clé = URL, valeur = Promise<Buffer>)
const fetchCache = new Map();

/**
 * Récupère une image depuis une URL (JPEG/PNG uniquement), avec cache mémoire interne.
 *
 * @param {string} url
 * @returns {Promise<Buffer>}
 */
export async function fetchImageBuffer(url) {
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }

  const parsed = new URL(url);
  const extension = extname(parsed.pathname).toLowerCase();
  const compressedFormats = [".webp", ".avif", ".heif", ".heic"];
  const allowCompressed = compressedFormats.includes(extension);

  const fetchPromise = (async () => {
    const response = await request(url, {
      method: "GET",
      headers: {
        Accept:
          "image/jpeg,image/jpg,image/png,image/gif,image/bmp,image/tiff,image/x-icon,image/vnd.microsoft.icon,*/*;q=0.1",
        "User-Agent": "ImageFetcher/1.0 (+nodejs)",
      },
    });

    if (!response.body || response.statusCode >= 400) {
      throw new Error(`Échec du téléchargement de l'image : ${url}`);
    }

    const contentType = response.headers["content-type"];
    if (!contentType?.startsWith("image/")) {
      throw new Error(`Fichier non-image retourné : ${contentType}`);
    }

    if (
      !allowCompressed &&
      ["image/webp", "image/avif", "image/heif", "image/heic"].includes(contentType)
    ) {
      throw new Error(`Format refusé : ${contentType} pour ${url}`);
    }

    const buffer = await response.body.arrayBuffer();
    return Buffer.from(buffer);
  })();

  // 📌 On stocke même si la promise n’est pas encore résolue (anti-race)
  fetchCache.set(url, fetchPromise);

  return fetchPromise;
}