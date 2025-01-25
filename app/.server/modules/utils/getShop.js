


import { admin } from './executeWithRetry';

import shop  from '../../get/query/shop'

export async function getShop(shopify) {
  try {
    // Définir la requête GraphQL pour récupérer l'ID du blog
    const query = `
query {
  shop {
  ${shop}
  }
}
    `;
    const variables = {};

    // Exécuter la requête
    const { response } = await admin(query, variables, 'shop', shopify);
  

    return response;
  } catch (err) {
    console.error("Error in getBlogId:", err.message);
    throw new Error(`Failed to retrieve blog ID for handle.`);
  }
}


