import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
  useLoaderData,
  LiveReload,
} from "@remix-run/react";
import { type LoaderFunctionArgs, type HeadersArgs } from "@remix-run/node";

import { boundary } from "@shopify/shopify-app-remix/server";
import P404 from "./frontend/_status/404";
import styles from "./frontend/_status/404/styles/styles.css?url"
import { getLanguageFromSession } from "./models/language.server";
import { authenticate } from "./lib/shopify/shopify.server";


export type RootLoaderData = {
  lang: string;
};







export default function App() {
  return ( 

 <Outlet />
  );
}


/*
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
}*/

export function HTML({lang, children}: {lang: string, children: React.ReactNode}) {
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
       {children}
        <ScrollRestoration />
        <Scripts />
            {process.env.NODE_ENV !== "production" && <LiveReload />}
      </body>
    </html>
  )
}

export function ErrorBoundary() {
 
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {

      return (
        <html lang={"fr"} dir="ltr">
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

export const headers = (headersArgs: HeadersArgs) => {
  return boundary.headers(headersArgs);
};
