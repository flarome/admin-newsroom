import classnames from "classnames";

/**
 * @param {string} rootClass
 * @param {string | Record<string, any>} options
 * @returns {string}
 */
export const getGlobalClassName = (rootClass, options) => {
  if (typeof options === "string") {
    return `${rootClass}-${options}`;
  } else {
    const mappedOptions = {};
    for (const option in options) {
      mappedOptions[`${rootClass}--${option}`] = options[option];
    }

    return classnames({
      [rootClass]: true,
      ...mappedOptions,
    });
  }
};

/**
 * @param {string} rootClass
 * @param {Record<string, string>} styles
 * @param {{ baseClass?: string }} [config={ baseClass: "" }]
 * @returns {(options?: string | Record<string, any>) => string}
 */
const getClassNameFactory = (
  rootClass,
  styles,
  config = { baseClass: "" }
) => (options = {}, showDefault = true) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles[`${rootClass}-${descendant}`];

    if (style) {
      return config.baseClass + (styles[`${rootClass}-${descendant}`] || "");
    }

    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};

    for (const modifier in modifiers) {
      prefixedModifiers[styles[`${rootClass}--${modifier}`]] =
        modifiers[modifier];
    }

    const c = styles[rootClass];


      return (
      config.baseClass +
      classnames({
        [c]: showDefault && !!c,
        ...prefixedModifiers,
      })
    );


    return (
      config.baseClass +
      classnames({
        [c]: !!c,
        ...prefixedModifiers,
      })
    );
  } else {
    return config.baseClass + (styles[rootClass] || "");
  }
};

export default getClassNameFactory;