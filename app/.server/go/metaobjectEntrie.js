export default function builder(response, userErrors, body, params) {
    // Retourne un tableau vide si la structure attendue n'est pas présente
  
    // Retourne le tableau des noeuds, limité à 'body.first' éléments si défini
    return {
      
        metaobject: response.metaobject.definition,
        fields: response.metaobject.fields
    }
  }
  