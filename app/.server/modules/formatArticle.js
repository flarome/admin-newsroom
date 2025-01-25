import { getArticleInfo } from "./getInfo";
import { initialArticle as initialState } from "../../modules/initialState";
import { mergeAndValidate } from "./compare";
export async function formatArticle(article, shopify) {
  try {
    if (!article || !article.id) return initialState; // Si `article` est null, réinitialisation.
    const {
      title,
      subTitle,
      extrait,
      id,
      downloadsAllsMedia,
      date,
      mainImage,
      originalHtml,
      tags,
      template,
      isPublished,
      metaTitle,
      handle,
      metaDescription,
      author,
      contactPresse,
      url,
      layout
    } = await getArticleInfo(
      [
        "title",
        "subTitle",
        "extrait",
        "id",
        "downloadsAllsMedia",
        "date",
        "mainImage",
        "content",
        "tags",
        "template",
        "isPublished",
        "metaTitle",
        "handle",
        "metaDescription",
        "author",
        "url",
        "layout",
        "contact-presse"
      ],
      article,
      "fr-FR",
      shopify
    );

    const input = {
      isNewArticle: false,
      defaultCursor: article.defaultCursor || initialState.defaultCursor,
      id: id,
      url: url || initialState.url,
      title: title || initialState.title,
      subTitle: subTitle || initialState.subTitle,
      extrait: extrait || initialState.extrait,
      metaDescription: metaDescription || initialState.metaDescription,
      metaTitle: metaTitle || initialState.metaTitle,
      handle: handle || initialState.handle,
      redirectNewHandle: initialState.redirectNewHandle,
      date: date || initialState.date,
     
      author: author || initialState.author,
      contactPresse: contactPresse || initialState.contactPresse,
      downloadsAllsMedia: downloadsAllsMedia || initialState.downloadsAllsMedia,
      mainImage: mainImage || initialState.mainImage,
      content: originalHtml || initialState.content,
      tags: tags || initialState.tags,
      template: template || initialState.template,
      isPublished:
        typeof isPublished !== "undefined"
          ? isPublished
          : initialState.isPublished,
          layout: layout || initialState.layout,    
    };

    return mergeAndValidate(initialState, input);
  } catch (error) {
    console.error("Erreur lors du chargement des articles ou du blog :", error);
  }
};
