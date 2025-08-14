import React, { useCallback, useEffect, useState } from "react";

import { InlineGrid, RangeSlider, Text, TextField } from "@polaris/npm";



import type { FieldPropsInternal } from "../..";
import { useFeatureFlags, useViewportContext } from "@VPE/contexts";
import { createIdGenerator } from "lib/createIdGenerator";
import { classnames as classNames} from "lib";
import { HyperlinkedText } from "@VPE/components/_editorUI/HyperlinkedText";
import { Tone } from "constants/tone";
import { OverrideLabel } from "@VPE/components/_ui/OverrideLabel";


interface RangeFieldProps extends FieldPropsInternal {}

import Styles from './styles.module.css'


const fieldID = createIdGenerator("RangeSetting-Label");

export const RangeField: React.FC<RangeFieldProps> = ({
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
  if (field.type !== "range") {
    return null;
  }

 const {
    min,
    max,
    step,
    unit,
    isOverridden,
    info,
    actions,
    tone,
    resetOverrideAction
  } = field;




 const { denseUIEnabled } = useFeatureFlags();
   const { mobile } = useViewportContext();

     // const [translation] = useTranslation(); // instable


    const [inputId] = useState(fieldID());
  const [displayValue, setDisplayValue] = useState(value);
  const [inputValue, setInputValue] = useState(value);

 const isLarge = String(value).length >= 4;

    const unitElement = field.unit ? (
    <Text as="span" variant={denseUIEnabled ? "bodySm" : undefined}>
      {/*translation.translate("unit", { unit })*/} unit
    </Text>
  ) : null;


    const updateValues = useCallback(
    (val: number) => {
      setInputValue(val);
      setDisplayValue(val);
    },
    []
  );

  const handleValueChange = useCallback(
    (val: number) => {
      const clamped = clampToStep(val, field);
      updateValues(clamped);
      onChange(clamped);
    },
    [onChange, field, updateValues]
  );


  useEffect(() => {
    const clamped = clampToStep(value, field);
    updateValues(clamped);
  }, [value, updateValues, field]);


  function resetIfEmpty() {
    if (String(inputValue) === "") {
      setInputValue(displayValue);
    }
  }

  // Limite les caractères et valide la saisie
  const handleInputChange = useCallback(
    (val: string | number) => {
      const absMin = Math.abs(min);
      const absMax = Math.abs(max);
      const maxAbs = Math.max(absMin, absMax);
      const extraChar = min < 0 ? 1 : 0;
      const maxLength = String(maxAbs).length + extraChar;
      const regex = /^-?\d*(\.\d*)?$/;

      if (String(val).length <= maxLength && regex.test(String(val))) {
        setInputValue(val as number);
      }
    },
    [max, min]
  );

    const commitInputChange = () => {
    const clamped = clampToStep(Number(inputValue), field);
    if (inputValue) {
      handleValueChange(clamped);
    }
    resetIfEmpty();
  };



  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      commitInputChange();
      return;
    }
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      const delta = event.key === "ArrowUp" ? step : -step;
      const nextValue = Number(inputValue) + delta;
      const clamped = clampToStep(nextValue, field);
      if (clamped >= min && clamped <= max) {
        handleValueChange(clamped);
      }
    }
  };

    const inputClassName = classNames(Styles.Input, {
    [Styles.noSuffix]: unit == null,
    [Styles.large]: isLarge,
    [Styles.denseUIMobile]: denseUIEnabled && mobile
  });


    const labelElement = (
    <HyperlinkedText hideExternalIcon={true}>{label || name || ""}</HyperlinkedText>
  );

    const finalLabel = isOverridden ? (
    <OverrideLabel label={labelElement} resetOverrideAction={resetOverrideAction} />
  ) : (
    labelElement
  );


  return (

    <Label id={inputId} label={finalLabel} actions={actions} helpText={info}>
    <InlineGrid gap={denseUIEnabled ? "200" : "400"} columns="1fr auto" alignItems="center">
        <RangeSlider label="" min={min} max={max} step={step} value={displayValue} onChange={handleValueChange} />
        <div className={inputClassName} onKeyDown={handleKeyDown}>
          <TextField
            value={String(inputValue)}
            suffix={unitElement}
            type="text"
            step={0}
            align="left"
            onChange={handleInputChange}
            label=""
            labelHidden={true}
            autoComplete="off"
            onBlur={commitInputChange}
            tone={tone === Tone.Magic ? tone : undefined}
            size={denseUIEnabled && !mobile ? "compact" : undefined}
          />
        </div>
      </InlineGrid>

      
    </Label>
  );
};



function clampToStep(value: number, options: { min: number; max: number; step: number }): number {
  const { min, max, step } = options;

  // Clamp the value within min/max bounds
  const clampedValue = Math.max(min, Math.min(max, value));

  // Distance from min, modulo step
  const remainder = (clampedValue - min) % step;

  // Midpoint of a step
  const halfStep = step / 2;

  // If remainder is past midpoint, round up to next step
  const adjust = (clampedValue >= 0 ? remainder >= halfStep : remainder > halfStep) ? step : 0;

  // Return rounded value with fixed precision
  return Number((clampedValue - remainder + adjust).toFixed(10));
}