
import { Field, FieldProps } from "../../types";
import { UiState } from "../../types";

import {
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  RadioField,
  SelectField,
  RangeField
 // ExternalField,
 // ArrayField,
 // DefaultField,
//  TextareaField,
// ObjectField
} from "./fields";

import { useAppStore } from "@VPE/store";
import { useSafeId } from "lib";
import { NestedFieldContext } from "./context";
import { useFeatureFlags } from "@VPE/contexts";;
import { ActionsList, type Action } from "../_editorUI/Actions";
import { LabelledSetting, LabelledSettingProps } from "../_editorUI/LabelledSetting";


 














interface FieldLabelPropsInternal {

   readOnly?: boolean;

   
  id: LabelledSettingProps["id"];
  label: LabelledSettingProps["label"];
  error?:LabelledSettingProps["error"];
  highlightText?: LabelledSettingProps["highlightText"];
  actions?: Action[]
  helpText?: string;
  helpTextPosition?: LabelledSettingProps["helpTextPosition"]
  children: React.ReactNode;
  inline?: boolean;
  stacked?: boolean;
  layout?: LabelledSettingProps["layout"];
  labelBlockAlign?: LabelledSettingProps["labelBlockAlign"];
}

function FieldLabelInternal(props: FieldLabelPropsInternal) {
  const {
    id,
    label,
    error,
    highlightText,
    actions,
    helpText,
    helpTextPosition = "below",
    children,
    inline,
    stacked,
    layout,
    labelBlockAlign,
  } = props;

  // Supposé hook/custom hook retournant si UI dense activé
  const { denseUIEnabled } = useFeatureFlags();

  const actionsElement = actions ? <ActionsList actions={actions} /> : null; 

  function renderHelpText(text?: string): string | null {
  if (!text) return null; 

  return text;
}
  const helpTextElement = renderHelpText(helpText);

  const computeLayout = (): LabelledSettingProps["layout"] => {
    if (layout) return layout;
    if (stacked) return "stacked";
    if (inline || denseUIEnabled) return "inline";
    return "stacked";
  };

  return (
    <LabelledSetting
      id={id}
      label={label}
      error={error}
      highlightText={highlightText}
      actions={actionsElement}
      helpText={helpTextElement}
      helpTextPosition={helpTextPosition}
      layout={computeLayout()}
      labelBlockAlign={denseUIEnabled ? labelBlockAlign : undefined}
    >
      {children}
    </LabelledSetting>
  );
}









type FieldPropsInternalOptional<ValueType = any, F = Field<any>> = FieldProps<
  F,
  ValueType
> & {
  Label?: React.FC<FieldLabelPropsInternal>;
  label?: string;
  labelIcon?: ReactNode;
  name?: string;
};

export type FieldPropsInternal<ValueType = any, F = Field<any>> = FieldProps<
  F,
  ValueType
> & {
  Label: React.FC<FieldLabelPropsInternal>;
  label?: string;
  labelIcon?: ReactNode;
  id: string;
  name?: string;
};

function AutoFieldInternal<
  ValueType = any,
  FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>
>(
  props: FieldPropsInternalOptional<ValueType, FieldType> & {
 Label?: React.FC<FieldLabelPropsInternal>;
  }
) {

  const nestedFieldContext = useContext(NestedFieldContext);

  const { id, Label = FieldLabelInternal } = props;

  const field = props.field as Field<ValueType>;
  const label = field.label;
  const labelIcon = field.labelIcon;

  const defaultId = useSafeId();
  const resolvedId = id || defaultId;

  const defaultFields = {
   // array: ArrayField,
   // external: ExternalField,
   // object: ObjectField,
    select: SelectField,
  //  textarea: TextareaField,
    radio: RadioField,

    range: RangeField
   // text: DefaultField,
   // number: DefaultField,
  };

  const render = {
 //   array: defaultFields.array,
   // external:  defaultFields.external,
   // object: defaultFields.object,
    select:  defaultFields.select,
  //  textarea:  defaultFields.textarea,
    radio:  defaultFields.radio,

    range: defaultFields.range
  //  text:  defaultFields.text,
   // number:  defaultFields.number,
  };

  const mergedProps = {
    ...props,
    field,
    label,
    labelIcon,
    Label,
    id: resolvedId,
  } as FieldPropsInternal;


  const { visible = true } = props.field;

  if (!visible) {
    return null;
  }

  let children = null;
  let FieldComponent: React.ComponentType<any>;

  if (field.type === "custom") {
    if (!field.render) {
      console.warn("[AutoFieldInternal] custom field ignored because no render provided");
      return null;
    }
    FieldComponent = field.render as any;
  } else {
    children = defaultFields[field.type](mergedProps);
    FieldComponent = render[field.type] as (props: FieldProps) => ReactElement;
  }

  return (
    <NestedFieldContext.Provider
      value={{
        readOnlyFields: nestedFieldContext.readOnlyFields || {},
        localName: nestedFieldContext.localName ?? mergedProps.name,
      }}
    >
      <div
        className={""}
       /* onFocus={onFocus}
        onBlur={onBlur}*/
        onClick={(e) => {
          // Prevent propagation of any click events to parent field.
          // For example, a field within an array may bubble an event
          // and fail to stop propagation.
          e.stopPropagation();
        }}
      >




        <FieldComponent {...mergedProps}>{children}</FieldComponent>


      </div>
    </NestedFieldContext.Provider>
  );
}

type FieldNoLabel<Props extends any = any> = Omit<Field<Props>, "label">;

export function AutoFieldPrivate<
  ValueType = any,
  FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>
>(
  props: FieldPropsInternalOptional<ValueType, FieldType> & {
    Label?: React.FC<FieldLabelPropsInternal>;
  }
) {
  const isFocused = useAppStore((s) => s.state.ui.field.focus === props.name);
  const { value, onChange } = props;

  const [localValue, setLocalValue] = useState(value);

  const onChangeLocal = useCallback(
    (val: any, ui?: Partial<UiState>) => {
      setLocalValue(val);

      onChange(val, ui);
    },
    [onChange]
  );

  useEffect(() => {
    // Prevent global state from setting local state if this field is focused
    if (!isFocused) {
      setLocalValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (!isFocused) {
      if (value !== localValue) {
        setLocalValue(value);
      }
    }
  }, [isFocused, value, localValue]);

  const localProps = {
    value: localValue,
    onChange: onChangeLocal,
  };

  return <AutoFieldInternal<ValueType, FieldType> {...props} {...localProps} />;
}

export const AutoField = AutoFieldInternal 