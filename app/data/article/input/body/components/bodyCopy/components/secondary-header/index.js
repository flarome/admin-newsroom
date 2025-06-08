
import {
  createZodSchemaFromProps,
  parseZodValueFromProps,
} from "../../../../../utils/validate.js";


import { createProps } from "../../../../../utils/props.js";


export const config = {
  title: "Header Secondaire",
  type: "secondary-header"
}

export const props = {
  ...createProps("header", "richText", "header", "", "string")
};


const propsSchema = createZodSchemaFromProps(props);



export function body(block) {

   const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    type: config.type,
    header: settings.header,
  };
}


export function copy(block) {

   const settings = parseZodValueFromProps(propsSchema, block.values || {});

  return {
    copy: settings.header
  };
}
