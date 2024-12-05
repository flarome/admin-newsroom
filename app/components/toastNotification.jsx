import React, {useCallback} from "react";
import { Toast } from "@shopify/polaris";
import { useToast } from "../context/toast";

const ToastNotification = () => {
  const { toastMessage, toggleActive } = useToast(); // Utilisez le contexte
  return (
    <>
      {toastMessage && (
        <Toast content={toastMessage} onDismiss={toggleActive} duration={3000} />
      )}
    </>
  );
};

export default ToastNotification;
