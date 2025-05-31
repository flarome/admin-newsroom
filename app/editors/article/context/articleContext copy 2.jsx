import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  createContext,
  useContext,
  cloneElement,
  isValidElement,
} from "react";
import { ClientOnly } from "remix-utils/client-only";

import { apiRequest } from "../../../utils/request";

// Composant SkeletonApp à fournir quelque part
import SkeletonApp from "../states/loading";

// Créez le contexte
const ArticleContext = createContext({});

import { form } from "../config/fieldMap";
import { getFieldRoot } from "../utils/getFieldPath";
// Provider pour gérer les articles et le chargement
export function ArticleProvider({ articleId = null, data: p1, children }) {
  console.log("initialData", p1);

  const [data, setData] = useState(p1);
 /* const [loading, setLoading] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const [error, setError] = useState(null);

  // Obtenir les données initiales
  useEffect(() => {
    setLoading(true);
    setError(null);
    apiRequest("articleDetails", { id: articleId })
      .then((d) => setData(d))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [articleId]);*/

  // Optimisation: évite de recalculer le contexte si data ne change pas
  const contextValue = useMemo(
    () => ({
      blogs: data?.blogs ?? null,
      libs: data?.libs ?? null,
      themes: data?.themes ?? null,
      data: data?.data ?? null,
      shop: data?.shop ?? null,
      article: data?.article ?? null,
    }),
    [data],
  );

  // Gestion du rendu
  /*if (loading) {
    return <SkeletonApp />;
  }
  if (error) {
    return (
      <div style={{ color: "red", padding: 32 }}>
        Erreur lors du chargement de l’article.
      </div>
    );
  }*/

  return (
    <ClientOnly fallback={""}>
      {() => (
        <ArticleContext.Provider value={data}>
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

/* 


      <div style={{ display: !appReady ? "none" : "block" }}>

        {data && isValidElement(children)
          ? cloneElement(children, {
              onReady: () => setAppReady(true),
            })
          : children}
      </div>

      {!appReady && <SkeletonApp />}
      
      */
