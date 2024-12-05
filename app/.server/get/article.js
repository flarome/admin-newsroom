
import article from "./query/article"
const mutation = `

 query ArticleQuery($id: ID!) {
     article(id: $id) {
        ${article}

         }
 
   }

`;

export default function applyPromoCode(body, blogId) {

  return {
    mutation,
    variables: {
      id: "gid://shopify/Article/" + body.articleId
    },
    mutationName: "article",
    fetchMode: "admin",
  };
}


