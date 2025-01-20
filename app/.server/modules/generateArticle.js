import generateHtml from "../content/generateContent";

import { admin } from "./utils/executeWithRetry";
import { getMetaobjectIDByHandle } from "./getMetaobjectIDByHandle";

export async function generateArticle(body, isNewArticle, shopify, cdnUrl) {
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
    layout
  } = body;
  const { originalHtml, rebuiltHtml, jsonContent } = await generateHtml(content, shopify, cdnUrl);

  const authorInfo = author || {};
  return {
    metafields: [{
      namespace: "article",
      key: "data_json",
      value: JSON.stringify({
        layout,
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
      },
    
    
    ),
    },
  
    {
      namespace: "contact",
      key: "editor",
      value: authorInfo.id || await getMetaobjectIDByHandle(shopify, authorInfo.handle, authorInfo.type)
    
    

    }
  ],
    title: title,
    author: {
      name: authorInfo.name && authorInfo.name.trim() !== "" ? authorInfo.name : "Flarome Inc",
    },
    handle: handle || null,
    body: originalHtml,
    summary: extrait || null,
    ...(!isNewArticle && { redirectNewHandle }),
    isPublished: typeof isPublished != undefined ? isPublished : false,
    templateSuffix: template || null,

    publishDate: date ? new Date(date).toISOString() : new Date().toISOString(), // La date et l'heure (format ISO 8601) auxquelles l'article doit devenir visible.


    tags: tags || [],
  };
}
