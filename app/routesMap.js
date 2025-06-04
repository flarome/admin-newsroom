// routesMap.js

export const API_ROUTES = {
  graphql: {
    admin: "/api/graphql/admin",
    storefront: "/api/graphql/storefront",
  },
  validateImageUrl: "/api/validate-image-url",
  articles: "/api/articles",
  article: (id) => `/api/articles/${id?.split('/')?.pop() || id}`,
  articleDetails: (id) => `/api/articles/${id?.split('/')?.pop() || id}/details`,
  articleUpdate: (id) => `/api/articles/${id?.split('/')?.pop() || id}/update`,
  articleDelete: (id) => `/api/articles/${id?.split('/')?.pop() || id}/delete`,
  articleCreate: "/api/articles/create", // ou POST sur /api/articles
  // Ajoute ici toutes tes routes API
};

export const ROUTES = {
  home: "/",
  articles: "/articles",
  article: (id) => `/articles/${id}`,
  articleDelete: (id) => `/articles/${id}/delete`,
  // Ajoute ici toutes tes routes front/pages
};
