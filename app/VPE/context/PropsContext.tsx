import {
  Context,
  createContext,
  useContext,
  ReactNode
} from "react";

import { Config, UserGenerics,   UiState,  Data,  InitialHistory, } from "types";

type VPEProps<
  UserConfig extends Config = Config,
    G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = {
  id: String,
  children?: ReactNode;
  config: UserConfig;
  data: Partial<G["UserData"] | Data>;
  ui?: Partial<UiState>;
  onChange?: (data: G["UserData"]) => void;
  initialHistory?: InitialHistory;
};


const propsContext = createContext<Partial<VPEProps>>({});

export function PropsProvider<UserConfig extends Config = Config>(
  props: VPEProps<UserConfig>
) {
  return (
    <propsContext.Provider value={props as VPEProps}>
      {props.children}
    </propsContext.Provider>
  );
}

export const usePropsContext = () =>
  useContext<VPEProps>(propsContext as Context<VPEProps>);
