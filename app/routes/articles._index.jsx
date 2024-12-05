import React, { useState, useEffect } from "react";

// Remix
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { authenticate, unauthenticated } from "../shopify.server";

// Composants personnalisés
import Loading from "./dashboard/Loading";
import Dashboard from "./dashboard/dashboard copy";

import { api } from "../.server/api";

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
 * Action pour récupérer les articles
 */
export const action = async ({ request }) => {
  console.log("1");
  const { admin, session } = await authenticate.admin(request);
  console.log("2");

  const { storefront } = await unauthenticated.storefront(session.shop);
  console.log("3");
  try {
    const { articles } = await api(storefront.graphql, admin.graphql, {
      action: "articlesFetch",
      body: { first: 250 },
    });
    console.log("4");
    console.log("articles", articles);

    return json({ articles });
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    throw new Response("Erreur lors de la récupération des articles", {
      status: 500,
    });
  }
};

/**
 * Composant principal de la page Index
 */
export default function Index() {
  const fetcher = useFetcher();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Charger les articles uniquement si aucune donnée n'est encore disponible
  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle" && isLoading) {
      // Déclencher la soumission
      fetcher.submit({}, { method: "post" });
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
