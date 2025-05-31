import { generateArticle } from "../../article";


const mutation = `

    mutation CreateArticle($article: ArticleCreateInput!) {
      articleCreate(article: $article) {
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

`;

export default async function applyPromoCode(body, themeId, client, shopify, cdnUrl, files) {

 
  return {
    mutation,
    variables: {
      article: {
        ...await generateArticle(body, true, shopify, cdnUrl, files)
      },
    },
    mutationName: "articleCreate",
    fetchMode: "admin",
  };
}


