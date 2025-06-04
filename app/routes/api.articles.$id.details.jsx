// routes/articles.$id.jsx
import { json } from "@remix-run/node";

import { getShopifyContext } from "../lib/shopify/context.server";
import { getArticleDetails } from "../.server/article";

export const loader = async ({ request, params }) => {
  const config = await getShopifyContext(request);

  const response = await getArticleDetails(config, { id: params.id });
  return json(response); // ✅ retourne du JSON propre
};
