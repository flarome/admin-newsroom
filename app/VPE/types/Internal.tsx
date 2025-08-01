import { AppState } from "./AppState";
import { Data } from "./Data";
import { Config, Setting, SettingsPart, SettingsGroup } from "./Config";


export type VPENodeData = {

};
 
export type VPEZoneData = {

};

export type NodeIndex = Record<string, VPENodeData>;
export type ZoneIndex = Record<string, VPEZoneData>;




// ===== GLOBAL SETTINGS INTERNAL TYPE FOR VPE (FOR SETTINGS & SECTIONS SETTINGS) =====

export type PrivateSetting = Setting & {
  id: string;
  type: "setting";
};

export type PrivateSettingsPart = SettingsPart & {
  id: string;
  type: "part";
  settings: PrivateSetting[];
};

export type PrivateSettingsGroup = SettingsGroup & {
  id: string;
  type: "group";
  settings: PrivateSetting[];
  settingsParts: PrivateSettingsPart[];
};

export type PrivateSettingsSchema = {
  settings: PrivateSetting[];
  settingsParts: PrivateSettingsPart[];
  settingsGroups: PrivateSettingsGroup[];
};


// ===== LOCAL SETTINGS PACKAGES INTERNAL TYPE (FOR SETTINGS) =====

export type PrivateSettingsCatalog = PrivateSettingsSchema;





export type PrivateAppConfig<UserConfig extends Config = Config> =
  Omit<UserConfig, "settings"> & {
    settings: {
      catalog: PrivateSettingsCatalog;
    };
  };










export type PrivateAppState<UserData extends Data = Data> =
  AppState<UserData> & {
    indexes: {
      nodes: NodeIndex;
      zones: ZoneIndex;
    };
  };
