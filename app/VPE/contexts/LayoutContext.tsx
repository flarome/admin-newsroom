
import React, { createContext, useContext, type RefObject } from "react";


// Enum des zones possibles
export enum Areas {
  Frame = "frame",
  Header = "header",
  Footer = "footer",
  Main = "main",
  PrimaryAction = "primaryAction",
  SecondaryAction = "secondaryAction",
  PrimaryPanel = "primaryPanel",
  SecondaryPanel = "secondaryPanel",
}

// Type dynamique pour area refs : un RefObject<HTMLElement> ou null pour chaque clé
type AreaRefs = {
  [K in Areas]: RefObject<HTMLElement> | null;
};

interface LayoutRefs {
 area: AreaRefs;
 setFrameAreaRef: (entry: [AreaKey, React.RefObject<HTMLElement> | null]) => void;
}

type AreaKey = keyof LayoutRefs["area"];

// Valeur initiale par défaut
const initialAreaRefs: AreaRefs = Object.values(Areas).reduce((acc, key) => {
  acc[key] = null;
  return acc;
}, {} as AreaRefs);

const initialLayoutRefs: LayoutRefs = {
  area: initialAreaRefs,
  setFrameAreaRef: () => {}, // noop par défaut
};


export const LayoutRefsContext = createContext<LayoutRefs>(initialLayoutRefs);


interface LayoutRefsProviderProps {
  children: React.ReactNode;
}

export function LayoutRefsProvider({ children }: LayoutRefsProviderProps) {



const [layoutRefs, setLayoutRefs] = React.useState(() => ({
  ...initialLayoutRefs,
  setFrameAreaRef: (entry: [AreaKey, React.RefObject<HTMLElement> | null]) => {
    const [key, ref] = entry;

    setLayoutRefs(prev => {
      const { area, ...rest } = prev;
      return {
        ...rest,
        area: {
          ...area,
          [key]: ref,
        }
      };
    });
  }
}));


  return (
    <LayoutRefsContext.Provider value={layoutRefs}>
      {children}
    </LayoutRefsContext.Provider>
  );
}

export function useLayoutRefs() {
  return useContext(LayoutRefsContext);
}