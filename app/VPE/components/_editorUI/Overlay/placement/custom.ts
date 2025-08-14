import { PopoverCSSVars } from "../constants/cssVariables";
import { FallbackPopoverStyle, padding, spaces } from "../constants/layout";
import { getAnchorLayout } from "./position";
import { mergeObjects } from "../utils/math";
import { calculateHorizontalPosition, calculateVerticalPosition } from "./position";
import type {  LayoutParams, Measurements, Placement } from "../types";

 const styles = {
    maxWidth: "var(--osui_width-sidebar-desktop)",
    maxHeight: `calc(100vh - ${spaces["space-2"]} - var(${PopoverCSSVars.Top}))`
};


/**
 * Calcule la position et les dimensions du popover en fonction de ses mesures et options.
 */
function calculateCustomPlacement({
  anchorLayout,
  containerSize,
  scrollSize,
  options,
}: LayoutParams): Placement {
  if (!scrollSize || !containerSize.height || !containerSize.width) {
    return anchorLayout;
  }

  // Calcule top et bottom via fonction externe (à définir)
  const { top, bottom } = calculateVerticalPosition({
    anchorLayout,
    containerHeight: containerSize.height,
    popoverScrollHeight: scrollSize.height,
    popoverCustomHeight: options.height,
    preferMostSpace: options.position === "mostSpace",
  });

  // Calcule left via fonction externe (à définir)
  const left = calculateHorizontalPosition({
    anchorLayout,
    containerWidth: containerSize.width,
    popoverCustomWidth: options.width,
    popoverScrollWidth: scrollSize.width,
    alignment: options.alignment,
  });

  // Calcule maxHeight dynamique selon bottom ou top
  const maxHeightCalc = bottom
    ? `calc(100vh - ${padding} - ${bottom}px)`
    : `calc(100vh - ${padding} - ${top}px)`;

  return {
    top,
    bottom,
    left,
    height: options.height,
    width: options.width,
    transition: "none",
    maxHeight: options.maxHeight ?? maxHeightCalc,
    ...(options.maxWidth ? { maxWidth: options.maxWidth } : {}),
  };
}


export function getCustomPlacement({
  options,
  measurements,
}: {
  options: LayoutParams["options"];
  measurements: Measurements;
}) {
  const { anchorRect, containerSize, scrollSize } = measurements;

  if (!anchorRect) return FallbackPopoverStyle;

  const anchorLayout = getAnchorLayout(anchorRect, containerSize);

  const placement = calculateCustomPlacement({
    anchorLayout,
    containerSize,
    scrollSize,
    options,
  });

  return mergeObjects(styles, placement);
}