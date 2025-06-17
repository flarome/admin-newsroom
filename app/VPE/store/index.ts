import { create, useStore, StoreApi } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createContext, useContext } from "react";
import { defaultAppState } from "./default-app-state";

import { Config, UserGenerics, UiState, Data, InitialHistory } from "types";
import { VPEAction, createReducer } from "reducer";
import { createHistorySlice, HistorySlice } from "./slices/history";

export { defaultAppState };

export type Status = "LOADING" | "MOUNTED" | "READY";

export type Actions = "SECTIONS" | "SETTINGS";


type ZoomConfig =
  | "DESKTOP"
  | "FULLSCREEN"
  | "TABLET_LANDSCAPE"
  | "MOBILE"
  | "MOBILE_LANDSCAPE";

export type AppStore<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>,
> = {
  state: G["UserAppState"];
  dispatch: (action: VPEAction) => void;
  config: UserConfig;
  zoomConfig: ZoomConfig;
  setZoomConfig: (zoomConfig: ZoomConfig) => void;

  status: Status;
  selectedAction: Actions;
      setSelectedAction: (selectedAction: Actions) => void;
  setStatus: (status: Status) => void;
  setUi: (ui: Partial<UiState>, recordHistory?: boolean) => void;
  history: HistorySlice;
};

export type AppStoreApi = StoreApi<AppStore>;

export const createAppStore = (initialAppStore?: Partial<AppStore>) =>
  create<AppStore>()(
    subscribeWithSelector((set, get) => ({
      state: defaultAppState,
      config: { components: {} },
      zoomConfig: "DESKTOP",
      status: "LOADING",
      selectedAction: "SECTIONS",
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

          return { ...s, state };
        }),
      setZoomConfig: (zoomConfig) => set({ zoomConfig }),
      setStatus: (status) => set({ status }),
        setSelectedAction: (selectedAction) => set({ selectedAction }),
      setUi: (ui: Partial<UiState>, recordHistory?: boolean) =>
        set((s) => {
          const dispatch = createReducer({
            record: () => {},
            appStore: s,
          });

          const state = dispatch(s.state, {
            type: "setUi",
            ui,
            recordHistory,
          });

          return { ...s, state };
        }),
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
