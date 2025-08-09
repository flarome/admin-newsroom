import React, { useCallback, useState } from "react";
import { Backdrop, Portal, TrapFocus } from "@polaris/npm";
import { getAnchorElementByAriaControls } from "utils/dom/getAnchorElement";
import { usePopoverLayout } from "../hooks";
import {
  computePopoverPosition,
  type PositionOptions,
} from "../../Overlay/placement";
import { convertPositionStyles } from "../../Overlay/placement/position";
import { useShortcut } from "@shopify/react-shortcuts";
import { classnames } from "lib";
import { PopoverClass } from "@VPE/styles/OnlineStore";
import { ClickOutsideListener } from "components/utils/ClickOutsideListener";
import { PopoverCard } from "./PopoverCard";

// Types
export interface PopoverProps extends PositionOptions {
  id?: string;
  children: React.ReactNode;
  role?: string;
  preventPortal?: boolean;
  onClose?: (event: { source: number; target?: EventTarget | null }) => void;
  anchor?: HTMLElement | null;
  absoluteCoordinates?: { x: number; y: number };
  visibility?: "hidden" | "visible";
  zIndexOverride?: number;
  noAnimation?: boolean;
  backdrop?: boolean | React.ComponentProps<typeof Backdrop>;
  scrollHintOptions?: any;
}

export function Popover({
  id,
  children,
  role,
  preventPortal,
  onClose,
  anchor,
  absoluteCoordinates,
  visibility,
  zIndexOverride,
  noAnimation, 
  backdrop,
  scrollHintOptions,
  ...rest
}: PopoverProps) {
  const backdropProps = {
    transparent: !0,
    zIndexOverride:
      zIndexOverride !== undefined ? zIndexOverride - 1 : undefined,
  };

  const anchorRef = getAnchorElementByAriaControls(id);
  const [popoverElement, setPopoverElement] = useState<HTMLDivElement | null>(
    null,
  );

  const popoverPosition = usePopoverLayout({
    anchor: anchor ?? anchorRef,
    popover: popoverElement,
    scrollHintOptions,
    absoluteCoordinates,
  });

  const computedPopoverPosition = computePopoverPosition(rest, popoverPosition);

  const style = computedPopoverPosition
    ? convertPositionStyles({
        ...computedPopoverPosition,
        // @ts-ignore
        zIndex: zIndexOverride || computedPopoverPosition.zIndex, // instable
      })
    : void 0;

  const handleEscape = useCallback(() => {
    if (visibility !== "hidden") {
      onClose?.({ source: 1 });
      requestAnimationFrame(() => anchorRef?.focus?.());
    }
  }, [onClose, anchorRef, visibility]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (visibility === "hidden") return;

      const target = event.target;
      if (
        target instanceof Element &&
        target.closest(`[aria-controls="${id}"]`)
      ) {
        event.stopPropagation();
        event.preventDefault();
      }

      onClose?.({ source: 0, target });
      requestAnimationFrame(() => anchorRef?.focus?.());
    },
    [id, onClose, anchorRef, visibility],
  );

  useShortcut(["Escape"], handleEscape, { ignoreInput: true });

  function renderBackdrop() {
    if (!backdrop || visibility === "hidden") return null;

    if (backdrop === true) {
      return <Backdrop {...backdropProps} />;
    }

    return <Backdrop {...backdropProps} {...backdrop} />;
  }

  const content = (
    <>
      {renderBackdrop()}
      <TrapFocus trapping={visibility !== "hidden" && role === "dialog"}>
        <ClickOutsideListener callback={handleClickOutside}>
          <div
            id={id}
            style={style}
            className={classnames(
              PopoverClass._({ hidden: visibility === "hidden" }),
              noAnimation && PopoverClass.NoAnimation,
            )}
            role={role}
            ref={setPopoverElement}
          >
            {children}
          </div>
        </ClickOutsideListener>
      </TrapFocus>
    </>
  );

  return preventPortal ? content : <Portal>{content}</Portal>;
}

Popover.Card = PopoverCard;
