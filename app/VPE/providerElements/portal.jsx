// portal.jsx
import { useEffect, memo, useRef } from "react";
import { useDesignSystem } from "../context/DesignSystemContext";
import { createPortal } from "react-dom";

import { registerScrollLock, unregisterScrollLock } from "../utils/ScrollLockManager";
// On wrappe dans React.memo
export const CreatPortal = memo(function CreatPortal({ open, children }) {
  const { portalRef, mounted } = useDesignSystem();


    useEffect(() => {
    if (open) {
      registerScrollLock();
    } else {
      unregisterScrollLock();
    }
    return () => {
      if (open) {
        unregisterScrollLock();
      }
    };
  }, [open]);

  if (!mounted || !portalRef) {
    return null;
  }

  const content = (
    <div className="p-theme-light Polaris-ThemeProvider--themeContainer">
      {children}
    </div>
  );

  return createPortal(content, portalRef);
});
