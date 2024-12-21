export default function builder(response, userErrors, body, params) {
    // Retourne un tableau vide si la structure attendue n'est pas présente
    if (!response?.entries?.metaobjects?.edges?.length) return [];
  
    console.log('response?.entries?.metaobjects?.edges?', response?.entries?.metaobjects?.edges);
    // Retourne un objet avec les entrées et les informations de pagination
    return {
      entries: response.entries.metaobjects.edges.map(edge => ({
        value: edge.node.id,
        label: edge.node.fields.find(field => field.key === "name")?.value || ""
      })),
      pageInfo: response.entries.metaobjects.pageInfo
    };
  }
  