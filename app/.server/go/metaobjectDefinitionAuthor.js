export default function builder(response, userErrors, body, params) {
  // Retourne un tableau vide si la structure attendue n'est pas présente ou si 'edges' est vide
  if (!response?.entries?.metaobjects?.edges?.length) return {
    entries: []
  };
  
  // Vérification si le champ 'node' est bien présent dans chaque élément de 'edges'
  const entries = response.entries.metaobjects.edges.map(edge => {
    if (!edge?.node) return null; // On ignore les éléments mal formés

    // Vérification de la présence des propriétés nécessaires
    const node = edge.node;
    const labelField = node.fields?.find(field => field.key === "name") || node.fields?.find(field => field.key === "email");

    return {
      id: node.id || null,
      handle: node.handle || null,
      value: node.id || null,
      label: labelField?.value || null // Si 'name' n'est pas trouvé, label sera une chaîne vide
    };
  }).filter(entry => entry !== null); // Filtrer les entrées nulles (si 'node' est manquant)

  // Si aucune entrée valide n'a été trouvée, retourner un tableau vide
  if (entries.length === 0) return {
    entries: []
  };

  // Retourne les entrées et les informations de pagination
  return {
    entries: entries,
    pageInfo: response.entries.metaobjects.pageInfo || {} // Retourne un objet vide si 'pageInfo' est manquant
  };
}
