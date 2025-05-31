import {
  useState,
  createContext,
  useContext,
} from "react";
import { ClientOnly } from "remix-utils/client-only";

// Composant SkeletonApp à fournir quelque part
import SkeletonApp from "../states/loading";

// Créez le contexte
const ArticleContext = createContext({});

// Provider pour gérer les articles et le chargement
export function ArticleProvider({ data: p1, children }) {

  console.log('p1', p1)
  const [data, setData] = useState(p1);

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