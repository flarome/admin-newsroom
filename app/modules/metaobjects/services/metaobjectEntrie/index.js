import { graphqlRequest } from "../../../../lib/client/request";
import getQuery from "./query.graphql";



export async function get(id) {
  try {
    const response = await graphqlRequest(
      "admin",
      "MetaobjectEntrie",
      getQuery,
      {
        id
      },
    );

    return { entrie: response.metaobject, definition: response.metaobject.definition };
  } catch (error) {
    console.error("🔴 Failed to fetch adjacent articles:", error);
    return { beforeId: null, afterId: null };
  }
}