
    function builder(response, userErrors, body, errors) {
  

      // Construction de la réponse finale
      return {
        userErrors,
        deletedArticleId: response.article.deletedArticleId
      };
    }
    
    module.exports = builder;
  
  