import { z } from "zod";

/**
 * Transforme un objet props en z.object() dynamique
 * @param {Object} propsConfig
 * @returns {z.ZodObject}
 */
export function createZodSchemaFromProps(propsConfig) {
  const shape = {};

  Object.entries(propsConfig).forEach(([key, config]) => {
    // Gestion des groupes imbriqués
    if (config?.props && Array.isArray(config.props)) {
      const nestedShape = {};
      config.props.forEach((nestedProp) => {
        let schema;

        switch (nestedProp.validate ?? typeof nestedProp.value) {
          case "boolean":
            schema = z.boolean();
            break;
          case "string":
            schema = z.string();
            break;
          case "number":
            schema = z.number();
            break;
          default:
            throw new Error(`Type inconnu : ${nestedProp.validate} pour ${nestedProp.name}`);
        }

        if ("value" in nestedProp) {
          schema = schema.default(nestedProp.value);
        }

        nestedShape[nestedProp.name] = schema;
      });

      shape[key] = z.object(nestedShape);
    } else {
      // Champs simples (logique inchangée)
      let schema;

      switch (config.validate) {
        case "boolean":
          schema = z.boolean();
          break;
        case "string":
          schema = z.string();
          break;
        case "number":
          schema = z.number();
          break;
        default:
          throw new Error(`Type inconnu : ${config.validate} pour ${key}`);
      }

      if (config.hasOwnProperty("value")) {
        schema = schema.default(config.value);
      }

      shape[key] = schema;
    }
  });

  return z.object(shape);
}
/*export function createZodSchemaFromProps(propsConfig) {
  const shape = {};

  Object.entries(propsConfig).forEach(([key, config]) => {
    let schema;

    switch (config.validate) {
      case "boolean":
        schema = z.boolean();
        break;
      case "string":
        schema = z.string();
        break;
      case "number":
        schema = z.number();
        break;
      default:
        throw new Error(`Type inconnu : ${config.validate} pour ${key}`);
    }

    // Si une valeur par défaut est fournie, l'ajouter
    if (config.hasOwnProperty("value")) {
      schema = schema.default(config.value);
    }

    shape[key] = schema;
  });

  return z.object(shape);
}*/



/**
 * Transforme un objet props en z.object() dynamique
 * @param {z.ZodObject} propsSchema
 * @param {Object} data
 * @returns {Object}
 */
export function parseZodValueFromProps(propsSchema, data) {
  return propsSchema.parse(data);
}
 