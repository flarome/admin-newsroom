
import blog from "./query/blog";

const mutation = `

query BlogShow($id: ID!) {
  blog(id: $id) {
   ${blog}
  }
}

`;

export default function applyPromoCode(body) {

  console.log('1892', body)
  return {
    mutation,
    variables: {
    id: body.id
    },
    mutationName: "blog",
    fetchMode: "admin",
  };
}
