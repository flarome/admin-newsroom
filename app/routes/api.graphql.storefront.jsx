import { json } from "@remix-run/node";
import { getShopifyContext } from "../lib/shopify/context.server";
import { execStorefront } from "../.server/graphql";

export const action = async ({ request }) => {

  const config = await getShopifyContext(request);
  const body = await request.json(); // ✅ on attend un JSON, pas un FormData

  const data = await execStorefront(config, body);

  return json(data);
};