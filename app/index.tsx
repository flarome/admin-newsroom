import { memo, useEffect, useRef, useState, ReactNode, useMemo } from "react";
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
import { PolarisBridge } from "./polaris/npm";
import { createI18nContext } from "./i18n/context";
import { GlobalI18nProvider } from "./i18n/manager";
import { language } from "./config/app";
export { languages } from "./locales";
import { translations } from "./locales/locales";
import classNames from "classnames";
import { secondsToMs } from "./utils/time";
import { Distribution } from "_distribution";
import { RoutesProvider, createRoutesContext } from "./routes";
import { UserAgentProvider } from "contexts";

import {I18nContext, I18nManager} from '@shopify/react-i18n';

export const globalAppI18n = createI18nContext({
  fallback: language,
  translations: {
    // Langues à charger dynamiquement 
  

        // Autres langues chargées dynamiquement
    ...Object.fromEntries(
      Object.entries(translations)
        .filter(([lang]) => lang !== "fr")
        .map(([lang, value]) => [
          lang,
          {
            type: "parsed" as const,
            value,
          },
        ])
    ),


    // Langue déjà chargée
    fr: {
      type: "parsed",
      value: translations.fr,
    },
  },
  initialTranslations: { lang: 'fr', translations: translations.fr }
});

const spinnerTimeOut = secondsToMs(2); // ms

const Spinner = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [spinnerVisible, setSpinnerVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const store = useAppStoreApi();



   /* useEffect(() => {
  const el = wrapperRef.current;
  if (!el) return;

  console.log('spinnerVisible:', spinnerVisible);

  if (spinnerVisible) {
    el.classList.remove(styles["exit"]);
    el.classList.add(styles["enter"]);
  } else {
    el.classList.remove(styles["enter"]);
    el.classList.add(styles["exit"]);
  }
}, [spinnerVisible]);*/




  // ⏱️ Catch animation end (only for exit)
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleAnimationEnd = (e: AnimationEvent) => {


console.log('Animation ended:', e.animationName);




      if (e.animationName.includes("exit")) {
        setShowSpinner(false);
      } 


    };
    
    el.addEventListener("animationend", handleAnimationEnd);
    return () => {
      el.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);



  // Detect initial loading state on mount
  useEffect(() => {
    const initialLoading = store.getState().ui.loading;
    if (initialLoading) {
      setShowSpinner(true);
      requestAnimationFrame(() => setSpinnerVisible(true));
    } 
  }, []);

  // Subscribe to loading state
  useEffect(() => {
    const unsubscribe = store.subscribe(
      (s) => s.ui.loading,
      (isLoading) => { 

        console.log('Spinner state changed:', isLoading);
        if (isLoading) {
          // Si spinner déjà visible (ex: initial), ne rien faire (déjà affiché)
          if (showSpinner) return;

          // Retarder l'affichage de $ms : seulement si le loading dure assez
          timerRef.current = setTimeout(() => {
            setShowSpinner(true);
            requestAnimationFrame(() => setSpinnerVisible(true));
            timerRef.current = null; // proprement
          }, spinnerTimeOut);
        } else {
  

          // Si le chargement se termine, on coupe le timer
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
          // Ensuite, si le spinner est visible → on le masque
  setSpinnerVisible(false);




  // Fallback : au cas où animationend ne se déclenche pas
 /* setTimeout(() => {
    setShowSpinner(false);
  }, 400); */



        }
      },
    );
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      unsubscribe();
    };
  }, []);




  // Toujours monter l'élément si l'animation "exit" est en cours
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

const RenderWrapper = ({ lang = language, children }: {lang?: string, children: ReactNode}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const store = useAppStoreApi();
  const navigation = useNavigation();

  // 🔁 Synchroniser état Remix ⇄ Zustand
  const setLoading = useAppStore((s) => s.setLoading);

useEffect(() => {
  console.log("Navigation state:", navigation.state);
  setLoading(navigation.state === "loading");
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
        <GlobalI18nProvider initialLang={lang}>
          <globalAppI18n.I18nProvider id="app">
            <PolarisBridge>{children}</PolarisBridge>
          </globalAppI18n.I18nProvider>
        </GlobalI18nProvider>
      </div>

      <Spinner />
    </div>
  );
};

export const App = ({ lang, children, distribution, userAgent }: {lang?: string, children: ReactNode, distribution: Distribution, userAgent: string}) => {
  const [routes] = useState(() => createRoutesContext(distribution));
  const [appStore] = useState(() => createAppStore({}));

const i18n = useMemo(() => {
  return new I18nManager({
    locale: "fr",
    fallbackLocale: "fr",
    currency: "eur",
    country: "fr",
    timezone: "fr",
    onError: (error) => {
      console.error("i18n error:", error);
    },
    pseudolocalize: false
  });
}, []);

  return (


    <UserAgentProvider userAgent={userAgent}>
    <RoutesProvider value={routes}>
    <appStoreContext.Provider value={appStore}>



<I18nContext.Provider value={i18n}>

      <RenderWrapper lang={lang}>{children}</RenderWrapper>
    
</I18nContext.Provider>



    </appStoreContext.Provider>
    </RoutesProvider>
      </UserAgentProvider>
  );
};
export default memo(App);
