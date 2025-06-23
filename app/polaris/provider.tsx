import { createI18nContext } from "../i18n/context";
import { AppProvider as PolarisProviderOriginal } from "@shopify/polaris";
import fr from "./locales/fr.json";
import { language } from "../config/app";
import { languages } from "./locales";

const polarisI18n = createI18nContext({
  fallback: language,
  availableLangs: languages,
  path: (lang) => new URL(`./locales/${lang}.json`, import.meta.url).pathname,
  initialTranslations: fr,
});

export const PolarisI18n = ({ children }: { children: React.ReactNode }) => {
  return <polarisI18n.I18nProvider id="polaris">{children}</polarisI18n.I18nProvider>;
};

// Ce composant synchronise i18nStore avec PolarisProvider
export function PolarisBridge({ children }: { children: React.ReactNode }) {
  const translations = polarisI18n.useI18nStore((s) => s.translations);

  return (
    <PolarisProviderOriginal i18n={translations}>
      {children}
    </PolarisProviderOriginal>
  );
}
