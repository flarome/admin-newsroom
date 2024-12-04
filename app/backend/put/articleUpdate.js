
const { generateArticle } = require('../modules/generateArticle');

const mutation = `

mutation UpdateArticle($id: ID!, $article: ArticleUpdateInput!) {
  articleUpdate(id: $id, article: $article) {
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
        id: body.id,
      article: {
        ...generateArticle(body)
      },
    },
    mutationName: "articleUpdate",
    fetchMode: "admin",
  };
}

module.exports = applyPromoCode;
