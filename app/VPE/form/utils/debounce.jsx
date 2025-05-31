import { useState, useRef, useEffect, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";

export function useDebouncedFieldValue(
  initialValue,
  onCommit,
  delay = 500
) {
  const [value, setValue] = useState(initialValue);
  const debounced = useDebouncedCallback((val) => tryCommit(val), delay);

  // Garde la dernière valeur "officielle" (provenant du parent/serveur)
  const lastOfficial = useRef(initialValue);
  // Garde la dernière valeur réellement "committed"
  const lastCommitted = useRef(initialValue);

  // Sync local value si initialValue change (ex: undo/redo)
  useEffect(() => {
    setValue(initialValue);
    lastOfficial.current = initialValue;
  }, [initialValue]);

  // Commit uniquement si la valeur a changé depuis le dernier commit
  const tryCommit = useCallback((val) => {
    if (lastCommitted.current !== val) {
      onCommit(val);
      lastCommitted.current = val;
    }
  }, [onCommit]);

  const onChange = useCallback((val) => {
    setValue(val);
    debounced(val);
  }, [debounced]);

  const commitNow = useCallback(() => {
    debounced.flush();
    tryCommit(value);
  }, [debounced, tryCommit, value]);

  const onRangePointerUp = useCallback(() => {
    commitNow();
  }, [commitNow]);

  return {
    value,
    setValue,
    onChange,
    onBlur: commitNow,
    onRangePointerUp,
  };
}