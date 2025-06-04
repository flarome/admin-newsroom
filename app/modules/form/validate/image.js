import _ from "lodash";

import { validateFileOrUrl } from "../helpers/validateField";

export async function validateSrc(requireImage, data, validImageTypes) {
  // data contient les valeurs RHF du submit
  const results = await Promise.all(
    requireImage.map(async (path) => {
      const value = _.get(data, path); // ici on prend dans data, pas fields

      if (!value) return { path, error: null };

      const res = await validateFileOrUrl(value, validImageTypes);
      return { path, error: res === true ? null : res };
    }),
  );

  const errors = results.filter((r) => r.error);

  return errors;
}
