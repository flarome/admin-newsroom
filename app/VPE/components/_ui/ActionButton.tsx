import { Button as PolarisButton, type ButtonProps as PolarisButtonProps } from "@polaris/npm"; // Exemple si tu utilises Polaris ou autre



export enum ActionButtonType {
  Primary = "Primary",
  Secondary = "Secondary",
  MoreActions = "MoreActions",
}

export type ButtonProps = PolarisButtonProps & {
  /** Callback appelé lors de l'action du bouton */
  onAction?: () => void;

  /** Texte ou contenu du bouton */
  content: PolarisButtonProps["children"];

  /** Icône à afficher avant le texte */
  prefixIcon?: PolarisButtonProps["icon"]

  /** Type d'action pour ce bouton */
  type: ActionButtonType;

  /** Indique si le bouton est en chargement */
  loading?: PolarisButtonProps["loading"];

  /** Toute autre prop additionnelle à passer au bouton */
  // [key: string]: any;
}

type ActionButtonComponentProps = {
  isSheetExpanded: boolean;
  onSheetExpandChange?: () => void;
  button: ButtonProps;
};

export function ActionButton({
  isSheetExpanded,
  onSheetExpandChange,
  button,
}: ActionButtonComponentProps) {
  if (!button) return null;

  const {
    onAction,
    content,
    prefixIcon,
    type,
    loading,
    ...restProps
  } = button;

  const handleClick = () => {
    if (!isSheetExpanded) {
      onSheetExpandChange?.();
    }
    onAction?.();
  };

  return (
    <PolarisButton
      variant="tertiary"
      fullWidth
      size="micro"
      onClick={handleClick}
      icon={prefixIcon}
      textAlign={type === ActionButtonType.Secondary ? "left" : "right"}
      loading={loading}
      {...restProps}
    >
      {content}
    </PolarisButton>
  );
}