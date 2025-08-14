import { useFeatureFlags, useViewportContext } from '@VPE/contexts';
import {styles as EditorStyles} from '@VPE/styles/Editor';
import {classnames as classNames} from "lib";;
import { Tooltip } from '@polaris/npm';
import { PopoverWithActivator, type PopoverWithActivatorProps } from './Popover/components/PopoverWithActivator';
import { PlainAction, type PlainActionProps } from './PlainAction';



type TooltipIfEnabledProps = {
  content?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

function TooltipIfEnabled({ content, disabled, children }: TooltipIfEnabledProps) {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <Tooltip
      content={content}
      preferredPosition="above"
      accessibilityLabel={content}
      dismissOnMouseOut
    >
      {children}
    </Tooltip>
  );
}

export interface Action {
  disabled: boolean;
  content: string;
  disabledContent?: string;
  icon?: PlainActionProps["icon"]
  pickerToggle?: {
    active: boolean;
    togglePicker: () => void;
    closePicker: () => void;
  };
  onAction?: () => void;
  url?: string;
  tooltipDisabled?: boolean;
  pickerOptions?: {
    width?: PopoverWithActivatorProps["width"]
  };
  pickerContent?: PopoverWithActivatorProps["children"]
}

interface ActionButtonProps {
  action: Action;
  fillContainer?: boolean;
}


function ActionButton({ action, fillContainer }: ActionButtonProps) {
  const { mobile } = useViewportContext(); // remplace qe()
  const { denseUIEnabled } = useFeatureFlags(); // remplace Wt()

  const { disabled, content, disabledContent, icon } = action;
  const hasPickerToggle = Boolean(action.pickerToggle);
  const hasOnAction = Boolean(action.onAction);
  const hasUrl = Boolean(action.url);
  
  const isTooltipDisabled =
    action.tooltipDisabled ||
    (action.pickerToggle?.active) ||
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
      <TooltipIfEnabled content={disabled ? disabledContent : content} disabled={isTooltipDisabled}>
        <PlainAction
          accessibilityLabel={content}
          icon={icon}
          onClick={handleClick}
          disabled={disabled}
          url={hasUrl ? action.url : undefined}
          external={hasUrl}
          slim
          fillContainer={fillContainer}
        />
      </TooltipIfEnabled>
    </div>
  );

  if (hasPickerToggle) {
    return (
      <PopoverWithActivator
        activator={buttonContent}
        active={action.pickerToggle!.active}
        width={action.pickerOptions?.width}
        onClose={action.pickerToggle!.closePicker}
        containerElement={fillContainer ? "span" : "div"}
      >
        {action.pickerContent}
      </PopoverWithActivator>
    );
  }

  return <div>{buttonContent}</div>;
}

export interface ActionsListProps {
  actions: Action[];
}

export function ActionsList({ actions }: ActionsListProps) {
  return <>{actions.map((action, index) => <ActionButton key={`Action-${index}`} action={action} />)}</>;
}