const clientRedis = require("../config/clientRedis");

/**
 * Vérifie si une chaîne est un JSON valide.
 * @param {string} jsonString - Chaîne à vérifier.
 * @returns {boolean} - True si la chaîne est un JSON valide, sinon False.
 */
const isValidJSON = (jsonString) => {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (e) {
      return false;
    }
  };
  

// Fonction utilitaire pour nettoyer le cache basé sur un pattern de clé
const clearCacheByOnePattern = async (pattern) => {
  try {
    const keys = await clientRedis.keys(pattern);
    if (keys.length > 0) {
      await clientRedis.del(keys); // Suppression des clés en une seule opération
      console.log(`Cache nettoyé avec succès pour le pattern: ${pattern}`);
    } else {
      console.log(`Aucune clé de cache à nettoyer pour le pattern: ${pattern}`);
    }
  } catch (error) {
    console.error("Erreur lors du nettoyage du cache:", error.message);
  }
};

async function clearCacheByMultiPattern(pattern) {
  let cursor = '0'; // Initialiser le curseur à 0
  do {
    // Utiliser SCAN pour récupérer les clés correspondant au motif
    const result = await clientRedis.scan(cursor, 'MATCH', pattern, 'COUNT', 1000);
    cursor = result[0]; // Mettre à jour le curseur pour la prochaine itération
    const keys = result[1]; // Clés correspondant au motif

    if (keys.length > 0) {
      // Supprimer les clés en utilisant DEL
      await clientRedis.del(keys);
      console.log('keys', keys);
      console.log(`Supprimé ${keys.length} clés correspondant au motif: ${pattern}`);
    }
  } while (cursor !== '0'); // Continuer jusqu'à ce que le curseur revienne à 0

  console.log(`Suppression terminée pour le motif: ${pattern}`);
}

/**
 * Fonction pour obtenir une seule valeur depuis le cache
 * @param {string} key - Clé à rechercher dans le cache
 * @param {number} timeout - Durée en millisecondes avant d'annuler la lecture
 * @returns {Promise<any>} - Valeur en cache ou null si aucune donnée n'est trouvée
 */
const getCachedDataSingle = async (key, timeout = Infinity) => {
  // Si le timeout est défini comme Infinity, ne jamais rejeter
  const timeoutPromise = 
    timeout === Infinity 
      ? new Promise(() => {}) // Ne se résout ni ne rejette jamais
      : new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timed out')), timeout)
        );
  const getValuePromise = clientRedis.get(key);

  try {
    const data = await Promise.race([getValuePromise, timeoutPromise]);
    return data && isValidJSON(data) ? JSON.parse(data) : data;
  } catch (error) {
    console.error('Erreur lors de la lecture du cache:', error.message);
    return null; // Retourner null en cas d'erreur
  }
};

/**
 * Fonction pour obtenir plusieurs valeurs depuis le cache
 * @param {string[]} keys - Clés à rechercher dans le cache
 * @param {number} timeout - Durée en millisecondes avant d'annuler la lecture
 * @returns {Promise<any[]>} - Tableau des valeurs en cache ou tableau de nulls si aucune donnée n'est trouvée
 */

const getCachedDataMultiple = async (keys, timeout = Infinity) => {
  // Si le timeout est défini comme Infinity, ne jamais rejeter
  const timeoutPromise = 
    timeout === Infinity 
      ? new Promise(() => {}) // Ne se résout ni ne rejette jamais
      : new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timed out')), timeout)
        );
  const getValuesPromise = clientRedis.mget(keys);

  try {
    const dataArray = await Promise.race([getValuesPromise, timeoutPromise]);
    return dataArray.map(data => data && isValidJSON(data) ? JSON.parse(data) : data);
  } catch (error) {
    console.error('Erreur lors de la lecture du cache:', error.message);
    return Array(keys.length).fill(null); // Retourner un tableau de null pour chaque clé en cas d'erreur
  }
};

/**
 * Fonction pour stocker des données en cache
 * @param {string} key - Clé pour stocker les données
 * @param {any} data - Données à stocker dans le cache
 * @param {boolean} json - Indique si les données doivent être converties en JSON
 * @returns {Promise<void>}
 */
const cacheDataSingle = async (key, data, json = false) => {
  try {
    if (json && typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    await clientRedis.set(key, data); // Stocke les données sans expiration
    console.log("Cache mis pour la clé:", key);
  } catch (error) {
    console.error(`Erreur lors de l'écriture du cache pour la clé ${key}: ${error.message}`);
  }
};
/**
 * Fonction pour stocker plusieurs données en cache
 * @param {Object} keyDataPairs - Objet où les clés sont les identifiants de cache et les valeurs sont les données à stocker
 * @param {boolean} json - Indique si les données doivent être converties en JSON
 * @returns {Promise<void>}
 */
const cacheDataMultiple = async (keyDataPairs, json = false) => {
  try {
    const multi = clientRedis.multi();
    for (const [key, data] of Object.entries(keyDataPairs)) {
      const value = json && typeof data !== 'string' ? JSON.stringify(data) : data;
      multi.set(key, value);
    }
    await multi.exec();
    console.log("Cache mis pour plusieurs clés.");
  } catch (error) {
    console.error(`Erreur lors de l'écriture du cache: ${error.message}`);
  }
};


module.exports = {
  getCachedDataSingle,
  getCachedDataMultiple,
  cacheDataSingle,
  cacheDataMultiple,
  clearCacheByOnePattern,
  clearCacheByMultiPattern
};

