// routesMap.ts
export const ROUTES = {
  home: "/",
  vpe: "/vpe",
  articles: "/articles",
  article: (id: string) => `/articles/${id}`,
  articleDelete: (id: string) => `/articles/${id}/delete`,
};

export const API_ROUTES = {
  graphql: {
    admin: "/api/graphql/admin",
    storefront: "/api/graphql/storefront",
  },
  lang: "/api/lang",
  validateImageUrl: "/api/validate-image-url",
  articles: "/api/articles",
  article: (id: string) => `/api/articles/${id?.split("/").pop() || id}`,
  articleDetails: (id: string) =>
    `/api/articles/${id?.split("/").pop() || id}/details`,
  articleUpdate: (id: string) =>
    `/api/articles/${id?.split("/").pop() || id}/update`,
  articleDelete: (id: string) =>
    `/api/articles/${id?.split("/").pop() || id}/delete`,
  articleCreate: "/api/articles/create",
};
