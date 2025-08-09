import { useMemo } from "react";
import { getFirstScrollableElement } from "utils/dom/elements";
import { useToggle } from '@shopify/react-hooks';

interface UsePopoverLayoutOptions {
  anchor?: HTMLElement | null;
  popover: HTMLElement | null;
  scrollHintOptions?: AutoScrollOptions
  absoluteCoordinates?: { x: number; y: number };
}

import { getClientRectOrNull } from "utils/dom/clientRect";
import { useWindowDimensions } from "hooks/useWindowDimensions";
import { useObservedValue } from "hooks/useObservedValue";
import { autoScrollOnMount, type AutoScrollOptions } from "utils/dom/autoScrollOnMount";
import type { Measurements } from "../Overlay/types";
import { useUniqueId } from "@VPE/contexts";


export function usePopoverLayout({
  anchor,
  popover,
  scrollHintOptions,
  absoluteCoordinates,
}: UsePopoverLayoutOptions): Measurements {
  const container = useMemo(() => getFirstScrollableElement(popover), [popover]);
  const anchorRect =
    getClientRectOrNull(anchor) ||
    (absoluteCoordinates
      ? {
          top: absoluteCoordinates.y,
          bottom: absoluteCoordinates.y,
          left: absoluteCoordinates.x,
          right: absoluteCoordinates.x,
          width: 0,
          height: 0,
        }
      : null);

  const popoverRect = getClientRectOrNull(popover);
  const { innerWidth, innerHeight } = useWindowDimensions(popover);
  const containerSize = { width: innerWidth, height: innerHeight };
  const scrollSize = useObservedValue(container);

  autoScrollOnMount(container, scrollHintOptions);

  return {
    anchorRect,
    popoverSize: {
      width: popoverRect?.width,
      height: popoverRect?.height,
    },
    containerSize,
    scrollSize,
  };
}

function getRole(r?: string): string {
    switch (r) {
    case "menu":
    case "listbox":
    case "tree":
    case "grid":
    case "dialog":
        return r;
    case "true":
        return "menu";
    case "false":
    case void 0:
    default:
        return ""
    }
}


interface UsePopoverAccessibilityPropsArgs {
  id?: string;
  open?: boolean;
  ariaHasPopup?: string;
}

interface UsePopoverAccessibilityPropsResult {
  activatorAccessibilityProps: {
    "aria-controls": string;
    "aria-expanded": boolean;
    "aria-haspopup"?: string;
  };
  popoverAccessibilityProps: {
    role: string;
    id: string;
  };
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}


export function usePopoverAccessibilityProps({
  id,
  open = false,
  ariaHasPopup,
}: UsePopoverAccessibilityPropsArgs): UsePopoverAccessibilityPropsResult {
  const { value: isOpen, setTrue: openPopover, setFalse: closePopover, toggle } = useToggle(open);

  const popoverId = useUniqueId("Popover", id);

  const activatorAccessibilityProps = useMemo(() => ({
    "aria-controls": popoverId,
    "aria-expanded": isOpen,
    "aria-haspopup": ariaHasPopup,
  }), [ariaHasPopup, popoverId, isOpen]);

  const popoverAccessibilityProps = useMemo(() => ({
    role: getRole(ariaHasPopup),
    id: popoverId,
  }), [ariaHasPopup, popoverId]);

  return {
    activatorAccessibilityProps,
    popoverAccessibilityProps,
    isOpen,
    open: openPopover,
    close: closePopover,
    toggle,
  };
}
