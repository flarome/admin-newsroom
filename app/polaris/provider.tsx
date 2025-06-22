import { createI18nContext } from "../i18n/context";
import { AppProvider as PolarisProviderOriginal } from "@shopify/polaris";
import fr from "./locales/fr.json";
import { useEffect } from "react";
import { useSetGlobalLang } from "../i18n/global";
import { language } from "../config/app";
import { languages } from "./locales";

const polarisI18n = createI18nContext({
  fallback: language,
  availableLangs: languages,
  path: (lang) => new URL(`./locales/${lang}.json`, import.meta.url).pathname,
  initialTranslations: fr,
});

export const PolarisI18n = ({ children }: { children: React.ReactNode }) => {
  return <polarisI18n.I18nProvider>{children}</polarisI18n.I18nProvider>;
};

// Ce composant synchronise i18nStore avec PolarisProvider
export function PolarisBridge({ children }: { children: React.ReactNode }) {
  const translations = polarisI18n.useI18nStore((s) => s.translations);

  const setLang = useSetGlobalLang();

  useEffect(() => {
    setLang("en");
  }, []);

  return (
    <PolarisProviderOriginal i18n={translations}>
      {children}
    </PolarisProviderOriginal>
  );
}
