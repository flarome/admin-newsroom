import React, { useState, useEffect } from "react";

// Remix
import { useLocation } from "@remix-run/react";
import { useFetcherWithPromise } from "../utils/useFetcherWithPromise";
import { authenticate } from "../shopify.server";

// Composants personnalisés
import Loading from "./dashboard/state/Loading";
import Dashboard from "./dashboard/state/dashboard";


import { graphql } from "../config/actions";
// Nombre d'articles par page
const articlesPerPage = 20;

/**
 * Loader pour vérifier l'authentification
 */
export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

/**
 * Composant principal de la page Index
 */
export default function Index() {
  const location = useLocation();
  // Récupérer l'état passé
  const state = location.state || {};
  const reload = state?.reload !== undefined ? state.reload : false;
  const hasState = state?.reload !== undefined;

  const fetcher = useFetcherWithPromise("articlesFetch");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Charger les articles uniquement si aucune donnée n'est encore disponible
  useEffect(() => {
    const loadArticle = async () => {
      setIsLoading(true);
  
      const response = await fetcher.submit(
        {
          action: "articlesFetch",
          body: JSON.stringify({ first: 250 }),
        },
        graphql
      );
      setArticles(response?.articles);
      setIsLoading(false);
    };

    // Charger les articles uniquement si nécessaire (reload ou absence de données)
    if (!hasState || reload) {
      loadArticle();
    }
  }, [reload, hasState]); // Dépendances ajustées pour garantir un comportement constant

  // Si les articles ne sont pas encore chargés, afficher un indicateur de chargement
  if (isLoading) {
    return <Loading />;
  }

  // Rendu principal
  return (
    <Dashboard
      articles={articles}
      articlesPerPage={articlesPerPage}
    />
  );
}
