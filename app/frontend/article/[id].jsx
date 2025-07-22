import { useWatch } from "react-hook-form";
import DefaultLayout from "./_layout/default";
import QuickreadLayout from "./_layout/quickread";
import {
  SelectTypeLayout,
  fieldPath as typePath,
  defaultLayoutName,
} from "./ui/layout";
import { Page as AppPage } from "./page";

export const LAYOUT = {
  [defaultLayoutName]: DefaultLayout,
  "quick-read": QuickreadLayout,
};

const AppLayout = ({ }) => {
  const selectedType = useWatch({ name: typePath }) ?? "";
  const Layout = LAYOUT[selectedType] ?? null;

  if (!Layout) return <SelectTypeLayout />;

  return <Layout/>;
};

export const Template = () => (
  <AppPage hasArticle={true}>
    <AppLayout />
  </AppPage>
);
