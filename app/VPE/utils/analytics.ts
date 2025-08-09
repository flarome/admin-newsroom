import { deepGetWithUnderscoreDelimiter } from "utils/string";

const DATA_ATTRIBUTE_PREFIX = "data-component-extra-";

interface ComponentExtra {
  name: string;
  value: any;
}

/**
 * Transforme un tableau de données en un objet clé-valeur avec des clés formatées.
 * @param extras Tableau d'objets avec propriétés `name` et `value`
 * @param withPrefix Indique si on préfixe les clés avec DATA_ATTRIBUTE_PREFIX (par défaut true)
 * @returns Objet fusionné avec clés formatées
 */
export function mapExtrasToDataAttributes(
  extras: ComponentExtra[],
  withPrefix: boolean = true
): Record<string, any> {
  return extras.reduce((accumulator, extra) => {
    const mapped = mapSingleExtra(extra, withPrefix);
    return Object.assign(accumulator, mapped);
  }, {});
}

/**
 * Transforme un seul élément en objet clé-valeur, la clé étant formatée.
 * @param extra Objet avec `name` et `value`
 * @param withPrefix Si true, ajoute le préfixe DATA_ATTRIBUTE_PREFIX à la clé
 * @returns Objet avec clé formatée et valeur associée
 */
function mapSingleExtra(
  extra: ComponentExtra,
  withPrefix: boolean
): Record<string, any> {
  const { name, value } = extra;
  const key = withPrefix ? `${DATA_ATTRIBUTE_PREFIX}${deepGetWithUnderscoreDelimiter(name)}` : deepGetWithUnderscoreDelimiter(name);
  return { [key]: value };
}
