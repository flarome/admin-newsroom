import { get } from "../utils/get";
import { merge } from "../utils/merge";

const REPLACE_REGEX = /{([^}]*)}/g;

type Translations = Record<string, any>;
type Replacements = Record<string, string | number>;

class I18n {
  private translation: Translations;

  /**
   * @param translation A locale object or array of locale objects that overrides default translations.
   *                    If specifying an array, your desired language dictionary should come first,
   *                    followed by fallback dictionaries.
   */
  constructor(translation: Translations | Translations[]) {
    this.translation = Array.isArray(translation)
      ? merge(...translation.slice().reverse())
      : translation;
  }

  translate(id: string, replacements?: Replacements): string {
    const text = get(this.translation, id, "");

    if (!text || typeof text !== "string") {
      return "";
    }

    if (replacements) {
      return text.replace(REPLACE_REGEX, (match) => {
        const replacementKey = match.substring(1, match.length - 1);

        if (replacements[replacementKey] === undefined) {
          const replacementData = JSON.stringify(replacements);
          throw new Error(
            `Error in translation for key '${id}'. No replacement found for key '${replacementKey}'. The following replacements were passed: '${replacementData}'`
          );
        }

        return String(replacements[replacementKey]);
      });
    }

    return text;
  }

  translationKeyExists(path: string): boolean {
    return Boolean(get(this.translation, path));
  }
}

export { I18n };
