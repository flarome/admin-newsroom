
import { VPEAction } from "reducer";
import { AppState } from "./../AppState";
import { Data } from "../Data";

export type History<D = any> = {
  state: D;
  id?: string;
};

export type OnAction<UserData extends Data = Data> = (
  action: VPEAction,
  appState: AppState<UserData>,
  prevAppState: AppState<UserData>
) => void;


type InitialHistoryAppend<AS = Partial<AppState>> = {
  histories: History<AS>[];
  index?: number;
  appendData?: true;
};

type InitialHistoryNoAppend<AS = Partial<AppState>> = {
  histories: [History<AS>, ...History<AS>[]]; // Array with minimum length of 1
  index?: number;
  appendData?: false;
};

export type InitialHistory<AS = Partial<AppState>> =
  | InitialHistoryAppend<AS>
  | InitialHistoryNoAppend<AS>;

