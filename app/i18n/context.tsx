// context.ts
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { createLangLoader, loadLang } from "./loader";
import {
  useGlobalLang,
  getGlobalI18nStore,
  registeredSources,
  Lang,
  i18nCache,
} from "./global";
import { I18n } from "./i18";

type Translations = Record<string, any>;

export type I18nStore = {
  translations: Translations;
  i18n: I18n;
};

type I18nConfig = {
  fallback: Lang;
  availableLangs: readonly Lang[];
  path: (lang: Lang) => string;
  initialTranslations?: Translations;
};

export function createI18nContext(config: I18nConfig) {
  const I18nStoreContext = createContext<StoreApi<I18nStore> | null>(null);

  const langLoader = createLangLoader({
    availableLangs: config.availableLangs,
    fallback: config.fallback,
    path: config.path,
  });

  function createI18nStore(): StoreApi<I18nStore> {
    const initial = config.initialTranslations ?? {};
    return createStore<I18nStore>(() => ({
      translations: initial,
      i18n: new I18n(initial),
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
    }, []);

    useEffect(() => {
      if (lang === lastLangRef.current) return; // ✅ Pas un vrai changement
      const load = async () => {
        lastLangRef.current = lang;

        const contextCache = i18nCache.get(instanceId) ?? new Map<Lang, any>();
        const cached = contextCache.get(lang);

        if (cached) {
          store.setState({
            translations: cached,
            i18n: new I18n(cached),
          });
        } else {
          try {
            const json = await loadLang(langLoader, lang);
            contextCache.set(lang, json);
            i18nCache.set(instanceId, contextCache);

            store.setState({
              translations: json,
              i18n: new I18n(json),
            });
          } catch (err) {
            console.error(
              `[i18n] Failed to load translations for "${lang}" [${instanceId}]`,
              err,
            );
          }
        }

        const trackers = Array.from(global.getState()._trackers);
        for (const t of trackers) {
          if (t.lang === lang && t.source === instanceId) {
            t.resolve();
            global.getState()._trackers.delete(t);
          }
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
