import React from "react";
import { TextField, Box } from "@shopify/polaris";

const HandleDeleteBanner = ({ isModalOpen, toggleModal, title }) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={toggleModal}
      title={`Supprimer ${title} ?`}
      primaryAction={{
        destructive: true,
        loading: isLoadingDelete,
        content: "Supprimer",
        onAction: handleDelete,
      }}
      secondaryActions={[
        {
          content: "Annuler",
          onAction: toggleModal,
        },
      ]}
    >
      <Modal.Section>Supprimer {title} ? Cette opération est irréversible.</Modal.Section>
    </Modal>
  );
};

export default HandleDeleteBanner;
