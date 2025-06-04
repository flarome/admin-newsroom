import { fieldPath as handlePath } from "../../../frontend/article/components/seo/components/handle";

export const shopifyToFormFieldMap = {
  "article.handle": {
    path: handlePath,
    messages: {
      "Handle has already been taken": "Ce handle est déjà utilisé. Veuillez en choisir un autre.",
    },
  },
};