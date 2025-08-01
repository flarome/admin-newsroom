import { userInputToSettingsMap } from "helpers/data/settings";
import type { Config, PrivateAppState, Data, PrivateAppConfig } from "../../types";







export function walkAppState<UserData extends Data = Data, UserConfig extends Config = Config>(
  state: PrivateAppState<UserData>,
): PrivateAppState<UserData> {
  return {
    ...state,
  };
}

