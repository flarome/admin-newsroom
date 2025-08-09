import { useState, useCallback } from "react"
import { useThrottledCallback } from "use-debounce"
import { useObservedDOMElement } from "./useObservedDOMElement"
import {useEventListener} from '@polaris/npm'

// === Types des options du hook
type ObserveAxes = {
  vertical?: boolean
  horizontal?: boolean
}

type UseScrollAbilityOptions = {
  tolerance?: number
  throttle?: number
  observeAxes?: ObserveAxes
}

// === Type de l'état retourné
type ScrollAbilityState = {
  canScrollUp: boolean
  canScrollDown: boolean
  canScrollLeft: boolean
  canScrollRight: boolean
}

// === Valeurs par défaut
const DEFAULT_OPTIONS: Required<UseScrollAbilityOptions> = {
  tolerance: 10,
  throttle: 5,
  observeAxes: {
    vertical: true,
    horizontal: false,
  },
}

const INITIAL_SCROLL_STATE: ScrollAbilityState = {
  canScrollUp: false,
  canScrollDown: false,
  canScrollLeft: false,
  canScrollRight: false,
}

export function areScrollStatesEqual(a: ScrollAbilityState, b: ScrollAbilityState): boolean {
  return (
    a.canScrollUp === b.canScrollUp &&
    a.canScrollDown === b.canScrollDown &&
    a.canScrollLeft === b.canScrollLeft &&
    a.canScrollRight === b.canScrollRight
  )
}

/**
 * Hook React qui observe un élément scrollable pour indiquer si on peut scroller
 * dans chaque direction (haut, bas, gauche, droite).
 * Supporte throttling et tolérance.
 */
export function useScrollAbility(
  element: HTMLElement | null,
  options?: UseScrollAbilityOptions
): ScrollAbilityState {
  const { tolerance, throttle, observeAxes } = { ...DEFAULT_OPTIONS, ...options }
  const { vertical, horizontal } = {...DEFAULT_OPTIONS.observeAxes, ...observeAxes}

  const [scrollAbility, setScrollAbility] = useState<ScrollAbilityState>(INITIAL_SCROLL_STATE)

  // Fonction qui calcule la possibilité de scroll dans chaque direction
  const checkScroll = useCallback(() => {
    if (!element) return

    setScrollAbility((prevState) => {
      const canScrollVertically = vertical
        ? {
            canScrollUp: element.scrollTop > tolerance,
            canScrollDown: element.scrollHeight - element.clientHeight - element.scrollTop > tolerance,
          }
        : {}

      const canScrollHorizontally = horizontal
        ? {
            canScrollLeft: element.scrollLeft > tolerance,
            canScrollRight: element.scrollWidth - element.clientWidth - element.scrollLeft > tolerance,
          }
        : {}

      const newState: ScrollAbilityState = {
        ...INITIAL_SCROLL_STATE,
        ...canScrollVertically,
        ...canScrollHorizontally,
      }


       return areScrollStatesEqual(prevState, newState) ? prevState : newState
    })
  }, [element, tolerance, vertical, horizontal])




  // Throttle la fonction checkScroll (implémentation simple)
  const throttleFn = useThrottledCallback(checkScroll, throttle, { leading: true })



  useObservedDOMElement(element, checkScroll);

useEventListener("scroll", throttleFn, element || undefined, {passive: !0})


  return scrollAbility
}