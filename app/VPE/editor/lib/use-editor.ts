import { Config } from "../types";
import { createContext, useContext, useEffect, useState } from "react";
import { AppStore, useAppStoreApi } from "../store";


import { createStore, StoreApi, useStore } from "zustand";



type WithGet<T> = T & { get: () => T };

export type UsePuckData<
  UserConfig extends Config = Config,
> = {
  config: UserConfig;
};

export type PuckApi<UserConfig extends Config = Config> =
  UsePuckData<UserConfig>;

type UseEditorStore<UserConfig extends Config = Config> = WithGet<
  PuckApi<UserConfig>
>;

type PickedStore = Pick<
  AppStore,
  "config" | "data"
>;

export const generateUseEditor = (store: PickedStore): UseEditorStore => {

  const storeData: PuckApi = {
   // data: store.data,
    config: store.config,
  };

  const get = () => storeData;

  return { ...storeData, get };
};

export const UseEditorStoreContext = createContext<StoreApi<UseEditorStore> | null>(
  null
);

const convertToPickedStore = (store: AppStore): PickedStore => {
  return {
        data: store.data,
    config: store.config,
  };
};

/**
 * Mirror changes in appStore to UseEditorStore
 */
export const useRegisterUseEditorStore = (
  appStore: ReturnType<typeof useAppStoreApi>
) => {
  const [UseEditorStore] = useState(() =>
    createStore(() =>
      generateUseEditor(convertToPickedStore(appStore.getState()))
    )
  );

  useEffect(() => {
    // Subscribe here isn't doing anything as selection isn't shallow
    return appStore.subscribe(
      (store) => convertToPickedStore(store),
      (pickedStore) => {
        UseEditorStore.setState(generateUseEditor(pickedStore));
      }
    );
  }, []);

  return UseEditorStore;
};

/**
 * createUseEditor
 *
 * Create a typed usePuck hook, which is necessary because the user may provide a generic type but not
 * a selector type, and TS does not currently support partial inference.
 * Related: https://github.com/microsoft/TypeScript/issues/26242
 *
 * @returns a typed usePuck function
 */
export function createUseEditor<UserConfig extends Config = Config>() {
  return function usePuck<T = PuckApi<UserConfig>>(
    selector: (state: UseEditorStore<UserConfig>) => T
  ): T {
    const usePuckApi = useContext(UseEditorStoreContext);

    if (!usePuckApi) {
      throw new Error("useEditor must be used inside <Puck>.");
    }

    const result = useStore(
      usePuckApi as unknown as StoreApi<UseEditorStore<UserConfig>>,
      selector ?? ((s) => s as T)
    );

    return result;
  };
}

export function usePuck<UserConfig extends Config = Config>() {
  useEffect(() => {
    console.warn(
      "You're using the `usePuck` method without a selector, which may cause unnecessary re-renders. Replace with `createUseEditor` and provide a selector for improved performance."
    );
  }, []);

  return createUseEditor<UserConfig>()((s) => s);
}

/**
 * Get the latest state without relying on a render
 *
 * @returns PuckApi
 */
export function useGetEditor() {
  const usePuckApi = useContext(UseEditorStoreContext);

  if (!usePuckApi) {
    throw new Error("usePuckGet must be used inside <Puck>.");
  }

  return usePuckApi.getState;
}
