import { create, useStore, StoreApi } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createContext, useContext } from "react";

import type { AppState,  Config, InputData, UserGenerics, Data } from "@VPE/types";
import { VPEAction, createReducer } from "@VPE/reducer";
import { createHistorySlice, HistorySlice } from "./slices/history";


export type Status = "LOADING" | "MOUNTED" | "READY";
export type Actions = "SECTIONS" | "SETTINGS";

import { defaultAppState } from "./default-app-state";
import { defaultAppConfig } from "./default-app-config";
 
export {defaultAppState, defaultAppConfig}

export type ZoomConfig =
  | "DESKTOP"
  | "FULLSCREEN"
  | "TABLET_LANDSCAPE"
  | "MOBILE"
  | "MOBILE_LANDSCAPE";


export type AppStore<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = { 
  dispatch: (action: VPEAction) => void;
  
  onAction?: (action: VPEAction, newState: AppState, state: AppState) => void;
  onSave?: (data: InputData) => void | Promise<void>;
  save:  () => Boolean | Promise<Boolean>;

  history: HistorySlice;

  zoomConfig: ZoomConfig;
  setZoomConfig: (zoomConfig: ZoomConfig) => void;

  status: Status;
  setStatus: (status: Status) => void;

  selectedAction: Actions;
  setSelectedAction: (selectedAction: Actions) => void;


  selectedSetting: string;
  setSelectedSetting: (selectedSetting: string) => void;


    saving: boolean;
    setSaving: (saving: boolean) => void;


   state: G["UserAppState"];
   lastSavedData: Data;
setLastSavedData: (lastSavedState: Data) => void;
modified: boolean;

     config: G["UserConfig"];

   
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


      saving: false,
      setSaving: (saving) => set({ saving }),


      onSave: () => {},
     

      // Default content
      config: defaultAppConfig,
      state: defaultAppState, 
      
 
      ...initialAppStore,


      selectedSetting: "",
     setSelectedSetting: (selectedSetting) => set({ selectedSetting }),


      lastSavedData: initialAppStore?.state?.data || defaultAppState.data,
      setLastSavedData: (newState) => set({ lastSavedData: newState }),
      modified: false,
save: async () => {
  set({ saving: true }); // démarre tout de suite le mode saving
  try {
    const onSave = get().onSave;
    const saveData = get().state.data;
 
    if (typeof onSave === "function") {
      
      await Promise.resolve(onSave(saveData));
    }

    set({ lastSavedData: saveData, modified: false });
    return true;
  } catch (error) {
    console.error("Erreur lors de la sauvegarde :", error);
    return false;
  } finally {
    set({ saving: false });
  }
},
      
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
 
export const appStoreContext = createContext(createAppStore());

export function useAppStore<T>(selector: (state: AppStore) => T) {
  const context = useContext(appStoreContext);
  return useStore(context, selector);
}

export function useAppStoreApi() {
  return useContext(appStoreContext);
}
