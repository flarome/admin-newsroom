import { checkAndUpdateFiles } from "./cdn";
import { getStagedUploadTarget, uploadFile } from "./StagedUpload";

/**
   * Upload complet d'un fichier vers Shopify.
   *
   * @param {string} apiUrl - L'URL de l'API GraphQL de Shopify.
   * @param {string} accessToken - Le token d'accès à l'API Shopify.
   * @param {string} filePath - Le chemin local du fichier.
   * @param {string} mimeType - Le type MIME du fichier.
   * @returns {Promise<string>} - Retourne l'URL du fichier téléchargé.
   */
export default async function uploadToShopify(
  shopify,
  name,
  filePath,
  mimeType,
  altText,
  ecrase
) {
  try {
   
    const stagedTarget = await getStagedUploadTarget(
      shopify,
      filePath,
      mimeType,
      name,
    );
    await uploadFile(stagedTarget, filePath);
    return await checkAndUpdateFiles(shopify, stagedTarget.resourceUrl, altText, name, ecrase);
  } catch (err) {
    console.error("Erreur lors de uploadToShopify :", err.message);
    throw err;
  }
}
