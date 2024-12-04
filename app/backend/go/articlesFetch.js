
export default function builder(response, userErrors, body, errors) {
  

    // Construction de la réponse finale
    return {
        articles: response.articles?.edges?.map(edge => edge.node) || [],
     blog: {
        ...response.blog
     }
    };
  }
  

