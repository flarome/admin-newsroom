export interface WindowDimensions {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
}

export const DEFAULT_WINDOW_DIMENSIONS: WindowDimensions = {
  innerWidth: 0,
  innerHeight: 0,
  outerWidth: 0,
  outerHeight: 0,
};

export function getWindowDimensions(win: Window): WindowDimensions {
  const { innerWidth, innerHeight, outerWidth, outerHeight } = win;
  return { innerWidth, innerHeight, outerWidth, outerHeight };
}