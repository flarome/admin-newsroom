// context.ts
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { createLangLoader, LangLoaderConfig, loadLang } from "./loader";
import {
  useGlobalLang, 
  getGlobalI18nStore,
  registeredSources,
  type Lang,
  i18nCache,
} from "./global";
import { I18n } from "./i18";

type Translations = Record<string, any>;

type InitialTranslations = {
  lang: Lang;
  translations: Translations;
};

export type I18nStore = {
  translations: Translations;
  i18n: I18n;
};

type I18nConfigBase = {
  initialTranslations?: InitialTranslations;
};

type I18nConfig = I18nConfigBase & LangLoaderConfig<Lang>;

export function createI18nContext(config: I18nConfig) {
  
  const I18nStoreContext = createContext<StoreApi<I18nStore> | null>(null);

  const langLoader = createLangLoader({
    fallback: config.fallback,
    translations: config.translations,
  });

  function createI18nStore(): StoreApi<I18nStore> {
    // On récupère initialTranslations ou fallback vide
    const initialTrans = config.initialTranslations?.translations ?? {}; 

    return createStore<I18nStore>(() => ({
      translations: initialTrans,
      i18n: new I18n(initialTrans),
    }));
  }

  function I18nProvider({
    children,
    id,
  }: {
    children: React.ReactNode;
    id: string;
  }) {
    const [store] = useState(() => createI18nStore());
    const lang = useGlobalLang();
    const global = getGlobalI18nStore();

    // Génère un ID unique par instance de Provider
    if (!id) {
      throw new Error("[i18n] <I18nProvider> requires a unique `id` prop.");
    }

    const instanceId = `ctx-${id}`;

    const lastLangRef = useRef<Lang>(lang);







  // Fonction commune pour charger et appliquer une langue
  async function loadAndApplyLang(newLang: Lang) {





                  const contextCache = i18nCache.get(instanceId) ?? new Map<Lang, any>();
          const cached = contextCache.get(newLang);

          if (cached) {
              store.setState({
              translations: cached,
              i18n: new I18n(cached),
            });
          } else {
            try {
            const json = await loadLang(langLoader, newLang);
              contextCache.set(newLang, json);
              i18nCache.set(instanceId, contextCache);
              store.setState({
                translations: json,
                i18n: new I18n(json),
              });
            } catch (err) {
              console.error(
                `[i18n] Failed to load translations for "${newLang}" [${instanceId}]`,
                err,
              );
            }
          }

    lastLangRef.current = newLang;
  }

    // Correction au montage si la langue globale diffère de initialTranslations.lang
  useEffect(() => {
    const initialLang = config.initialTranslations?.lang;
    if (initialLang !== lang) {
      loadAndApplyLang(lang);
    }
  }, []); 
  
 // Registration et cleanup
    useEffect(() => {
      if (registeredSources.has(instanceId)) {
        console.error("[i18n] Registered sources:", [...registeredSources]);
        throw new Error(`[i18n] Duplicate context id "${instanceId}"`);
      }

      registeredSources.add(instanceId);

      return () => {
        registeredSources.delete(instanceId);
        i18nCache.delete(instanceId); // facultatif
      };
    }, [instanceId]);





    
    // Subscribe to global language changes and load translations accordingly
    useEffect(() => {
      const unsubscribe = global.subscribe(
        (state) => state.lang,
        async (newLang) => {
          if (newLang === lastLangRef.current) return;

          await loadAndApplyLang(newLang);

           // Notify trackers
          const trackers = Array.from(global.getState()._trackers);
          for (const t of trackers) {
            if (t.lang === newLang && t.source === instanceId) {
              t.resolve();
              global.getState()._trackers.delete(t);
            }
          }

    
        },
      );

      return () => {
        unsubscribe();
      };
    }, [instanceId]);





    return (
      <I18nStoreContext.Provider value={store}>
        {children}
      </I18nStoreContext.Provider>
    );
  }

  function useI18nStore<T>(selector: (state: I18nStore) => T): T {
    const context = useContext(I18nStoreContext);
    if (!context)
      throw new Error("useI18nStore must be used within <I18nProvider>");
    return useStore(context, selector);
  }

  function useI18nStoreApi(): StoreApi<I18nStore> {
    const context = useContext(I18nStoreContext);
    if (!context)
      throw new Error("useI18nStoreApi must be used within <I18nProvider>");
    return context;
  }

  return {
    I18nProvider,
    useI18nStore,
    useI18nStoreApi,
  };
}
