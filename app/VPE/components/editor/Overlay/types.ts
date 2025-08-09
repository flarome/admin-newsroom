// types.ts
type place =  number | string;


export interface DOMRectLike {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
  distanceBottom?: number;
  distanceRight?: number;  
}

export interface Size {
  width: number;
  height: number;
}

export interface Measurements {
 popoverSize: { width: number | undefined; height: number | undefined };
  anchorRect: DOMRectLike | null;
  containerSize: Size;
  scrollSize?: Size;
}

export type verticalAlign =  'top' | 'center' | any;
export type alignment =  "center" | "left" | "right"; 
export type position = "mostSpace";

export interface PopoverOptions {
    position?: position;
 alignment?: alignment
  height?: number
  width?: number
  maxHeight?: number
  maxWidth?: number
  verticalAlign?: 'top' | 'center' | 'bottom'
  overrides?: {
    top?: number
  }
}


export interface Placement {
  bottom?: place;
  top?: place;
  left?: place;
  right?: place;
  height?: place;
  width?: place;
  maxHeight?: place;
    minHeight?: place;
  maxWidth?: place;
  transition?: string;
  position?: string
    minWidth?: place
}

export interface LayoutParams {
  anchorLayout: DOMRectLike;
  containerSize: Size;
  scrollSize?: Size;
  options: PopoverOptions;
}


export interface PositionStyleProps extends Placement {
  zIndex?: place
}