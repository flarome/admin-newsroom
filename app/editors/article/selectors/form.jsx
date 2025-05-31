import { useMemo } from "react";
import { toShopifySlug } from "../utils/str";
import { fieldPath as TitleFieldPath } from "../components/title";

import _ from "lodash";
import { useWatch } from "react-hook-form";

export function useGetHandleByTitle() {


  const title = useWatch({ name: TitleFieldPath }) || "";


  return useMemo( 
   () => toShopifySlug(title),
    [title],
  );
}
