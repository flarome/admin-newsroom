import { basename, extname } from "path";

/**
 * Récupère l’extension (ex: ".jpg") depuis une URL, ou "" si aucune extension.
 * @param {string} url
 * @returns {string}
 */

export function getExtensionFromUrl(url) {
  try {
    const pathname = new URL(url).pathname;
    const lastDot = pathname.lastIndexOf(".");
    if (lastDot === -1 || lastDot === pathname.length - 1) return "";
    // retire le point, force lowercase
    return pathname.substring(lastDot + 1).toLowerCase();
  } catch (e) {
    return "";
  }
}

/**
 * Retourne l'extension courante (ex: ".jpg") à partir d'un content-type HTTP
 * @param {string} contentType
 * @returns {string}
 */
export function getExtensionFromContentType(contentType = "") {
  if (!contentType) return "";

  // Tableau minimaliste des correspondances courantes
  const map = {
    "image/jpeg": ".jpg",
    "image/pjpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/avif": ".avif",
    "image/bmp": ".bmp",
    "image/svg+xml": ".svg",
    "image/x-icon": ".ico",
    "image/vnd.microsoft.icon": ".ico",
    "application/pdf": ".pdf",
    "text/plain": ".txt",
    "text/html": ".html",
    "application/json": ".json",
    "application/zip": ".zip",
    "application/x-zip-compressed": ".zip",
    "application/msword": ".doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      ".docx",
    "application/vnd.ms-excel": ".xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      ".xlsx",
    "application/vnd.ms-powerpoint": ".ppt",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      ".pptx",
    // Ajoute ici les types dont tu as besoin !
  };

  // Ignore le charset (ex: "image/jpeg; charset=utf-8")
  const cleanType = contentType.split(";")[0].trim().toLowerCase();

  return map[cleanType] || "";
}



/**
 * Extrait le nom de fichier complet (avec extension) depuis une URL ou un chemin.
 *
 * @param {string} url - URL absolue, relative ou nom de fichier
 * @returns {string} - Nom du fichier avec extension (ex: "image.png")
 */
export function getFilenameFromUrl(url) {
  try {
    const pathname = new URL(url, "http://placeholder.local").pathname;
    return basename(pathname);
  } catch {
    return basename(url.split("?")[0]); // fallback
  }
}


/**
 * Extrait le nom de fichier sans extension depuis une URL ou un chemin.
 *
 * @param {string} url - URL absolue, relative ou nom de fichier
 * @returns {string} - Nom du fichier sans extension (ex: "image")
 */
export function getFilenameWithoutExtensionFromUrl(url) {
  try {
    const pathname = new URL(url, "http://placeholder.local").pathname;
    const base = basename(pathname);
    const ext = extname(base);
    return ext ? base.slice(0, -ext.length) : base;
  } catch {
    const base = basename(url.split("?")[0]);
    const ext = extname(base);
    return ext ? base.slice(0, -ext.length) : base;
  }
}
/**
 * Construit une URL avec des paramètres query ajoutés ou fusionnés.
 *
 * @param {string} base - URL de base (ex: "/img.png" ou "logo.svg")
 * @param {object} params - Paramètres à ajouter (ex: { v: 123, lang: "fr" })
 * @param {object} [options] - Options supplémentaires (ex: { onlyPath: true })
 * @returns {string} URL finale avec paramètres ajoutés
 */
export function buildUrl(base, params = {}, options = {}) {
  if (!base) {
    console.error("❌ Aucune base fournie à buildUrl");
    return "";
  }

  // Création via URL (avec dummy origin pour supporter les chemins relatifs)
  const url = new URL(base);

  // Fusion propre avec les params existants
  const searchParams = new URLSearchParams(url.search);

  for (const [key, value] of Object.entries(params)) {
    if (value == null) continue;

    searchParams.delete(key); // éviter les doublons

    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v != null && v !== "") searchParams.append(key, v);
      });
    } else if (value !== "") {
      searchParams.set(key, value);
    }
  }

  // Sortie en fonction de l’option
  const query = searchParams.toString();
  const pathname = url.pathname;

  return options.onlyPath
    ? `${pathname}${query ? `?${query}` : ""}`
    : `${base.split("?")[0]}${query ? `?${query}` : ""}`;
}

/**
 * Construit une URL relative (ou nom de fichier) avec des paramètres query.
 *
 * @param {string} path - Ex: "/img.png", "logo.svg"
 * @param {object} params - Query params à ajouter
 * @returns {string}
 */
export function buildRelativeUrl(path, params = {}) {
  if (!path) return "";

  const [rawPath, existingQuery] = path.split("?");
  const searchParams = new URLSearchParams(existingQuery || "");

  Object.entries(params).forEach(([key, value]) => {
    if (value == null) return;
    searchParams.delete(key);
    Array.isArray(value)
      ? value.forEach((v) => v != null && v !== "" && searchParams.append(key, v))
      : value !== "" && searchParams.set(key, value);
  });

  const query = searchParams.toString();
  return `${rawPath}${query ? `?${query}` : ""}`;
}

/**
 * Supprime tous les paramètres d'une URL sauf ceux spécifiés.
 *
 * @param {string} urlString - L'URL complète (absolue ou relative)
 * @param {string[]} allowedKeys - Liste des paramètres à conserver
 * @returns {string} - URL nettoyée
 */
export function keepOnlyParams(urlString, allowedKeys = []) {
  const isRelative = !/^https?:\/\//.test(urlString);
  const url = new URL(urlString, isRelative ? "http://placeholder.local" : undefined);

  const searchParams = url.searchParams;

  Array.from(searchParams.keys()).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      searchParams.delete(key);
    }
  });

  const query = searchParams.toString();
  return isRelative
    ? `${url.pathname}${query ? `?${query}` : ""}`
    : `${url.origin}${url.pathname}${query ? `?${query}` : ""}`;
}

export function hasParams(urlString) {
  const url = new URL(urlString, "http://placeholder.local"); // supporte les URLs relatives
  return Array.from(url.searchParams.keys()).length > 0;
}

/**
 * Vérifie si une URL contient au moins un paramètre qui ne fait PAS partie de allowedKeys.
 *
 * @param {string} urlString - URL absolue ou relative
 * @param {string[]} allowedKeys - Liste des clés autorisées
 * @returns {boolean} - true si au moins un paramètre est non autorisé
 */
export function hasUnexpectedParams(urlString, allowedKeys = []) {
  const isRelative = !/^https?:\/\//.test(urlString);
  const url = new URL(urlString, isRelative ? "http://placeholder.local" : undefined);

  for (const key of url.searchParams.keys()) {
    if (!allowedKeys.includes(key)) return true;
  }

  return false;
}


/**
 * Supprime tous les paramètres d'une URL.
 *
 * @param {string} urlString - L'URL avec des paramètres éventuels.
 * @returns {string} - L'URL sans aucun paramètre.
 */
export function stripUrlParams(urlString) {
  try {
    const url = new URL(urlString);
    url.search = ""; // Supprime tous les paramètres
    return url.toString();
  } catch (e) {
    console.warn("❌ URL invalide dans stripUrlParams :", urlString);
    return urlString;
  }
}