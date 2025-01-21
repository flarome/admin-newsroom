import { admin } from "./utils/executeWithRetry";


import metaobject from "../get/query/metaobjectEntrie"

export async function getMetaobjectById(shopify, id) {

    const mutation = `


query GetMetaobjectEntries($id: ID!) {
    metaobject(id: $id) {
      ${metaobject}
    
  
    }
  }
  
  `;

  const variables = {
    id: id
};

const { response } = await admin(
  mutation,
  variables,
  "metaobject",
  shopify,
);

return response;
}




