import metaobject from "./query/metaobjectEntrie";

import metaobjectDefinition from "./query/metaobjectDefinition";

export default function applyPromoCode(body, blogId) {


  return {
    mutation: `


query GetMetaobjectEntries($type: String!, $first: Int) {
  metaobjectDefinitionByType(type: $type) {


  ${metaobjectDefinition}
  


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




