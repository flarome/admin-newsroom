import { HyperlinkedTextClass } from "@VPE/styles/OnlineStore";
import { FieldPropsInternal } from "../..";
import { BlockStack, LegacyStack, RadioButton } from "@polaris/npm";



export const RadioField = ({
  field,
  onChange,
  readOnly,
  value,
  name,
  id,
  label,
  labelIcon,
  Label,
}: FieldPropsInternal) => {
  if (field.type !== "radio" || !field.options) {
    return null;
  }

  return (


 <>

    <Label

label= {label || name}
    helpText= {label || name}

      readOnly={readOnly}
      id={`RadioSetting-${id}`}
     labelBlockAlign="center"
     stacked
    >


  <LegacyStack vertical>
   {field.options.map((option) => (

    <RadioButton
        key={option.label + option.value}
        label={option.label || option.value?.toString()}
        helpText={option.helpText}
        checked={value === option.value}
        name={name}
        onChange={onChange}
      />
 ))}
 </LegacyStack>



</Label>
   </>

  );
};
