import { graphqlRequest } from "../../../../utils/request";
import getQuery from "./query.graphql";

/**
 * Retourne les articles avant et après un article donné (par son cursor).
 * @param {string} cursor - Le curseur de l’article actuel.
 * @returns {Promise<{ beforeId: string|null, afterId: string|null }>}
 */
export async function get(cursor) {
  try {
    const response = await graphqlRequest(
      "admin",
      "AdjacentArticle",
      getQuery,
      {
        cursor,
        reverse: true,
        sortKey: "UPDATED_AT",
      },
    );

    const beforeEdge = response?.before?.edges?.[0];
    const afterEdge = response?.after?.edges?.[0];

    return {
      beforeId: beforeEdge?.node?.id || null,
      afterId: afterEdge?.node?.id || null,
    };
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return { beforeId: null, afterId: null };
  }
}