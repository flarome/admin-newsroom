import {  useThrottledCallback } from 'use-debounce';
import { useCallback, useEffect, useState } from "react";
import { getWindowDimensions, DEFAULT_WINDOW_DIMENSIONS, WindowDimensions } from "utils/dom/window";


import {} from '@shopify/react-html'


/**
 * Returns the dimensions of the given window (or the window associated with an element),
 * and updates on resize.
 */
export function useWindowDimensions(element?: HTMLElement | null): WindowDimensions {
  const [dimensions, setDimensions] = useState(DEFAULT_WINDOW_DIMENSIONS);

  const win = element?.ownerDocument?.defaultView ?? window;

  const getDims = useCallback(() => {
    if (!element) return DEFAULT_WINDOW_DIMENSIONS;
    return getWindowDimensions(win);
  }, [element, win]);

  const update = useCallback(() => {
    setDimensions(getDims());
  }, [getDims]);

  const throttledUpdate = useThrottledCallback(update, 10, { leading: true });

  useEffect(() => {
    throttledUpdate(); // Initial update
    window.addEventListener("resize", throttledUpdate);
    return () => {
      window.removeEventListener("resize", throttledUpdate);
    };
  }, [throttledUpdate]);

  return dimensions;
}


