import classNames from "classnames";
import { useId, useRef } from "react";
import {useIsomorphicLayoutEffect } from '@shopify/react-hooks'
import { SegmentedControlClass } from "../../styles/OnlineStore";
import { useFeatureFlags, useViewportContext } from "../../contexts";
import { Text, Tooltip, type TooltipProps } from "@polaris/npm";
import {type IconType, InternalIcon  } from "../../../admin-ui-foundations";
import {Tone} from '../../../constants/tone';  
import { Button } from "../_ui/Button";



import { Label } from "@polaris/internal";


type OptionProps = {
  icon?: IconType;
  labelHidden?: boolean;
  label: string;
  tooltip?: TooltipProps['content'];
  tooltipPosition?: TooltipProps['preferredPosition'];
  onClick: () => void;
  selected?: boolean;
  truncate?: boolean;
  slim?: boolean;
  tone?: Tone;
};



export const Option: React.FC<OptionProps> = ({
  icon,
  labelHidden,
  label,
  tooltip,
  tooltipPosition,
  onClick,
  selected = false,
  truncate = false,
  slim = false,
  tone, 
}) => {
  const { denseUIEnabled } = useFeatureFlags();

  const buttonClassName = classNames(SegmentedControlClass.Option.SegmentedControlItem, SegmentedControlClass.Option._({selected,slim,toneMagic:tone === Tone.Magic,dense:denseUIEnabled}));

  const accessibilityLabel = labelHidden && typeof label === "string" ? label : undefined;

  const iconMarkup = icon ? (
     <InternalIcon type={icon} tone="legacy-inherit" />
  ) : null;

  const buttonMarkup = (
    <div
      className={classNames(SegmentedControlClass.Option.ButtonContainer,  SegmentedControlClass.Option._({ dense: denseUIEnabled, }))}
    >
      <Button
        type="button"
        className={buttonClassName}
        onClick={onClick}
        aria-current={selected ? "true" : undefined}
        accessibilityLabel={accessibilityLabel}
      >
        {iconMarkup}
        {!labelHidden && (
          <Text
            as="span"
            variant={denseUIEnabled ? "bodySm" : "bodyMd"}
            truncate={truncate}
          >
            {label}
          </Text>
        )}
      </Button>
    </div>
  );

  const content = tooltip ? (
    <Tooltip
      dismissOnMouseOut
      content={tooltip}
      preferredPosition={tooltipPosition ?? "below"}
    >
      {buttonMarkup}
    </Tooltip>
  ) : (
    buttonMarkup
  );

  return (
    <li
      className={classNames(
        SegmentedControlClass.Option.OptionWrapper,
        SegmentedControlClass.Option._({
          dense: denseUIEnabled,
          truncate,
          selected,
        })
      )}
    >
      {content}
    </li>
  );
};



type SegmentedOption = {
  value: any;
  label: string;
  tooltip?: TooltipProps['content'];
  [key: string]: any; // permet d'étendre les props pour Option
}

interface SegmentedControlProps {
  options: Array<SegmentedOption> | ReadonlyArray<SegmentedOption>;
  value: string;
  label?: string;
  onChange: (value: string) => void;
  onOverflow?: () => void;
  accessibilityLabel?: string;
  slim?: boolean;
  tone?: Tone;
  tooltipPosition?: TooltipProps['preferredPosition'];
}


export const SegmentedControl = ({options, value, label, onChange, onOverflow, accessibilityLabel, slim, tone, tooltipPosition}: SegmentedControlProps) =>  {
    const id = useId();
    const {mobile} = useViewportContext();
    const {denseUIEnabled} = useFeatureFlags();
    const ref = useRef<HTMLUListElement | null>(null);

const optionsRender = options.map(m => (
  <Option
    key={m.value}
    slim={slim}
    tooltip={mobile ? undefined : m.tooltip}
    tooltipPosition={tooltipPosition}
    onClick={() => onChange(m.value)}
    selected={m.value === value}
    truncate={onOverflow == null}
    tone={tone}
    {...m}
  />
));


    useIsomorphicLayoutEffect( () => {
        const m = ref.current;
        onOverflow && m && m.scrollWidth > m.offsetWidth && onOverflow()
    }
    , [onOverflow, options]);


      const classs = classNames(SegmentedControlClass.SegmentedControlContainer, {
        labelled: label != null,
        [SegmentedControlClass._({dense:true})]: denseUIEnabled
    });


       const ariaLabel = label !== void 0 ? void 0 : accessibilityLabel;

      const O = <ul
  className={classs}
  ref={ref}
  id={id}
  aria-label={ariaLabel}
>
  {optionsRender}
</ul>


    
return label ? (
  <Label id={id}  label={label}>
    {O}
  </Label>
) : (
  O
);

}