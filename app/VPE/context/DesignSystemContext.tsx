import {
  useState,
  useCallback,
  PropsWithChildren
} from "react";

import { createAppStore, defaultAppState, appStoreContext } from "../store";
import { usePropsContext } from "./PropsContext";

import { Config, UserGenerics } from "types";
import { useRegisterUseVPEStore, UseVPEStoreContext } from "lib/use-vpe";

 
export

  function DesignSystemProvider<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
>({ children }: PropsWithChildren) {

  const { ui: initialUi, initialHistory: _initialHistory } = usePropsContext();

  
  const [generatedAppState] =
    useState
    (() => {
      const initial = { ...defaultAppState.ui, ...initialUi };

      const newAppState = {
        ...defaultAppState,
        ui: {
          ...initial,
        },
      };

      return newAppState;
    });

  const { appendData = true } = _initialHistory || {};

  const [blendedHistories] = useState(
    [
      ...(_initialHistory?.histories || []),
      ...(appendData ? [{ state: generatedAppState }] : []),
    ].map((history) => {
      // Inject default data to enable partial history injections
      let newState = { ...generatedAppState, ...history.state };

      return {
        ...history,
        state: newState,
      };
    }),
  );

  const initialHistoryIndex =
    _initialHistory?.index || blendedHistories.length - 1;
  const initialAppState = blendedHistories[initialHistoryIndex].state;

  const generateAppStore = useCallback(
    (state) => {
      return {
       
        state,
      };
    },
    [initialAppState],
  );

  const [appStore] = useState(() =>
    createAppStore(generateAppStore(initialAppState)),
  );

    const uPuckStore = useRegisterUseVPEStore(appStore);
    
  return (<appStoreContext.Provider value={appStore}>
    <UseVPEStoreContext.Provider
      value={uPuckStore}
    >   
              {children}


    </UseVPEStoreContext.Provider>
    </appStoreContext.Provider>
  );
}