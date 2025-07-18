// routes/articles.$id.jsx
import { useLoaderData } from "@remix-run/react";

import { Wrapper } from "../frontend/article";
import { getShopifyContext } from "../lib/shopify/context.server";
import { getArticleDetails } from "../.server/article";

import {Template} from "../frontend/article/new";


// ⬇️ LOADER — charge un article existant ou retourne un template vide si "new"
export const loader = async ({ request, params }) => {
  const config = await getShopifyContext(request);
  const isNew = params.id === "new";

  const data = await getArticleDetails(config, {
    id: isNew ? null : params.id,
  });
  return {data, isNew};
};
 
// ⬇️ COMPOSANT — le composant React utilise l'ID comme key pour forcer le refresh
export default function ArticleEditorRoute() {
  const {data, isNew} = useLoaderData();

  return (
      <Wrapper data={data} isDelete={false}>

      <Template />

      </Wrapper>
    
  );
}
