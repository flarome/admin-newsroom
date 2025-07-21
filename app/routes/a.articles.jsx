import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";

import { links as Links } from "../frontend/articles";

export const links = () =>[
...Links
];
 
export const loader = async ({ request }) => {
  return null;
}; 

export default function App() {

  return (


        <Outlet />
      
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
