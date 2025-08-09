import { createContext, useMemo, useContext,useEffect,useState, type ReactNode } from "react";
import { useFeatureFlags } from "@VPE/contexts";
import { defaultDesktopBreakpoints, defaultMobileBreakpoints, defaultOtherMedia, mediaQueries, Breakpoints, type MediaQueries, type MediaQueryKeys } from "@VPE/constants/breakpoints";
import { useMedia } from '@shopify/react-hooks';

type ViewportState = MediaQueries & {
  betweenBreakpoints: (start: MediaQueryKeys, end: MediaQueryKeys) => boolean;
};

const defaultBreakpointsOnly: MediaQueries = {
  ...defaultDesktopBreakpoints,
  ...defaultMobileBreakpoints,
  ...defaultOtherMedia,
} as const satisfies MediaQueries;


// Combined viewport context default value
const defaultViewportState: ViewportState = Object.assign(
  {},
  defaultBreakpointsOnly,
  {
    betweenBreakpoints: (start: MediaQueryKeys, end: MediaQueryKeys) => false,
  }
);

// ViewportContext for media query states
export const ViewportContext = createContext<ViewportState>(defaultViewportState);



export function ViewportProvider({ children }: { children: ReactNode }) {
  const { disablesRightSidebar } = useFeatureFlags();

  const matchesPhablet = useMedia(mediaQueries[Breakpoints.Phablet]);
  const matchesTablet = useMedia(mediaQueries[Breakpoints.Tablet]);
  const matchesDesktop = useMedia(mediaQueries[Breakpoints.Desktop]);
  const matchesWidescreen = useMedia(mediaQueries[Breakpoints.Widescreen]);
  const matchesMobile = useMedia(mediaQueries[Breakpoints.Mobile]);
  const matchesMobileCommon = useMedia(mediaQueries[Breakpoints.MobileCommon]);
  const matchesLandscape = useMedia(mediaQueries[Breakpoints.Landscape]);
  const matchesPrefersReducedMotion = useMedia(mediaQueries[Breakpoints.PrefersReducedMotion]);

  const viewportState = useMemo(() => {

      const state: MediaQueries = {
    mobile: matchesMobile,
    phablet: matchesPhablet,
    tablet: matchesTablet,
    desktop: matchesDesktop,
    widescreen: disablesRightSidebar ? false : matchesWidescreen,
    landscape: matchesLandscape,
    prefersReducedMotion: matchesPrefersReducedMotion,
    mobileCommon: matchesMobileCommon,
  };


    return {
    ...state,
    betweenBreakpoints(start, end) {
  const startMatches = start === "mobile" || state[start];
        if (start === end) return state[start];
        return start === end ? state[start] : startMatches && !state[end]; 
    },
  } as ViewportState;


  }, [
    matchesMobile,
    matchesPhablet,
    matchesTablet,
    matchesDesktop,
    matchesWidescreen,
    matchesLandscape,
    matchesPrefersReducedMotion,
    matchesMobileCommon,
    disablesRightSidebar,
  ]);

  return (
    <ViewportContext.Provider value={viewportState}>
      {children}
    </ViewportContext.Provider>
  );
}


export function useViewportContext(): ViewportState {
  return useContext(ViewportContext);
}