import { AppState } from "./AppState";
import { Data } from "./Data";


export type VPENodeData = {

};
 
export type VPEZoneData = {

};

export type NodeIndex = Record<string, VPENodeData>;
export type ZoneIndex = Record<string, VPEZoneData>;

export type PrivateAppState<UserData extends Data = Data> =
  AppState<UserData> & {
    indexes: {
      nodes: NodeIndex;
      zones: ZoneIndex;
    };
  };
