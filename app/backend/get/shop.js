import shop from "./query/shop"

const mutation = `

query {
  shop {
    ${shop}
  }
}

`;

export default function applyPromoCode(body, blogId) {

  return {
    mutation,
    variables: {
    },
    mutationName: "shop",
    fetchMode: "admin",
  };
}


