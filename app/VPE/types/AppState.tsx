import { Data } from "./Data";


export type UiState = {

};

export type AppState<UserData extends Data = Data> = {
  data: UserData;
  ui: UiState;
};
 