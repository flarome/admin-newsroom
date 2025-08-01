
import { Field, FieldProps } from "../../types";
import { UiState } from "../../types";

import {
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  RadioField,
  SelectField,
 // ExternalField,
 // ArrayField,
 // DefaultField,
//  TextareaField,
// ObjectField
} from "./fields";

import { useAppStore } from "@VPE/store";
import { useSafeId } from "@/lib";
import { NestedFieldContext } from "./context";
import classNames from "classnames";
import { HyperlinkedTextClass, LabelledSettingClass } from "@VPE/styles/OnlineStore";
import {BlockStack, Label} from "@polaris/npm"
import { type FactoryOptions } from "../../../lib/get-class-name-factory";
import type { SpaceScale } from '@shopify/polaris-tokens';


import { InlineStack } from "@polaris/internal";

export const FieldLabel = ({
  id,
  label,
  readOnly,
  options,
  topPadding
}: {
  label: string | ReactNode;
  readOnly?: boolean;
  id:string;
options?: FactoryOptions;
topPadding?: SpaceScale;
}) => {


const styles = {
  ...(topPadding && {
    ["--osui-labelled-setting-label-top-padding"]: `var(--p-space-${topPadding})`,
  }),
} as React.CSSProperties;

  return (


        <div
style={styles}
        className={classNames(LabelledSettingClass.DenseLabelWrapper, LabelledSettingClass._(options, false))}
      >

        <Label id={id}>
          <span className={LabelledSettingClass.DenseLabel}>
             {label}
          </span>

        </Label>

      </div>
  );
};

type FieldLabelPropsInternal = {
  children?: ReactNode;
  label?: string | ReactNode;
  readOnly?: boolean;
  id: string;
  labelledOptions?: FactoryOptions;
  topPadding?: SpaceScale;
};

export const FieldLabelInternal = ({
  children,
  label,
  readOnly,
  id,
  labelledOptions,
  topPadding
}: FieldLabelPropsInternal) => {

  if (!label) {
    return <>{children}</>;
  }

if(children) {
  return (

    <div className={LabelledSettingClass.DenseWrapper}>
    <FieldLabel 
      label={label}
      id={id}
      readOnly={readOnly}
       options={labelledOptions}
       topPadding={topPadding}
    />

      <BlockStack gap={{xs: '100'}} >

             <InlineStack
        blockAlign="center"
        direction={{ xs: "row" }}
        gap={{ xs: "150" }}
      >
        <div className={LabelledSettingClass.ChildrenWrapper}>
  {children}

        </div>
      </InlineStack>
  </BlockStack>
    </div>


  )
}

  return (
    <FieldLabel 
      label={label}
      id={id}
      readOnly={readOnly}
      options={labelledOptions}
        topPadding={topPadding}
    />
    
  );
};

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


   <BlockStack gap={{xs: '100'}} >

        <FieldComponent {...mergedProps}>{children}</FieldComponent>

       </BlockStack>
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

export function AutoField<
  ValueType = any,
  FieldType extends FieldNoLabel<ValueType> = FieldNoLabel<ValueType>
>(props: FieldProps<FieldType, ValueType>) {
  const DefaultLabel = useMemo(() => {
    const DefaultLabel = (labelProps: FieldLabelPropsInternal) => (
      <div
        className={classNames(LabelledSettingClass.DenseLabelWrapper, LabelledSettingClass._({stacked: true,blockAlignCenter:true}))}
      >

        <Label id={labelProps.id}>
          <span className={LabelledSettingClass.DenseLabel}>
            <span className={HyperlinkedTextClass._({hideExternalIcon: true})}>
              {labelProps.label}
            </span>
          </span>

        </Label>

      </div>
    );

    return FieldLabelInternal;
  }, []);

  return (
    <AutoFieldInternal<ValueType, FieldType> {...props} Label={DefaultLabel} />
  );
}

