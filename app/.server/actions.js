import validateArticle from "./validate/article";

import getArticles from "./get/articles";
import getBlog from "./get/blog";
import getArticle from "./get/article";
import getShop from "./get/shop";
import getTheme from "./get/theme";
import getArticleAfter from "./get/articleAfter";
import getArticlePrevious from "./get/articlePrevious";

import putArticleCreate from "./put/articleCreate";
import putArticleUpdate from "./put/articleUpdate";
import putArticleDelete from "./put/articleDelete";

import goArticlesFetch from "./go/articlesFetch";
import goArticleDetails from "./go/articleDetails";
import goAuthorAutocomplete from "./go/authorAutocomplete";
import goArticleDelete from "./go/articleDelete";
import goArticleCreate from "./go/articleCreate"
import goAdjacentArticle from "./go/adjacentArticle"
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
    preValidate: {


      get: {

        blog: {
          mutation: getBlog,
        },


      },
      validate: validateArticle

    } ,
    get: {
      article: {
        mutation: putArticleCreate,
      },
    },
    builder: {
      type: "return",
      build: goArticleCreate
    },
  },
  adjacentArticle: {

    get: {
      articlePrevious: {
        condition: (body) => body.defaultCursor && body.defaultCursor !== "",
        mutation: getArticlePrevious,
      },
      articleAfter: {
        condition: (body) => body.defaultCursor && body.defaultCursor !== "",
        mutation: getArticleAfter,
      },
    },
    builder: {
      type: "return",
      build: goAdjacentArticle
    },

  },
  articleUpdate: {
    preValidate: {


      get: {

        blog: {
          mutation: getBlog,
        },


      },
      validate: validateArticle

    } ,
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
          articleId: response.article.article.id.split('/').pop(), // Exemple de données dynamiques
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
