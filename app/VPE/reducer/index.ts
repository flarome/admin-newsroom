import { Reducer } from "react";
import { AppState, Data } from "../types";
import { VPEAction } from "./actions";
import type { OnAction } from "../types";
import { AppStore } from "../store";
import { PrivateAppState } from "../types/Internal";


export * from "./actions";

export type ActionType = "insert" | "reorder";

export type StateReducer<UserData extends Data = Data> = Reducer<
  PrivateAppState<UserData>,
  VPEAction
>;

function storeInterceptor<UserData extends Data = Data>(
  reducer: StateReducer<UserData>,
  record?: (appState: AppState<UserData>) => void,
  onAction?: OnAction<UserData>
) {
  return (
    state: PrivateAppState<UserData>,
    action: VPEAction
  ): PrivateAppState<UserData> => {
    const newAppState = reducer(state, action);

    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set",
    ].includes(action.type);

    if (
      typeof action.recordHistory !== "undefined"
        ? action.recordHistory
        : isValidType
    ) {
      if (record) record(newAppState);
    }

  //  onAction?.(action, makeStatePublic(newAppState), makeStatePublic(state));

    return newAppState;
  };
}

export function createReducer<UserData extends Data>({
  record,
  onAction,
  appStore,
}: {
  record?: (appState: AppState<UserData>) => void;
  onAction?: OnAction<UserData>;
  appStore: AppStore;
}): StateReducer<UserData> {
  return storeInterceptor(
    (state, action) => {


      return state;
    },
    record,
    onAction
  );
}
