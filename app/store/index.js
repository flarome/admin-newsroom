import { create, useStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createContext, useContext } from "react";
import { defaultAppState } from "./default-app-state";

export { defaultAppState };

export const createAppStore = (initialAppStore = {}) =>
  create()(
    subscribeWithSelector((set, get) => ({
      state: defaultAppState,
      ...initialAppStore,

      ui: {
        ...defaultAppState.ui,
      },

      setLoading: (value) =>
        set((state) => ({
          ui: {
            ...state.ui,
            loading: value,
          },
        })),
    }))
  );

export const appStoreContext = createContext(createAppStore());

export function useAppStore(selector) {
  const context = useContext(appStoreContext);
  return useStore(context, selector);
}

export function useAppStoreApi() {
  return useContext(appStoreContext);
}