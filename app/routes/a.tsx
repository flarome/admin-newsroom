import {
  type LinksFunction,
} from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  useMatches,
} from "@remix-run/react";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import { admin } from "_distribution";
import GlobalApp from "../";
import { useRoutes } from "../routes";

import type { RootLoaderData } from "../root";
export const links: LinksFunction = () => [...admin.links];

export const loader = async () => {
  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

const distribution = admin.handle;

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  // Récupérer les données du loader root (parent)
  const matches = useMatches();
  const rootData = matches.find((match) => match.id === "root")
    ?.data as RootLoaderData;

  if (!rootData) {
    throw new Error("Root loader data not found");
  }

  return (
    <AppProvider theme="light" isEmbeddedApp apiKey={apiKey}>
      <GlobalApp distribution={distribution} lang={rootData.lang}>
        <AppInner />
      </GlobalApp>
    </AppProvider>
  );
}

const AppInner = () => {
  const routes = useRoutes();

  return (
    <>
      <NavMenu>
        <Link to={routes.articles} rel="home">
          Articles
        </Link>
        <Link to={routes.article("new")}>Nouveau</Link>
      </NavMenu>
      <Outlet />
    </>
  );
};
