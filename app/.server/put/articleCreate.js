import { generateArticle } from "../modules/generateArticle";


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

export default async function applyPromoCode(body, blogId, themeId, client, shopify) {


  return {
    mutation,
    variables: {
      article: {
        blogId: blogId,
        ...await generateArticle(body, true, shopify)
      },
    },
    mutationName: "articleCreate",
    fetchMode: "admin",
  };
}


