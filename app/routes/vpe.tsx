import type { LoaderFunctionArgs, HeadersFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate } from "../lib/shopify/shopify.server";

import polarisTranslations from "@shopify/polaris/locales/fr.json";

import { Route, links as Links, VpeConfig } from "../VPE";

export const links = () => [...Links];

type LoaderData = {
  apiKey: string;
  config: VpeConfig;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");
  const token = url.searchParams.get("token");

  await authenticate.admin(request);

  const data: LoaderData = {
    apiKey: process.env.SHOPIFY_API_KEY || "",
    config: { lang, token },
  };

  return json(data);
};

export default function App() {
  const { apiKey, config } = useLoaderData<LoaderData>();

  return (
    <AppProvider
      i18n={polarisTranslations}
      theme="light"
      isEmbeddedApp
      apiKey={apiKey}
    >
      <Route config={config} />
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
