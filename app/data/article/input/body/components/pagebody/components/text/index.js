import {
  createZodSchemaFromProps,
  parseZodValueFromProps,
} from "../../../../../utils/validate.js";

import { createProps } from "../../../../../utils/props.js";



export const config = {
  title: "Text",
  type: "text",
};

export const props = {
  ...createProps("location", "plainText", "location", "", "string"),
  ...createProps("text", "richText", "pagebodysmall", "", "string"),
};

const propsSchema = createZodSchemaFromProps(props);



export function revert(data) {
  return {
    type: config.type,
    values: {
      location: data.location ?? "",
      text: data.text ?? "",
    },
  };
}

export function body(block) {
  const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    type: "text",
    location: settings.location,
    text: settings.text,
  };
}

export function copy(block) {
  const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    copy: settings.text,
  };
}
