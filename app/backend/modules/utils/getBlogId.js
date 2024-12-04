


import { storefront } from './executeWithRetry';

export async function getBlogId(client) {
  try {
    // Définir la requête GraphQL pour récupérer l'ID du blog
    const query = `
      query GetArticlesFromBlog {
        blog(handle: "newsroom") {
          id
        }
      }
    `;
    const variables = {};

    // Exécuter la requête
    const { response } = await storefront(query, variables, 'blog', client);
  
    return response.id;
  } catch (err) {
    console.error("Error in getBlogId:", err.message);
    throw new Error(`Failed to retrieve blog ID for handle.`);
  }
}


