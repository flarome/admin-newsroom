
import blog from "./query/blog";

const mutation = `

query BlogList {
    blogs(first: 250) {
      nodes {
       ${blog}
      }
    }
  }

`;

export default function applyPromoCode(body) {

  return {
    mutation,
    variables: {
    
    },
    mutationName: "blogs",
    fetchMode: "admin",
  };
}


