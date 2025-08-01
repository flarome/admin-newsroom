import { createContext, useMemo, useContext,useEffect,useState, type ReactNode } from "react";
import { useFeatureFlags } from "@VPE/contexts";
import { defaultDesktopBreakpoints, defaultMobileBreakpoints, defaultOtherMedia, mediaQueries, Breakpoints, type MediaQueries, type MediaQueryKeys } from "@VPE/constants/breakpoints";

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
    betweenBreakpoints: (start, end) => false,
  }
);

// ViewportContext for media query states
export const ViewportContext = createContext<ViewportState>(defaultViewportState);


// Hook factory qui crée un hook basé sur useEffect ou useLayoutEffect (ici useEffect)
function createMediaQueryHook(effectHook: typeof useEffect) {
  return function useMediaQuery(query: string, options?: { initialValue?: boolean }) {
    const { initialValue } = options || {};

       const [matches,setMatches] = useState( () => initialValue === void 0 && typeof window < "u" ? window.matchMedia(query).matches : !!initialValue);


    effectHook(() => {
      if (!window || !window.matchMedia) return;

      const mediaQueryList = window.matchMedia(query);
      const listener = (event: MediaQueryListEvent) => setMatches(event.matches);

      setMatches(mediaQueryList.matches);

      mediaQueryList.addListener(listener);
      setMatches(mediaQueryList.matches);

      return () => mediaQueryList.removeListener(listener);
    }, [query]);

    return matches;
  };
}



const useMediaQuery = createMediaQueryHook(useEffect);

export function ViewportProvider({ children }: { children: ReactNode }) {
  const { disablesRightSidebar } = useFeatureFlags();

  const matchesPhablet = useMediaQuery(mediaQueries[Breakpoints.Phablet]);
  const matchesTablet = useMediaQuery(mediaQueries[Breakpoints.Tablet]);
  const matchesDesktop = useMediaQuery(mediaQueries[Breakpoints.Desktop]);
  const matchesWidescreen = useMediaQuery(mediaQueries[Breakpoints.Widescreen]);
  const matchesMobile = useMediaQuery(mediaQueries[Breakpoints.Mobile]);
  const matchesMobileCommon = useMediaQuery(mediaQueries[Breakpoints.MobileCommon]);
  const matchesLandscape = useMediaQuery(mediaQueries[Breakpoints.Landscape]);
  const matchesPrefersReducedMotion = useMediaQuery(mediaQueries[Breakpoints.PrefersReducedMotion]);

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