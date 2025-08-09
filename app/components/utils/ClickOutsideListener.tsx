import { useEventListener } from "@polaris/npm"
import React, { useCallback, useRef, ReactNode } from "react"

type ClickOutsideListenerProps = {
  callback: (event: MouseEvent) => void
  children: ReactNode
}

export function ClickOutsideListener({ callback, children }: ClickOutsideListenerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastNativeEvent = useRef<Event | null>(null)

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      setTimeout(() => {
        const lastEvent = lastNativeEvent.current
        lastNativeEvent.current = null

        const container = containerRef.current
        const isClickInside = container?.contains(event.target as Node)

        if (!isClickInside && lastEvent !== event) {
          callback(event)
        }
      })
    },
    [callback]
  )

  useEventListener("click", handleDocumentClick, containerRef.current?.ownerDocument, {
    capture: true,
  })

  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    lastNativeEvent.current = event.nativeEvent
  }

  return (
    <div ref={containerRef} onClickCapture={handleClickCapture}>
      {children}
    </div>
  )
}