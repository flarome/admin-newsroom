
import {
  createZodSchemaFromProps,
  parseZodValueFromProps,
} from "../../../../../utils/validate.js";


import { createProps } from "../../../../../utils/props.js";


export const config = {
  title: "Header",
  type: "header"
}

export const props = {
  ...createProps("location", "plainText", "location", "", "string"),
  ...createProps("header", "richText", "pagebodysmall", "", "string")
};


const propsSchema = createZodSchemaFromProps(props);


export function revert(data) {
  return {
    type: config.type,
    values: {
      location: data.location ?? "",
      header: data.header ?? "",
    },
  };
}

export function body(block) {

   const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    type: "header",
    location: settings.location,
    header: settings.header,
  };
}


export function copy(block) {

   const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    copy: settings.header
  };
}
