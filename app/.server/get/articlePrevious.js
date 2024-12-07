
export default function getArticleAfter(body, blogId) {

    return {
      mutation: `
  
  
     query ArticleQuery($first: Int, $before: String) {
       articles(first: $first, after: $before) {
         edges {
           node {
id
  defaultCursor
  
  
           }
         }
       }
     }
  
  `,
      variables: {
          first: 1,
          before: body.defaultCursor
      },
      mutationName: "articles",
      fetchMode: "admin",
    };
  }
  
  
  
  