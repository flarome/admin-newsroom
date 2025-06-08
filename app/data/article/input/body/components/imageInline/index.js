
import {
  createZodSchemaFromProps,
  parseZodValueFromProps,
} from "../../../utils/validate.js";

import { createProps, createGroupProps } from "../../../utils/props.js";

export const blocks = [];

export const config = {
  type: "imageInline",
  title: "imageInline",
};

export const props = {
  ...createProps("fullbleed", "checkbox", "fullbleed", false, "boolean"),
  ...createProps("body-copy-wide", "checkbox", "body-copy-wide", false, "boolean"),
   ...createProps("border", "checkbox", "border", false, "boolean"),
   ...createProps("modal", "checkbox", "modal", false, "boolean"),


     ...createGroupProps("image", "Image", [
    ["showCta", "checkbox", "Show CTA", true, "boolean"],
    ["showCta2", "checkbox", "Show CTA 2", false, "boolean"],
  ]),


};

const propsSchema = createZodSchemaFromProps(props);



export function body(section) {

  const settings = parseZodValueFromProps(propsSchema, section.values || {});

  return {
    [config.type]: {
      fullbleed: settings.fullbleed,
      "body-copy-wide": settings["body-copy-wide"],
      border: settings.border,
      usdz: false,
      modal: settings.modal,

      image: {
        metadata: {
            srcs: {
                small: "",
                 small2x: "",
                medium: "",
                   medium2c: "",
                large: "",
                  large2x: ""
            }
        }

      }
    },
  };
}

export function copy(section) {
  return [];
}
