

// routesMap.ts
export const ROUTES = {
  _home: "/",
  blogs: {
    _home: "/blogs",
    list: (id: string) => `/blogs/${id}`,
  },
  articles: {
    _home: "/articles",
    edit: (id: string) => `/articles/${id}`,
    delete: (id: string) => `/articles/${id}/delete`,
  },
  _modules: {
     vpe: "/m/vpe",
  }
};


export const API_ROUTES = {
  graphql: {
    admin: "/api/graphql/admin",
    storefront: "/api/graphql/storefront",
  },
  _config: {
    lang: "/api/config/lang",
  },
  _routes: {
    articles: {
      details: (id: string) => `/api/articles/${id?.split("/").pop() || id}/details`,
      update: (id: string) => `/api/articles/${id?.split("/").pop() || id}/update`,
      delete: (id: string) => `/api/articles/${id?.split("/").pop() || id}/delete`,
      create: `/api/articles/create`,
    }
  },
  validateImageUrl: "/api/validate-image-url",
};
