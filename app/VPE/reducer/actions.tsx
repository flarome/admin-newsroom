import { Data, UiState } from "../types";
import { PrivateAppState } from "../types/Internal";

export type InsertAction = {
  type: "insert";
  componentType: string;
  destinationIndex: number;
  destinationZone: string;
  id?: string;
};


export type RemoveAction = {
  type: "remove";
  index: number;
  zone: string;
};

export type SetUiAction = {
  type: "setUi";
  ui: Partial<UiState> | ((previous: UiState) => Partial<UiState>);
};

export type SetAction<UserData extends Data = Data> = {
  type: "set";
  state:
    | Partial<PrivateAppState<UserData>>
    | ((
        previous: PrivateAppState<UserData>
      ) => Partial<PrivateAppState<UserData>>);
};


export type VPEAction = { recordHistory?: boolean } & (
  | InsertAction
  | RemoveAction
  | SetAction
  | SetUiAction
);
