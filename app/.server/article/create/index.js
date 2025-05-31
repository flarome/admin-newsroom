import mutation from "./mutation.graphql";
import generateArticle from "../_modules/input";
/**
 * Retourne les articles avant et après un article donné (par son cursor).
 * @param {string} cursor - Le curseur de l’article actuel.
 * @returns {Promise<{ beforeId: string|null, afterId: string|null }>}
 */
export async function make(config, body) {
  const { adminClient } = config;

  try {
    const response = await adminClient.graphql(mutation, {
      article: await generateArticle(body, true),
    });

    return response.articleCreate;
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return {};
  }
}
