export default function builder(response, userErrors, body, params) {
    // Retourne un tableau vide si la structure attendue n'est pas présente
    const metaobject = response?.metaobject?.metaobject || response?.metaobject;
   
    // Retourne le tableau des noeuds, limité à 'body.first' éléments si défini
    return {

     
      
        metaobjectDefinition: metaobject?.definition,
        entrie: {
          ...metaobject,
          fields: (metaobject?.fields || []).reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
          }, {})
        }
     
    }
  }
  