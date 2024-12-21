import React, { useEffect } from "react";

import { ArticleProvider, useArticle } from "./context/ArticleProvider";

import { useFetcherWithPromise } from "../../utils/useFetcherWithPromise";

import { MetaobjectModalProvider, useMetaobjectModal } from "../metaobjects/context/ModalContext";
import { MetaobjectModal } from "../metaobjects/main";

// State
import Loading from "./state/loading";
import Editor from "./state/editor";

export function Article({ articleId, hasArticle }) {
  return (
  
    <MetaobjectModalProvider>

    <ArticleProvider>   
      
    

      <ArticleContent articleId={articleId} hasArticle={hasArticle} />


    
      
      </ArticleProvider>

      <MetaobjectModal />

      </MetaobjectModalProvider> 
   
  );
}

function ArticleContent({ articleId, hasArticle }) {
  const fetcher = useFetcherWithPromise("articleDetails" + articleId);

  const { isLoading, loadArticle } = useArticle();

  useEffect(() => {
    loadArticle(fetcher, "initial", "articleDetails", {
      hasArticle,
      articleId,
    });
  }, [articleId]);

  if (isLoading) {
    return <Loading />;
  }

  return <Editor />;
}
