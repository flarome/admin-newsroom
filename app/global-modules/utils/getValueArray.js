// Fonction pour accéder à la valeur
function getValueByPath(obj, path) {
    return path.split('.').reduce((acc, key) => {
      return acc && acc[key]; // Utilisation de l'opérateur && pour gérer les valeurs nulles ou undefined
    }, obj);
  }

  module.exports = { getValueByPath } ;