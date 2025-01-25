


import { storefront, admin } from './executeWithRetry';

import blog from "../../get/query/blog";

export async function  getBlogStorefront(client) {
    try {
      // Définir la requête GraphQL pour récupérer l'ID du blog
      const query = `
        query GetArticlesFromBlog {
          blog(handle: "newsroom") {
            id
             onlineStoreUrl
  
  
            
          }
        }
      `;
      const variables = {};
  
      // Exécuter la requête
      const { response } = await storefront(query, variables, 'blog', client);
    
      return response;
    } catch (err) {
      console.error("Error in getBlogId:", err.message);
      throw new Error(`Failed to retrieve blog ID for handle.`);
    }
  }
  

  

export async function getBlogAdmin(shopify, blogId) {
  try {
    // Définir la requête GraphQL pour récupérer l'ID du blog
    const query = `
query BlogShow($id: ID!) {
  blog(id: $id) {
${blog}

  }
}
    `;
    const variables = {
        id: blogId
      };

    // Exécuter la requête
    const { response } = await admin(query, variables, 'blog', shopify);
  
    return response;
  } catch (err) {
    console.error("Error in getBlogId:", err.message);
    throw new Error(`Failed to retrieve blog ID for handle.`);
  }
}

