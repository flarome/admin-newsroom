import {
  Context,
  createContext,
  useContext,
  ReactNode
} from "react";


import { PlateEditor as PlateEditorType } from "platejs/react";
 import { ValueOf, Value } from "platejs";
import { Data } from "../types";

export type EditorProps<
    E extends PlateEditorType = PlateEditorType,
    V extends Value = Value,
> = {
  id?: string;
  children?: ReactNode;
  data?: Data;
  onChange: (value: ValueOf<E>) => void;
};


const propsContext = createContext<Partial<EditorProps>>({});

export function PropsProvider(
  props: EditorProps
) {
  return (
    <propsContext.Provider value={props as EditorProps}>
      {props.children}
    </propsContext.Provider>
  );
}

export const usePropsContext = () =>
  useContext<EditorProps>(propsContext as Context<EditorProps>);
