import { create, useStore, StoreApi } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createContext, useContext } from "react";

import type { AppState,  Config, UserGenerics } from "../types";
import { VPEAction, createReducer } from "reducer";
import { createHistorySlice, HistorySlice } from "./slices/history";

export type Status = "LOADING" | "MOUNTED" | "READY";
export type Actions = "SECTIONS" | "SETTINGS";


import { defaultAppState } from "./default-app-state";



export type ZoomConfig =
  | "DESKTOP"
  | "FULLSCREEN"
  | "TABLET_LANDSCAPE"
  | "MOBILE"
  | "MOBILE_LANDSCAPE";

type Catalog = {
  settings: Record<string, unknown>;
  sections: Record<string, unknown>;
};

export type AppStore<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = { 
  dispatch: (action: VPEAction) => void;
  
  onAction?: (action: VPEAction, newState: AppState, state: AppState) => void;
  history: HistorySlice;
  

  zoomConfig: ZoomConfig;
  setZoomConfig: (zoomConfig: ZoomConfig) => void;

  status: Status;
  setStatus: (status: Status) => void;

  selectedAction: Actions;
  setSelectedAction: (selectedAction: Actions) => void;


   state: G["UserAppState"];
     config: UserConfig;

  
};

export type AppStoreApi = StoreApi<AppStore>;


export const createAppStore = (initialAppStore?: Partial<AppStore>) =>
  create<AppStore>()(
    subscribeWithSelector((set, get) => ({
      zoomConfig: "DESKTOP",
      setZoomConfig: (zoomConfig) => set({ zoomConfig }),

      status: "LOADING",
      setStatus: (status) => set({ status }),

      selectedAction: "SECTIONS",
      setSelectedAction: (selectedAction) => set({ selectedAction }),


      // Default content
      config: { settings: { catalog: {} }, content: { catalog: {} } },
      state: defaultAppState, 
 
      ...initialAppStore,
      history: createHistorySlice(set, get),

        dispatch: (action: VPEAction) =>
        set((s) => {
          const { record } = get().history;

          const dispatch = createReducer({
            record, 
            appStore: s,
          });

          const state = dispatch(s.state, action);

          /*const selectedItem = state.ui.itemSelector
            ? getItem(state.ui.itemSelector, state)
            : null;*/

            const selectedItem = null;

          get().onAction?.(action, state, get().state);

          return { ...s, state, selectedItem };
        }),


    }))
  );

export const appStoreContext = createContext<AppStoreApi>(createAppStore());

export function useAppStore<T>(selector: (state: AppStore) => T) {
  const context = useContext(appStoreContext);
  return useStore(context, selector);
}

export function useAppStoreApi() {
  return useContext(appStoreContext);
}
