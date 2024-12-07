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

export default function applyPromoCode(body, blogId) {


  return {
    mutation,
    variables: {
      article: {
        blogId: blogId,
        ...generateArticle(body, true)
      },
    },
    mutationName: "articleCreate",
    fetchMode: "admin",
  };
}


