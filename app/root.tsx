import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  useLoaderData,
} from "@remix-run/react";
import { json, type LoaderFunctionArgs, type HeadersArgs, type LinksFunction } from "@remix-run/node";

import { boundary } from "@shopify/shopify-app-remix/server";
import P404 from "./frontend/_status/404";
import styles from "./frontend/404/styles/styles.css?url"
import { language } from "./config/app";
import { getLanguageFromSession } from "./models/language.server";
import { authenticate } from "./lib/shopify/shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = await authenticate.admin(request);
  const lang = await getLanguageFromSession(session);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "", lang });
};


export default function App() {
    const { lang } = useLoaderData<typeof loader>();
  return ( 

    <html lang={lang} dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}



export function ErrorBoundary() {
  const { lang } = useLoaderData<typeof loader>();
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {

      return (
        <html lang={lang} dir="ltr">
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <link
              rel="stylesheet"
              href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
            />

  <link
              rel="stylesheet"
              href={styles}
            />
            <Meta />
            <Links />
          </head>
          <body>
            <P404 />
            <Scripts />
          </body>
        </html>
      );

  }

   return boundary.error(error);
}