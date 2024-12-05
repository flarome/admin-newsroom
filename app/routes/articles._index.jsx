import React, { useState, useEffect } from "react";

// Remix
import { useFetcher } from "@remix-run/react";
import { authenticate } from "../shopify.server";

// Composants personnalisés
import Loading from "./dashboard/Loading";
import Dashboard from "./dashboard/dashboard copy";


import graphql from "../config/actions";
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
  const fetcher = useFetcher({ key: "articlesFetch" });
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  // Charger les articles uniquement si aucune donnée n'est encore disponible
  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle" && isLoading) {
      // Déclencher la soumission
      fetcher.submit({ 
        action: "articlesFetch",
  
  
        body: JSON.stringify({ first: 250 }),
      }, graphql);
      
    }



    // Lorsque les données sont disponibles, mettre à jour les articles
    if (fetcher.data?.articles) {
      setArticles(fetcher.data.articles);
      setIsLoading(false);
    }
  }, [fetcher.data, fetcher.state, isLoading]);

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
