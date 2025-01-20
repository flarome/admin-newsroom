export default function builder(response, userErrors, body, params) {
    // Retourne un tableau vide si la structure attendue n'est pas présente
  
   
    // Retourne le tableau des noeuds, limité à 'body.first' éléments si défini
    return {
      
        metaobjectDefinition: response.metaobject.definition,
        entrie: {
          ...response.metaobject,
          fields: (response?.metaobject?.fields || response?.metaobject?.metaobject?.fields || []).reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
          }, {})
        }
     
    }
  }
  