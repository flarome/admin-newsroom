import { useEffect, useState, type PropsWithChildren } from "react";
import fdeq from "fast-deep-equal";

import { usePropsContext } from "@VPE/contexts";

import { createAppStore, appStoreContext, defaultAppConfig, defaultAppState } from "@VPE/store";

import type { Config, Data, PrivateAppConfig, PrivateAppState, UserGenerics } from "@VPE/types";
;
import { walkAppState, useRegisterUseVPEStore, UseVPEStoreContext, walkAppConfig } from "@VPE/lib";

import { userInputToInternalSettingsCatalog, userInputToSettingsMap } from "@VPE/helpers";



function computeAppConfig<G extends UserGenerics<any>>(
  initialConfig: Config,
): G["UserConfig"] {

 
  const newConfig = {
    ...defaultAppConfig,
    settings: {

      catalog: userInputToInternalSettingsCatalog(initialConfig?.settings?.catalog || []),
    


    },
    content: {
      catalog: initialConfig?.content?.catalog
    }


  } as PrivateAppConfig;


  return newConfig;

}



function computeAppState<G extends UserGenerics<any>>(
  config: Config,
  initialData?: any,
  initialUi?: Partial<G["UserAppState"]["ui"]>
): G["UserAppState"] {

  
  const initialUiMerged = { ...defaultAppState.ui, ...initialUi };
  const newAppState = {
    ...defaultAppState,
    data: {
      WYSIWYG: initialData?.content,
      settings: userInputToSettingsMap(config?.settings?.catalog || [], initialData?.settings),
    },
    ui: {
      ...initialUiMerged,
    },
  } as G["UserAppState"];

  return walkAppState(newAppState);
}

function blendHistories<G extends UserGenerics<any>>(
  initialHistory: any,
  generatedAppState: G["UserAppState"],
  config: Config
) {
  const appendData = initialHistory?.appendData ?? true;
  const histories = [...(initialHistory?.histories || [])];
  if (appendData) histories.push({ state: generatedAppState });

  return histories.map((history: any) => {
    let newState = { ...generatedAppState, ...history.state };

    // Si les indexes n’existent pas, on les recalcule
    if (!(history.state as PrivateAppState).indexes) {
      newState = walkAppState(newState);
    }

    return {
      ...history,
      state: newState,
    };
  });
}

export function DesignSystemProvider<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
>({ children }: PropsWithChildren) {
  const props = usePropsContext();





const {
  config,
  data: initialData,
  ui: initialUi,
  onChange,
  initialHistory: _initialHistory,
} = (props as {
  config: Config;
  data?: any;
  ui?: any;
  onChange?: (...args: any[]) => void;
  initialHistory?: any;
}) || {
  config: defaultAppConfig,
  data: {},
  ui: {},
  onChange: () => {},
  initialHistory: { histories: [], index: 0, appendData: true },
};


  const [generatedAppConfig] = useState<G["UserConfig"]>(
    () => computeAppConfig<G>(config)
  );
  

  // Calcul de l'état initial synchronisé au montage
  const [generatedAppState] = useState<G["UserAppState"]>(
    () => computeAppState<G>(config, initialData, initialUi)
  );





  // Blend histories avec l’état généré
  const [blendedHistories] = useState(() =>
    blendHistories<G>(_initialHistory, generatedAppState, config)
  );

  // Index initial de l’historique actif
  const initialHistoryIndex = _initialHistory?.index ?? blendedHistories.length - 1;
  const initialAppState = blendedHistories[initialHistoryIndex]?.state ?? generatedAppState;

  // Création du store Zustand
  const [appStore] = useState(() => {
    if (props.dataMode === "CALLBACK") {
      // Store vide / loading au départ
      return createAppStore({
        status: "LOADING",
        state: defaultAppState,
      });
    }
    // Mode direct : store avec l’état initial
    return createAppStore({state: initialAppState, config: generatedAppConfig });
  });


    useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      (window as any).__PUCK_INTERNAL_DO_NOT_USE = { appStore };
    }
  }, [appStore]);



  // Gestion du mode CALLBACK (chargement asynchrone des props)
 useEffect(() => {
  if (props.dataMode !== "CALLBACK") return;

  let destroyed = false;
  let cleanupFn: (() => void) | undefined;

  Promise.resolve(props.getInitialProps()).then((data) => {
    if (destroyed) return; // Ne rien faire si cleanup a déjà eu lieu

     console.log('[DesignSystemContext] getInitialProps', data)


    const {
      config: loadedConfig,
      data: loadedData,
      ui: loadedUi,
      onChange: loadedOnChange,
      initialHistory: loadedInitialHistory,
      _destroy, // on récupère destroy si exposé
    } = data;


        // Si destroy est une fonction, on la stocke pour cleanup
    if (typeof _destroy === "function") {
      cleanupFn = _destroy;
    } else {
      cleanupFn = undefined;
    }


    console.log('[DesignSystemContext] loadedData', loadedData)

    const computeLoadedConfig = computeAppConfig<G>(loadedConfig);


    const newAppState = computeAppState<G>(loadedConfig, loadedData, loadedUi);
    const newBlendedHistories = blendHistories<G>(loadedInitialHistory, newAppState, loadedConfig);
    const newInitialHistoryIndex = loadedInitialHistory?.index ?? newBlendedHistories.length - 1;
    const newInitialAppState = newBlendedHistories[newInitialHistoryIndex]?.state ?? newAppState;



    appStore.setState({
      state: newInitialAppState,
      config: computeLoadedConfig,
      status: "READY",
      onSave: loadedOnChange
    });

  });



  
    return () => {
    destroyed = true;
    if (cleanupFn) {
      cleanupFn();
    }
  };
}, [props.dataMode, appStore]);



useEffect(() => {
  const unsubscribe = appStore.subscribe(
    (s) => s.state.data,
    (data) => {
      const lastSavedData = appStore.getState().lastSavedData;

      if (fdeq(data, lastSavedData)) return;

      const modified = appStore.getState().modified;
      if (!modified) {
        appStore.setState({ modified: true });
      }
    }
  );

  return () => {
    unsubscribe();
  };
}, []);



  const uPuckStore = useRegisterUseVPEStore(appStore);

  return (
    <appStoreContext.Provider value={appStore}>
      <UseVPEStoreContext.Provider value={uPuckStore}>{children}</UseVPEStoreContext.Provider>
    </appStoreContext.Provider>
  );
}