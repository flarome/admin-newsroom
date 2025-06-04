import { graphqlRequest } from "../../../../lib/client/request";
import getQuery from "./query.graphql";



export async function get(type) {
  try {
    const response = await graphqlRequest(
      "admin",
      "MetaobjectDefinition",
      getQuery,
      {
        type
      },
    );

    return response.metaobjectDefinitionByType;
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return { beforeId: null, afterId: null };
  }
}