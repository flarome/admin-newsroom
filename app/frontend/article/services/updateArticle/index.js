
import { customRequest }  from "../../../../lib/client/request";

import { API_ROUTES } from "../../../../routes";
import { uploadAndReplaceFilesRecursively } from "../../../../utils/uploadAndReplaceFiles";

/**
 * Retourne les articles avant et après un article donné (par son cursor).
 * @param {string} cursor - Le curseur de l’article actuel.
 * @returns {Promise<{ beforeId: string|null, afterId: string|null }>}
 */
export async function make(id, data) {
try {
    const rawData = await uploadAndReplaceFilesRecursively(data);
    const response = await customRequest(API_ROUTES.articleUpdate(id), "POST", "application/json", rawData);

    return response;
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return { beforeId: null, afterId: null };
  }
}