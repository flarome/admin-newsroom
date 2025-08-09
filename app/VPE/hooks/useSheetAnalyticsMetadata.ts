import { useLayoutRefs } from "@VPE/contexts";
import { useUserAgent } from "contexts";
import { useEffect, useState } from "react";
import { getWindowMetrics } from "utils/window";

interface AnalyticsMetadata {
  fullCollapse: boolean;
  isModal: boolean;
  transparentBackdrop: boolean;
  maxHeight?: number;
}

export function useSheetAnalyticsMetadata(): AnalyticsMetadata {
  const { isNativeApp } = useUserAgent();
  const { height } = getWindowMetrics();
  const { area: { header } } = useLayoutRefs();

  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!maxHeight && header?.current) {
      const headerHeight = header.current.getBoundingClientRect().height;
      const ratio = (height - headerHeight - 2) / height;
      setMaxHeight(ratio);
    }
  }, [height, header, maxHeight]);

  return {
    fullCollapse: true,
    isModal: true,
    transparentBackdrop: isNativeApp,
    maxHeight: isNativeApp ? 1 : maxHeight,
  };
}