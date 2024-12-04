import GetArticles from "../get/articles";
import getBlog from "../get/blog";
import goArticlesFetch from "../go/articlesFetch";

import getArticle from "../get/article"
import getShop from "../get/shop"
import getTheme from "../get/theme"

import goArticleDetails from "../go/articleDetails"

const actions = {
  articleDetails: {
    get: {
      article: {
        condition: (body) => !!body.hasArticle,
        mutation: getArticle
      },
      blog: {
        mutation: getBlog,
      },
      theme: {
        mutation: getTheme
      },
      shop: {
        mutation: getShop
      },
    },
    builder: {
      
      type: "return",
      build: goArticleDetails

    }
  },
  articlesFetch: {
    get: {
      articles: {
        mutation: GetArticles,
      },
      blog: {
        mutation: getBlog,
      },
    },
    builder: {
      type: "return",

      mutation: goArticlesFetch,
    },
  },
};

export default actions;
