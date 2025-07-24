import {
  Context,
  createContext,
  useContext,
  ReactNode
} from "react";

import { Config, UserGenerics,   UiState,  Data,  InitialHistory, } from "../types";


type RequestedData = {
  content: any;
  settings: any
}

type ResendData = {
  content: any
  settings: any
}

export type VPEBase<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = {
  config: UserConfig;
  ui?: Partial<UiState>;
  // data: Partial<G["UserData"] | Data>;
  data: Partial<RequestedData>
  onChange?: (data: ResendData) => void;
  initialHistory?: InitialHistory;
};


export type VPEProps<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = VPEBase<UserConfig, G> & {
  id: string; // Utilise string (primitif) et non String (wrapper)
  children?: ReactNode;
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
