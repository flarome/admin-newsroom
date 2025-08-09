import { useEffect, useRef } from "react"
import { useViewportContext } from "@VPE/contexts"



export interface AutoScrollOptions {
  axis?: "vertical" | "horizontal"
  disabled?: boolean
  maxScrollDistance?: number
}

const DEFAULT_OPTIONS: Required<AutoScrollOptions> = { 
  axis: "vertical", 
  disabled: false,
  maxScrollDistance: 100,
}


export function autoScrollOnMount(
  element: HTMLElement | null,
  options: AutoScrollOptions = {}
) {
  const { axis, disabled, maxScrollDistance } = {
    ...DEFAULT_OPTIONS,
    ...options,
  }

  const hasScrolled = useRef(false)
  const { prefersReducedMotion } = useViewportContext()

  useEffect(() => {
    if (!element || disabled || prefersReducedMotion || hasScrolled.current) return

    const { clientWidth, clientHeight, scrollWidth, scrollHeight } = element
    const isVertical = axis === "vertical"
    const scrollSize = isVertical ? scrollHeight : scrollWidth
    const clientSize = isVertical ? clientHeight : clientWidth

    if (scrollSize > clientSize) {
      const distance = Math.min(maxScrollDistance, scrollSize - clientSize)
      hasScrolled.current = true
      const scrollKey = isVertical ? "top" : "left"

      element.scrollTo({ [scrollKey]: distance })
      requestAnimationFrame(() => {
        element.scrollTo({ [scrollKey]: 0, behavior: "smooth" })
      })
    }
  }, [axis, disabled, element, maxScrollDistance, prefersReducedMotion])
}