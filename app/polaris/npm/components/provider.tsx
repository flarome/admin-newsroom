import { createI18nContext } from "../../../i18n/context";
import { AppProvider as PolarisProviderOriginal } from "@shopify/polaris";
import fr from "../locales/fr.json";
import { language } from "../../../config/app";

import { languages } from "../locales";


const polarisI18n = createI18nContext({
  fallback: language,
  translations: {
    // Langues à charger dynamiquement
    ...Object.fromEntries(
      languages
        .map((lang) => [
          lang,
          { type: 'import' as const, value: () => import(`../locales/${lang}.json`) }
        ])
    ),

    // Langue déjà chargée
    fr: {
      type: 'parsed',
      value: fr,
    }
  },
  initialTranslations: fr,
});

export const PolarisI18n = ({ children }: { children: React.ReactNode }) => {
  return <polarisI18n.I18nProvider id="polaris-npm">{children}</polarisI18n.I18nProvider>;
};

// Ce composant synchronise i18nStore avec PolarisProvider
export function PolarisProvider({ children }: { children: React.ReactNode }) {
  const translations = polarisI18n.useI18nStore((s) => s.translations);

  return (
    <PolarisProviderOriginal i18n={translations}>
      {children}
    </PolarisProviderOriginal>
  );
}

export const PolarisBridge = ({ children }: { children: React.ReactNode }) => (
   <PolarisI18n><PolarisProvider>{children}</PolarisProvider></PolarisI18n>
)