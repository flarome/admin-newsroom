import { useCallback, useState } from "react";
import { areSizesEqual, getScrollDimensions, type ScrollDimensions } from "utils/dom/geometry";
import { useObservedDOMElement, type ResizeCallback } from "./useObservedDOMElement";


export function useObservedValue(
 element: HTMLElement | null
): ScrollDimensions | undefined {
 const [value, setValue] = useState<ScrollDimensions>();

  const updateValue: ResizeCallback = useCallback((el: HTMLElement | null) => {
    if (!el) return;

    setValue((prev) => {
      const newValue = getScrollDimensions(el);
      return areSizesEqual(newValue, prev) ? prev : newValue;
    });
  }, []);

  useObservedDOMElement(element, updateValue, {
    observeChildren: true,
  });

  return value;
}