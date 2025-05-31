import { useFormContext, useFormState } from "react-hook-form";
import { Banner as ShopifyBanner } from "@shopify/polaris";
import { useEffect, useRef, useState } from "react";
import { extractMessages } from "../../context/formContext";

export default function BannerList() {
  const { control } = useFormContext();
  const { errors, submitCount } = useFormState({ control });

  const [lastSubmittedErrors, setLastSubmittedErrors] = useState({});
  const previousSubmitCount = useRef(0);

  useEffect(() => {
    // ✅ Lors d’un nouveau submit, on enregistre l’état complet des erreurs
    if (submitCount > previousSubmitCount.current) {
      setLastSubmittedErrors(errors);
      previousSubmitCount.current = submitCount;
    }
  }, [submitCount, errors]);

  // ✅ Extraction des messages uniquement à partir des erreurs du dernier submit
  const messages = extractMessages(lastSubmittedErrors);

  if (messages.length === 0) return null;

  return (
    <ShopifyBanner title="Erreur(s) dans le formulaire" tone="critical">
      <ul style={{ margin: 0, paddingLeft: "1.5em" }}>
        {messages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </ShopifyBanner>
  );
}