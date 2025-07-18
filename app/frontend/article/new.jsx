import { Suspense, lazy, useEffect } from "react";
import { Spinner } from "@shopify/polaris";
import { useWatch } from "react-hook-form";
import { defaultLayoutName, SelectTypeLayout, fieldPath as typePath } from './ui/layout';
import { Page as AppPage } from './page';
// import { LAYOUT } from "./[id]";

// layouts.ts
export const layouts = {
  [defaultLayoutName]: {
    loader: () => import('./_layout/default'),
    component: lazy(() => import('./_layout/default')),
  },
  "quick-read": {
    loader: () => import('./_layout/quickread'),
    component: lazy(() => import('./_layout/quickread')),
  },
};

// Pour précharger tous les layouts JS (facultatif)
export const preloadAllLayouts = () => {
  Object.values(layouts).forEach(({ loader }) => loader());
};
 
const AppLayout = ({ handleSubmit }) => {
  const selectedType = useWatch({ name: typePath }) ?? "";
  const LazyLayout = layouts[selectedType]?.component ?? null;

  useEffect(() => {
    preloadAllLayouts(); // précharge tous les layouts JS
  }, []);

  if (!LazyLayout) return <SelectTypeLayout />;

  return (
    <Suspense fallback={<Spinner accessibilityLabel="Chargement de l’éditeur…" size="large" />}>
      <LazyLayout handleSubmit={handleSubmit} />
    </Suspense>
  );
};

export const Template = () => (
  <AppPage hasArticle={false}>
    <AppLayout />
  </AppPage>
);

