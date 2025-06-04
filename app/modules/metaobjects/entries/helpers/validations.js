export function buildValidations(def) {
  const rules = {};
  const choices = [];

  if (def.required) {
    rules.required = "Ce champ est requis";
  }

  for (const val of def.validations || []) {
    switch (val.name) {
      case "min":
        if (isDate(val.value)) {
          rules.validate = {
            ...(rules.validate || {}),
            minDate: (v) => new Date(v) >= new Date(val.value) || `Date minimale : ${val.value}`
          };
        } else if (isJSON(val.value)) {
          const parsed = JSON.parse(val.value);
          if (parsed?.value !== undefined) {
            rules.min = {
              value: parsed.value,
              message: `Valeur minimale : ${parsed.value} ${parsed.unit || ""}`.trim()
            };
          }
        } else {
          rules.minLength = {
            value: parseFloat(val.value),
            message: `Minimum ${val.value} caractères`
          };
        }
        break;

      case "max":
        if (isDate(val.value)) {
          rules.validate = {
            ...(rules.validate || {}),
            maxDate: (v) => new Date(v) <= new Date(val.value) || `Date maximale : ${val.value}`
          };
        } else if (isJSON(val.value)) {
          const parsed = JSON.parse(val.value);
          if (parsed?.value !== undefined) {
            rules.max = {
              value: parsed.value,
              message: `Valeur maximale : ${parsed.value} ${parsed.unit || ""}`.trim()
            };
          }
        } else {
          rules.maxLength = {
            value: parseFloat(val.value),
            message: `Maximum ${val.value} caractères`
          };
        }
        break;

      case "regex":
        try {
          rules.pattern = {
            value: new RegExp(val.value),
            message: "Format invalide"
          };
        } catch (e) {
          console.warn("Regex invalide ignorée:", val.value);
        }
        break;

      case "choices":
      case "allowed_domains":
      case "file_type_options":
        try {
          const list = JSON.parse(val.value);
          if (Array.isArray(list)) {
            choices.push(...list.map((v) => ({ label: v, value: v })));
          }
        } catch {
          console.warn("Choices/allowed_domains parsing failed:", val.value);
        }
        break;

      case "max_precision":
        rules.validate = {
          ...(rules.validate || {}),
          maxPrecision: (v) => {
            const decimals = String(v).split(".")[1]?.length || 0;
            return decimals <= parseInt(val.value, 10) || `Maximum ${val.value} décimales`;
          }
        };
        break;

      case "schema":
        rules.validate = {
          ...(rules.validate || {}),
          jsonSchema: (v) => {
            try {
              JSON.parse(v);
              return true;
            } catch {
              return "Format JSON invalide";
            }
          }
        };
        break;

      case "metaobject_definition_id":
      case "metaobject_definition_ids":
        // à gérer lors du rendu du champ référence
        break;

      case "product_taxonomy_attribute_handle":
        // à gérer dans un champ custom typeahead
        break;

      case "list.min":
        rules.validate = {
          ...(rules.validate || {}),
          minList: (v) =>
            Array.isArray(v) && v.length >= parseInt(val.value, 10) || `Minimum ${val.value} éléments`
        };
        break;

      case "list.max":
        rules.validate = {
          ...(rules.validate || {}),
          maxList: (v) =>
            Array.isArray(v) && v.length <= parseInt(val.value, 10) || `Maximum ${val.value} éléments`
        };
        break;
    }
  }

  return { rules, choices };
}


export function getDefaultValueForField(def) {
  const type = def?.type?.category || def?.type || "";
  const valueType = def?.type?.valueType || "";

  switch (type.toUpperCase()) {
    case "BOOLEAN":
      return "false"; // stringifié pour GraphQL
    case "INTEGER":
    case "FLOAT":
    case "NUMBER":
      return "0";
    case "DATE":
    case "DATETIME":
      return new Date().toISOString();
    case "JSON":
      return "{}";
    case "LIST":
      return "[]";
    case "TEXT":
    case "STRING":
    case "SINGLE_LINE_TEXT_FIELD":
    case "MULTI_LINE_TEXT_FIELD":
      return "";
    default:
      return ""; // fallback pour éviter null
  }
}

export function buildFieldsForMutation(def, data) {
      const fields = def
      .map((definition) => {
        const key = definition.key;
        const isRequired = definition.required === true;
        const rawValue = data?.[key];

        const hasValue =
          rawValue !== undefined &&
          rawValue !== null &&
          !(typeof rawValue === "string" && rawValue.trim() === "");

        if (!isRequired && !hasValue) {
          return null;
        }

        const value = hasValue
          ? String(rawValue)
          : getDefaultValueForField(definition);

        return {
          key,
          value,
        };
      })
      .filter(Boolean); // Supprimer les `null`


      return fields;
}