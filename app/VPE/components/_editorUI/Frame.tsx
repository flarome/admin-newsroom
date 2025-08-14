import { useLayoutRefs } from "@VPE/contexts";
import { FrameClass } from "@VPE/styles/OnlineStore";
import  { useRef, useEffect, ReactNode } from "react";
import { Areas as FrameArea } from "@VPE/contexts";

interface FramePortalProps {
  children: ReactNode;
  disableDestination?: boolean;
  frameArea?: FrameArea;
}


export function FramePortal({
  children,
  disableDestination = false,
  frameArea = FrameArea.SecondaryPanel,
}: FramePortalProps) {
  const { area, setFrameAreaRef } = useLayoutRefs();
  const currentAreaRef = area[frameArea];
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!disableDestination) {
      setFrameAreaRef([frameArea, divRef]);
    }

    return () => {
      if (!disableDestination) {
        setFrameAreaRef([frameArea, null]);
      }
    };
  }, [currentAreaRef, disableDestination, setFrameAreaRef, frameArea]);

  return (
    <div className={FrameClass.PanelArea._()} ref={divRef}>
      {children}
    </div>
  );
}