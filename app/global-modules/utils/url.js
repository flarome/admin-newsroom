
/**
 * Construit une URL avec des paramètres de query string.
 * @param {string} base - URL de base sans paramètres.
 * @param {object} params - Objet contenant les paramètres à ajouter.
 * @returns {string} - URL finale avec ou sans query string.
 */
function buildUrl(base, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return queryString ? `${base}?${queryString}` : base;
  }
  
  module.exports = { buildUrl };