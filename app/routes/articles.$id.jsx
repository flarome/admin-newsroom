import React, { useState, useEffect } from "react";
import { useFetcher, useParams } from "@remix-run/react"; // Utiliser fetcher pour déclencher l'action
import { authenticate } from "../shopify.server";


// Composants personnalisés
import Loading from "./article/components/loading";
import Editor from "./article/components/editor";
import { initialArticle, initalBlog } from "./article/modules/initialState";



import graphql from "../config/actions";

// Loader pour l'authentification
export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return null;
};



export default function Article() {



  // Fetcher pour déclencher l'action
  const fetcher = useFetcher({ key: "articleDetails" });
  const params = useParams();

  // États locaux pour gérer le chargement et les données
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState(initalBlog);
  const [derivedState, setDerivedState] = useState(initialArticle);

  // Appeler l'action principale après le rendu initial
  useEffect(() => {
    if (isLoading && fetcher.state === "idle" && !fetcher.data) {




      fetcher.submit({ 
        action: "articleDetails",


        body: JSON.stringify({ hasArticle: true, articleId: params.id }),
      }, graphql);
      


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
    <div>
    <Editor
      derivedState={derivedState}
      blog={blog}
      isNewArticle={derivedState.isNewArticle}
      setDerivedState={setDerivedState}
      setIsLoading={setIsLoading}
    />



    </div>
  );
}
