
export default function builder(response, userErrors, body, errors, shopify, cdnUrl, blogUrl, theme, blog) {
  

    // Construction de la réponse finale
    return {
        articles: response.articles?.edges?.map(edge => edge.node) || [],
     blog: {
        ...blog
     }
    };
  }
  

