import { memo, useEffect, useRef, useState } from "react";
import {
  createAppStore,
  useAppStoreApi,
  useAppStore,
  appStoreContext,
} from "./store";
// @ts-ignore
import styles from "./app.module.css";
import "./app.css";
import { useNavigation } from "@remix-run/react";
import { PolarisBridge, PolarisI18n } from "./polaris/npm";
import { createI18nContext } from "./i18n/context";
import { GlobalI18nProvider } from "./i18n/global";
import { language } from "./config/app";
export { languages } from "./locales";
import { translations } from "./locales/locales";
import classNames from "classnames";

export const globalAppI18n = createI18nContext({
  fallback: language,
  translations: {
    // Langues à charger dynamiquement
    ...Object.fromEntries(
      Object.entries(translations).map(([lang, val]) => [
        lang,
        { type: "parsed" as const, value: val },
      ]),
    ),
    // Langue déjà chargée
    fr: {
      type: "parsed",
      value: translations.fr,
    },
  },
  initialTranslations: translations.fr,
});

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const store = useAppStoreApi();

  // Subscribe to loading state
  useEffect(() => {
    const unsubscribe = store.subscribe(
      (s) => s.ui.loading,
      (isLoading) => {
        if (isLoading) {
          setShowSpinner(true);
          requestAnimationFrame(() => {
            setSpinnerVisible(true);
          });
        } else {
          setSpinnerVisible(false); // ➝ trigger .exit
        }
      },
    );
    return () => unsubscribe();
  }, []);

  // ⏱️ Catch animation end (only for exit)
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleAnimationEnd = (e: AnimationEvent) => {
      if (e.animationName.includes("exit")) {
        setShowSpinner(false);
      }
    };

    el.addEventListener("animationend", handleAnimationEnd);
    return () => {
      el.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [spinnerVisible]);

  if (!showSpinner) return null;

  return (
    <div
      ref={wrapperRef}
      className={classNames(
        styles["spinnerWrapper"],
        spinnerVisible ? styles["enter"] : styles["exit"],
      )}
    >
      <svg
        className={styles["spinner"]}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.76"
          x="8.58578"
          y="6.70016"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
          transform="rotate(135 8.58578 6.70016)"
        ></rect>
        <rect
          opacity="0.65"
          x="6.66667"
          y="8.66666"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
          transform="rotate(90 6.66667 8.66666)"
        ></rect>
        <rect
          opacity="0.54"
          x="6.70015"
          y="11.4142"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
          transform="rotate(45 6.70015 11.4142)"
        ></rect>
        <rect
          opacity="0.43"
          x="8.66667"
          y="13.3333"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
        ></rect>
        <rect
          opacity="0.32"
          x="18.0139"
          y="16.1283"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
          transform="rotate(135 18.0139 16.1283)"
        ></rect>
        <rect
          opacity="0.21"
          x="20"
          y="8.66666"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
          transform="rotate(90 20 8.66666)"
        ></rect>
        <rect
          opacity="0.1"
          x="16.1283"
          y="1.98611"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
          transform="rotate(45 16.1283 1.98611)"
        ></rect>
        <rect
          opacity="0.87"
          x="8.66667"
          width="2.66667"
          height="6.66667"
          rx="1.33333"
        ></rect>
      </svg>
    </div>
  );
};

const RenderWrapper = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const store = useAppStoreApi();
  const navigation = useNavigation();

  // 🔁 Synchroniser état Remix ⇄ Zustand
  const setLoading = useAppStore((s) => s.setLoading);

  useEffect(() => {
    setLoading(navigation.state === "loading");

    setLoading(true);
     setLoading(true);
  }, [navigation.state, setLoading]);

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
  }, [hydrated]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const unsub = store.subscribe(
      (s) => s.ui.loading,
      (value) => {
        wrapperRef.current!.classList.toggle(styles["loading"], value);
      },
    );

    return () => unsub();
  }, []);

  return (
    <div className={styles["appFrame"]}>
      <div ref={wrapperRef} className={styles["ChildContainer"]}>
        <GlobalI18nProvider initialLang="fr">
          <globalAppI18n.I18nProvider id="app">
            <PolarisBridge>{children}</PolarisBridge>
          </globalAppI18n.I18nProvider>
        </GlobalI18nProvider>
      </div>

      <Spinner />
    </div>
  );
};

export const App = ({ children }) => {
  const [appStore] = useState(() => createAppStore({}));

  return (
    <appStoreContext.Provider value={appStore}>
      <RenderWrapper>{children}</RenderWrapper>
    </appStoreContext.Provider>
  );
};
export default memo(App);
