import { memo, useLayoutEffect, useRef, useEffect } from "react";
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

  // ✅ important : toute logique DOM déplacée dans useLayoutEffect
  useLayoutEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    // Appliquer l’état initial de loading si déjà actif
    const isLoading = store.getState().ui?.loading;
    if (isLoading) {
      node.classList.add(styles["loading"]);
    }

    // S’abonner aux changements
    const unsub = store.subscribe(
      (s) => s.ui.loading,
      (value) => {
        node.classList.toggle(styles["loading"], value);
      },
    );

    return () => unsub();
  }, [store]);

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
