import {useMemo, type ReactNode } from "react";
import { Popover, type PopoverProps } from "./Popover";
import { BottomSheetWrapper, type BottomSheetPropsWrapper } from "../../BottomSheet";
import { type HeaderProps } from "../../BottomSheet/components/Header";
import { PopoverContext, usePopoverContext } from "../context";
import { useViewportContext } from "@VPE/contexts";

// Wrapper principal (ex-yX)
export interface ResponsivePopoverProps extends PopoverProps {
  children: ReactNode;
  onClose: () => void;
  bottomSheetTitleTapExpansion?: BottomSheetPropsWrapper["titleTapExpansion"];
  scrollable?: boolean;
  mobile?: boolean;

}

const ResponsivePopoverInner: React.FC<ResponsivePopoverProps> = ({
  children,
  onClose,
  bottomSheetTitleTapExpansion,
  scrollable = true,
  mobile,
  ...rest
}) => {
  const contextValue = useMemo(() => ({ closePopover: onClose }), [onClose]);

  if (mobile) {
    return (
      <BottomSheetWrapper
        onClose={onClose}
        titleTapExpansion={bottomSheetTitleTapExpansion}
        scrollable={scrollable}
      >
        <PopoverContext.Provider value={contextValue}>
          {children}
        </PopoverContext.Provider>
      </BottomSheetWrapper>
    );
  }

  return (
    <PopoverContext.Provider value={contextValue}>
      <Popover {...rest} onClose={onClose}>
        <Popover.Card>
          {children}
        </Popover.Card>
      </Popover>
    </PopoverContext.Provider>
  );
};


export const ResponsivePopover = (props: ResponsivePopoverProps) => {
 const {mobile} = useViewportContext();

 return (
<ResponsivePopoverInner {...props} mobile={mobile} />
 )

}

// Header spécifique mobile (ex-AZe)
export interface ResponsivePopoverHeaderProps {
  onBack: HeaderProps['onBack'];
  title: HeaderProps["title"];
}

export const ResponsivePopoverHeader: React.FC<ResponsivePopoverHeaderProps> = ({ onBack, title }) => {
  const { closePopover } = usePopoverContext();
  const { mobile } = useViewportContext();

  if (!mobile) return null;

  return (
    <BottomSheetWrapper.Header
      title={title}
      onClose={closePopover}
      onBack={onBack}
    />
  );
};


ResponsivePopover.Header = ResponsivePopoverHeader;

