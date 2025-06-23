import type { StoreApi } from "zustand";

type ExposedStore = {
  get: () => any;
  set: (partial: any) => void;
  state: any;
  api: StoreApi<any>;
};

declare global {
  interface Window {
    __STORES__?: Record<string, ExposedStore>;
  }
}

/**
 * Expose un store Zustand dans window.__STORES__[key] uniquement en dev
 * 
 * @param key Nom unique sous lequel le store sera exposé
 * @param store Store Zustand à exposer
 */
export function exposeStoreDevTools<T extends object>(key: string, store: StoreApi<T>): void {
  if (typeof window === "undefined" || process.env.NODE_ENV === "production") return;

  if (!window.__STORES__) {
    window.__STORES__ = {};
  }

  window.__STORES__[key] = {
    get: () => store.getState(),
    set: (partial: Partial<T>) => store.setState(partial),
    get state() {
      return store.getState();
    },
    api: store,
  };

  console.log(`✅ [devtools] Store "${key}" exposé dans window.__STORES__`);
}
