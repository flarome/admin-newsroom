// routes/articles.$id.jsx
import { useLoaderData } from "@remix-run/react";
import { type LoaderFunctionArgs } from "@remix-run/node";

import { Wrapper } from "../frontend/article";
import { getShopifyContext } from "../lib/shopify/context.server";
import { getArticleDetails } from "../.server/article";

import {Template} from "../frontend/article/new";
import { authenticate } from "../lib/shopify/shopify.server";


// ⬇️ LOADER — charge un article existant ou retourne un template vide si "new"
export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const config = await getShopifyContext(request);
  const isNew = params.id === "new";

  const data = await getArticleDetails(config, {
    id: isNew ? null : params.id,
  });
  return {data};
};
 
// ⬇️ COMPOSANT — le composant React utilise l'ID comme key pour forcer le refresh
export default function ArticleEditorRoute() {
  const {data} = useLoaderData<typeof loader>();
  return (
      <Wrapper data={data} isDelete={false}>

      <Template />

      </Wrapper>
    
  );
}
