import { useState, useCallback } from "react";
import {
  Popover,
  ActionList,
  Button,
  Text,
  Box,
} from "@polaris/npm";
import { GlobeIcon } from "@shopify/polaris-icons";
import { getYear } from "../utils/date";
import { useGlobalLang, useSetGlobalLang } from "../i18n/manager";
import { globalAppI18n, languages } from "..";
// @ts-ignore
import styles from "./styles.module.css";

export const Footer = () => {
  const [popoverActive, setPopoverActive] = useState(false);
  const togglePopover = useCallback(
    () => setPopoverActive((active) => !active),
    [],
  );

  const selectedLang = useGlobalLang();
  const setSelectedLang = useSetGlobalLang();
  const i18n = globalAppI18n.useI18nStore((s) => s.i18n);

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setPopoverActive(false);
  };

  return (
    <footer className={styles.footer}>
      <Text as="span" variant="bodySm" tone="subdued">
        © {getYear()} Flarome — Tous droits réservés
      </Text>

      <div className={styles.langSelector}>
        <Popover
          active={popoverActive}
          activator={
            <Button
              onClick={togglePopover}
              icon={GlobeIcon}
              size="slim"
              variant="monochromePlain"
              disclosure
            >
              {i18n.translate(`languages.${selectedLang}`)}
            </Button>
          }
          onClose={togglePopover}
        >
          <ActionList
            items={languages.map((lang) => ({
              content: i18n.translate(`languages.${lang}`),
              onAction: () => handleLangChange(lang),
              active: lang === selectedLang,
            }))}
          />
        </Popover>
      </div>
    </footer>
  );
};
