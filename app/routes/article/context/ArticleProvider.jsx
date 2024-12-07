import React, { createContext, useContext, useState, useMemo } from "react";
import { initialArticle, initalBlog } from "../../../modules/initialState";
import { useLocation, useNavigate } from "@remix-run/react";
import graphql from "../../../config/actions";
import { Link } from "@shopify/polaris";
import { CheckCircleIcon, AlertCircleIcon } from "@shopify/polaris-icons";
// Créez le contexte
const ArticleContext = createContext();

// Hook pour utiliser le contexte
export function useArticle() {
  return useContext(ArticleContext);
}

// Provider pour gérer les articles et le chargement
export function ArticleProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [fields, setFields] = useState(initialArticle);
  const [originalFields, setOriginalFields] = useState(initialArticle);
  const [blog, setBlog] = useState(initalBlog);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [banners, setBanners] = useState([]);

  // Fonction pour retirer une bannière
  const removeBanner = (id) => {
    setBanners((prevBanners) =>
      prevBanners.filter((banner) => banner.id !== id),
    );
  };

  // Fonction pour mettre à jour les bannières d'erreurs
  const updateErrorBanner = (updatedErrors) => {
    if (Object.keys(updatedErrors).length > 0) {
      setBanners((prevBanners) => [
        ...prevBanners.filter((banner) => banner.id !== "articleFormErrors"),
        {
          id: "articleFormErrors",
          title: `Il y a ${Object.keys(updatedErrors).length} erreur${Object.keys(updatedErrors).length > 1 ? "s" : ""}`,
          content: (
            <ul className="Polaris-List Polaris-List--spacingLoose">
              {Object.values(updatedErrors).map((error, index) => (
                <li key={index} className="Polaris-List__Item">
                  {error}
                </li>
              ))}
            </ul>
          ),
          tone: "critical",
          icon: AlertCircleIcon,
          removable: false,
        },
      ]);
    } else {
      removeBanner("articleFormErrors"); // Supprime la bannière si plus aucune erreur n'existe
    }
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

  // Fonction pour générer les bannières dynamiquement
  const generateBanners = (
    article,
    fetchedErrors,
    fetchedBanners,
    bannerIds,
  ) => {
    const dynamicBanners = [...fetchedBanners];

    if (bannerIds.includes("articleCreateSuccess")) {
      dynamicBanners.push({
        id: "articleCreateSuccess",
        title: `${article.title} créé`,
        content: (
          <div>
            {article.isPublished && article.url ? (
              <Link external target="_blank" monochrome url={article.url}>
                Afficher sur votre boutique en ligne
              </Link>
            ) : (
              "Publiez cet article de blog en le rendant visible"
            )}
            <span> ou </span>
            <span
              role="button"
              onClick={() => navigate("../new", { relative: "path" })}
              data-polaris-unstyled="true"
              className="Polaris-Link Polaris-Link--monochrome"
            >
              créer un autre article de blog
            </span>
            .
          </div>
        ),
        tone: "success",
        icon: CheckCircleIcon,
        removable: true,
        onRemove: () => removeBanner("articleCreateSuccess"),
      });
    }

    if (fetchedErrors && Object.keys(fetchedErrors).length > 0) {
      dynamicBanners.push({
        id: "articleFormErrors",
        title: `Il y a ${Object.keys(fetchedErrors).length} erreur${Object.keys(fetchedErrors).length > 1 ? "s" : ""}`,
        content: (
          <ul className="Polaris-List Polaris-List--spacingLoose">
            {Object.values(fetchedErrors).map((error, index) => (
              <li key={index} className="Polaris-List__Item">
                {error}
              </li>
            ))}
          </ul>
        ),
        tone: "critical",
        icon: AlertCircleIcon,
        removable: false,
      });
    }

    return dynamicBanners;
  };

  // Fonction pour charger un article
  const loadArticle = async (
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
    const bannerIds = state.bannerIds || [];

    if (!fetchedErrors || Object.keys(fetchedErrors).length === 0) {
      setFields(article || initialArticle);
      setOriginalFields(article || initialArticle);
      setBlog(blog || initalBlog);
    } else {
      setErrors(fetchedErrors);
    }
    
  
  
    setBanners(
      generateBanners(article, fetchedErrors, fetchedBanners, bannerIds),
    );
    setIsLoading(false);
  };

  return (
    <ArticleContext.Provider
      value={{
        errors,

        banners,

        removeError,
        originalFields,
        fields,
        setFields,
isLoading,
        blog,
        loadArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
