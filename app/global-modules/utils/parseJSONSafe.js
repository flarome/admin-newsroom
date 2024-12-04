 export function parseJSONSafe(jsonString) {
      // Vérifie si l'entrée est déjà un objet
  if (typeof jsonString === 'object' && jsonString !== null) {
    return jsonString; // Retourne l'objet tel quel
  }
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.warn('Error parsing JSON:', error);
        return null;
    }
  }
/*function parseJSONSafe(jsonString) {
    // Vérifie si la chaîne est bien définie et de type string
    if (typeof jsonString !== 'string') {
        console.warn('Input is not a valid string:', jsonString);
        return null;
    }

    // Si la chaîne ressemble à un tableau JSON (commence par [)
    if (jsonString.startsWith('[')) {
        try {
            return JSON.parse(jsonString); // On tente de parser le JSON
        } catch (error) {
            console.warn('Error parsing JSON:', error);
            return null;
        }
    }

    // Si ce n'est pas un tableau JSON, on retourne directement la chaîne
    return jsonString;
}

*/
  

