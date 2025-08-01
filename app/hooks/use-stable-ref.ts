import { useRef, useState } from "react";

export function useStableRef<T>(value: T): React.MutableRefObject<T> {
  const [initial] = useState(value);
  return useRef(initial);
}