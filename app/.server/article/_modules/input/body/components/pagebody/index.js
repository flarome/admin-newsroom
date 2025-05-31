import {
  text_body,
  text_copy,
  text_config,
  text_props,
  header_body,
  header_copy,
  header_config,
  header_props,
} from "./components/index.js";

import {
  createZodSchemaFromProps,
  parseZodValueFromProps,
} from "../../utils/validate.js";

import { createProps } from "../../utils/props.js";

export const blocks = [
  {
    title: text_config.title,
    type: text_config.type,
    props: Object.values(text_props),
  },
  {
    title: header_config.title,
    type: header_config.type,
    props: Object.values(header_props),
  },
];

export const config = {
  type: "bodyCopy",
  title: "bodyCopy",
};

export const props = {
  ...createProps("dropcaps", "checkbox", "Lettrine", false, "boolean"),
  ...createProps(
    "pagebodysmall",
    "checkbox",
    "pagebodysmall",
    false,
    "boolean",
  ),
};

const propsSchema = createZodSchemaFromProps(props);

export function body(section) {
  const content = (section.blocks || []).map((block) => {
    switch (block.type) {
      case text_config.type:
        return text_body(block);
      case header_config.type:
        return header_body(block);
    }
  });

  const settings = parseZodValueFromProps(propsSchema, section.values || {});

  return {
    [config.type]: {
      content: content,
      pagebodysmall: settings.pagebodysmall,
      dropcaps: settings.dropcaps,
    },
  };
}

export function copy(section) {
  const content = (section.blocks || []).map((block) => {
    switch (block.type) {
      case text_config.type:
        return text_copy(block);

      case header_config.type:
        return header_copy(block);
    }
  });
  return content;
}
