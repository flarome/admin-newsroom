import { getRequest } from "../../../../lib/client/request";

import { API_ROUTES } from "../../../../routesMap";

/**
 * Retourne les articles avant et après un article donné (par son cursor).
 * @param {string} cursor - Le curseur de l’article actuel.
 * @returns {Promise<{ beforeId: string|null, afterId: string|null }>}
 */
export async function get(id) {
  try {
    const response = await getRequest(API_ROUTES.articleDetails(id), {});

    return response;
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return { beforeId: null, afterId: null };
  }
}
