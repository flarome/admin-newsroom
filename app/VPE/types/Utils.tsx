
import { Config } from "./Config";
import { Data } from "./Data";
import { PrivateAppState } from "./Internal";


export type UserGenerics<
  UserConfig extends Config = Config,
   UserData extends Data = Data,
    UserAppState extends PrivateAppState<UserData> = PrivateAppState<UserData>,
> = {
  UserConfig: UserConfig;
  UserData: UserData;
  UserAppState: UserAppState;
};