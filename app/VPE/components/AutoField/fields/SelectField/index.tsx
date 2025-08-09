import React, { useState } from "react";

import { Select } from "@polaris/npm";

import { SegmentedControl } from "@VPE/components/ui";

import type { FieldPropsInternal } from "../..";

interface SelectFieldProps extends FieldPropsInternal {}

export const SelectField: React.FC<SelectFieldProps> = ({
  field,
  onChange,
  label,
  labelIcon,
  Label,
  value,
  name,
  readOnly,
  id,
}) => {
  // Ne rien afficher si type incorrect ou pas d'options
  if (field.type !== "select" || !field.options) {
    return null;
  }

  const [isOverflowed, setIsOverflowed] = useState(false);

  return (
    <Label
    actions={[{

      disabled: false,
      content: "TEST",
      icon: "info",
      pickerToggle: {active: false, closePicker: () => "", togglePicker: () => ""},
      pickerContent: (
        <>
        TEST CONTENT
        </>
      ),
      pickerOptions: {width: 300}

    }]}
      id={`SelectSetting-${id}`}
      label={label || name}
      labelBlockAlign="input-baseline"
      readOnly={readOnly}
      layout="stacked"
    >
      {isOverflowed ? (
        <Select
          label={label || name}
          labelHidden
          options={field.options}
          onChange={onChange}
          value={value}
          disabled={readOnly}
        />
      ) : (
        <SegmentedControl
          accessibilityLabel={label || name}
          options={field.options}
          value={value}
          onChange={onChange} // corrigé ici (pas "onchange")
          onOverflow={() => setIsOverflowed(true)}
          tone={undefined}
        />
      )}
    </Label>
  );
};