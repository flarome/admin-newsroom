import article from "./query/article";



export default function applyPromoCode(body, blogId) {

  return {
    mutation: `


   query ArticleQuery($first: Int) {
     articles(first: $first) {
       edges {
         node {
  ${article}



         }
       }
     }
   }

`,
    variables: {
        first: body.first || 250
    },
    mutationName: "articles",
    fetchMode: "admin",
  };
}




