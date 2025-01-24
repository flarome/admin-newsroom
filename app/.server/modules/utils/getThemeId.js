

import { admin } from "./executeWithRetry";


export async function getThemeId(shopify) {
    try {
        // Étape 1 : Obtenir le thème principal
        const themesQuery = 
         `
            query {
              themes(first: 10) {
                edges {
                  node {
                    id
                    name
                    role
                  }
                }
              }
    }
            
          `
        ;
    
        const { response } = await admin(themesQuery, {}, "themes", shopify);

        const themes = response.edges.map(edge => edge.node);
        const mainTheme = themes.find(theme => theme.role === 'MAIN');
    
        if (!mainTheme) {
          throw new Error('Thème principal non trouvé.');
        }
     
  
    return mainTheme.id;
  } catch (err) {
    console.error("Error in getBlogId:", err.message);
    throw err;
  }
}



