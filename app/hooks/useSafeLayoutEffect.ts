import { useEffect, useLayoutEffect } from "react";

const isClient = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"

export const useSafeLayoutEffect = isClient ? useLayoutEffect : useEffect;