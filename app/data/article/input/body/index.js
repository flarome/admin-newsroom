import { filterVisibleSectionsWithBlocks } from "../helpers/vpe.js";
import {
  pagebody_body,
  pagebody_copy,
  pagebody_config,
  pagebody_props,
  pagebody_blocks,

    imageInline_body,
  imageInline_copy,
  imageInline_config,
  imageInline_props,
  imageInline_blocks,
} from "./components/index.js";

export const sections = [ 
  {
    title: pagebody_config.title,
    type: pagebody_config.type,
    props: Object.values(pagebody_props),
    blocks: pagebody_blocks,
  },
    {
    title: imageInline_config.title,
    type: imageInline_config.type,
    props: Object.values(imageInline_props),
    blocks: imageInline_blocks,  
  },
];

console.log('sections', JSON.stringify(sections, null, 2))



async function body(filteredSections = []) {

  const content =
    filteredSections?.map((section) => {
      switch (section.type) {
        case pagebody_config.type:
          return pagebody_body(section);
                  case imageInline_config.type:
          return imageInline_body(section);
        default:
          return []; // par sécurité
      }
    }) || [];

  return { body: content };
}

function copy(filteredSections = []) {
  const content =
    filteredSections?.flatMap((section) => {
      switch (section.type) {
        case pagebody_config.type:
          return pagebody_copy(section); // retourne un tableau
             case imageInline_config.type:
          return imageInline_copy(section);
        default:
          return []; // par sécurité
      }
    }) || [];

  return { copy: content };
}

export default async function generate(data) {
  // Conversion HTML → JSON

  const filteredSections = filterVisibleSectionsWithBlocks(data);
  const { body: bodyData } = await body(filteredSections);
  const { copy: copyText } = copy(filteredSections);

  return {
    admin: data,
    history: {},
    frontend: {
      copyText,
      body: bodyData,
    },
  };
}
