import { create, useStore, StoreApi } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createContext, useContext } from "react";



export type AppStore<> = { 
   setLoading: (value: boolean) => void;
  ui: {
    loading: boolean;
  }; 
};

export type AppStoreApi = StoreApi<AppStore>;

export const createAppStore = (initialAppStore?: Partial<AppStore>) =>
  create<AppStore>()(
    subscribeWithSelector((set, get) => ({
      ui: {
        loading: false
      },
      ...initialAppStore,

      setLoading: (value) =>
        set((state) => ({
          ui: {
            ...state.ui,
            loading: value,
          },
        })),
    })),
  );

export const appStoreContext = createContext(createAppStore());

export function useAppStore<T>(selector: (state: AppStore) => T) {
  const context = useContext(appStoreContext);

  return useStore(context, selector);
}

export function useAppStoreApi() {
  return useContext(appStoreContext);
}
