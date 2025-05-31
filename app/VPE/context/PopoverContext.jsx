// popoverContext.jsx
import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";

const PopoverContext = createContext(null);

export function PopoverProvider({ children }) {
  const [open, setOpen] = useState(false);
 const popoverIdRef = useRef(`OnlineStoreUiPopover${Math.random().toString(36).slice(2)}`);
const popoverId = popoverIdRef.current;

  // Élément qui sert de référence pour la popover

  const [referenceRef, setReference] = useState(null);

  const addClickReference = useCallback((e) => {
    setReference(e.currentTarget);
    setOpen(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const value = useMemo(
    () => ({
      open,
      setOpen,
      referenceRef,
      setReference,
      addClickReference,
      popoverId,
    }),
    [open, referenceRef, addClickReference, popoverId],
  );

  return (
    <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
  );
}

export const usePopover = () => useContext(PopoverContext);
