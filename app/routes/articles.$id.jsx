import React from "react";
import { authenticate } from "../shopify.server"; 

import { useParams } from "@remix-run/react"; // Utiliser fetcher pour déclencher l'action

// Importation de la fonction loader et du composant Article
import { Article as ArticleComponent } from "./article/main";

// Exposition de la fonction loader
export const loader = async ({ request, params }) => {
  await authenticate.admin(request);
  return null;
};

// Composant principal de la page
export default function ArticlePage() {
  const params = useParams();
  
  return (
      <ArticleComponent articleId={params.id} hasArticle={true} />
  );
}
