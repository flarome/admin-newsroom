
import { admin } from "./utils/executeWithRetry";
export async function getMetaobjectIDByHandle(shopify, handle, type) {
    const mutation = `
 query GetMetaobjectEntries($handle: MetaobjectHandleInput!) {
      metaobjectByHandle(handle: $handle) {
    
    
id 
    
      }
    }
      
    `;



  

  
    const variables = {
        handle: {
            type: type,
            handle: handle
          },
    };
  
    const { response } = await admin(
      mutation,
      variables,
      "metaobjectByHandle",
      shopify,
    );
  
    return response.id;
  }