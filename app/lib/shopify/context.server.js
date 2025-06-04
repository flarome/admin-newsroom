import { apiVersion, authenticate, unauthenticated } from "./shopify.server";
import Shopify from "shopify-api-node";

export async function getShopifyContext(request) {
  const { admin, session } = await authenticate.admin(request);
  const { storefront } = await unauthenticated.storefront(session.shop);

  const adminClient = new Shopify({
    shopName: session.shop,
    accessToken: session.accessToken,
    apiVersion: apiVersion,
    maxRetries: 3,
  });


  return { admin, adminClient, session, storefront, shop: session.shop };
}
