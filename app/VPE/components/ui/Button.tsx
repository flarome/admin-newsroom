import React from "react";
import {blurOnMouseUp} from '../../../utils';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  url?: string;
  external?: boolean;
  target?: string;
  download?: boolean | string;
  submit?: boolean;
  disabled?: boolean;
  loading?: boolean;
  pressed?: boolean;
  accessibilityLabel?: string;
  role?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaDescribedBy?: string;
  ariaChecked?: boolean;
  form?: string;
  hasUnderline?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onTouchStart?: React.TouchEventHandler<HTMLElement>;
  // Any other props are allowed
  [key: string]: any;
}


const getClickHandler = (
  disabled?: boolean,
  originalClick?: React.MouseEventHandler<HTMLElement>
): React.MouseEventHandler<HTMLElement> => {
  if (disabled) return (e) => e.preventDefault();
  return originalClick || (() => {});
};

export const Button: React.FC<ButtonProps> = ({
  id,
  children,
  className,
  url,
  external,
  target,
  download,
  submit,
  disabled,
  loading,
  pressed,
  accessibilityLabel,
  role,
  ariaControls,
  ariaExpanded,
  ariaDescribedBy,
  ariaChecked,
  form,
  onClick,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onMouseEnter,
  onTouchStart,
  ...rest
}) => {
  const commonProps = {
    id,
    className,
    "aria-label": accessibilityLabel,
    role,
    onClick,
    onFocus,
    onBlur,
    onMouseUp: blurOnMouseUp,
    onMouseEnter,
    onTouchStart,
  };

  const resolvedOnClick = getClickHandler(disabled, onClick);

  if (url) {
    if (disabled) {
      return (
        <a {...commonProps}>
          {children}
        </a>
      );
    }

    return (
 <a
  {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
  href={url}
  target={target}
  rel={external ? "noopener noreferrer" : undefined}
  download={download}
  {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
>
  {children}
</a>
    );
  }

  return (
    <button
      {...commonProps}
      type={submit ? "submit" : "button"}
      aria-disabled={disabled}
      aria-busy={loading || undefined}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-describedby={ariaDescribedBy}
      aria-checked={ariaChecked}
      aria-pressed={pressed}
      form={form}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
      onClick={resolvedOnClick}
      tabIndex={disabled ? -1 : undefined}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};