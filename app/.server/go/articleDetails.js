import { initialArticle } from "../../modules/initialState";
import { formatArticle } from "../modules/formatArticle";

// Fonction pour filtrer et formater les templates d'articles
export function extractArticleTemplates(files) {
  return files
    .map((file) => file.node.filename) // Récupère les noms de fichiers
    .filter((filename) => filename.startsWith("templates/article")) // Filtre les fichiers liés aux articles
    .map((filename) => {
      // Transformation des noms de fichier
      const baseName = filename
        .replace(/^templates\/article\./, "article.") // Supprime "templates/article."
        .replace(/^templates\/article/, "article") // Supprime "templates/article" s'il n'y a pas d'extension
        .replace(/\.liquid$/, "") // Supprime l'extension .liquid
        .replace(/\.json$/, ""); // Supprime l'extension .json

      // Décomposer le nom en `label` et `value`
      if (baseName === "article") {
        return { label: "Article de blog par défaut", value: "" };
      } else {
        const value = baseName.replace(/^article\./, ""); // Extraire le suffixe
        return { label: value, value };
      }
    });
}

import { getMainTheme, getDevTheme } from "../get/admin/theme";

export default function builder(
  response,
  userErrors,
  body,
  errors,
  shopify,
  cdnUrl,
  theme,
) {
  if (errors && Object.keys(errors).length > 0) {
    return { errors };
  }

  const articleData = response.article || {};
  const blogs = response.blogs?.nodes || [];

  return {
    article: {
      id: articleData?.id ?? undefined,
      splitId: articleData?.id?.split("/").pop() ?? undefined,
      isNewArticle: articleData?.id ? false : true,
      defaultCursor: articleData?.defaultCursor ?? null,
      url: articleData?.id
        ? `${response.shop.primaryDomain.url}/blogs/${articleData.blog.handle}/${articleData.handle}`
        : null,
      title: articleData?.title ?? null,
      isPublished: articleData?.isPublished ?? false,
      handle: articleData?.handle ?? null
    
      
    },
    themes: response.themes.edges.map((theme) => ({
      id: theme.node.id,
      name: theme.node.name,
      role: theme.node.role,
      templates: extractArticleTemplates(theme.node.files.edges),
    })),

    shop: { url: response.shop.primaryDomain.url },
    libs: {
      authors: response.authors?.entries || [],
      templates: extractArticleTemplates(theme.files.edges),
      tags: [...new Set(blogs.flatMap((blog) => blog.tags || []))],
    },

    data: formatArticle(articleData, blogs),

    blogs: blogs.map(({ handle, title, id }) => ({ handle, title, id })),

    hasErrors: false,
    errors: []
  };
}
