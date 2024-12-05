
import { generateArticle } from "../modules/generateArticle"

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

export default function applyPromoCode(body, blogId) {
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


