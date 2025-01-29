import validateArticle from "./validate/article";
// import validateMetaobject from "./validate/metaobject";

import autom from "./afterValidate/autom";

import getArticles from "./get/articles";
// import getBlog from "./get/blog";
import getArticle from "./get/article";
// import getShop from "./get/shop";
// import getTheme from "./get/theme";
import getArticleAfter from "./get/articleAfter";
import getArticlePrevious from "./get/articlePrevious";
import getMetaobjectDefinition from "./get/metaobjectDefinition";
import getMetaobjectEntrie from "./get/metaobjectEntrie";
// import getMetaobjects from "./get/metaobjects";

import putArticleCreate from "./put/articleCreate";
import putArticleUpdate from "./put/articleUpdate";
import putArticleDelete from "./put/articleDelete";
import putMetaobjectUpsert from "./put/metaobjectUpsert";


import goMetaobjectDefinition from "./go/metaobjectDefinition";
import goArticlesFetch from "./go/articlesFetch";
import goArticleDetails from "./go/articleDetails";
import goAuthorAutocomplete from "./go/authorAutocomplete";
import goArticleDelete from "./go/articleDelete";
import goArticleCreate from "./go/articleCreate";
import goAdjacentArticle from "./go/adjacentArticle";
import goMetaobjectDefinitionAuthor from "./go/metaobjectDefinitionAuthor";
import goMetaobjectEntrie from "./go/metaobjectEntrie";
import goFileUpload from "./go/fileUpload";


const actions = {
  metaobjectUpsert: {
    /*preValidate: {
      get: {
        metaobject: {
          mutation: getMetaobjectEntrie,
        },
      },
      validate: validateMetaobject,
    },*/
    get: {
      metaobject: {
        mutation: putMetaobjectUpsert,
      },
    },
    builder: {
      type: "return",
      build: goMetaobjectEntrie,
    },
  },
  upload: {
    builder: {
      type: "return",
      build: goFileUpload,
    },

  },
  metaobjectEntrie: {
    get: {
      metaobject: {
        mutation: getMetaobjectEntrie,
      },
    },
    builder: {
      type: "return",
      build: goMetaobjectEntrie,
    },

  },
  metaobjectDefinitionAuthor: {
    get: {
      entries: {
        mutation: getMetaobjectDefinition,
      },
    },
    builder: {
      type: "return",
      build: goMetaobjectDefinitionAuthor,
    },

  },
  metaobjectDefinition: {
    get: {
      entries: {
        mutation: getMetaobjectDefinition,
      },
    },
    builder: {
      type: "return",
      build: goMetaobjectDefinition,
    },

  },
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
    afterValidate: {
      action: autom,
      body: (response) => ({
        action: "articleCreate",
        articleId: response.article.article.id // Exemple de données dynamiques

      }), 

    },
    builder: {
      type: "return",
      build: goArticleCreate,
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
      build: goAdjacentArticle,
    },
  },
  articleUpdate: {
    preValidate: validateArticle,
    get: {
      article: {
        mutation: putArticleUpdate,
      },
  
    },

   afterValidate: {
      action: autom,
      body: (response) => ({
        action: "articleUpdate",
        articleId: response.article.article.id, // Exemple de données dynamiques

      }), 

    },

    builder: {
      type: "rePost",
      build: {
        action: "articleDetails", // Action à réexécuter
        body: (response) => ({
          articleId: response.article.article.id.split("/").pop(), // Exemple de données dynamiques
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
    afterValidate: {
      action: autom,
      body: (response) => ({
        action: "articleDelete",
        articleId: response.article.deletedArticleId // Exemple de données dynamiques

      }), 

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
    
      authors: {
        type: 'rePost',
        get: {
          action: "metaobjectDefinitionAuthor", // Action à réexécuter
          body: { first: 250, type: "press_contacts" },
        },
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
      }
    },
    builder: {
      type: "return",

      build: goArticlesFetch,
    },
  },
};

export default actions;
