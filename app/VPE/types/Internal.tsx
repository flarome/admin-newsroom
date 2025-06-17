
import { AppState } from "./AppState";
import { Data } from "./Data";



export type PrivateAppState<UserData extends Data = Data> =
  AppState<UserData> & {
    
  };
