// Enum des types d'actions courantes
export enum CommonActionType {
  Back = "Back",
  Cancel = "Cancel",
  Close = "Close",
  Select = "Select",
  Loading = "Loading",
  Edit = "Edit",
  Done = "Done",
}

// Type de l'objet passé à la fonction generateCommonActionProps
interface CommonActionProps {
  type?: keyof typeof CommonActionType;
  content?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
  url?: string;
  onAction?: () => void;
}

// Type de l'objet retourné par generateCommonActionProps
interface GeneratedActionProps {
  content?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
  url?: string;
  onAction?: () => void;
}

/**
 * Fonction qui génère les props d'une action commune,
 * en gérant la traduction, le contenu, accessibilité, etc.
 */
export function generateCommonActionProps(props: CommonActionProps): GeneratedActionProps { 
  const {
    type: actionType,
    content: contentProp,
    accessibilityLabel: accessibilityLabelProp,
    disabled,
    url,
    onAction,
  } = props;

  // Ce hook "useTranslations" renvoie un objet avec une méthode translate
  // et gère le chargement dynamique des traductions.
  // Hypothèse: Ce hook existe et fonctionne comme dans le code original.


  // Traductions par défaut si type est défini
 /* const defaultContent = actionType
    ? translationContext.translate(`CommonAction.${CommonActionType[actionType]}.content`)
    : undefined;

  const defaultAccessibilityLabel = actionType
    ? translationContext.translate(`CommonAction.${CommonActionType[actionType]}.accessibilityLabel`)
    : undefined;*/



    const defaultContent = "defaultContent";  // instable
    const defaultAccessibilityLabel = "defaultAccessibilityLabel" // instable

  // Contenu final avec priorité au contenu passé en props
  const finalContent = contentProp || defaultContent;
  const finalAccessibilityLabel = accessibilityLabelProp || defaultAccessibilityLabel;

  // Construction et retour de l'objet props final
  return {
    ...(finalContent && { content: finalContent }),
    ...(finalAccessibilityLabel && { accessibilityLabel: finalAccessibilityLabel }),
    ...(disabled !== undefined && { disabled }),
    ...(url && { url }),
    ...(onAction && { onAction }),
  };
}

