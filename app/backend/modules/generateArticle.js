const { generateHtml } = require("./generateContent");

function generateArticle(body) {
    const { title, subTitle, extrait, metaDescription, metaTitle, handle, date, author, downloadsAllsMedia, mainImage, content, tags, template, isPublished } = body;
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
              }),
            },
            title: title || "New Article Title",
            author: {
              name: author || "Flarome Inc"
            },
            handle: handle || null,
            body: generateHtml(content),
            summary: extrait || null,
            isPublished: typeof isPublished != undefined ? isPublished : false,
            templateSuffix: template || null,
            publishDate: date ? new Date(date).toISOString() : new Date().toISOString(), // Date de publication
            tags: tags || [],
  
      };

}

module.exports = { generateArticle }