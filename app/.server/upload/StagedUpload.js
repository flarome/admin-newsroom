import fetch from "node-fetch";

import FormData from "form-data";
import { admin } from "../modules/utils/executeWithRetry";

/**
 * Génère une URL temporaire pour télécharger un fichier vers Shopify.
 *
 * @param {string} apiUrl - L'URL de l'API GraphQL de Shopify.
 * @param {string} accessToken - Le token d'accès à l'API Shopify.
 * @param {string} filePath - Le chemin local du fichier.
 * @param {string} mimeType - Le type MIME du fichier.
 * @returns {Promise<Object>} - Contient l'URL de téléchargement et les paramètres.
 */
export async function getStagedUploadTarget(shopify, mimeType, name, size) {
    const mutation = `
      mutation stagedUploadsCreate($input: [StagedUploadInput!]!) {
        stagedUploadsCreate(input: $input) {
          stagedTargets {
            url
             resourceUrl
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
          fileSize: size && size.toString()
        },
      ],
    };
  
    const { response } = await admin(
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
  export async function uploadFile(stagedTarget, content, name) {
    const { url, parameters } = stagedTarget;
  

    const formData = new FormData();
    parameters.forEach((param) => formData.append(param.name, param.value));
    formData.append("file", content, name);
  
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error(`Erreur lors du téléchargement: ${await response.text()}`);
    }
  }
  
  