import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";



import P404 from "./frontend/404";
import styles from "./frontend/404/styles/styles.css?url"
export default function App() {
  return (
    <html lang="fr-FR" dir="ltr">
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


/*
export function ErrorBoundary() {

  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <html lang="fr-FR" dir="ltr">
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

    return (
      <div>
        <h1>Erreur {error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    );
  }

  // Erreur JS inattendue
  return (
    <div>
      <h1>Erreur inattendue</h1>
      <p>{error.message || "Quelque chose s'est mal passé."}</p>
    </div>
  );
}*/