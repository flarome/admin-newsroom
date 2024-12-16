import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import { authenticate } from "../shopify.server";
import polarisTranslations from "@shopify/polaris/locales/fr.json";

import "../styles/main/AppActionContainer.css";
import "../styles/main/AppTitleBar.css";
import "../styles/main/AppTitleBarSkeleton.css";
import "../styles/main/ArticleList.css";
import "../styles/main/Autocomplete.css";
import "../styles/main/ChoiceListSubOptions.css"; 
import "../styles/main/ChoiceListWithSearch.css";
import "../styles/main/ColorSwatch.css";
import "../styles/main/ExternalVideoPlayer.css";
import "../styles/main/FilePickerModal.css";
import "../styles/main/FilePreviewModal.css";
import "../styles/main/FilesManagerContextProvider.css";
import "../styles/main/GenericPickerManager.css";
import "../styles/main/GlobalStatusPanel.css"; 
import "../styles/main/InContextSaveBar.css";
import "../styles/main/IndexFilterControlFilter.css";
import "../styles/main/IndexFiltering.css";
import "../styles/main/InlineLoading.css";
import "../styles/main/LayoutAnnotatedSection.css";
import "../styles/main/LoadingState.css";
import "../styles/main/MarketFlag.css";
import "../styles/main/MissingEligibilities.css";
import "../styles/main/OnlineStore.css";
import "../styles/main/Peek.css";
import "../styles/main/PinIcon.css";
import "../styles/main/PopoverOptionList.css";
import "../styles/main/Preview.css";
import "../styles/main/ProductResourcePicker.css";
import "../styles/main/ResourcePicker.css";
import "../styles/main/mainSettingsFlag.css"; 
import "../styles/main/SkeletonIndex.css";
import "../styles/main/SkeletonOnlineStoreEditor.css";
import "../styles/main/TagTextField.css";
import "../styles/main/TextPicker.css";
import "../styles/main/ThumbnailPreview.css";
/*import "../styles/main/main.css";*/
import "../styles/main/render-common.css";
import "../styles/main/styles.css";
import "../styles/main/use-definition-type.css";
import "../styles/main/usePageProps.css";
  
import "../styles/local.css";
import "../styles/articleLists.css";
import "../styles/main.css";
import "../styles/vendor1.css";
/*import "../styles/vendor2.css";*/
import "../styles/vendor3.css";
import "../styles/theme.css";
import "../styles/articleDetails.css";
import ToastNotification from "../components/toastNotification";

import { Frame, FooterHelp } from "@shopify/polaris";

import { ToastProvider } from "../context/toast";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

export default function App() {
  const { apiKey } = useLoaderData();

  return (
    <AppProvider i18n={polarisTranslations} theme="light" isEmbeddedApp apiKey={apiKey}>
      <NavMenu>
        <Link to="/articles" rel="home" reloadDocument>
          Home
        </Link>
        <Link to="/articles/rss" reloadDocument>Flux RSS</Link>
      </NavMenu>

      <Frame>
      <ToastProvider>
      <ToastNotification />
      <Outlet />




      </ToastProvider>
      </Frame>

      <FooterHelp>
      Copyright © 2024 
      <Link url="https://www.flarome.com">
      Flarome
      </Link>
      . Touts droits Réservés.
    </FooterHelp>

    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
