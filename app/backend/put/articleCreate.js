const { generateArticle } = require('../modules/generateArticle');
const mutation = `

    mutation CreateArticle($article: ArticleCreateInput!) {
      articleCreate(article: $article) {
        article {
         id
        }
        userErrors {
          code
          field
          message
        }
      }
    }

`;

function applyPromoCode(body, blogId) {


  return {
    mutation,
    variables: {
      article: {
        blogId: blogId,
        ...generateArticle(body)
      },
    },
    mutationName: "articleCreate",
    fetchMode: "admin",
  };
}

module.exports = applyPromoCode;
