import blog from "./query/blog";



export default function applyPromoCode(body, blogId) {

  return {
    mutation: `
query BlogShow($id: ID!) {
  blog(id: $id) {
${blog}

  }
}
`,
    variables: {
      id: blogId
    }, 
    mutationName: "blog",
    fetchMode: "admin",
  };
}

