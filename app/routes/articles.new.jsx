import React from "react";

import { authenticate } from "../shopify.server"; 

// Importation de la fonction loader et du composant Article
import { Article as ArticleComponent } from "./article/main";


export const loader = async ({ request, params }) => {
    await authenticate.admin(request);
    return null;
  };


// Exposition de la fonction loader

// Composant principal de la page
export default function ArticlePage() {
  
  return (
      <ArticleComponent articleId={null} hasArticle={false} />
  );
}
