// i18n/global.ts
import { createContext, useContext, useState } from "react";
import { createStore, useStore, StoreApi } from "zustand";

type Lang = string;

type GlobalI18nStore = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};



export function createGlobalI18nStore(initialLang: Lang) {
  return createStore<GlobalI18nStore>((set) => ({
    lang: initialLang,
    setLang: (lang) => set({ lang }),
  }));
}

// export const appStoreContext = createContext(createAppStore());
const GlobalI18nContext = createContext<StoreApi<GlobalI18nStore> | null>(null);

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
    </GlobalI18nContext.Provider>
  );
}

export function useGlobalLang(): Lang {
  const store = useContext(GlobalI18nContext);
  if (!store) throw new Error("useGlobalLang must be used inside GlobalI18nProvider");
  return useStore(store, (s) => s.lang);
}

export function useSetGlobalLang(): (lang: Lang) => void {
  const store = useContext(GlobalI18nContext);
  if (!store) throw new Error("useSetGlobalLang must be used inside GlobalI18nProvider");
  return store.getState().setLang;
}




