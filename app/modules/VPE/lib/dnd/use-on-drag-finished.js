import { useCallback } from "react";
import { useAppStoreApi } from "../../store";

/**
 * Exécute le callback `cb` avec `true` une fois que le drag est terminé.
 * Passe `false` si un drag est en cours.
 */
export const useOnDragFinished = (cb, deps = []) => {
  const appStore = useAppStoreApi();

  return useCallback(() => {
    let dispose = () => {};

    const processDragging = (isDragging) => {
      if (isDragging) {
        cb(false);
      } else {
        setTimeout(() => {
          cb(true);
        }, 0); // Exécuter en dehors de React pour éviter les races
        if (dispose) dispose();
      }
    };

    const isDragging = appStore.getState().state.ui.isDragging;
    processDragging(isDragging);

    if (isDragging) {
      dispose = appStore.subscribe(
        (s) => s.state.ui.isDragging,
        (newValue) => {
          processDragging(newValue);
        }
      );
    }

    return dispose;
  }, [appStore, ...deps]);
};