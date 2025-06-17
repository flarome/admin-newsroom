import { Config, UserGenerics, AppState } from "../types";
import { createContext, useContext, useEffect, useState } from "react";
import { AppStore, useAppStoreApi } from "../store";


import { createStore, StoreApi, useStore } from "zustand";

import { HistorySlice } from "store/slices/history";


type WithGet<T> = T & { get: () => T };

export type UsePuckData<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = {
  appState: AppState;
  config: UserConfig;
  dispatch: AppStore["dispatch"];
  history: {
    back: HistorySlice["back"];
    forward: HistorySlice["forward"];
    setHistories: HistorySlice["setHistories"];
    setHistoryIndex: HistorySlice["setHistoryIndex"];
    histories: HistorySlice["histories"];
    index: HistorySlice["index"];
    hasPast: boolean;
    hasFuture: boolean;
  };
};

export type PuckApi<UserConfig extends Config = Config> =
  UsePuckData<UserConfig>;

type UseVPEStore<UserConfig extends Config = Config> = WithGet<
  PuckApi<UserConfig>
>;

type PickedStore = Pick<
  AppStore,
  "config" | "dispatch" | "history" | "state"
>;

export const generateUseVPE = (store: PickedStore): UseVPEStore => {
  const history: UseVPEStore["history"] = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
    histories: store.history.histories,
    index: store.history.index,
  };

  const storeData: PuckApi = {
    appState: store.state,
    config: store.config,
    dispatch: store.dispatch,
    history,
  };

  const get = () => storeData;

  return { ...storeData, get };
};

export const UseVPEStoreContext = createContext<StoreApi<UseVPEStore> | null>(
  null
);

const convertToPickedStore = (store: AppStore): PickedStore => {
  return {
    state: store.state,
    config: store.config,
    dispatch: store.dispatch,
    history: store.history,
  };
};

/**
 * Mirror changes in appStore to UseVPEStore
 */
export const useRegisterUseVPEStore = (
  appStore: ReturnType<typeof useAppStoreApi>
) => {
  const [UseVPEStore] = useState(() =>
    createStore(() =>
      generateUseVPE(convertToPickedStore(appStore.getState()))
    )
  );

  useEffect(() => {
    // Subscribe here isn't doing anything as selection isn't shallow
    return appStore.subscribe(
      (store) => convertToPickedStore(store),
      (pickedStore) => {
        UseVPEStore.setState(generateUseVPE(pickedStore));
      }
    );
  }, []);

  return UseVPEStore;
};

/**
 * createUseVPE
 *
 * Create a typed usePuck hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed usePuck function
 */
export function createUseVPE<UserConfig extends Config = Config>() {
  return function usePuck<T = PuckApi<UserConfig>>(
    selector: (state: UseVPEStore<UserConfig>) => T
  ): T {
    const usePuckApi = useContext(UseVPEStoreContext);

    if (!usePuckApi) {
      throw new Error("useVPE must be used inside <Puck>.");
    }

    const result = useStore(
      usePuckApi as unknown as StoreApi<UseVPEStore<UserConfig>>,
      selector ?? ((s) => s as T)
    );

    return result;
  };
}

export function usePuck<UserConfig extends Config = Config>() {
  useEffect(() => {
    console.warn(
      "You're using the `usePuck` method without a selector, which may cause unnecessary re-renders. Replace with `createUseVPE` and provide a selector for improved performance."
    );
  }, []);

  return createUseVPE<UserConfig>()((s) => s);
}

/**
 * Get the latest state without relying on a render
 *
 * @returns PuckApi
 */
export function useGetVPE() {
  const usePuckApi = useContext(UseVPEStoreContext);

  if (!usePuckApi) {
    throw new Error("usePuckGet must be used inside <Puck>.");
  }

  return usePuckApi.getState;
}
