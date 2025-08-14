import { type ElementType, type ReactNode } from "react";
import { usePopoverAccessibilityProps } from "../hooks";
import { BottomSheetWrapper } from "../../BottomSheet";
import { SheetExpansion } from "../../BottomSheet/constants";
import { type TransitionWrapperProps } from "../../BottomSheet/components/TransitionWrapper";
import { ResponsivePopover, type ResponsivePopoverProps } from "./ResponsivePopover";

interface PopoverWrapperProps {
  children: ReactNode;
  active?: TransitionWrapperProps["show"];
  width?: number;
  popoverAccessibilityProps?: Record<string, any>;
  onClose: ResponsivePopoverProps["onClose"];
}


function PopoverWrapper({
  children,
  active = false, 
  width = 300,
  popoverAccessibilityProps,
  onClose,
}: PopoverWrapperProps) {
  return (
    <BottomSheetWrapper.TransitionWrapper show={active}>
      <ResponsivePopover
        {...popoverAccessibilityProps}
        options={{ width }}
        onClose={onClose}
        strategy="sidebar" 
        bottomSheetTitleTapExpansion={SheetExpansion.Disabled}
        scrollable={false}
      >
        {children}
      </ResponsivePopover>
    </BottomSheetWrapper.TransitionWrapper>
  );
}




export interface PopoverWithActivatorProps extends PopoverWrapperProps {
  children: ReactNode;
  activator: ReactNode;
  containerElement?: ElementType;
  containerClassname?: string;
}

export function PopoverWithActivator({
  children,
  activator,
  containerElement: Container = "div",
  containerClassname,
  ...restProps
}: PopoverWithActivatorProps) {
  const { activatorAccessibilityProps, popoverAccessibilityProps } = usePopoverAccessibilityProps({
    ariaHasPopup: "dialog",
  });

  return (
<>
      <Container {...activatorAccessibilityProps} className={containerClassname}>
        {activator}
      </Container>
      <PopoverWrapper {...restProps} popoverAccessibilityProps={popoverAccessibilityProps} >
        {children}
      </PopoverWrapper>
   </>
  );
}