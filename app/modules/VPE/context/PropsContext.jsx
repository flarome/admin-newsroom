import { createContext, useContext } from "react";

const propsContext = createContext({});

export function PropsProvider(props) {
  return (
    <propsContext.Provider value={props}>
      {props.children}
    </propsContext.Provider>
  );
}

export const usePropsContext = () =>
  useContext(propsContext);
