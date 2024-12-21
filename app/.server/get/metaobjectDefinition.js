import metaobject from "./query/metaobjectEntrie";



export default function applyPromoCode(body, blogId) {

  console.log('body182', body);
  return {
    mutation: `


query GetMetaobjectEntries($type: String!, $first: Int) {
  metaobjectDefinitionByType(type: $type) {
    metaobjects(first: $first) {
      pageInfo {
       startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
  ${metaobject}
        }
      }
    }
  }
}

`,
    variables: {
        type: String(body.type),
        first: body.first ? parseInt(body.first) : 250
    },
    mutationName: "metaobjectDefinitionByType",
    fetchMode: "admin",
  };
}




