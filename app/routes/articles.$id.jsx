import React, { useState, useEffect } from "react";

// Remix
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react"; // Récupère les données de l'action
import { authenticate, unauthenticated } from "../shopify.server";

// Composants personnalisés
import Loading from "./article/components/loading";
import Editor from "./article/components/editor";

import { initialArticle, initalBlog } from "./article/modules/initialState";

// Loader pour l'authentification
export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};

// Action pour récupérer les articles et le blog associés
export const action = async ({ request, params }) => {
  const { admin, session } = await authenticate.admin(request);
  const { storefront } = await unauthenticated.storefront(session.shop);

  try {
    const data = await api(storefront.graphql, admin.graphql, {
      action: "articleDetails",
      body: { hasArticle: true, articleId: params.id },
    });

    return json(data); // Renvoie les données sous forme de JSON
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    throw new Response("Erreur lors de la récupération des articles", {
      status: 500,
    });
  }
};

export default function Article() {
  const actionData = useActionData(); // Utilise useActionData pour accéder aux données renvoyées par l'action

  const [isLoading, setIsLoading] = useState(true);
  const [bblog, setBlog] = useState(initalBlog);
  const [derivedState, setDerivedState] = useState(initialArticle);

  useEffect(() => {
    if (actionData) {
      setDerivedState(actionData.article); // Met à jour l'état avec les données de l'article
      setBlog(actionData.blog); // Met à jour l'état avec les données du blog
      setIsLoading(false); // Arrête le chargement une fois les données récupérées
    }
  }, [actionData]); // Re-exécute cet effet lorsque `actionData` change

  return (
    <>
      {isLoading ? (
        <Loading /> // Affiche le composant Loading pendant que les données se chargent
      ) : (
        <Editor
          derivedState={derivedState}
          blog={bblog}
          isNewArticle={derivedState.isNewArticle}
          setDerivedState={setDerivedState}
          setIsLoading={setIsLoading}
        />
      )}
    </>
  );
}
