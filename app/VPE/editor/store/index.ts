import { create, useStore, StoreApi } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createContext, useContext } from "react";
import { defaultAppState } from "./default-app-state";

import { Config, Data } from "../types";

export { defaultAppState };

export type AppStore<> = {
  config: Config,
  data: Data;
};

export type AppStoreApi = StoreApi<AppStore>;

export const createAppStore = (initialAppStore?: Partial<AppStore>) =>
  create<AppStore>()(
    subscribeWithSelector((set, get) => ({
      data: defaultAppState.data, 
      config: { },
      ...initialAppStore, 
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
