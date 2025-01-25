// Fonction pour comparer initialState et input et les fusionner
function mergeAndValidate(initialState, input) {
    function handleTypeMismatch(initialValue, inputValue) {
      // Gestion des types non correspondants
      if (Array.isArray(initialValue)) {
        // Si initialValue est un tableau
        return Array.isArray(inputValue) ? inputValue : [inputValue];
      } else if (typeof initialValue === "object" && initialValue !== null) {
        // Si initialValue est un objet
        return Array.isArray(inputValue) ? {} : {};
      } else if (typeof initialValue === "string") {
        // Si initialValue est une chaîne
        return Array.isArray(inputValue) || typeof inputValue === "object"
          ? ""
          : String(inputValue || "");
      } else if (Array.isArray(inputValue)) {
        // Si inputValue est un tableau mais initialValue ne l'est pas
        return "";
      }
  
      // Sinon, on retourne la valeur initiale
      return initialValue;
    }
  

    function recursiveMerge(initial, input) {
        for (const key in initial) {
          if (!(key in input)) {
            // Si la clé n'existe pas dans `input`, on la copie depuis `initial`
            input[key] = initial[key];
          } else {
            // Vérification des types
            const initialValue = initial[key];
            const inputValue = input[key];
    
            if (initialValue === null || initialValue === undefined) {
              // Si initialValue est null ou undefined, on laisse inputValue tel quel
              continue;
            }
    
            if (
              (typeof initialValue === "object" && initialValue !== null) &&
              (typeof inputValue === "object" && inputValue !== null)
            ) {
              // Si les deux sont des objets, on fusionne récursivement
              recursiveMerge(initialValue, inputValue);
            } else if (typeof initialValue !== typeof inputValue) {
              // Si les types diffèrent, on ajuste le type
              input[key] = handleTypeMismatch(initialValue, inputValue);
            }
          }
        }
  
    }
  
    // Démarrer la fusion récursive
    recursiveMerge(initialState, input);
    return input;
  }
  
  export { mergeAndValidate };