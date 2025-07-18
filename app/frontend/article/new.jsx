import { Suspense, lazy } from "react";
import { Spinner } from "@shopify/polaris";
import { useWatch } from "react-hook-form";
import { defaultLayoutName, SelectTypeLayout, fieldPath as typePath } from './ui/layout';
import { Page as AppPage } from './page';
import { LAYOUT } from "./[id]";

/*const LAYOUT = {
  [defaultLayoutName]: lazy(() => import('./_layout/default')),
  "quick-read": lazy(() => import('./_layout/quickread')),
};*/
 
const AppLayout = ({ handleSubmit }) => {
  const selectedType = useWatch({ name: typePath }) ?? "";
  const LazyLayout = LAYOUT[selectedType] ?? null;

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

