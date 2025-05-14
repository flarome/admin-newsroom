import metaobject from "./query/metaobjectEntrie";



export default function applyPromoCode(body) {


  return {
    mutation: `


query GetMetaobjectEntries($id: ID!) {
  metaobject(id: $id) {
    ${metaobject}
  

  }
}

`,
    variables: {
        id: body.metaobjectId,
    },
    mutationName: "metaobject",
    fetchMode: "admin",
  };
}




