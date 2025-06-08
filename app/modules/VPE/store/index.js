
import { create, useStore } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createContext, useContext } from "react";
import { createHistorySlice } from "./slices/history";
import { defaultAppState } from "./default-app-state";

export { defaultAppState };

export const createAppStore = (initialAppStore = {}) =>
  create()(
    subscribeWithSelector((set, get) => ({
      state: defaultAppState,
      ...initialAppStore,
      history: createHistorySlice(set, get),
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