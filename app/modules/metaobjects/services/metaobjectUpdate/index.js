import { graphqlRequest } from "../../../../lib/client/request";
import {
  buildFieldsForMutation,
} from "../../entries/helpers/validations";
import mutation from "./mutation.graphql";
import { toShopifySlug } from "../../../../utils/str";

export async function put(id, def, data) {
  try {
    const response = await graphqlRequest(
      "admin",
      "UpdateMetaobject",
      mutation,
      {
        id: id,
        metaobject: {
          handle: toShopifySlug(data.handle || new Date().toISOString()),
          capabilities: {
            publishable: { status: "ACTIVE" },
          },
          fields: buildFieldsForMutation(def, data.values),
        },
      },
    );

    return response.metaobjectUpdate;
  } catch (error) {
    console.error("🔴 Erreur dans la mutation UpsertMetaobject :", error);
    return null;
  }
}
