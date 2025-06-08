// routes/articles.$id.jsx
import { useLoaderData, useParams } from "@remix-run/react";

import Editor from "../frontend/article";
import { getShopifyContext } from "../lib/shopify/context.server";
import { getArticleDetails } from "../.server/article";
import { useEffect } from "react";
import App from "..";

// ⬇️ LOADER — charge un article existant ou retourne un template vide si "new"
export const loader = async ({ request, params }) => {
  const config = await getShopifyContext(request);
  const isNew = params.id === "new";

  const data = await getArticleDetails(config, {
    id: isNew ? null : params.id,
  });
  return data;
};

// ⬇️ COMPOSANT — le composant React utilise l'ID comme key pour forcer le refresh
export default function ArticleEditorRoute() {
  const data = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  return (
    <App>
      <Editor data={data} isDelete={false} key={id} />
    </App>
  );
}
