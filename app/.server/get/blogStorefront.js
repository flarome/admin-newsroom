

const mutation = `

query BlogByHandle($handle: String!) {


  blog(handle: $handle) {
   id
   handle

  }


}

`;

export default function applyPromoCode(body) {


  return {
    mutation,
    variables: {
    handle: body.handle
    },
    mutationName: "blog",
    fetchMode: "storefront",
  };
}
