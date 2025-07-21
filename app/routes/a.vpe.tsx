import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticate } from "../lib/shopify/shopify.server";
import { Route, links as Links, VpeConfig } from "../VPE";

export const links = () => [...Links];

export type LoaderData = {
  config: VpeConfig;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  await authenticate.admin(request);

  const data: LoaderData = {
    config: { token },
  };

  return json(data);
};


export {Route as default} from "../VPE/route";
