import { useState, createContext, useContext, useEffect, useMemo } from "react";

import {
  History,
} from "@shopify/app-bridge/actions";
import { useLocation } from "@remix-run/react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { createApp } from "@shopify/app-bridge";

// Créez le contexte
const ArticleContext = createContext({});

// Provider pour gérer les articles et le chargement
export function ArticleProvider({ data: p1, children }) {
  const [data, setData] = useState(p1);

  const location = useLocation();
  const shopify = useAppBridge();
  const { isNew = false } = location.state || {};
  const [toastShown, setToastShown] = useState(false);

  if (isNew && !toastShown) {
    shopify.toast.show("Article créé");
    setToastShown(true);
  }

  useEffect(() => {
    const shopify = useAppBridge();
    if (!shopify || !location?.pathname) return;
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
    const history = History.create(createApp(shopify.config));
    history.dispatch(History.Action.REPLACE, location.pathname);
  }, [location?.pathname]);

  const contextValue = useMemo(() => {
    return {
      ...data,
      data,
      setData,
    };
  }, [data]);

  return (
    <ArticleContext.Provider value={contextValue}>
      {children}
    </ArticleContext.Provider>
  );
  return (
    <ClientOnly fallback={""}>
      {() => (
        <ArticleContext.Provider value={contextValue}>
          {children}
        </ArticleContext.Provider>
      )}
    </ClientOnly>
  );
}

// Hook pour utiliser le contexte
export function useArticle() {
  return useContext(ArticleContext);
}
