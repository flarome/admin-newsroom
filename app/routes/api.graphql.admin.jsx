import { json } from "@remix-run/node";
import { getShopifyContext } from "../lib/shopify/context.server";
import { execAdmin } from "../.server/graphql";

export const action = async ({ request }) => {
  const config = await getShopifyContext(request);
  const body = await request.json(); // ✅ on attend un JSON, pas un FormData

  const data = await execAdmin(config, body);

  return json(data);
};