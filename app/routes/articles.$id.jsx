import React, { useState, useEffect } from "react";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react"; // Utiliser fetcher pour déclencher l'action
import { authenticate, unauthenticated } from "../shopify.server";

// Composants personnalisés
import Loading from "./article/components/loading";
import Editor from "./article/components/editor";

import { api } from "../.server/api";

import { initialArticle, initalBlog } from "./article/modules/initialState";

// Loader pour l'authentification
export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

// Action pour récupérer les articles et le blog associés
export async function action({ request, params }) {
  const { admin, session } = await authenticate.admin(request);
  const { storefront } = await unauthenticated.storefront(session.shop);

  try {
    const data = await api(storefront.graphql, admin.graphql, {
      action: "articleDetails",
      body: { hasArticle: true, articleId: params.id },
    });

    return json(data); // Renvoie les données sous forme de JSON
  } catch (error) {
    console.error("Erreur dans l'action :", error);
    throw new Response("Erreur lors de la récupération des articles", {
      status: 500,
    });
  }
}

export default function Article() {
  // Fetcher pour déclencher l'action
  const fetcher = useFetcher();

  // États locaux pour gérer le chargement et les données
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState(initalBlog);
  const [derivedState, setDerivedState] = useState(initialArticle);

  // Appeler l'action principale après le rendu initial
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data === undefined) {
      fetcher.submit(null, { method: "post" }); // Déclenche l'action
    } else if (fetcher.data) {
      // Met à jour les données reçues via fetcher
      setDerivedState(fetcher.data.article || initialArticle);
      setBlog(fetcher.data.blog || initalBlog);
      setIsLoading(false); // Fin du chargement
    }
  }, [fetcher]);

  // Rendu conditionnel : Loading ou Editor
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Editor
      derivedState={derivedState}
      blog={blog}
      isNewArticle={derivedState.isNewArticle}
      setDerivedState={setDerivedState}
      setIsLoading={setIsLoading}
    />
  );
}
