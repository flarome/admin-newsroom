import  { useRef, useLayoutEffect } from "react";
import { usePopover } from "../context/PopoverContext";

import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react";
import { CreatPortal } from "./portal";

export function PopoverWithReference({ children, popover, referent }) {
  const { setReference } = usePopover();

  // Dynamically render the referent element (e.g., 'span', 'li', etc.)
  const Tag = referent.as || "span";

  return (
    <Tag {...referent.props} ref={setReference}>
      {children}
      <Popover {...popover.props}>{popover.content}</Popover>
    </Tag>
  );
}
export function Popover({
  children,
  transparentBackdrop = true,
  width,
  height,
  maxHeight,
  maxWidth,
  placement = "right-start",
  right,
  bottom,
}) {
  const { open, setOpen, referenceRef, popoverId } = usePopover();
  const popoverRef = useRef(null);

  // Hook Floating UI avec positionnement dynamique
  const { refs, x, y } = useFloating({
    open,
    transform: false,
    whileElementsMounted: open ? autoUpdate : undefined,
    placement,
    middleware: [offset(8), flip(), shift()],
  });

  // Connecte la ref externe (span) au système Floating UI
  useLayoutEffect(() => {
    if (referenceRef) {
      refs.setReference(referenceRef);
    }
  }, [referenceRef, refs]);

  // Utilise les valeurs passées, sinon valeurs par défaut
  const popoverStyle = {
    ...(y !== undefined && { "--osui_popover-top": toCssUnit(y) }),
    ...(x !== undefined && { "--osui_popover-left": toCssUnit(x) }),
    ...(right !== undefined && { "--osui_popover-right": toCssUnit(right) }),
    ...(bottom !== undefined && { "--osui_popover-bottom": toCssUnit(bottom) }),
    ...(width !== undefined && { "--osui_popover-width": toCssUnit(width) }),
    ...(height !== undefined && { "--osui_popover-height": toCssUnit(height) }),
    ...(maxWidth !== undefined && {
      "--osui_popover-max-width": toCssUnit(maxWidth),
    }),
    ...(maxHeight !== undefined
      ? { "--osui_popover-max-height": toCssUnit(height) }
      : {
          "--osui_popover-max-height": `calc(100vh - 8px - var(--osui_popover-top))`,
        }),
  };

  return (
    <CreatPortal open={open}>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className={
            "Online-Store-UI-Popover-Backdrop_1er5d" +
            (transparentBackdrop
              ? " Online-Store-UI-Popover-Backdrop--transparent_4isgr"
              : "")
          }
        />
      )}

      <div
        ref={(el) => {
          refs.setFloating(el);
          popoverRef.current = el;
        }}
        role="dialog"
        id={popoverId}
        onClick={(e) => e.stopPropagation()}
        className={
          "Online-Store-UI-Popover_wdah3" +
          (!open ? " Online-Store-UI-Popover--hidden_1ebdd" : "")
        }
        style={popoverStyle}
      >
        <div className="Online-Store-UI-Popover-Card_1nihz Online-Store-UI-Popover-Card--bottomShadow_5mbfk">
          {children}
        </div>
      </div>
    </CreatPortal>
  );
}
function toCssUnit(value) {
  return typeof value === "number" ? `${value}px` : value;
}
