import { PopoverCSSVars } from "../constants/cssVariables";
import { FallbackPopoverStyle, padding, spaces } from "../constants/layout";
import { computePopoverZ, getAnchorLayout } from "./position";
import { mergeObjects } from "../utils/math";
import {  computePopoverX } from "./position";
import type {  LayoutParams, Measurements, Placement } from "../types";

 const styles = {
    maxWidth: "var(--osui_width-sidebar-desktop)",
    maxHeight: `calc(100vh - ${spaces["space-2"]} - var(${PopoverCSSVars.Top}))`
};



function calculateSidebarPlacement({ // instable
  anchorLayout,
  containerSize,
  scrollSize,
  options
}: LayoutParams): Placement {
  if (!scrollSize || !containerSize?.height) return anchorLayout


  const overrideTop = options?.overrides?.top

  const top = overrideTop !== null
    ? overrideTop
    : computePopoverZ({
        anchorTopPosition: anchorLayout.top,
        anchorHeight: anchorLayout.height,
        containerHeight: containerSize.height,
        popoverScrollHeight: scrollSize.height,
        popoverCustomHeight: options?.height,
        verticalAlign: options?.verticalAlign || 'top'
      })

  const left = computePopoverX(anchorLayout, options?.width, scrollSize.width)

  return {
    top,
    left,
    right: padding,
    height: options?.height,
    width: options?.width,
    ...(options?.maxHeight ? { maxHeight: options.maxHeight } : {}),
    ...(options?.maxWidth ? { maxWidth: options.maxWidth } : {})
  }
}



export function getSidebarPlacement({
  options,
  measurements,
}: {
  options: LayoutParams["options"];
  measurements: Measurements;
}) {
  const { anchorRect, containerSize, scrollSize } = measurements;

  if (!anchorRect) return FallbackPopoverStyle;

  const anchorLayout = getAnchorLayout(anchorRect, containerSize);

  const placement = calculateSidebarPlacement({
    anchorLayout,
    containerSize,
    scrollSize,
    options,
  });

  return mergeObjects(styles, placement);
}
