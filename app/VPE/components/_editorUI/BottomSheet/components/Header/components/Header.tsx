import { useI18n } from "@shopify/react-i18n";
import fr from '../locales/fr.json';
import { Button, Title } from "./components";


export interface HeaderProps {
  title: string;
  onClose: () => void;
  onBack?: () => void;
}

export function Header({ title, onClose, onBack }: HeaderProps) {

  const [i18n] = useI18n({
    id: "Header_qlke73",
    fallback: fr,
    translations(locale: string) {
      return import(`../locales/${locale}.json`);
    },
  });


  return (
    <>
      <Title title={title} />

      <Button onClick={onClose} type="primary" content={i18n.translate("done")} />



      {onBack && (
        <Button
          onClick={onBack}
          type="secondary"
          prefixIcon="chevron-left"
          aria-label={i18n.translate("Common.actions.back")}
          content={i18n.translate("Common.actions.back")}
        />

      )}
    </>
  );
}