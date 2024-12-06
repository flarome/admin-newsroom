import React, { createContext, useContext, useState } from "react";
import { initialArticle, initalBlog } from "../modules/initialState";
import graphql from "../../../config/actions";
// Créez le contexte
const ArticleContext = createContext();

// Hook pour utiliser le contexte
export function useArticle() {
  return useContext(ArticleContext);
}

// Provider pour gérer les articles et le chargement
export function ArticleProvider({ children }) {
  const [fields, setFields] = useState(initialArticle);
  const [blog, setBlog] = useState(initalBlog);
  const [isLoading, setIsLoading] = useState(true);

  // Fonction pour recharger un article
  const loadArticle = async (articleId, fetcher, hasArticle) => {
    setIsLoading(true);

    const response = await fetcher.submit(
      {
        action: "articleDetails",
        body: JSON.stringify({ hasArticle, articleId }),
      },
      graphql
    );
    setFields(response?.article || initialArticle);
    setBlog(response?.blog || initalBlog);
    setIsLoading(false);
  };

 

  return (
    <ArticleContext.Provider
      value={{
        fields,
        setFields,
        blog,
        setBlog,
        isLoading,
        setIsLoading,
        loadArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
