
export default async function builder(response, userErrors, body, errors, shopify) {



    
    const data = {...(response.creat || {}), ...(response.update || {})}

  // Construction de la réponse finale
  return {
    path: `/blogs/${response.blog.handle}/${data.article.handle}`,
    next: {
     
        id: data.article.id,
        handle: data.article.handle
    }
  
  };
}
