import { useRef, useState, useEffect } from "react";
import { resolveElementRef } from "utils/dom/elements";
import {useIsomorphicLayoutEffect } from '@shopify/react-hooks'
import { ResizeObserver } from '@juggle/resize-observer';



export interface UseObservedDOMElementOptions {
  observeChildren?: boolean;
}

export type ResizeCallback = (target: HTMLElement | null, entry?: ResizeObserverEntry) => void;

const ResizeObserverClass: typeof ResizeObserver = typeof window < "u" && window.ResizeObserver
  ? window.ResizeObserver
  : ResizeObserver;


/**
 * Observe a DOM element for mutations and execute a callback on change.
 */
export function useObservedDOMElement(
  selector: HTMLElement | null,
  onResize: ResizeCallback,
  options: UseObservedDOMElementOptions = {}
): void {
 const currentElementRef = useRef<HTMLElement | null>(null);
  const onResizeRef = useRef<ResizeCallback>(onResize);


  const [observer] = useState(() =>
    new ResizeObserverClass((mutations) => {
      const [mutation] = mutations;
      onResizeRef.current(currentElementRef.current, mutation);
    })
  );

  // Refresh the observer when the target element changes
  useIsomorphicLayoutEffect(() => {
    const target = resolveElementRef(selector);

    if (target !== currentElementRef.current) {
      if (currentElementRef.current) {
        observer.disconnect();
      }

      if (target) {
        observer.observe(target);

        if (options.observeChildren) {
          for (const child of target.children) {
            observer.observe(child);
          }
        }
        onResizeRef.current(target ?? null); // First call manually
      }

      currentElementRef.current = target ?? null;
    }
  });

  // Keep the callback up to date
  useIsomorphicLayoutEffect(() => {
    onResizeRef.current = onResize;
  }, [onResize]);

  // Cleanup on unmount
  useEffect(() => {
    return () => observer.disconnect();
  }, [observer]);
}