import { createContext, useContext, useEffect, useState } from "react";
import { createStore, StoreApi, useStore } from "zustand";

import type { AppStore, useAppStoreApi } from "../store";
import type { HistorySlice } from "../store/slices/history";

type WithGet<T> = T & { get: () => T };

export type UseVPEData = {
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
  WYSIWYG: AppStore["WYSIWYG"];
  settings: AppStore["settings"];
};

export type VPEApi = UseVPEData;

type UseVPEStore = WithGet<VPEApi>;

type PickedStore = Pick<
  AppStore,
  "dispatch" | "history" | "settings" | "WYSIWYG"
>;

export const generateUseVPE = (store: PickedStore): UseVPEStore => {
  const history: UseVPEStore["history"] = {
    back: store.history.back,
    forward: store.history.forward,
    setHistories: store.history.setHistories,
    setHistoryIndex: store.history.setHistoryIndex,
    histories: store.history.histories,
    index: store.history.index,
    hasPast: store.history.hasPast(),
    hasFuture: store.history.hasFuture(),
  };

  const storeData: VPEApi = {
    dispatch: store.dispatch,
    history,
    WYSIWYG: store.WYSIWYG,
    settings: store.settings,
  };

  const get = () => storeData;

  return { ...storeData, get };
};

export const UseVPEStoreContext = createContext<StoreApi<UseVPEStore> | null>(
  null,
);

const convertToPickedStore = (store: AppStore): PickedStore => ({
  dispatch: store.dispatch,
  history: store.history,
  WYSIWYG: store.WYSIWYG,
  settings: store.settings,
});

/**
 * Enregistre un store dérivé du appStore
 */
export const useRegisterUseVPEStore = (
  appStore: ReturnType<typeof useAppStoreApi>,
) => {
  const [UseVPEStore] = useState(() =>
    createStore(() =>
      generateUseVPE(convertToPickedStore(appStore.getState())),
    ),
  );

  useEffect(() => {
    return appStore.subscribe(
      (state) => convertToPickedStore(state),
      (pickedStore) => {
        UseVPEStore.setState(generateUseVPE(pickedStore));
      },
    );
  }, []);

  return UseVPEStore;
};

/**
 * createUseVPE
 *
 * Create a typed useVPE hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed useVPE function
 */
export function createUseVPE() {
  return function useVPE<T = VPEApi>(selector: (state: UseVPEStore) => T): T {
    const useVPEApi = useContext(UseVPEStoreContext);

    if (!useVPEApi) {
      throw new Error("useVPE must be used inside <DesignSystemProvider>.");
    }

    const result = useStore(
      useVPEApi as unknown as StoreApi<UseVPEStore>,
      selector ?? ((s) => s as T),
    );

    return result;
  };
}

/**
 * Hook sans selector (déconseillé sauf pour debug)
 */
export function useVPE() {
  useEffect(() => {
    console.warn(
      "You're using `useVPE()` method without a selector, which may cause unnecessary re-renders. Prefer `createUseVPE()` with a selector for better performance.",
    );
  }, []);
  return createUseVPE()((s) => s);
}

/**
 * Obtenir l'état actuel de UseVPE sans rerender
 *
 * @returns PuckApi
 */
export function useGetVPE() {
  const useVPEApi = useContext(UseVPEStoreContext);

  if (!useVPEApi) {
    throw new Error("useGetVPE must be used inside <DesignSystemProvider>.");
  }

  return useVPEApi.getState;
}
