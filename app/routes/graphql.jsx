import { json } from "@remix-run/node";
import { getShopifyContext } from "../lib/shopify/context.server";
import { execAdmin, execStorefront } from "../.server/graphql";

export const action = async ({ request }) => {
  const url = new URL(request.url); // ✅ lecture des searchParams
  const apiTarget = url.searchParams.get("api"); // "admin" ou "storefront"

  const config = await getShopifyContext(request);
  const body = await request.json(); // ✅ on attend un JSON, pas un FormData

  const data =
    apiTarget === "storefront"
      ? await execStorefront(config, body)
      : await execAdmin(config, body);

  return json(data);
};