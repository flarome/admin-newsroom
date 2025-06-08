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
    ...createProps("timestamp", "plainText", "timestamp", "", "string"),
  ...createProps("location", "plainText", "location", "", "string"),
  ...createProps("text", "richText", "pagebodysmall", "", "string"),
};

const propsSchema = createZodSchemaFromProps(props);





export function body(block) {
  const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    type: config.type,
    location: settings.location,
    timestamp: settings.timestamp,
    text: settings.text,
  };
}

export function copy(block) {
  const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    copy: settings.text,
  };
}
