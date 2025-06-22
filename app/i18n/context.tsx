import { createContext, useContext, useEffect, useState } from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { createLangLoader, loadLang } from "./loader";
import { useGlobalLang } from "./global"; // 🔁 à connecter

type Translations = Record<string, any>;
type Lang = string;

export type I18nStore = {
  lang: Lang;
  translations: Translations;
  t: (key: string) => string;
};

type I18nConfig = {
  fallback: Lang;
  availableLangs: readonly Lang[];
  path: (lang: Lang) => string;
  initialLang: Lang;
  initialTranslations?: Translations;
};

export function createI18nContext() {
  const I18nStoreContext = createContext<StoreApi<I18nStore> | null>(null);

  function createI18nStore(config: I18nConfig): StoreApi<I18nStore> {
    const langLoader = createLangLoader({
      availableLangs: config.availableLangs,
      fallback: config.fallback,
      path: config.path,
    });

    return createStore<I18nStore>((set, get) => ({
      lang: config.initialLang,
      translations: config.initialTranslations ?? {},

      t: (key: string) => {
        const keys = key.split(".");
        let current: any = get().translations;
        for (const k of keys) {
          if (!current || typeof current !== "object" || !(k in current)) return key;
          current = current[k];
        }
        return typeof current === "string" ? current : key;
      },
    }));
  }

  function I18nProvider({
    children,
    config,
  }: {
    children: React.ReactNode;
    config: I18nConfig;
  }) {
    const [store] = useState(() => createI18nStore(config));
    const lang = useGlobalLang(); // 🔁 écoute la langue globale

    useEffect(() => {
      const load = async () => {
        try {
          const json = await loadLang(
            createLangLoader({
              availableLangs: config.availableLangs,
              fallback: config.fallback,
              path: config.path,
            }),
            lang
          );
          store.setState({ lang, translations: json });
        } catch (err) {
          console.error(`[i18n] Failed to load translations for "${lang}"`, err);
        }
      };

      load();
    }, [lang]);

    return (
      <I18nStoreContext.Provider value={store}>
        {children}
      </I18nStoreContext.Provider>
    );
  }

  function useI18nStore<T>(selector: (state: I18nStore) => T): T {
    const context = useContext(I18nStoreContext);
    if (!context) {
      throw new Error("useI18nStore must be used within <I18nProvider>");
    }
    return useStore(context, selector);
  }

  function useI18nStoreApi(): StoreApi<I18nStore> {
    const context = useContext(I18nStoreContext);
    if (!context) {
      throw new Error("useI18nStoreApi must be used within <I18nProvider>");
    }
    return context;
  }

  return {
    I18nProvider,
    useI18nStore,
    useI18nStoreApi,
  };
}

