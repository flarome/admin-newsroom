export default function builder(response, userErrors, body, errors) {
  

  if (errors && Object.keys(errors).length > 0) {
    return {
      errors
    
    };
  }

    // Construction de la réponse finale
    return {
      userErrors,
      id: response.article.article.id
    };
  }
  
 

