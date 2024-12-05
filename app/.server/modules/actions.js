import validateArticle from "../validate/article";

import getArticles from "../get/articles";
import getBlog from "../get/blog";
import getArticle from "../get/article";
import getShop from "../get/shop";
import getTheme from "../get/theme";

import putArticleCreate from "../put/articleCreate";
import putArticleUpdate from "../put/articleUpdate";
import putArticleDelete from "../put/articleDelete";

import goArticlesFetch from "../go/articlesFetch";
import goArticleDetails from "../go/articleDetails";
import goAuthorAutocomplete from "../go/authorAutocomplete";
import goArticleDelete from "../go/articleDelete";

const actions = {
  authorAutocomplete: {
    get: {
      articles: {
        mutation: getArticles,
      },
    },
    builder: {
      type: "return",
      build: goAuthorAutocomplete,
    },
  },
  articleCreate: {
    preValidate: validateArticle,
    get: {
      article: {
        mutation: putArticleCreate,
      },
    },
    builder: {
      type: "rePost",
      build: {
        action: "articleDetails", // Action à réexécuter
        body: (response) => ({
          articleId: response.article.article.id, // Exemple de données dynamiques
          hasArticle: true,
        }), // Génération dynamique du body
      },
    },
  },
  articleUpdate: {
    preValidate: validateArticle,
    get: {
      article: {
        mutation: putArticleUpdate,
      },
    },
    builder: {
      type: "rePost",
      build: {
        action: "articleDetails", // Action à réexécuter
        body: (response) => ({
          articleId: response.article.article.id, // Exemple de données dynamiques
          hasArticle: true,
        }), // Génération dynamique du body
      },
    },
  },
  articleDelete: {
    get: {
      article: {
        mutation: putArticleDelete,
      },
    },
    builder: {
      type: "return",
      build: goArticleDelete,
    },
  },

  articleDetails: {
    get: {
      article: {
        condition: (body) => !!body.hasArticle,
        mutation: getArticle,
      },
      blog: {
        mutation: getBlog,
      },
      theme: {
        mutation: getTheme,
      },
      shop: {
        mutation: getShop,
      },
    },
    builder: {
      type: "return",
      build: goArticleDetails,
    },
  },
  articlesFetch: {
    get: {
      articles: {
        mutation: getArticles,
      },
      blog: {
        mutation: getBlog,
      },
    },
    builder: {
      type: "return",

      build: goArticlesFetch,
    },
  },
};

export default actions;
