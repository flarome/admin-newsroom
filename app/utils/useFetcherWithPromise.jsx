import React, { useRef, useCallback, useEffect } from "react";
import { useFetcher } from "@remix-run/react";

export function useFetcherWithPromise(key = null) {
    let resolveRef = useRef();
    let promiseRef = useRef();
    let fetcher = key ? useFetcher({ key: key }) : useFetcher();
  
    if (!promiseRef.current) {
      promiseRef.current = new Promise((resolve) => {
        resolveRef.current = resolve;
      });
    }
  
    const resetResolver = useCallback(() => {
      promiseRef.current = new Promise((resolve) => {
        resolveRef.current = resolve;
      });
    }, [promiseRef, resolveRef]);
  
    const submit = useCallback(
      async (...args) => {
        resetResolver();  // Réinitialise toujours avant d'envoyer une requête
        fetcher.submit(...args);
        return promiseRef.current;
      },
      [fetcher, promiseRef],
    );
    
  
    useEffect(() => {
      if (fetcher.data && fetcher.state === 'idle') {
        resolveRef.current(fetcher.data);
        resetResolver();
      }
    }, [fetcher, resetResolver]);
  
    return { ...fetcher, submit };
  }