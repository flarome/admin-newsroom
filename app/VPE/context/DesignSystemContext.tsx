import { useCallback, useState, type PropsWithChildren } from "react";

import { createAppStore, appStoreContext } from "../store";
import { usePropsContext } from "./PropsContext";
import { useRegisterUseVPEStore, UseVPEStoreContext } from "../lib/use-vpe";
import { userInputToToc, userInputToWysiwyg, userInputToSettings } from "../mappers";
import { Config, PrivateAppState,UserGenerics } from "types";
import { defaultAppState } from "store/default-app-state";
import { walkAppState } from "lib/data/walk-app-state";


export function DesignSystemProvider<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
>({ children }: PropsWithChildren) {
  const {
    config,
    data: initialData,
    ui: initialUi,
    onChange,
    initialHistory: _initialHistory,
  } = usePropsContext();



  const [generatedAppState] = useState<G["UserAppState"]>(() => {
    const initial = { ...defaultAppState.ui, ...initialUi };

    let clientUiState: Partial<G["UserAppState"]["ui"]> = {};


    const newAppState = {
      ...defaultAppState,
      data: {    
        WYSIWYG: userInputToWysiwyg(initialData?.content || {}),
        settings: userInputToSettings(initialData?.settings || {}),
      },
      ui: {
        ...initial,
        ...clientUiState,
      },
    } as G["UserAppState"];

    return walkAppState(newAppState, config);
  });



    const { appendData = true } = _initialHistory || {};

  const [blendedHistories] = useState(
    [
      ...(_initialHistory?.histories || []),
      ...(appendData ? [{ state: generatedAppState }] : []),
    ].map((history) => {
      // Inject default data to enable partial history injections
      let newState = { ...generatedAppState, ...history.state };

      // The history generally doesn't include the indexes, so calculate them for each state item
      if (!(history.state as PrivateAppState).indexes) {
        newState = walkAppState(newState, config);
      }

      return {
        ...history,
        state: newState,
      };
    })
  );

  const initialHistoryIndex =
    _initialHistory?.index || blendedHistories.length - 1;
  const initialAppState = blendedHistories[initialHistoryIndex].state;




    const generateAppStore = useCallback(
    (state?: PrivateAppState) => {
      return {
        state,
       
      };
    },
    [
      initialAppState,

    ]
  );


    const [appStore] = useState(() =>
    createAppStore(generateAppStore(initialAppState))
  );


  const uPuckStore = useRegisterUseVPEStore(appStore);

  return (
    <appStoreContext.Provider value={appStore}>
      <UseVPEStoreContext.Provider value={uPuckStore}>
        {children}
      </UseVPEStoreContext.Provider>
    </appStoreContext.Provider>
  );
}
