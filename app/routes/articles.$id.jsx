// routes/articles.$id.jsx
import { json } from "@remix-run/node";
import { redirect, useLoaderData, useParams } from "@remix-run/react";

import Editor from "../editors/article";
import { getShopifyContext } from "../lib/shopify/context.server";
import { getArticleDetails } from "../.server/article";
import { createArticle, updateArticle } from "../.server/article";

// ⬇️ LOADER — charge un article existant ou retourne un template vide si "new"
export const loader = async ({ request, params }) => {
  const config = await getShopifyContext(request);
  const isNew = params.id === "new";

  const data = await getArticleDetails(config, {
    id: isNew ? null : params.id,
  });


  return json(data);
};

// ⬇️ ACTION — crée ou met à jour l'article, puis redirige vers sa nouvelle URL
export const action = async ({ request, params }) => {
  console.log("🧪 Content-Type:", request.headers.get("content-type"));
// Attendu : "application/json"
  const config = await getShopifyContext(request);
  const isNew = params.id === "new";
  const body = await request.json();

  const response = isNew
    ? await createArticle(config, body)
    : await updateArticle(config, body);

  // ✅ En cas de mise à jour, on retourne juste les nouvelles données
  return json(response);
};

// ⬇️ COMPOSANT — le composant React utilise l'ID comme key pour forcer le refresh
export default function ArticleEditorRoute() {
  const data = useLoaderData();
  const { id } = useParams();

  return <Editor data={data} isDelete={false} key={id} />;
}