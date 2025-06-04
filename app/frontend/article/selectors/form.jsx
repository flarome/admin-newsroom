import { useMemo, useRef, useEffect } from "react";
import { toShopifySlug } from "../../../utils/str";
import { fieldPath as TitleFieldPath } from "../components/title";

import _ from "lodash";
import { useFormState, useWatch } from "react-hook-form";

export function useGetHandleByTitle() {
  const title = useWatch({ name: TitleFieldPath }) || "";

  return useMemo(() => toShopifySlug(title), [title]);
}


export function useWasModified() {
  const { isDirty } = useFormState({ name: undefined }); // 👈 écoute tout le form
  const wasModifiedRef = useRef(false);

  useEffect(() => {
    if (isDirty) {
      wasModifiedRef.current = true;
    }
  }, [isDirty]);

  return wasModifiedRef.current;
}