import { json, type LoaderFunctionArgs, type HeadersArgs, type LinksFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError, useMatch, useMatches } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import { authenticate } from "../lib/shopify/shopify.server";
import { admin } from "_distribution";
import GlobalApp from "../"; 
import { useRoutes } from "../routes";
import {getLanguageFromSession} from "../models/language.server";
export const links: LinksFunction = () => [...admin.links];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // const { session } = await authenticate.admin(request);
 // const lang = await getLanguageFromSession(session);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || ""/*, lang*/ });
};

const distribution = admin.handle;


export default function App() {
  const { apiKey, /*lang */} = useLoaderData<typeof loader>();


    // Récupérer les données du loader root (parent)
  const matches = useMatches();
  const rootData = matches.find(match => match.id === "root")?.data;

  // rootData contient ce que retourne le loader root, par ex { lang, apiKey }
  const lang = rootData?.lang ?? "fr";


  return (
    <AppProvider
      theme="light"
      isEmbeddedApp
      apiKey={apiKey}
    >
    
  <GlobalApp distribution={distribution} lang={lang}>
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
        <Link to={routes.article("new")}>
          Nouveau
        </Link>
      </NavMenu>
      <Outlet />
   </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return boundary.error(error);
}

export const headers = (headersArgs: HeadersArgs) => {
  return boundary.headers(headersArgs);
};