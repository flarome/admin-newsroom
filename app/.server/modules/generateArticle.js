import { generateHtml } from "./generateContent";

export async function generateArticle(body, isNewArticle, shopify) {
  const {
    title,
    subTitle,
    extrait,
    metaDescription,
    metaTitle,
    handle,
    redirectNewHandle,
    date,
    author,
    downloadsAllsMedia,
    mainImage,
    content, 
    tags,
    template,
    isPublished,
  } = body;
  const { originalHtml, rebuiltHtml, jsonContent } = await generateHtml(content, shopify);

  return {
    metafields: {
      namespace: "article",
      key: "data_json",
      value: JSON.stringify({
        subtitle: subTitle || null,
        downloadsAllsMedia: downloadsAllsMedia,
        media: {
          mainImage: mainImage,
        },
        content: {
          originalHtml: originalHtml,
          rebuiltHtml: rebuiltHtml,
          json: jsonContent,
        },
      }),
    },
    title: title || "New Article Title",
    author: {
      name: author || "Flarome Inc",
    },
    handle: handle || null,
    body: originalHtml,
    summary: extrait || null,
    ...(!isNewArticle && { redirectNewHandle }),
    isPublished: typeof isPublished != undefined ? isPublished : false,
    templateSuffix: template || null,
    publishDate: date ? new Date(date).toISOString() : new Date().toISOString(), // Date de publication
    tags: tags || [],
  };
}
