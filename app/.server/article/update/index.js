import mutation from "./mutation.graphql";
import { articleWithFallback } from "../_modules/generateArticle";
/**
 * Retourne les articles avant et après un article donné (par son cursor).
 * @param {string} cursor - Le curseur de l’article actuel.
 * @returns {Promise<{ beforeId: string|null, afterId: string|null }>}
 */
export async function make(config, body) {


  try {


    const response = await articleWithFallback(config, body.form, mutation, {id: body.id}, false, "articleUpdate");

    return response;
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return {};
  }
}
 