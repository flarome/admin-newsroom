// DebouncedField.jsx
import { useDebouncedFieldValue } from "./utils/debounce";
import { TextField, Checkbox, Select } from "@shopify/polaris";
import { Inline } from "./components/lexical";

import { RangeSlider } from "./components";

export const Fields = ({ field, onCommit, prefix = "" }) => {
  const { value, onChange, onBlur } = useDebouncedFieldValue(
    field.value,
    (val) => onCommit(field.name, val),
    400
  );

  switch (field.type) {
    case "richText":
      return (
        <Inline
          key={prefix + field.name}
          label={field.label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      );
    case "plainText":
      return (
        <TextField
          key={prefix + field.name}
          label={field.label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      );
    case "select":
      return (
        <Select
          key={prefix + field.name}
          label={field.label}
          options={field.options.map((o) => ({ label: o, value: o }))}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          key={prefix + field.name}
          label={field.label}
          checked={!!value}
          onChange={onChange}
        />
      );
    case "range":
      return (
        <RangeSlider
          field={field}
          onCommit={onCommit}
        />
      );
    default:
      return null;
  }
}