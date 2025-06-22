import { memo, useEffect, useRef, useState } from "react";
import {
  createAppStore,
  useAppStoreApi,
  appStoreContext,
  AppStoreApi,
} from "./store";
import styles from "./app.module.css";
import "./app.css";
import { useNavigation } from "@remix-run/react";
import { PolarisI18n } from "./polaris";
import { createI18nContext } from "./i18n/context";
import { GlobalI18nProvider } from "./i18n/global";
import { language } from "./config/app";

export const globalAppI18n = createI18nContext({
  fallback: language,
  availableLangs: ["fr", "en"],
  path: (lang) => new URL(`./locales/${lang}.json`, import.meta.url).pathname,
  initialTranslations: {},
});

const RenderWrapper = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const store = useAppStoreApi();
  const navigation = useNavigation();

  // 🔁 Synchroniser état Remix ⇄ Zustand
  useEffect(() => {
    store.getState().setLoading(navigation.state === "loading");
  }, [navigation.state, store]);

  const [hydrated, setHydrated] = useState(false);

  // ⏱️ Détecte hydratation client
  useEffect(() => {
    setHydrated(true);
  }, []);

  // 👇 Applique class "loading" SEULEMENT après hydratation
  useEffect(() => {
    if (!hydrated || !wrapperRef.current) return;

    const node = wrapperRef.current;
    const isLoading = store.getState().ui?.loading;

    if (isLoading) {
      node.classList.add(styles["loading"]);
    }

    const unsub = store.subscribe(
      (s) => s.ui.loading,
      (value) => {
        node.classList.toggle(styles["loading"], value);
      },
    );

    return () => unsub();
  }, [hydrated, store]);

  return (
    <div ref={wrapperRef} className={styles["ChildContainer"]}>
      <GlobalI18nProvider initialLang="fr">
        <globalAppI18n.I18nProvider>
          <PolarisI18n>{children}</PolarisI18n>
        </globalAppI18n.I18nProvider>
      </GlobalI18nProvider>
    </div>
  );
};

export const App = ({ children }) => {
  const [appStore] = useState(() => createAppStore({}));

  return (
    <appStoreContext.Provider value={appStore}>
      <RenderWrapper>{children}</RenderWrapper>
    </appStoreContext.Provider>
  );
};
export default memo(App);
