import { TrackingTarget } from "@VPE/constants/ui";
import { useSheetAnalyticsMetadata } from "@VPE/hooks";
import { mapExtrasToDataAttributes } from "@VPE/utils/analytics";
import { useEventListener } from "hooks";
import { type ReactNode, useCallback, useState } from "react";
import { BottomSheet, BottomSheetProps } from "./components/BottomSheet";
import { SheetExpansion } from "./constants";
import { VerticalSpacing } from "constants/spacing";
import { Header } from "./components/Header";
import { TransitionWrapper } from "./components/TransitionWrapper";


const eventListenerClose = "BottomSheetPicker:close";

const analyticsMetadata = mapExtrasToDataAttributes([{
    name: "uiInteractionSource",
    value: TrackingTarget.Mobile
}])



export interface BottomSheetPropsWrapper {
 children: ReactNode;
  onClose: () => void,
  fullHeight?: boolean,
  scrollable?: BottomSheetProps["scrollable"],
  titleTapExpansion: BottomSheetProps["titleTapExpansion"],
}


export function BottomSheetWrapper({
  children,
  onClose,
  fullHeight,
  scrollable = true,
  titleTapExpansion,
}: BottomSheetPropsWrapper) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Écouteur global (ex: clavier, événement extérieur, etc.)
  useEventListener({
    event: eventListenerClose,
    handler: handleClose,
  });

  const [expansion, setExpansion] = useState<SheetExpansion>(
    fullHeight ? SheetExpansion.FullExpand : SheetExpansion.MidExpand
  );

  const handleExpansionChange = (value: SheetExpansion) => {
    if (value === SheetExpansion.Collapse) onClose();
    setExpansion(value);
  };

  const analytics = useSheetAnalyticsMetadata();

  return (
    <BottomSheet
      expansion={expansion}
      onExpansionChange={handleExpansionChange}
      horizontalHeaderPadding={VerticalSpacing.Tight}
      titleTapExpansion={titleTapExpansion}
      scrollable={scrollable}
      analyticsMetadata={analyticsMetadata}
      {...analytics}
    >
      {children}
    </BottomSheet>
  );
}

BottomSheetWrapper.Header = Header;
BottomSheetWrapper.TransitionWrapper = TransitionWrapper;