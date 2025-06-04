import { PageActions } from "@shopify/polaris";
import { memo } from "react";
import { useArticle } from "../context/articleContext";
import { useFormState, useFormContext } from "react-hook-form";
import { useDeleteModal } from "../context/deleteContext";

const Actions = ({ handleSubmit }) => {
  const { hasArticle } = useArticle();
  const {show: showDeleteModal} = useDeleteModal();
  const { handleSubmit: rhfHandleSubmit } = useFormContext();
  const { errors, isSubmitting, isDirty } = useFormState();

  const fn = rhfHandleSubmit(handleSubmit); // directement exécutable

  return (
    <PageActions
      primaryAction={{
        content: hasArticle ? "Enregistrer" : "Créer",
        onAction: fn,
        loading: isSubmitting,
        disabled: !isDirty || isSubmitting || Object.keys(errors).length > 0,
      }}
      secondaryActions={
        hasArticle
          ? [
              {
                content: "Supprimer l’article de blog",
                destructive: true,
                onAction: showDeleteModal,
                disabled: isSubmitting,
              },
            ]
          : undefined
      }
    />
  );
};

export default memo(Actions);
