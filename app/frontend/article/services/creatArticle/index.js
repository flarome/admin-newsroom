import { customRequest }  from "../../../../lib/client/request";

import { API_ROUTES } from "../../../../routesMap";
import { uploadAndReplaceFilesRecursively } from "../../../../utils/uploadAndReplaceFiles";

/**
 * Retourne les articles avant et après un article donné (par son cursor).
 * @param {string} cursor - Le curseur de l’article actuel.
 * @returns {Promise<{ beforeId: string|null, afterId: string|null }>}
 */
export async function make(data) {
  try {

    const rawData = await uploadAndReplaceFilesRecursively(data);

    const response = await customRequest(API_ROUTES.articleCreate, "POST", "application/json", rawData);

    return response;
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return { beforeId: null, afterId: null };
  }
}