
import { generateArticle } from "../../article"

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

export default async function applyPromoCode(body, themeId, client, shopify, cdnUrl, files) {



  
  return {
    mutation: `

mutation UpdateArticle($article: ArticleUpdateInput!) {
  articleUpdate(id: "${body.id}", article: $article) {
        article {
         
id
handle

        }
        userErrors {
          code
          field
          message
        }
      }
    }
`,
    variables: {
        id: body.id,
      article: {
        ...await generateArticle(body, false, shopify, cdnUrl, files)
      },
    },
    mutationName: "articleUpdate",
    fetchMode: "admin",
  };
}


