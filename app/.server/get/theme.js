import shop from "./query/theme"

const mutation = `

query getArticleTemplates($themeId: ID!) {
          theme(id: $themeId) {
       ${shop}
          }
        }

`;

export default function applyPromoCode(body, themeId) {

  return {
    mutation, 
    variables: {
        themeId
    },
    mutationName: "theme",
    fetchMode: "admin",
  };
}





