
import { getShopifyContext } from "../lib/shopify/context.server";
import { getArticleDetails } from "../.server/article";

// Exposition de la fonction loader
export const loader = async ({ request, params }) => {
  const config = await getShopifyContext(request);
  const data = await getArticleDetails(config, { id: params.id });
  return data;
};

import Editor from "../editors/article";
export default function ArticleEditorRoute() {
  const data = useLoaderData();
  const { id } = useParams(); // utile pour key

  return <Editor data={data} isDelete={false} key={id} />;
}