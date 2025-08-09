// src/utils/stringUtils.ts

/**
 * Tronque une chaîne à une longueur donnée, ajoute "…" si tronquée.
 */
export function truncateText(text: string, maxLength: number): string {
  return text.length > maxLength ? `${text.substring(0, maxLength).trim()}…` : text;
}

// Regex utilitaires
const removeCharsRegex = /'|"|\(|\)|\[|\]/g;
const nonWordRegex = /\W+/g;
const trimDashesRegex = /^-+|-+$/g;

/**
 * Transforme une chaîne en slug (minuscule, remplace certains caractères par des tirets).
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(removeCharsRegex, "")
    .replace(nonWordRegex, "-")
    .replace(trimDashesRegex, "");
}

const camelCaseRegex = /(_|-)([a-z])/g;

/**
 * Transforme une chaîne snake_case ou kebab-case en camelCase.
 */
export function toCamelCase(text: string): string {
  return text.toLowerCase().replace(camelCaseRegex, (_, __, chr) => chr.toUpperCase());
}

// Entités HTML courantes pour décodage
const htmlEntitiesMap: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#x27;": "'",
};

const htmlEntityRegex = /&(?:amp|lt|gt|quot|#39|#x27);/g;
const multipleSpacesRegex = /\s+/g;
const htmlTagRegex = /<[^>]+>/g;
const closingHtmlTagRegex = /<\/[^>]+>/g;
const styleScriptTagRegex = /<(style|script)[^<]*>[\s\S]*?<\/\1>/gi;
const newLineRegex = /\r?\n/g;

/**
 * Nettoie le HTML d’une chaîne en retirant balises, scripts, styles, entités, etc.
 */
export function cleanHtml(html: string): string {
  return html
    .replace(styleScriptTagRegex, "")
    .replace(closingHtmlTagRegex, " ")
    .replace(htmlTagRegex, "")
    .replace(newLineRegex, " ")
    .replace(multipleSpacesRegex, " ")
    .replace(htmlEntityRegex, decodeHtmlEntity)
    .trim();
}

/**
 * Remplace une entité HTML par son équivalent.
 */
function decodeHtmlEntity(entity: string): string {
  return htmlEntitiesMap.hasOwnProperty(entity) ? htmlEntitiesMap[entity] : entity;
}

/**
 * Met la première lettre d’une chaîne en majuscule.
 */
export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Supprime tous les espaces d’une chaîne.
 */
export function removeSpaces(text: string): string {
  return text.replace(/\s+/g, "");
}

/**
 * Met toute la chaîne en minuscules.
 */
export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

// Expressions régulières utilisées pour la fonction formatString
const splitRegexArray = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
const stripRegex = /[^A-Z0-9]+/gi;

/**
 * Transforme une chaîne avec options : split par regex, suppression, transformation, jointure.
 */
export interface FormatOptions {
  splitRegexp?: RegExp | RegExp[];
  stripRegexp?: RegExp;
  transform?: (input: string) => string;
  delimiter?: string;
}

export function formatString(
  input: string,
  options: FormatOptions = {}
): string {
  const {
    splitRegexp = splitRegexArray,
    stripRegexp = stripRegex,
    transform = toLowerCase,
    delimiter = " ",
  } = options;

  // Support splitRegexp en tableau ou RegExp
  let formatted = replaceMultiple(input, splitRegexp, "$1\0$2");
  formatted = formatted.replace(stripRegexp, "\0");

  let start = 0;
  let end = formatted.length;

  while (formatted.charAt(start) === "\0") start++;
  while (formatted.charAt(end - 1) === "\0") end--;

  const parts = formatted.slice(start, end).split("\0");

  return parts.map(transform).join(delimiter);
}

/**
 * Remplace plusieurs occurrences par une chaîne donnée.
 * Supporte RegExp ou tableau de RegExp.
 */
function replaceMultiple(
  input: string,
  patterns: RegExp | RegExp[],
  replacement: string
): string {
  if (Array.isArray(patterns)) {
    return patterns.reduce((acc, regex) => acc.replace(regex, replacement), input);
  }
  return input.replace(patterns, replacement);
}

/**
 * Profonde fusion d'objets (simplifiée, similaire à Object.assign).
 */
export function mergeObjects<T extends object, U extends object>(target: T, source: U): T & U {
  return Object.assign({}, target, source);
}

/**
 * Deep get avec délimiteur personnalisé, ex: "foo.bar.baz" ou "foo_bar_baz".
 * Utilise formatString pour transformer la clé.
 */
export function deepGetWithDelimiter(
  key: string,
  options: FormatOptions = { delimiter: "." }
): string {
  return formatString(key, options);
}

/**
 * Deep get avec délimiteur point (.)
 */
export function deepGetWithDotDelimiter(
  key: string,
  options?: FormatOptions
): string {
  return deepGetWithDelimiter(key, { delimiter: ".", ...options });
}

/**
 * Deep get avec délimiteur underscore (_)
 */
export function deepGetWithUnderscoreDelimiter(
  key: string,
  options?: FormatOptions
): string {
  return deepGetWithDelimiter(key, { delimiter: "_", ...options });
}
