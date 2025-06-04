// routes/articles.$id.jsx
import { json } from "@remix-run/node";

import { getShopifyContext } from "../lib/shopify/context.server";
import { updateArticle } from "../.server/article";


// ⬇️ ACTION — crée ou met à jour l'article, puis redirige vers sa nouvelle URL
export const action = async ({ request, params }) => {
  const config = await getShopifyContext(request);
  const body = await request.json();

  const response = await updateArticle(config, {id: `gid://shopify/Article/${params.id}`, form: body});

  // ✅ En cas de mise à jour, on retourne juste les nouvelles données
  return json(response);
};