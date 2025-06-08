/**
 * Construit une URL complète vers un fichier sur le CDN Shopify.
 *
 * @param {string} shopUrl - Base CDN Shopify (ex: "https://cdn.shopify.com")
 * @param {string} filePath - Chemin relatif du fichier (ex: "/img.png")
 * @returns {string} - URL complète vers le fichier CDN
 */
export function buildShopifyFileCdnUrl(shopUrl, filePath) {
  if (!filePath) return "";
  
  const cleanBase = shopUrl.replace(/\/+$/, ""); // enlève slash fin
  const cleanPath = filePath.replace(/^\/+/, ""); // enlève slash début
  const baseCdnPath = "cdn/shop/files";
  const fullPath = `${cleanBase}/${baseCdnPath}/${cleanPath}`;

  return fullPath;
}