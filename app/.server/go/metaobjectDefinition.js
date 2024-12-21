export default function builder(response, userErrors, body, params) {
    // Retourne un tableau vide si la structure attendue n'est pas présente
    if (!response?.entries?.metaobjects?.edges?.length) return [];
  
    // Retourne le tableau des noeuds, limité à 'body.first' éléments si défini
    return {
      
      entries: response.entries.metaobjects.edges
      .map(edge => edge.node),
      pageInfo: response.entries.metaobjects.pageInfo
    }
  }
  