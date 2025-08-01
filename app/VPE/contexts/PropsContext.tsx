import {
  Context,
  createContext,
  useContext,
  ReactNode
} from "react";

import { Config, UserGenerics,   UiState,  InputData, InitialHistory, } from "../types";



type MaybePromise<T> = T | Promise<T>;

type InternalCallBackInner = {
  _destroy?: MaybePromise<any>;  // rendu optionnel si possible
};

export type vpeInner<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = {
  config: UserConfig;
  ui?: Partial<UiState>;
  data: Partial<InputData>;
  onChange?: (data: InputData) => void;
  initialHistory?: InitialHistory;
}

type Mode = "VPE" | "WYSIWYG";

type VPEALL =
  | {
      root: {
        mode: "VPE";
        // ❌ pas de height, minHeight, maxHeight autorisés
      };
    }
  | {
      root: {
        mode: Exclude<Mode, "VPE">; // "WYSIWYG"
        height?: string;
        minHeight?: string;
        maxHeight?: string;
      };
    };
export type VPEBaseDirect<UserConfig extends Config = Config, G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>> = vpeInner & {
  dataMode: "DIRECT";
};



export type VPEBaseCallback<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = vpeInner<UserConfig, G> & InternalCallBackInner;





export type VPEBaseWithCallback<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = {
  dataMode: "CALLBACK";
  getInitialProps: () => MaybePromise<VPEBaseCallback<UserConfig, G>>;
};


export type VPEBase<UserConfig extends Config = Config> =
  VPEALL & (VPEBaseDirect<UserConfig> | VPEBaseWithCallback);


export type VPEProps<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> = VPEBase<UserConfig> & {
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
