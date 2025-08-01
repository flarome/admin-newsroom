

// Breakpoint pixel values
export const breakpointSizes = {
  phablet: "667px",
  tablet: "860px",
  desktop: "1080px",
  widescreen: "1614px",
  mobileCommon: "480px",
};

// Enum-like keys for breakpoints and features
export const Breakpoints = {
  Mobile: "mobile",
  Phablet: "phablet",
  Tablet: "tablet",
  Desktop: "desktop",
  Widescreen: "widescreen",
  Landscape: "landscape",
  PrefersReducedMotion: "prefersReducedMotion",
  MobileCommon: "mobileCommon",
};

// Min-width media query breakpoints
export const minWidthBreakpoints = {
  [Breakpoints.Phablet]: breakpointSizes.phablet,
  [Breakpoints.Tablet]: breakpointSizes.tablet,
  [Breakpoints.Desktop]: breakpointSizes.desktop,
  [Breakpoints.Widescreen]: breakpointSizes.widescreen,
};

// Max-width media query breakpoints (1px less than min-width)
export const maxWidthBreakpoints = {
  mobile: `${parseInt(breakpointSizes.phablet, 10) - 1}px`,
  mobileCommon: `${parseInt(breakpointSizes.mobileCommon, 10) - 1}px`,
};

// Media query strings
export const mediaQueries = {
  [Breakpoints.Phablet]: `(min-width: ${minWidthBreakpoints[Breakpoints.Phablet]})`,
  [Breakpoints.Tablet]: `(min-width: ${minWidthBreakpoints[Breakpoints.Tablet]})`,
  [Breakpoints.Desktop]: `(min-width: ${minWidthBreakpoints[Breakpoints.Desktop]})`,
  [Breakpoints.Widescreen]: `(min-width: ${minWidthBreakpoints[Breakpoints.Widescreen]})`,
  [Breakpoints.Landscape]: "(orientation: landscape)",
  [Breakpoints.PrefersReducedMotion]: "(prefers-reduced-motion: reduce)",
  [Breakpoints.Mobile]: `(max-width: ${maxWidthBreakpoints.mobile})`,
  [Breakpoints.MobileCommon]: `(max-width: ${maxWidthBreakpoints.mobileCommon})`,
};



// Default breakpoint states (all false)
export const defaultDesktopBreakpoints = {
  [Breakpoints.Phablet]: false,
  [Breakpoints.Tablet]: false,
  [Breakpoints.Desktop]: false,
  [Breakpoints.Widescreen]: false,
};

export const defaultMobileBreakpoints = {
  [Breakpoints.Mobile]: false,
  [Breakpoints.MobileCommon]: false,
};

export const defaultOtherMedia = {
  [Breakpoints.Landscape]: false,
  [Breakpoints.PrefersReducedMotion]: false,
};


export type MediaQueryKeys = keyof typeof mediaQueries;

export type MediaQueries = {
  [K in MediaQueryKeys]: boolean;
};