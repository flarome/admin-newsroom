import fetch from "node-fetch";
import fs from "fs";
import FormData from "form-data";
import { admin } from "./modules/utils/executeWithRetry";
import { checkAndUpdateFiles } from "./cdn";
/**
 * Génère une URL temporaire pour télécharger un fichier vers Shopify.
 *
 * @param {string} apiUrl - L'URL de l'API GraphQL de Shopify.
 * @param {string} accessToken - Le token d'accès à l'API Shopify.
 * @param {string} filePath - Le chemin local du fichier.
 * @param {string} mimeType - Le type MIME du fichier.
 * @returns {Promise<Object>} - Contient l'URL de téléchargement et les paramètres.
 */
export async function getStagedUploadTarget(shopify, filePath, mimeType, name) {
  const mutation = `
    mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets {
          url
          parameters {
            name
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: [
      {
        resource: "FILE",
        filename: name,
        mimeType,
        httpMethod: "POST",
        fileSize: fs.statSync(filePath).size,
      },
    ],
  };

  const response = await admin(
    mutation,
    variables,
    "stagedUploadsCreate",
    shopify,
  );

  return response.stagedTargets[0];
}

/**
 * Télécharge un fichier vers Shopify en utilisant l'URL et les paramètres générés.
 *
 * @param {Object} stagedTarget - L'URL et les paramètres pour le téléchargement.
 * @param {string} filePath - Le chemin local du fichier.
 * @returns {Promise<void>} - Indique si le téléchargement a réussi.
 */
export async function uploadFile(stagedTarget, filePath) {
  const { url, parameters } = stagedTarget;

  const formData = new FormData();
  parameters.forEach((param) => formData.append(param.name, param.value));
  formData.append("file", fs.createReadStream(filePath));

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Erreur lors du téléchargement: ${await response.text()}`);
  }
}

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
  filePath,
  mimeType,
  altText,
) {
  try {
    const name = filePath.split("/").pop();
    const stagedTarget = await getStagedUploadTarget(
      shopify,
      filePath,
      mimeType,
      name,
    );
    await uploadFile(stagedTarget, filePath);
    return await checkAndUpdateFiles(shopify, stagedTarget.url, altText, name);
  } catch (err) {
    console.error("Erreur lors de uploadToShopify :", err.message);
    throw err;
  }
}
