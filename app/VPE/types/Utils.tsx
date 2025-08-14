
import { Config } from "./Config";
import { Data } from "./Data";
import { PrivateAppState, PrivateAppConfig } from "./Internal";
import type { AppState } from "./AppState"

export type UserGenerics<
   UserConfig extends Config = Config,

  UserConfigInternal extends PrivateAppConfig<UserConfig> = PrivateAppConfig<UserConfig>,
    UserPublicConfig extends Config = Config,
   UserData extends Data = Data,
    UserAppState extends PrivateAppState<UserData> = PrivateAppState<UserData>,
      UserPublicAppState extends AppState<UserData> = AppState<UserData>,
> = { 
  UserConfig: UserConfigInternal;
  UserPublicConfig: UserPublicConfig;
  UserData: UserData;
  UserAppState: UserAppState;
  UserPublicAppState: UserPublicAppState;
};