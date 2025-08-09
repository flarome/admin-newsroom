import { Tooltip, Text, Box } from "@polaris/npm";
import {useIsomorphicLayoutEffect } from '@shopify/react-hooks'
import { useRef, useState, ReactNode } from "react";

type TruncateWithTooltipProps = {
  children: ReactNode;
};

export function TruncateWithTooltip({ children }: TruncateWithTooltipProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current) {
      const hasOverflow = containerRef.current.scrollWidth > containerRef.current.offsetWidth;
      setIsTruncated(hasOverflow);
    }
  }, [children]);

  const content = (
    <Box width="100%" ref={containerRef}>
      <Text as="span" truncate={!0}>{children}</Text>
    </Box>
  );

  return isTruncated ? (
    <Tooltip
      zIndexOverride={520}
      preferredPosition="above"
      hoverDelay={1e3}
      content={children}
    >
      {content}
    </Tooltip>
  ) : (
    content
  );
}