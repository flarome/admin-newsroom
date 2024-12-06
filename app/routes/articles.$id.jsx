import React, { useState, useEffect } from "react";
import { useParams } from "@remix-run/react"; // Utiliser fetcher pour déclencher l'action
import { authenticate } from "../shopify.server";

import { ArticleProvider, useArticle } from "./article/context/ArticleProvider";

import { useFetcherWithPromise } from "../utils/useFetcherWithPromise";

// Composants personnalisés
import Loading from "./article/components/loading";
import Editor from "./article/components/editor";

// Loader pour l'authentification
export const loader = async ({ request, params }) => {
  await authenticate.admin(request);
  return null;
};

export default function Article() {
  const params = useParams();

  return (
    <ArticleProvider>
      <ArticleContent articleId={params.id} />
    </ArticleProvider>
  );
}

function ArticleContent({ articleId }) {
  const fetcher = useFetcherWithPromise("articleDetails" + articleId);

  const { isLoading, loadArticle } = useArticle();

  useEffect(() => {
    loadArticle(articleId, fetcher, true);
  }, [articleId]);

  if (isLoading) {
    return <Loading />;
  }

  return <Editor />;
}
