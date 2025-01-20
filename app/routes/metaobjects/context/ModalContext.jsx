import React, { createContext, useState, useContext } from "react";

// app bridge 
import { useAppBridge } from "@shopify/app-bridge-react";

// Création du contexte
const ModalContext = createContext();

// Fournisseur du contexte
export const MetaobjectModalProvider = ({ children }) => {
    
  const [modalState, setModalState] = useState({ isOpen: false, id: null, handle: null });

  // Fonction pour afficher la modal
  const showModal = (type, id, handle) => {
    setModalState({ isOpen: true, id: id, type: type , handle: handle });
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setModalState({ isOpen: false, id: null, type: null, handle: null });
  };

  return (
    <ModalContext.Provider value={{ modalState, setModalState, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useMetaobjectModal = () => useContext(ModalContext);
