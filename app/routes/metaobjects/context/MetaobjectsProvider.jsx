import React, { createContext, useContext, useState } from "react";
import { initialArticle, initalBlog } from "../../../modules/initialState";
import { useLocation } from "@remix-run/react";
import graphql from "../../../config/actions";
// Créez le contexte
const ArticleContext = createContext();

// Hook pour utiliser le contexte
export function useMetaobject() {
  return useContext(ArticleContext);
}

// Provider pour gérer les articles et le chargement
export function MetaobjectProvider({ children }) {
  const location = useLocation();

  const [fields, setFields] = useState(initialArticle);
  const [originalFields, setOriginalFields] = useState(initialArticle);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});

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
      article,
      blog,
      errors: fetchedErrors = {},
      banners: fetchedBanners = [],
    } = response;
    const state = location.state || {};
    let bannerIds = state.bannerIds || [];

    if (!fetchedErrors || Object.keys(fetchedErrors).length === 0) {
      setFields(article || initialArticle);
      setOriginalFields(article || initialArticle);
    } else {
      setErrors(fetchedErrors);
    }

    setIsLoading(false);
  };

  return (
    <ArticleContext.Provider
      value={{
        errors,

        removeError,
        originalFields,
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
