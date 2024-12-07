export default function builder(response, userErrors, body, errors) {
  

    console.log('rereres', response);
    // Construction de la réponse finale
    return {
      userErrors,
      id: response.article.article.id
    };
  }
  


