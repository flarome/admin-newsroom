import { useFormContext, useFormState } from "react-hook-form";
import { List, Banner as ShopifyBanner } from "@shopify/polaris";
import { useEffect, useRef, useState } from "react";
import { extractMessages } from "../../../modules/form";

export default function BannerList() {
   const { control } = useFormContext();
  const { errors, submitCount } = useFormState({ control });

  const [lastSubmittedErrors, setLastSubmittedErrors] = useState({});
  const previousSubmitCount = useRef(0);
  const hasFocusedRef = useRef(false);
  const bannerRef = useRef(null);

  // 🔁 Met à jour les erreurs soumises après chaque submit
  useEffect(() => {
    const isNewSubmit = submitCount > previousSubmitCount.current;
    previousSubmitCount.current = submitCount;

    if (isNewSubmit) {
      setLastSubmittedErrors(errors);
      hasFocusedRef.current = false; // ✅ autoriser à nouveau le focus
    } else if (Object.keys(errors).length === 0) {
      setLastSubmittedErrors({});
      hasFocusedRef.current = false; // 🧹 reset complet
    }
  }, [submitCount, errors]);

  const messages = extractMessages(lastSubmittedErrors);

  // ✅ Focus une seule fois quand les erreurs apparaissent
  useEffect(() => {
    if (submitCount <= 0 || messages.length === 0 || !bannerRef.current) return;

    if (!hasFocusedRef.current) {
      bannerRef.current?.focus?.();
      hasFocusedRef.current = true;
    }
  }, [submitCount, messages]);

  if (messages.length === 0) return null;


  return (
    <ShopifyBanner
      ref={bannerRef}
      title="Erreur(s) dans le formulaire"
      tone="critical"
    >
      <List type="bullet">
        {messages.map((msg, i) => (
          <List.Item key={i}>{msg}</List.Item>
        ))}
      </List>
    </ShopifyBanner>
  );
}