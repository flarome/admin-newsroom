import { memo, useEffect, useRef, useState } from "react";
import { createAppStore, useAppStoreApi, appStoreContext } from "./store";
import styles from "./app.module.css";
import "./app.css";
import { useNavigation } from "@remix-run/react";

const RenderWrapper = ({ children }) => {
  const wrapperRef = useRef();
  const store = useAppStoreApi();
  const navigation = useNavigation();

  // 🔁 Synchroniser état Remix ⇄ Zustand
  useEffect(() => {
    store.getState().setLoading(navigation.state === "loading");
  }, [navigation.state, store]);

  const [hydrated, setHydrated] = useState(false);

  // ⏱️ Détecte hydratation client
  useEffect(() => {
    setHydrated(true);
  }, []);

  // 👇 Applique class "loading" SEULEMENT après hydratation
  useEffect(() => {
    if (!hydrated || !wrapperRef.current) return;

    const node = wrapperRef.current;
    const isLoading = store.getState().ui?.loading;

    if (isLoading) {
      node.classList.add(styles["loading"]);
    }

    const unsub = store.subscribe(
      (s) => s.ui.loading,
      (value) => {
        node.classList.toggle(styles["loading"], value);
      },
    );

    return () => unsub();
  }, [hydrated, store]);

  return (
    <div ref={wrapperRef} className={styles["ChildContainer"]}>
      {children}
    </div>
  );
};

export const App = ({ children }) => {
  const storeRef = useRef();

  if (!storeRef.current) {
    storeRef.current = createAppStore(); // ❗ appelé une seule fois
  }

  return (
    <appStoreContext.Provider value={storeRef.current}>
      <RenderWrapper>{children}</RenderWrapper>
    </appStoreContext.Provider>
  );
};
export default memo(App);
