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
