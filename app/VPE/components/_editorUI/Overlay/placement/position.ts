import { PopoverCSSVars } from "../constants/cssVariables";
import { height, padding, top } from "../constants/layout";
import { alignment, DOMRectLike, PositionStyleProps, verticalAlign } from "../types";
import { normalizeCssValue, optionalDistance, removeUndefinedValues } from "../utils/math";

interface VerticalPositionParams {
  anchorLayout: DOMRectLike;
  containerHeight: number;
  popoverScrollHeight: number;
  popoverCustomHeight?: number;
  preferMostSpace: boolean;
}

interface VerticalPositionResult {
  top?: number;
  bottom?: number;
}

export function getAnchorLayout(anchor: DOMRectLike, container?: { width: number; height: number }) {
  const { top, right, bottom, left, width, height } = anchor;
  return {
    top,
    right,
    bottom,
    left,
    width,
    height,
    distanceRight: optionalDistance(right, container?.width),
    distanceBottom: optionalDistance(bottom, container?.height),
  };
}

/**
 * Calcule la position verticale du popover : top ou bottom.
 */
export function calculateVerticalPosition({
  anchorLayout,
  containerHeight,
  popoverScrollHeight,
  popoverCustomHeight,
  preferMostSpace,
}: VerticalPositionParams): VerticalPositionResult {
  const spaceBelow = containerHeight - anchorLayout.bottom - padding;
  const spaceAbove = anchorLayout.top - padding;
  const popoverHeight = Math.min(height, popoverCustomHeight || popoverScrollHeight);

  if (anchorLayout.top < padding) {
    // L'ancre est trop proche du haut du container : placer en dessous
    return { top: padding + anchorLayout.height };
  }

  if (
    anchorLayout.distanceBottom &&
    ((spaceBelow < popoverHeight && spaceAbove > popoverHeight) || (preferMostSpace && spaceAbove > spaceBelow))
  ) {
    // Placer en bas
    return {
      bottom: anchorLayout.distanceBottom + anchorLayout.height + padding,
    };
  }

  // Placer en haut (par défaut)
  return { top: anchorLayout.bottom + padding };
}

interface HorizontalPositionParams {
  anchorLayout: DOMRectLike;
  popoverCustomWidth?: number;
  popoverScrollWidth: number;
  containerWidth: number;
  alignment?: alignment
}

/**
 * Calcule la position horizontale (left) du popover selon l'alignement.
 */
export function calculateHorizontalPosition({
  anchorLayout,
  popoverCustomWidth,
  popoverScrollWidth,
  containerWidth,
  alignment = "center",
}: HorizontalPositionParams): number {
  const anchorCenter = anchorLayout.left + anchorLayout.width / 2;
  const popoverWidth = popoverCustomWidth ?? popoverScrollWidth;

  let left: number;

  switch (alignment) {
    case "center":
      left = anchorCenter - popoverWidth / 2;
      break;
    case "left":
      left = anchorLayout.left;
      break;
    case "right":
      left = anchorLayout.right - popoverWidth;
      break;
    default:
      left = anchorCenter - popoverWidth / 2;
  }

  const rightEdge = left + popoverWidth;

  // Empêche le popover de dépasser à gauche du container
  if (left < padding) {
    return Math.max(padding, Math.min(padding, anchorLayout.left));
  }

  // Empêche le popover de dépasser à droite du container
  const maxRight = containerWidth - padding;
  if (rightEdge > maxRight) {
    return maxRight - popoverWidth;
  }

  return left;
}
export function computePopoverX(e: DOMRectLike, t?: number, n?: number): number {
  const i = padding;
  const a = (t ?? n)!;

   return typeof e.distanceRight < "u" && typeof a < "u" && e.distanceRight! < a + i && e.left > a + i ? e.left - a - i : e.right + i
}

export function computePopoverZ({ // instable
  anchorTopPosition,
  anchorHeight,
  containerHeight,
  popoverScrollHeight,
  popoverCustomHeight,
  verticalAlign,
}: {
  anchorTopPosition: number
  anchorHeight: number
  containerHeight: number
  popoverScrollHeight: number
  popoverCustomHeight?: number
  verticalAlign: verticalAlign
}) {
  const availableHeight = verticalAlign === "top"
    ? containerHeight * (top / 100)
    : containerHeight;

  const popoverHeight = popoverCustomHeight || popoverScrollHeight;

  if (popoverHeight >= availableHeight) {
    const maxTop = containerHeight - availableHeight - padding;
    const canShowFully = anchorTopPosition <= maxTop;
    return Math.max(canShowFully ? anchorTopPosition : maxTop, padding);
  }

  switch (verticalAlign) {
    case "center": {
      const middleOffset = anchorHeight / 2 + popoverHeight / 2;
      const fitsBelow = containerHeight - anchorTopPosition - padding >= popoverHeight - middleOffset;
      const top = fitsBelow
        ? anchorTopPosition + anchorHeight / 2 - popoverHeight / 2
        : containerHeight - popoverHeight - padding;
      return Math.max(top, padding);
    }
    case "top":
    default: {
      const fitsBelow = containerHeight - anchorTopPosition - padding >= popoverHeight;
      const top = fitsBelow
        ? anchorTopPosition
        : containerHeight - popoverHeight - padding;
      return Math.max(top, padding);
    }
  }

}



export function convertPositionStyles(props: PositionStyleProps): ReturnType<typeof removeUndefinedValues> {
  const {
    zIndex,
    position,
    top,
    right,
    bottom,
    left,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    transition
  } = props

  const styles = {
    [PopoverCSSVars.ZIndex]: zIndex,
    [PopoverCSSVars.Position]: position,
    [PopoverCSSVars.Top]: normalizeCssValue(top),
    [PopoverCSSVars.Right]: normalizeCssValue(right),
    [PopoverCSSVars.Bottom]: normalizeCssValue(bottom),
    [PopoverCSSVars.Left]: normalizeCssValue(left),
    [PopoverCSSVars.Width]: normalizeCssValue(width),
    [PopoverCSSVars.MinWidth]: normalizeCssValue(minWidth),
    [PopoverCSSVars.MaxWidth]: normalizeCssValue(maxWidth),
    [PopoverCSSVars.Height]: normalizeCssValue(height),
    [PopoverCSSVars.MinHeight]: normalizeCssValue(minHeight),
    [PopoverCSSVars.MaxHeight]: normalizeCssValue(maxHeight),
    [PopoverCSSVars.Transition]: normalizeCssValue(transition)
  }

  return removeUndefinedValues(styles)
}