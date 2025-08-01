
import { Field, FieldProps } from "../../types";
import { UiState } from "../../types";

import {
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
import {classnames as classNames} from "lib";
import { HyperlinkedTextClass, LabelledSettingClass } from "@VPE/styles/OnlineStore";
import {BlockStack, Label, Tooltip} from "@polaris/npm"
import { type FactoryOptions } from "../../../lib/get-class-name-factory";
import type { SpaceScale } from '@shopify/polaris-tokens';


import { InlineStack } from "@polaris/internal";
import { useFeatureFlags, useViewportContext } from "@VPE/contexts";






















function renderHelpText(text?: string): string | null {
  if (!text) return null;

  return text;
}



interface PiProps {
  id: string;
  label: React.ReactNode;
  error?: React.ReactNode;
  highlightText?: string;
  actions?: Action
  helpText?: string;
  helpTextPosition?: "below" | "above" | string;
  children?: React.ReactNode;
  inline?: boolean;
  stacked?: boolean;
  layout?: string;
  labelBlockAlign?: string;
}


function FieldWrapperInner({
  id,
  label,
  error,
  highlightText,
  actions,
  helpText,
  helpTextPosition = "below",
  children,
  layout,
  labelTopPadding,
  labelBlockAlign = "input-baseline",
  tone,
}: Props) {
  const { denseUIEnabled } = useFeatureFlags(); // remplace Ja()

  const isHelpTextBelow = helpTextPosition === "below";

  const helpTextMarkup = helpText ? (
    <HelpText
      paddingBlockStart={denseUIEnabled ? undefined : "100"}
      id={`HelpText-${id}`}
      paddingBlockEnd={isHelpTextBelow ? undefined : "100"}
    >
      <HelpTextContent content={helpText} tone={tone} />
    </HelpText>
  ) : null;

  const errorList = Array.isArray(error) || error == null ? error : [error];

  const errorMarkup =
    errorList && errorList.length > 0 ? (
      <div className={denseUIEnabled ? styles.DenseError : styles.Error}>
        {errorList.map((message, index) => (
          <ErrorMessage key={index} message={message} fieldID={`Error-${id}`} />
        ))}
      </div>
    ) : null;

  const highlightMarkup = highlightText ? (
    <HighlightText text={highlightText} />
  ) : null;

  const actionsMarkup = actions ? <ActionsWrapper wrap={false}>{actions}</ActionsWrapper> : null;

  if (denseUIEnabled) {
    if (layout === "stacked") {
      return (
        <StackedLayout
          label={label}
          id={id}
          renderHelpTextBelow={isHelpTextBelow}
          helpTextMarkup={helpTextMarkup}
          actionsMarkup={actionsMarkup}
          highlightMarkup={highlightMarkup}
          errorMarkup={errorMarkup}
          tone={tone}
        >
          {children}
        </StackedLayout>
      );
    }
    return (
      <DefaultLayout
        label={label}
        id={id}
        layout={layout}
        helpTextMarkup={helpTextMarkup}
        highlightMarkup={highlightMarkup}
        errorMarkup={errorMarkup}
        labelTopPadding={labelTopPadding}
        labelBlockAlign={labelBlockAlign}
        tone={tone}
      >
        {children}
      </DefaultLayout>
    );
  }

  // Non dense UI case

  const labelWrapper = (
    <>
      <div className={styles.LabelWrapper}>
        <LabelComponent id={id} tone={tone === Tone.Magic ? Tone.Magic : undefined}>
          <span className={styles.Label}>{label}</span>
        </LabelComponent>
        {actionsMarkup}
      </div>
      {isHelpTextBelow ? null : helpTextMarkup}
    </>
  );

  const content =
    layout === "inline" ? (
      <div className={styles.Wrapper}>
        {labelWrapper}
        {children}
      </div>
    ) : (
      <>
        {labelWrapper}
        {children}
      </>
    );

  return (
    <>
      {content}
      {errorMarkup}
      {isHelpTextBelow ? helpTextMarkup : null}
      {highlightMarkup}
    </>
  );
}

interface Action {
  disabled: boolean;
  content: React.ReactNode;
  disabledContent?: React.ReactNode;
  icon?: React.ReactNode;
  pickerToggle?: {
    active: boolean;
    togglePicker: () => void;
    closePicker: () => void;
  };
  onAction?: () => void;
  url?: string;
  tooltipDisabled?: boolean;
  pickerOptions?: {
    width?: number | string;
  };
  pickerContent?: React.ReactNode;
}

interface ActionButtonProps {
  action: Action;
  fillContainer?: boolean;
}


interface PopoverProps {
  children: ReactNode;
  activator: ReactNode;
  containerElement?: ElementType;
  containerClassname?: string;
  // Ajoute d'autres props spécifiques que Gee accepte ici si besoin
  [key: string]: any;
}





interface UsePopoverAccessibilityPropsArgs {
  id?: string;
  open?: boolean;
  ariaHasPopup?: string;
}

interface UsePopoverAccessibilityPropsResult {
  activatorAccessibilityProps: {
    "aria-controls": string;
    "aria-expanded": boolean;
    "aria-haspopup"?: string;
  };
  popoverAccessibilityProps: {
    role: string;
    id: string;
  };
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}


// Fonction fictive pour générer un id accessible
function getAccessibleId(base: string, id?: string) {
  return id ? `${base}-${id}` : base;
}

// Fonction fictive pour définir le rôle en fonction de ariaHasPopup
function getRole(ariaHasPopup?: string): string {
  if (ariaHasPopup === "dialog") return "dialog";
  if (ariaHasPopup === "menu") return "menu";
  return "region";
}


function useBoolean(e: boolean) {
    const [t,n] = useState(e);
    return {
        value: t,
        toggle: useCallback( () => n(r => !r), []),
        setTrue: useCallback( () => n(!0), []),
        setFalse: useCallback( () => n(!1), [])
    }
}





import { useUniqueId } from "@VPE/contexts/UniqueIdContext";

export function usePopoverAccessibilityProps({
  id,
  open = false,
  ariaHasPopup,
}: UsePopoverAccessibilityPropsArgs): UsePopoverAccessibilityPropsResult {
  const { value: isOpen, setTrue: openPopover, setFalse: closePopover, toggle } = useBoolean(open);

  const popoverId = useUniqueId("Popover", id);

  const activatorAccessibilityProps = useMemo(() => ({
    "aria-controls": popoverId,
    "aria-expanded": isOpen,
    "aria-haspopup": ariaHasPopup,
  }), [ariaHasPopup, popoverId, isOpen]);

  const popoverAccessibilityProps = useMemo(() => ({
    role: getRole(ariaHasPopup),
    id: popoverId,
  }), [ariaHasPopup, popoverId]);

  return {
    activatorAccessibilityProps,
    popoverAccessibilityProps,
    isOpen,
    open: openPopover,
    close: closePopover,
    toggle,
  };
}



function Popover({
  children,
  activator,
  containerElement: Container = "div",
  containerClassname,
  ...restProps
}: PopoverProps) {
  const { activatorAccessibilityProps, popoverAccessibilityProps } = usePopoverAccessibilityProps({
    ariaHasPopup: "dialog",
  });

  return (
<>
      <Container {...activatorAccessibilityProps} className={containerClassname}>
        {activator}
      </Container>
      <Gee popoverAccessibilityProps={popoverAccessibilityProps} {...restProps}>
        {children}
      </Gee>
   </>
  );
}



import {styles as EditorStyles} from '@VPE/styles/Editor';

function ActionButton({ action, fillContainer = false }: ActionButtonProps) {
  const { mobile } = useViewportContext(); // remplace qe()
  const { denseUIEnabled } = useFeatureFlags(); // remplace Wt()

  const { disabled, content, disabledContent, icon } = action;
  const hasPickerToggle = Boolean(action.pickerToggle);
  const hasOnAction = Boolean(action.onAction);
  const hasUrl = Boolean(action.url);
  
  const isTooltipDisabled =
    action.tooltipDisabled ||
    (action.pickerToggle?.active ?? false) ||
    mobile ||
    (disabled && !disabledContent);

  function handleClick() {
    if (hasPickerToggle) {
      action.pickerToggle!.togglePicker();
    } else if (hasOnAction) {
      action.onAction!();
    }
  }

  const buttonContent = (
    <div
      className={classNames(
        EditorStyles.LabelAction,
        action.pickerToggle?.active && !mobile && EditorStyles.active,
        {
          [EditorStyles.fillContainer]: fillContainer,
          [EditorStyles.DenseUI]: denseUIEnabled,
        }
      )}
    >
      <TooltipWrapper content={disabled ? disabledContent : content} disabled={isTooltipDisabled}>
        <Button
          accessibilityLabel={content}
          icon={icon}
          onClick={handleClick}
          disabled={disabled}
          url={hasUrl ? action.url : undefined}
          external={hasUrl}
          slim
          fillContainer={fillContainer}
        />
      </TooltipWrapper>
    </div>
  );

  if (hasPickerToggle) {
    return (
      <Popover
        activator={buttonContent}
        active={action.pickerToggle!.active}
        width={action.pickerOptions?.width}
        onClose={action.pickerToggle!.closePicker}
        containerElement={fillContainer ? "span" : "div"}
      >
        {action.pickerContent}
      </Popover>
    );
  }

  return <div>{buttonContent}</div>;
}

interface TooltipWrapperProps {
  content: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
}

function TooltipWrapper({ content, children, disabled = false }: TooltipWrapperProps) {
  if (disabled) return <>{children}</>;
  return (
    <Tooltip
      content={content}
      preferredPosition="above"
      accessibilityLabel={content?.toString()}
      dismissOnMouseOut
    >
      {children}
    </Tooltip>
  );
}

interface ActionsListProps {
  actions: Action[];
}

export function ActionsList({ actions }: ActionsListProps) {
  return <>{actions.map((action, index) => <ActionButton key={`Action-${index}`} action={action} />)}</>;
}


function FieldWrapper(props: PiProps) {
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

  const helpTextElement = renderHelpText(helpText);

  const computeLayout = () => {
    if (layout) return layout;
    if (stacked) return "stacked";
    if (inline || denseUIEnabled) return "inline";
    return "stacked";
  };

  return (
    <FieldWrapperInner
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
    </FieldWrapperInner>
  );
}




















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

  readOnly?: boolean;
  labelledOptions?: FactoryOptions;
  topPadding?: SpaceScale;


  id: string;
  label: string | React.ReactNode;
  error?: React.ReactNode;
  highlightText?: string;
  actions?: React.ReactNode;
  helpText?: React.ReactNode;
  helpTextPosition?: "below" | "above" | string;
  children?: React.ReactNode;
  inline?: boolean;
  stacked?: boolean;
  layout?: string;
  labelBlockAlign?: string;
};

export const FieldLabelInternal = ({

  readOnly,
  labelledOptions,
  topPadding,


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
}: FieldLabelPropsInternal) => {


  const { denseUIEnabled } = useFeatureFlags();

  const actionsElement = actions ? <ActionsWrapper actions={actions} /> : null;

    const helpTextElement = renderHelpText(helpText);


      const computeLayout = () => {
    if (layout) return layout;
    if (stacked) return "stacked";
    if (inline || denseUIEnabled) return "inline";
    return "stacked";
  };


    return (
    <FieldWrapper
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
    </FieldWrapper>
  );



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

