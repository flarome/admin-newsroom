import React, { useState, useEffect, useMemo } from "react";

import { initialArticle, initalBlog } from "./modules/initialState";
import { loadArticle } from "./modules/loadArticle";

import Loading from "./components/loading";
import Editor from "./components/editor";

const Article = ({ currentArticleId, prepareBlog, prepareArticle, setToastMessage }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [bblog, setBlog] = useState(initalBlog);
  const [dderivedState, setDerivedState] = useState(initialArticle);

  useEffect(() => {
    async function load() {
      try {
        const { article, blog } = await loadArticle(currentArticleId);

        setDerivedState(article);
        setBlog(blog);
      } catch (error) {
        console.error("Erreur lors du chargement des articles ou du blog :", error);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []); // Dépendance pour surveiller currentArticleId

  return <>
  {isLoading ? <Loading /> : <Editor derivedState={dderivedState} blog={bblog} isNewArticle={dderivedState.isNewArticle} setDerivedState={setDerivedState} prepareBlog={prepareBlog} prepareArticle={prepareArticle} setToastMessage={setToastMessage} setIsLoading={setIsLoading} />}</>;
};

export default Article;
