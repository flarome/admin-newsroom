import {  userInputToInternalSettingsCatalog } from "helpers/data/settings";
import type { Config,  

  PrivateAppConfig } from "../../types";





export function walkAppConfig<UserConfig extends Config = Config>(
  config: UserConfig,
): PrivateAppConfig<UserConfig> {





 
 return {
  config
};
}
