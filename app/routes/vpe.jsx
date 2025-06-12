
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../lib/shopify/shopify.server";
import polarisTranslations from "@shopify/polaris/locales/fr.json";
import {useAppBridge} from '@shopify/app-bridge-react';
import { AppProvider as PolarisProvider } from "@shopify/polaris";

import { useEffect, useState } from "react";
import {VPE} from "../VPE";



export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};


function VpeEditorRoute() {
  const [dataFromParent, setDataFromParent] = useState(null);

  // Écoute le message postMessage du parent

    useEffect(() => {
    function handleMessageFromMainApp(ev) {
      console.log('Message received in modal:', ev.data);
          if (ev.data?.type === "EDITOR_INIT") {
        setDataFromParent(ev.data.payload);
      }
    }

    window.addEventListener('message', handleMessageFromMainApp)
    return () => {
      window.removeEventListener('message', handleMessageFromMainApp)
    }
  }, [])


  return (
   
    <PolarisProvider i18n={polarisTranslations}>
      <VPE {...dataFromParent} />
      </PolarisProvider>
  );
}


export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider
      i18n={polarisTranslations}
      theme="light"
      isEmbeddedApp
      apiKey={apiKey}
    >

      <VpeEditorRoute />
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