import React, { useState, useEffect } from "react";
import { articlesFetch } from "../modules/api";

import Loading from "./Loading";
import Dashboard from "./dashboard copy";
;

const articlesPerPage = 20;

const Blog = ({ prepareEditor, setToastMessage }) => {
  const [articles, setArticles] = useState([]); // true, false ou null
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      setIsLoading(true);
      const { articles } = await articlesFetch({first: 250});
      setArticles(articles);
      setIsLoading(false);
    }
    loadArticles();
  }, []);

  return <>{isLoading ? <Loading /> : <Dashboard articles={articles} prepareEditor={prepareEditor} articlesPerPage={articlesPerPage} />
  
}</>;
};

export default Blog;
