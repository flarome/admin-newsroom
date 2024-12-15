
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

export default async function applyPromoCode(body, blogId, themeId, client, shopify, cdnUrl) {
  console.log('body.id1Y282I3YU3', body.id)
  return {
    mutation: `

mutation UpdateArticle($article: ArticleUpdateInput!) {
  articleUpdate(id: "${body.id}", article: $article) {
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
`,
    variables: {
        id: body.id,
      article: {
        ...await generateArticle(body, false, shopify, cdnUrl)
      },
    },
    mutationName: "articleUpdate",
    fetchMode: "admin",
  };
}


