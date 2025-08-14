import React, { useEffect, useRef } from "react";
import { classnames, useSafeId } from "lib"; // adapte selon ton projet
import { useViewportContext } from "@VPE/contexts";
import fr from './locales/fr.json';
import { useI18n } from "@shopify/react-i18n";
import { extractTextFromReactNode } from "utils/react/extractTextFromReactNode";
import { Text, Tooltip, type TextProps } from "@polaris/npm"; // ou ton composant Li
import { EditableTextClass } from "@VPE/styles/OnlineStore";
import { InternalIcon } from "admin-ui-foundations";
import {TruncateWithTooltip} from 'components/ui/Truncate';

export type EditableTextProps = {
  text: string;
  defaultText?: string;
  textProps?: TextProps;
  isEditing: boolean;
  onEditModeChange: (editing: boolean, opts?: { updateText?: boolean }) => void;
  onChange: (value: string) => void;
  tooltip?: React.ReactNode;
  disableClick?: boolean;
  showClearButton?: boolean;
  maxLength?: number;
};




export function EditableText({
  text,
  defaultText,
  textProps,
  isEditing,
  onEditModeChange,
  onChange,
  tooltip,
  disableClick = false,
  showClearButton = false,
  maxLength,
}: EditableTextProps) {


const [i18n] = useI18n({
  id: "EditableText_1us3mht",
  fallback: fr,
  translations(locale: string) {
    return import(`./locales/${locale}.json`);
  },
});


  const { mobile } = useViewportContext();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const preventBlurRef = useRef(false);

  const hasMaxLength = typeof maxLength === "number" && maxLength > 0;
  const currentText = extractTextFromReactNode(text);
  const fallbackText = extractTextFromReactNode(defaultText);




  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);





const TextProps: Omit<TextProps, 'children'> = {
  as: "span",
  variant: "bodyMd",
  ...(textProps || {}),
};

  const handleWrapperClick = () => {
    onEditModeChange(true);
  };
  const handleWrapperKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onEditModeChange(true);
    }
  };




  const handleClear = () => {
    onChange("");
    preventBlurRef.current = false;
    inputRef.current?.focus();
  };


    const handleKeyDownInput = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onChange(fallbackText);
      onEditModeChange(false, { updateText: false });
    } else if (e.key === "Enter") {
      if ((e.target as HTMLElement).hasAttribute("data-clear-button")) {
        handleClear();
        return;
      }
      onEditModeChange(false, { updateText: true });
    }
  };






  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      preventBlurRef.current ||
      wrapperRef.current?.contains(e.relatedTarget as Node)
    ) {
      wrapperRef.current?.focus();
      return;
    }
    onEditModeChange(false, { updateText: true });
  };

  const handleMouseEnter = () => {
    preventBlurRef.current = true;
  };

  const handleMouseLeave = () => {
    preventBlurRef.current = false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };



 





  if (isEditing) {
     const isClearable = showClearButton && currentText !== "";


     const Button = isClearable ? (
  <button
    type="button"
    className={EditableTextClass.ClearButton}
    onClick={handleClear}
    aria-label={i18n.translate("clear")}
    data-clear-button
  >
    <Text as="span" visuallyHidden>
      {i18n.translate("clear")}
    </Text>
    <InternalIcon tone="neutral" color="subdued" type="x-circle" />
  </button>
) : null;




const safeID = useSafeId();


const id = `editable-text_${safeID}`;

const editableTextClass = classnames(EditableTextClass.TextField,  EditableTextClass._({[TextProps.variant || "bodyMd"]: true}, false), isClearable && EditableTextClass.ClearButtonSpacing)

    return (
      <div
        ref={wrapperRef}
        className={EditableTextClass.TextFieldWrapper}
        onKeyDown={handleKeyDownInput}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <label htmlFor={id} id={`${id}-label`} className={EditableTextClass.TextFieldLabel}>
          <div className={EditableTextClass.TextFieldContainer}>
            <input
              id={id}
              className={editableTextClass}
              value={currentText}
              onChange={handleChange}
              ref={inputRef}
              aria-label={currentText}
              autoComplete="off"
              {...(hasMaxLength ? { maxLength } : {})}
            />
            {Button}
          </div>
        </label>
      </div>
    );
  }

  const plainWrapperClass = classnames(EditableTextClass.PlainTextWrapper, EditableTextClass.ExternalTextFieldTrigger);

  const shouldDisableClick = disableClick || mobile;

  const content = (
    <div
      className={plainWrapperClass}
      role="button"
      tabIndex={mobile ? -1 : 0}
      onClick={shouldDisableClick ? undefined : handleWrapperClick}
      onKeyDown={shouldDisableClick ? undefined : handleWrapperKeyDown}
      data-click-enabled
    >
      <Text {...TextProps}>
        {TextProps.truncate ? <TruncateWithTooltip>{currentText}</TruncateWithTooltip> : currentText}
      </Text>
    </div>
  );

  return tooltip ? <Tooltip content={tooltip}>{content}</Tooltip> : content;
}