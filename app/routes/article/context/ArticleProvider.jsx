import React, { createContext, useContext, useState } from "react";
import { initialArticle, initalBlog } from "../../../modules/initialState";
import { useLocation, useNavigate } from "@remix-run/react";
import { graphql, fileUpload, oldgraphql } from "../../../config/actions";
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

  const resetState = () => {
    navigate("", { replace: true }); // Navigation vers la page courante sans `state`
  };

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

  const processFields = async (fields) => {
  
    const processKey = async ([key, value]) => {
      if (value instanceof File) {
        const fileFormData = new FormData();
        fileFormData.append("file", value);
  
        // Faire une requête POST directement à l'API Shopify
        const response = await fetch(fileUpload.endpoint, {
          method: 'POST',
          body: fileFormData,
        });
  
        const result = await response.json();
  
        return [key, result || value];
      } else if (Array.isArray(value)) {
        // Si la valeur est un tableau, traiter chaque élément de manière récursive
        const processedArray = await Promise.all(value.map((item) => processFields(item)));
        return [key, processedArray];
      } else if (typeof value === "object" && value !== null) {
        // Si la valeur est un objet, traiter les champs de manière récursive
        const processedObject = await processFields(value);
        return [key, processedObject];
      } else {
        // Si ce n'est pas un fichier ou un objet, retourner la valeur telle quelle
        return [key, value];
      }
    };
  
    // Transformer l'objet en une liste de promesses pour chaque clé
    const entries = Object.entries(fields);
    const processedEntries = await Promise.all(entries.map(processKey));
  
    // Reconstruire l'objet à partir des entrées traitées
    return Object.fromEntries(processedEntries);
  };

  /**
 * Transforme un objet avec des fichiers et des champs texte en FormData
 * tout en conservant la structure imbriquée de l'objet pour les clés autres que les fichiers.
 *
 * @param {Object} fields - Les données à envoyer (peut inclure des fichiers, objets et tableaux imbriqués).
 * @returns {FormData} - Les données préparées pour un envoi via `fetch`.
 */

  const prepareFormData = async (fields) => {
    const form = new FormData();
    
    // Fonction pour traiter chaque clé/valeur
    const processKey = async ([key, value]) => {
      if (value instanceof File) {
        // Générer une référence unique pour le fichier
        const fileRef = `__file_${Math.random().toString(36).substring(2, 15)}__`;
        form.append(fileRef, value); // Ajouter le fichier au FormData avec la référence
        return [key, fileRef]; // Retourner la référence du fichier dans le body JSON
      } else if (Array.isArray(value)) {
        // Si la valeur est un tableau, traiter chaque élément de manière récursive
        const processedArray = await Promise.all(value.map((item) => processKey([key, item])));
        return [key, processedArray.map(item => item[1])]; // Map pour ne garder que les valeurs traitées
      } else if (typeof value === "object" && value !== null) {
        // Si la valeur est un objet, traiter les champs de manière récursive
        const processedObject = await processFields(value);
        return [key, processedObject];
      } else {
        // Si ce n'est pas un fichier ou un objet, retourner la valeur telle quelle
        return [key, value];
      }
    };
  
    // Fonction récursive pour traiter tous les champs de l'objet
    const processFields = async (fields) => {
      const entries = Object.entries(fields);
      const processedEntries = await Promise.all(entries.map(processKey));
      return Object.fromEntries(processedEntries); // Reconstruire l'objet après traitement
    };
  
    // Traiter les champs et ajouter le JSON au FormData
    const processedBody = await processFields(fields);
    form.append("body", JSON.stringify(processedBody)); // Ajouter le corps JSON structuré
    
    return form;
  };
  



  // Fonction pour charger un article
  const submit = async (
    load,
    action,
    body = {},
    assign = true,
  ) => {
    if (load === "initial") {
      setIsLoading(true);
    }


    try {
      const formData = await prepareFormData(body);

      formData.append("action", action);
  
      const responseG = await fetch(graphql.endpoint, {
        method: "POST",
        body: formData,
      });


  
      if (!responseG.ok) {
        throw new Error(`Erreur HTTP : ${responseG.status}`);
      }
  
      const response = await responseG.json();


   




    const {
      success = true,
      article,
      blog,
      errors: fetchedErrors = {},
      banners: fetchedBanners = [],
    } = response;
    const state = location.state || {};
    let bannerIds = state.bannerIds || [];

    if ((!fetchedErrors && success) || (Object.keys(fetchedErrors).length === 0 && success)) {


      if (!assign) {
        return response;
      }

      setFields(article || initialArticle);
      setOriginalFields(article || initialArticle);
      setBlog(blog || initalBlog);
    } else {
      setErrors(fetchedErrors);
    }
    
  
  
    setBanners(
      generateBanners(article, fetchedErrors, fetchedBanners, bannerIds),
    );

    bannerIds = [];
    resetState();
    setIsLoading(false);

  } catch (error) {
    console.error("Erreur lors de la soumission :", error);
    throw error;
  }


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

    const response = await fetcher.submit( {
action: action, body: JSON.stringify(body)

    }
      ,
        oldgraphql
    );


 



    const {
      success = true,
      article,
      blog,
      errors: fetchedErrors = {},
      banners: fetchedBanners = [],
    } = response;
    const state = location.state || {};
    let bannerIds = state.bannerIds || [];


 
    
    if ((!fetchedErrors && success) || (Object.keys(fetchedErrors).length === 0 && success)) {
      if (!assign) {

        return response;
      }

      setFields(article || initialArticle);
      setOriginalFields(article || initialArticle);
      setBlog(blog || initalBlog);

    

    } else {
      setErrors(fetchedErrors);
    }
    
  
  
    setBanners(
      generateBanners(article, fetchedErrors, fetchedBanners, bannerIds),
    );

    bannerIds = [];
    resetState();
    setIsLoading(false);

    return;

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
setIsLoading,
submit,
        blog,
        loadArticle,
        processFields,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}
