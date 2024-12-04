import React, { memo } from "react";
import { Modal } from "@shopify/polaris";

const HandleModifiedBanner = memo(({ isModalOpen, toggleModal, handleCloseEditor }) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={toggleModal}
      title="Vous avez des changements non enregistrés"
      primaryAction={{
        destructive: true,
        content: "Quitter la page",
        onAction: () => handleCloseEditor(true),
      }}
      secondaryActions={[
        {
          content: "Annuler",
          onAction: toggleModal,
        },
      ]}
    >
      <Modal.Section>
        <p>Si vous quittez cette page, toutes les modifications non enregistrées seront perdues.</p>
      </Modal.Section>
    </Modal>
  );
});

export default HandleModifiedBanner;
