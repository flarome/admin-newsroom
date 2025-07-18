// global.ts
import { createContext, useContext, useEffect, useState } from "react";
import { createStore, useStore, StoreApi } from "zustand";
import { language } from "../config/app";
import { exposeStoreDevTools } from "../_dev/exposeStoreDevTools";
import { subscribeWithSelector } from "zustand/middleware";

export type Lang = string;

export type LangChangePromise = {
  lang: Lang;
  source: string;
  resolve: () => void;
};

type GlobalI18nStore = {
  lang: Lang;
  setLang: (lang: Lang) => Promise<void>;
  _trackers: Set<LangChangePromise>;
};

export function createGlobalI18nStore(initialLang?: Lang) {
  return createStore<GlobalI18nStore>()(
    subscribeWithSelector((set, get) => ({
      lang: initialLang ?? language,
      _trackers: new Set(),

      setLang: (lang: Lang) => {
        return new Promise<void>((resolve) => {
          const currentLang = get().lang;
          if (lang === currentLang) {
            return resolve(); // ✅ ne rien faire si la langue est déjà sélectionnée
          }

          const existingSources = new Set<string>();

          // prevent duplicate source trackers for the same lang
          for (const tracker of get()._trackers) {
            if (tracker.lang === lang) {
              existingSources.add(tracker.source);
            }
          }

          if (registeredSources.size === 0) {
            return resolve(); // ✅ aucun I18nContext → rien à attendre
          }
          // for each I18nContext, we expect a unique source ID to match
          for (const source of registeredSources) {
            if (!existingSources.has(source)) {
              get()._trackers.add({ lang, source, resolve });
            }
          }

          set({ lang });
          if (
            typeof document !== "undefined" &&
            document &&
            document.documentElement &&
            document.documentElement.lang
          ) {
            requestIdleCallback(
              () => {
                document.documentElement.lang = lang; // ✅ client only
              },
              { timeout: 1000 },
            );
          }
        });
      },
    })),
  );
}

export const registeredSources = new Set<string>();

// export const GlobalI18nContext = createContext<StoreApi<GlobalI18nStore> | null>(null);

export const GlobalI18nContext = createContext(createGlobalI18nStore());

export function GlobalI18nProvider({
  children,
  initialLang,
}: { 
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [store] = useState(() => createGlobalI18nStore(initialLang));
  return (
    <GlobalI18nContext.Provider value={store}>
      {children}
      {process.env.NODE_ENV !== "production" && (
        <DevI18nContext store={store} />
      )}
    </GlobalI18nContext.Provider>
  );
}

export function useGlobalLang(): Lang {
  const store = useContext(GlobalI18nContext);
  if (!store)
    throw new Error("useGlobalLang must be used inside GlobalI18nProvider");
  return useStore(store, (s) => s.lang);
}

export function useSetGlobalLang(): (lang: Lang) => Promise<void> {
  const store = useContext(GlobalI18nContext);
  if (!store)
    throw new Error("useSetGlobalLang must be used inside GlobalI18nProvider");

  return useStore(store, (s) => s.setLang);
}

export function getGlobalI18nStore() {
  return useContext(GlobalI18nContext);
}

// 🔁 Cache global des traductions : contextId -> lang -> translations
export const i18nCache = new Map<string, Map<Lang, any>>();

function DevI18nContext({ store }: { store: StoreApi<GlobalI18nStore> }) {
  useEffect(() => {
    // window.__STORES__.i18n.state.setLang("en")
    exposeStoreDevTools("i18n", store);
  }, []);

  return null;
}
