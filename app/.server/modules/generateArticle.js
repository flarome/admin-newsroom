import generateHtml from "../content/generateContent";



export async function generateArticle(body, isNewArticle, shopify, cdnUrl) {

  try {
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
      contactPresse,
      downloadsAllsMedia,
      mainImage,
      content, 
      tags,
      template,
      isPublished,
      layout
    } = body;
    const { originalHtml, rebuiltHtml, jsonContent } = await generateHtml(content, shopify, cdnUrl);
  


    return {
      metafields: [
        
        {
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
  
        value: `[${contactPresse.map((item) => `"${item}"`).join(',')}]`
        
    
  
     
      
      
  
      }
    ],
      title: title,
      author: {
        name: author && author.trim() !== "" ? author  :  "Flarome Inc",
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

  } catch (error) {
    console.error(`Erreur lors de l’exécution de la mutation :`, error);
    throw error;
  }
  
}
