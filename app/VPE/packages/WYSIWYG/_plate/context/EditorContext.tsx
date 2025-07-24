import { useState, PropsWithChildren } from "react";

import { createAppStore, appStoreContext } from "../store";
import { usePropsContext } from "./PropsContext";


import {
  useRegisterUseEditorStore,
  UseEditorStoreContext,
} from "../lib/use-editor";

export function EditorContextProvider({ children }: PropsWithChildren) {
  const { data } = usePropsContext();

  const [appStore] = useState(() => createAppStore({ data }));

  const uPuckStore = useRegisterUseEditorStore(appStore);

  return (
    <appStoreContext.Provider value={appStore}>
      <UseEditorStoreContext.Provider value={uPuckStore}>
        {children}
      </UseEditorStoreContext.Provider>
    </appStoreContext.Provider>
  );
}
