import { getArticleInfo } from "../../modules/getInfo";
import { initialArticle as initialState } from "./initialState";
import { articleDetails } from "../../modules/api";
 
export const formatArticle = article => {
    try {
  
        if (!article || !article.id) return initialState; // Si `article` est null, réinitialisation.
        const { title, subTitle, extrait, downloadsAllsMedia, date, mainImage, content, tags, template, isPublished, metaTitle, handle, metaDescription, author, url } = getArticleInfo(["title", "metaTitle", "metaDescription", "author", "handle", "subTitle", "extrait", "downloadsAllsMedia", "date", "mainImage", "content", "tags", "template", "isPublished", "url"], article, "fr-FR");
  
        return {
          isNewArticle: false,
          id: article.id,
          url: url || initialState.url,
          title: title || initialState.title,
          subTitle: subTitle || initialState.subTitle,
          extrait: extrait || initialState.extrait,
          metaDescription: metaDescription || initialState.metaDescription,
          metaTitle: metaTitle || initialState.metaTitle,
          handle: handle || initialState.handle,
          date: date || initialState.date,
          author: author || initialState.author,
          downloadsAllsMedia: downloadsAllsMedia || initialState.downloadsAllsMedia,
          mainImage: mainImage || initialState.mainImage,
          content: content || initialState.content,
          tags: tags || initialState.tags,
          template: template || initialState.template,
          isPublished: typeof isPublished !== "undefined" ? isPublished : initialState.isPublished,
        };

  
    } catch (error) {
      console.error("Erreur lors du chargement des articles ou du blog :", error);
    }
  };


export const loadArticle = async currentArticleId => {
  try {
    const { article, blog } = await articleDetails({ hasArticle: currentArticleId ? true : false, articleId: currentArticleId });

    const d2 = formatArticle(article);
    return {
      article: d2,

      blog,
    };

  } catch (error) {
    console.error("Erreur lors du chargement des articles ou du blog :", error);
  }
};
