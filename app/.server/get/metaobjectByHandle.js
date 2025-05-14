import metaobject from "./query/metaobjectEntrie";

export default function applyPromoCode(body) {


  return {
    mutation: `


query GetMetaobjectEntries($handle: MetaobjectHandleInput!) {
  metaobjectByHandle(handle: $handle) {


  ${metaobject}

  }
}

`,
    variables: {
        handle: {
            type: body.type,
            handle: body.handle
          },
       
    },
    mutationName: "metaobjectByHandle",
    fetchMode: "admin",
  };
}




