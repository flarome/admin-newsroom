export function generateInitialData(currentData) {
  // Initialisation de initialData
  const initialData = {};

  // Pour chaque clé de currentData, on assigne la valeur à initialData, ou une valeur par défaut
  Object.keys(currentData).forEach((key) => {
    // Pour les clés booléennes, on les initialise à false si elles n'ont pas de valeur
    if (typeof currentData[key] === "boolean") {
      initialData[key] = currentData[key] || false;
    }
    // Pour les autres types, on les initialise à une chaîne vide si elles sont indéfinies
    else {
      initialData[key] = currentData[key] || "";
    }
  });

  return initialData;
}