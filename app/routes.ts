

import type { Distribution } from "_distribution";
import { ROUTES as baseRoutes } from "./routesMap";
export {API_ROUTES} from "./routesMap";


function prefixPath(distribution: Distribution, path: string) {
  return `/${distribution}${path.startsWith("/") ? path : "/" + path}`;
}

function wrapWithPrefix<T>(distribution: Distribution, routes: T): T {
  const output: any = {};

  for (const key in routes) {
    const value = (routes as any)[key];

    if (typeof value === "function") {
      output[key] = (...args: any[]) =>
        prefixPath(distribution, value(...args));
    } else if (typeof value === "string") {
      output[key] = prefixPath(distribution, value);
    } else if (typeof value === "object" && value !== null) {
      output[key] = wrapWithPrefix(distribution, value);
    } else {
      output[key] = value;
    }
  }

  return output;
}

export function createRoutesMap(distribution: Distribution) {
  return wrapWithPrefix(distribution, baseRoutes);
}





// routesContext.ts
import { createContext, useContext } from "react";

const RoutesContext = createContext<ReturnType<typeof createRoutesMap> | null>(null);

export function createRoutesContext(distribution: Distribution) {
  return createRoutesMap(distribution);
}
 
export const RoutesProvider = RoutesContext.Provider;

export function useRoutes() {
  const ctx = useContext(RoutesContext);
  if (!ctx) throw new Error("useRoutes must be used inside <RoutesProvider>");
  return ctx;
}


