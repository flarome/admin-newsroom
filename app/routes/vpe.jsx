
import { json } from "@remix-run/node";
import { useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate } from "../lib/shopify/shopify.server";

import polarisTranslations from "@shopify/polaris/locales/fr.json";

import {Route} from "../VPE";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

export default function App() {
  const { apiKey } = useLoaderData();
 
  return (
    <AppProvider
      i18n={polarisTranslations}
      theme="light"
      isEmbeddedApp
      apiKey={apiKey}
    >

     <Route />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};