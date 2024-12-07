import React, { useEffect } from "react";


import { ArticleProvider, useArticle } from "./context/ArticleProvider";

import { useFetcherWithPromise } from "../../utils/useFetcherWithPromise";

// Composants personnalisés
import Loading from "./components/loading";
import Editor from "./components/editor";


  
export function Article({ articleId, hasArticle }) {
  return (
    <ArticleProvider>
      <ArticleContent articleId={articleId} hasArticle={hasArticle} />
    </ArticleProvider>
  );
}

function ArticleContent({ articleId, hasArticle }) {
  const fetcher = useFetcherWithPromise("articleDetails" + articleId);

  const { isLoading, loadArticle } = useArticle();

  useEffect(() => {
    loadArticle(fetcher, "initial", "articleDetails", {hasArticle, articleId});
  }, [articleId]);

  if (isLoading) {
    return <Loading />;
  }

  return <Editor />;
}
