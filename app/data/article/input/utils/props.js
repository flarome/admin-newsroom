export function createProps(key, type, label, value, validate) {
  return {
    [key]: {
      type,
      validate,
      name: key,
      value,
      label,
      key
    },
  };
}
 
/**
 * Crée un groupe de propriétés imbriquées
 *
 * @param {string} key - Clé du groupe
 * @param {string} label - Label affiché du groupe
 * @param {Array<Object>} fields - Liste de champs enfants
 * @returns {Object}
 */
export function createGroupProps(key, label, fields) {
    const nestedProps = fields.map(([key, type, label, value, validate]) => {
    const field = createProps(key, type, label, value, validate);
    return field[key]; // extraire la valeur unique de l’objet retourné par createProps
  });
  return {
    [key]: {
      name: key,
      label,
      props: nestedProps,
    },
  };
}