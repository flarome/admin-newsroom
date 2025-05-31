import React, { useRef, useEffect, useState, useCallback } from "react";
import { RangeSlider as PolarisRangeSlider } from "@shopify/polaris";

export function RangeSlider({ field, onCommit }) {
  const [value, setValue] = useState(field.value);
  const sliderWrapperRef = useRef(null);

  useEffect(() => {
    setValue(field.value);
  }, [field.value]);

  // Gère le changement (toujours UI immédiat)
  const handleChange = (val) => setValue(val);

  // Toujours la même fonction commit (pas de dépendance sur value !)
  const commit = useCallback(() => {
    onCommit(field.name, value);
  }, [field.name, onCommit, value]);

  useEffect(() => {
    if (!sliderWrapperRef.current) return;
    const input = sliderWrapperRef.current.querySelector("input[type=range]");
    if (!input) return;

    // Commit sur souris, tactile (comme avant)
    input.addEventListener("mouseup", commit);
    input.addEventListener("touchend", commit);

    // 👇 Commit sur clavier (Entrée OU Espace)
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " " || e.code === "Space") {
        commit();
      }
    };
    input.addEventListener("keydown", handleKeyDown);

    return () => {
      input.removeEventListener("mouseup", commit);
      input.removeEventListener("touchend", commit);
      input.removeEventListener("keydown", handleKeyDown);
    };
  }, [commit]);

  return (
    <div ref={sliderWrapperRef}>
      <PolarisRangeSlider
        key={field.name}
        label={field.label}
        min={field.min}
        max={field.max}
        value={value}
        onChange={handleChange}
        onBlur={commit}
      />
    </div>
  );
}