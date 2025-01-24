


import { admin } from './executeWithRetry';

export async function getCdnUrl(shopify) {
  try {
    // Définir la requête GraphQL pour récupérer l'ID du blog
    const query = `
query {
  shop {
   url
  }
}
    `;
    const variables = {};

    // Exécuter la requête
    const { response } = await admin(query, variables, 'shop', shopify);
  

    return response.url + "/cdn/shop/files/";
  } catch (err) {
    console.error("Error in getBlogId:", err.message);
    throw new Error(`Failed to retrieve blog ID for handle.`);
  }
}


