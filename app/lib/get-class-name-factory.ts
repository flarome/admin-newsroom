import  {classnames} from './classnames';

type ModifierOptions = Record<string, boolean | undefined | null>;
export type FactoryOptions = string | ModifierOptions;
export type Styles = Record<string, string>;

export const getGlobalClassName = (
  rootClass: string,
  options: string | ModifierOptions
): string => {
  if (typeof options === "string") {
    return `${rootClass}-${options}`;
  } else {
    const mappedOptions: ModifierOptions = {};
    for (const option in options) {
      mappedOptions[`${rootClass}--${option}`] = options[option];
    }

    return classnames({
      [rootClass]: true,
      ...mappedOptions,
    });
  }
};

export interface Config {
  baseClass?: string;
}

/**
 * Génère une fonction de construction de className avec styles CSS Modules
 *
 * @param rootClass Le nom racine (ex: "Component")
 * @param styles Les classes générées par CSS Modules
 * @param config Optionnel : ajout d’un préfixe (baseClass)
 */
export const getClassNameFactory = (
  rootClass: string,
  styles: Styles,
  config: Config = { baseClass: "" }
) => {
  return (
    options: FactoryOptions = {},
    showDefault = true,
  ): string => {
    if (typeof options === "string") {
      const style = styles[`${rootClass}-${options}`];
      return style ? config.baseClass + style : "";
    }

    const modifiers = options;
    const prefixedModifiers: Record<string, boolean> = {};

    for (const modifier in modifiers) {
      const className = styles[`${rootClass}--${modifier}`];
      if (className) {
        prefixedModifiers[className] = !!modifiers[modifier];
      }
    }

    const base = styles[rootClass];

    return (
      config.baseClass +
      classnames({
        [base]: showDefault && !!base,
        ...prefixedModifiers,
      })
    );
  };
};


/**
 * Variante de getClassNameFactory sans afficher la classe de base par défaut
 *
 * @param rootClass
 * @param styles
 * @param config
 */
export const getClassNameOptionsFactory = (
  rootClass: string,
  styles: Styles,
  config: Config = { baseClass: "" }
) => {
  // On réutilise getClassNameFactory en forçant showDefault à false
  const factory = getClassNameFactory(rootClass, styles, config);
  return (options: FactoryOptions = {}) => factory(options, false);
};



export default getClassNameFactory;