import { FieldPropsInternal } from "../..";
import { HyperlinkedTextClass, SegmentedControlClass } from "@VPE/styles/OnlineStore";

import { Select } from "@polaris/internal";
import classNames from "classnames";
import { Text } from "@polaris/npm";


 
type RenderMode = "SegmentedControl" | "Select";

function selectMode(options): RenderMode {


  return options.length <= 3 ? "SegmentedControl" : "Select";
}
export const SelectField = ({
  field,
  onChange,
  label,
  labelIcon,
  Label,
  value,
  name,
  readOnly,
  id,
}: FieldPropsInternal) => {
  if (field.type !== "select" || !field.options) {
    return null;
  } 




  return (
    <Label
      id={`SelectSetting-${id}`}
      label={
        <span className={HyperlinkedTextClass._({ hideExternalIcon: true })}>
          {label || name}
        </span>
      }
      labelledOptions={{ blockAlignFlexible: true }}
      readOnly={readOnly}
      topPadding="200"
    >
 

{field.options.length <= 3 ? (
 
 <ul className={classNames(SegmentedControlClass.SegmentedControlContainer, SegmentedControlClass._({dense:true}))} aria-label={label || name}>

 {field.options.map((option, i) => {


const selected = option.value === value;

           return (

              

<li key={i} className={classNames(SegmentedControlClass.Option.OptionWrapper, SegmentedControlClass.Option._({dense:true, selected }))}>


  <div className={classNames(SegmentedControlClass.Option.ButtonContainer, SegmentedControlClass.Option._({dense:true}))}>

    <button className={classNames(SegmentedControlClass.Option.SegmentedControlItem, SegmentedControlClass.Option._({selected,dense:true}))} aria-current={value === option.value}>
<Text as="span" variant="bodySm">
  {option.label || option.value}
</Text>
    </button>

</div>
</li>

            )

  })}

 </ul>
) : (  <Select
            label={label || name}
            labelHidden
            options={field.options}
            onChange={onChange}
            value={value}
            disabled={readOnly}
          />
      )}
     

    </Label>
  );
};
