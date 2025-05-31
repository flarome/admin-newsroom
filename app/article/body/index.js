import {
  pagebody_body,
  pagebody_copy,
  pagebody_config,
  pagebody_props,
  pagebody_blocks,
} from "./components/index.js";

export const sections = [
  {
    title: pagebody_config.title,
    type: pagebody_config.type,
    props: Object.values(pagebody_props),
    blocks: pagebody_blocks,
  },
];

async function body(sections = []) {
  const content =
    sections?.map((section) => {
      switch (section.type) {
        case pagebody_config.type:
          return pagebody_body(section);
        default:
          return []; // par sécurité
      }
    }) || [];

  return { body: content };
}

function copy(sections = []) {
  const content =
    sections?.flatMap((section) => {
      switch (section.type) {
        case pagebody_config.type:
          return pagebody_copy(section); // retourne un tableau
        default:
          return []; // par sécurité
      }
    }) || [];

  return { copy: content };
}

export default async function generate(data) {
  // Conversion HTML → JSON
  const { body: bodyData } = await body(data);

  const { copy: copyText } = copy(data);

  return {
    copyText,
    body: bodyData,
  };
}
