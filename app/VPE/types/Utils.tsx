
import { Config } from "./Config";
import { Data } from "./Data";
import { PrivateAppState, PrivateAppConfig } from "./Internal";


export type UserGenerics<
   UserConfig1 extends Config = Config,

  UserConfig extends PrivateAppConfig<UserConfig1> = PrivateAppConfig<UserConfig1>,
   UserData extends Data = Data,
    UserAppState extends PrivateAppState<UserData> = PrivateAppState<UserData>,
> = {
  UserConfig: UserConfig;
  UserData: UserData;
  UserAppState: UserAppState;
};