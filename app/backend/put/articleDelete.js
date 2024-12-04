
const mutation = `

    mutation DeleteArticle($id: ID!) {
  articleDelete(id: $id) {
    deletedArticleId
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
     id: body.articleId
      },
    mutationName: "articleDelete",
    fetchMode: "admin",
  };
}

module.exports = applyPromoCode;
