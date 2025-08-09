import { useEffect, useRef } from "react";
import {useIsomorphicLayoutEffect } from '@shopify/react-hooks'
interface UseEventListenerParams<K extends keyof WindowEventMap> {
  event: string | K;
  handler: (event: WindowEventMap[K]) => void;
  target?: EventTarget;
  capture?: boolean;
  passive?: boolean;
  disabled?: boolean;
}

export function useEventListener<K extends keyof WindowEventMap>({
  event,
  handler,
  target = window,
  capture,
  passive,
  disabled,
}: UseEventListenerParams<K>) { 
  const handlerRef = useRef(handler);

  // Met à jour la ref si handler change (sans ré-attacher l'écouteur)
  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    if (disabled) return;

    const eventTarget = target ?? window;

    const eventListener = (event: Event) => {
      handlerRef.current(event as WindowEventMap[K]);
    };

    eventTarget.addEventListener(event, eventListener, { capture, passive });

    return () => {
      eventTarget.removeEventListener(event, eventListener, capture);
    };
  }, [event, target, capture, passive, disabled]);
}