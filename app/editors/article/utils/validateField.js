import { validateImageUrl } from "../../../config/actions";

const urlValidationCache = new Map();

export async function validateFileOrUrl(value, validImageTypes) {
  // Cas File
  if (value instanceof File) {
    if (validImageTypes.includes(value.type)) return true;
    return "Format de fichier non supporté !";
  }

  // Cas URL string
  if (typeof value === "string" && value.length > 0) {
    let url;
    try {
      url = new URL(value).href;
    } catch {
      return "URL invalide";
    }

    // CHECK CACHE
    if (urlValidationCache.has(url)) {
      return urlValidationCache.get(url);
    }

    // Appel à l'API Remix (toujours 200, toujours JSON)
    try {
      const res = await fetch(`${validateImageUrl.endpoint}?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (!data.ok) {
        urlValidationCache.set(url, data.error || "L'URL ne répond pas");
        return data.error || "L'URL ne répond pas";
      }

      const ok = validImageTypes.some(type =>
        (data.contentType || "").startsWith(type)
      );
      const result = ok
        ? true
        : `Le fichier distant doit être une image (${validImageTypes.join(", ")})`;

      urlValidationCache.set(url, result);
      return result;
    } catch {
      urlValidationCache.set(url, "Impossible de vérifier l’URL");
      return "Impossible de vérifier l’URL";
    }
  }

  return "Veuillez sélectionner une image ou coller une URL valide";
}
