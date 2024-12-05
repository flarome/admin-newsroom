import React, { createContext, useState, useContext, useCallback } from "react";

// Création du contexte pour le toast
const ToastContext = createContext();

// Fournisseur de contexte pour partager les toasts
export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(null);
  const toggleActive = useCallback(() => setToastMessage(null), []);
  // Fonction pour afficher un toast
  const showToast = (message) => {
    setToastMessage(message);
  };



  return (
    <ToastContext.Provider value={{ toastMessage, showToast, toggleActive }}>
      {children}
    </ToastContext.Provider>
  );
};

// Hook personnalisé pour utiliser le toast
export const useToast = () => useContext(ToastContext);
