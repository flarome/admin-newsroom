import React, { createContext, useContext, useState } from "react";
import { initialArticle, initalBlog } from "../../../modules/initialState";
import { useLocation } from "@remix-run/react";
import { graphql } from "../../../config/actions";

import { useMetaobjectModal } from "./ModalContext";
// Créez le contexte
const ArticleContext = createContext();

// Hook pour utiliser le contexte
export function useMetaobject() {
  return useContext(ArticleContext);
}

// Provider pour gérer les articles et le chargement
export function MetaobjectProvider({ children }) {

      const { modalState, setModalState } = useMetaobjectModal();

  const location = useLocation();

  const [template, setTemplate] = useState({});
  const [isNew, setIsNew] = useState(false);
  const [fields, setFields] = useState({});
  const [originalFields, setOriginalFields] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [handle, setHandle] = useState(null);

    // Fonction pour fermer la modal
    const resetMetaobject = () => {
      setTemplate({});
      setIsNew(false);
      setFields({});
      setHandle(null);
    setOriginalFields({});
    setIsLoading(true);
    setErrors({});

    };

  // Fonction pour supprimer une erreur spécifique
  const removeError = (key) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[key]; // Supprime l'erreur spécifique
      updateErrorBanner(updatedErrors); // Met à jour la bannière des erreurs
      return updatedErrors;
    });
  };

  // Fonction pour charger un article
  const loadMetaobject = async (
    fetcher,
    load,
    action,
    body = {},
    assign = true,
  ) => {
    if (load === "initial") {
      setIsLoading(true);
    }

    const response = await fetcher.submit(
      {
        action: action,
        body: JSON.stringify(body),
      },
      graphql,
    );

    if (!assign) {
      return response;
    }

    const {
      entrie = {},
      metaobjectDefinition = {},
      errors: fetchedErrors = {},
      banners: fetchedBanners = [],
    } = response;
    const state = location.state || {};
    let bannerIds = state.bannerIds || [];

    if (!fetchedErrors || Object.keys(fetchedErrors).length === 0) {
      const fields1 = entrie?.fields || {};

   
      
      setFields(fields1);
      setTemplate(metaobjectDefinition);
      setOriginalFields(fields1);
      setIsNew(entrie?.handle && entrie?.handle !== "" ? false : true);

      
    } else {
      setErrors(fetchedErrors);
    }

    setModalState({...modalState, handle: entrie.handle || modalState.handle, id: entrie.id || modalState.id, type: metaobjectDefinition.type || modalState.type  });
    

    
    setIsLoading(false);
  };

  return (
    <ArticleContext.Provider
      value={{
        errors,
        isNew,
        handle,
        resetMetaobject,
        removeError,
        originalFields,
        setOriginalFields,
        template, setTemplate,
        fields,
        setFields,
        isLoading,
        setIsLoading,
        loadMetaobject,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
