import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  cloneElement,
  useCallback,
} from "react";

import { initScrollLockManager } from "../utils/ScrollLockManager";
import SkeletonApp from "../SkeletonApp";
import { useAppBridge } from "@shopify/app-bridge-react";
import { createAppStore, defaultAppState, appStoreContext } from "../store";
import { usePropsContext } from "./PropsContext";

import AppProviderStyles from '../styles/AppProvider.module.css';
import getClassNameFactory from "../../../lib/get-class-name-factory";
const getAppProviderClass = getClassNameFactory("Online-Store-UI-AppProvider", AppProviderStyles)

const DesignSystemContext = createContext(null);

export function DesignSystemProvider({ themes = [], children }) {
  const { ui: initialUi, initialHistory: _initialHistory } = usePropsContext();

  const shopify = useAppBridge();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [loading, setLoading] = useState(true);

  // portal
  const [portalRef, setPortalRef] = useState(null);
  const [appRef, setAppRef] = useState(null);
  const [bodyRef, setBodyRef] = useState(null);

  // loading
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);
  const eventIdRef = useRef(0); // identifiant de la vague actuelle

  useEffect(() => {
    // Incrément de l'identifiant à chaque changement de progress
    eventIdRef.current += 1;
    const currentEventId = eventIdRef.current;

    // Si progress >= 100, on planifie un reset
    if (progress >= 100) {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        // Ne reset que si aucun autre progress n'est arrivé depuis
        if (eventIdRef.current === currentEventId) {
          setProgress(0);
        }
      }, 500);
    }

    // Cleanup du timeout si un changement rapide survient
    return () => clearTimeout(timeoutRef.current);
  }, [progress]);

  useEffect(() => {
    if (bodyRef && appRef) {
      initScrollLockManager(bodyRef, appRef);
    }
  }, [bodyRef, appRef]);

  // panel
  const [panel, setPanel] = useState("sections");

  const switchPanel = useCallback(
    (to) => {
      if (panel !== to) setPanel(to);
    },
    [panel],
  );

  // event change
  const subscribersRef = useRef([]);

  const subscribe = (fn) => {
    subscribersRef.current.push(fn);
    return () => {
      subscribersRef.current = subscribersRef.current.filter((f) => f !== fn);
    };
  };

  const [localeDataModified, setLocaleDataModified] = useState(true);

  /**
   * Appelle tous les subscribers, attends la résolution.
   * Retourne une Promise qui résout quand tout est fini.
   */
  const notifyAll = async () => {
    console.log("SAVE");
    // On collecte les résultats (promesses ou sync)
    const results = subscribersRef.current.map((fn) => fn());
    // Attend que tout soit fini (même si certaines fonctions sont sync)
    await Promise.all(results);

    shopify.toast.show("Changements enregistrés.");
  };

  const [generatedAppState] =
    useState
    (() => {
      const initial = { ...defaultAppState.ui, ...initialUi };

      const newAppState = {
        ...defaultAppState,
        ui: {
          ...initial,
        },
      };

      return newAppState;
    });

  const { appendData = true } = _initialHistory || {};

  const [blendedHistories] = useState(
    [
      ...(_initialHistory?.histories || []),
      ...(appendData ? [{ state: generatedAppState }] : []),
    ].map((history) => {
      // Inject default data to enable partial history injections
      let newState = { ...generatedAppState, ...history.state };

      return {
        ...history,
        state: newState,
      };
    }),
  );

  const initialHistoryIndex =
    _initialHistory?.index || blendedHistories.length - 1;
  const initialAppState = blendedHistories[initialHistoryIndex].state;

  const generateAppStore = useCallback(
    (state) => {
      return {
        state,
      };
    },
    [initialAppState],
  );

  const [appStore] = useState(() =>
    createAppStore(generateAppStore(initialAppState)),
  );

  return (<appStoreContext.Provider value={appStore}>
    <DesignSystemContext.Provider
      value={{
        portalRef,
        setProgress,
        progress,
        mounted,
        appRef,
        bodyRef,
        panel,
        switchPanel,
        subscribe,
        notifyAll,
        localeDataModified, 
        themes,
      }}
    >
      <div className="is-html p-theme-light">
        <div
          ref={setBodyRef}
          className="is-body" 
          style={{
            backgroundColor: "var(--p-color-bg)",
            color: "var(--p-color-text)",
          }}
        >
          <div id="app" ref={setAppRef}>
            <div
              ref={setPortalRef}
              className={getAppProviderClass({dense: true})}
            >
              <div style={{ display: loading ? "none" : "block" }}>
                {cloneElement(children, {
                  onReady: () => setLoading(false),
                })}
              </div>
              {loading && <SkeletonApp />}
            </div>
          </div>
        </div>
      </div>
    </DesignSystemContext.Provider>
    </appStoreContext.Provider>
  );
}

export function useDesignSystem() {
  const ctx = useContext(DesignSystemContext);
  if (!ctx)
    throw new Error("useDesignSystem must be used within DesignSystemProvider");
  return ctx;
}
