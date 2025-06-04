// app bridge
import { Modal } from "@shopify/app-bridge-react";

import { AppProvider } from "@shopify/polaris";
import App from "./app";
import polarisTranslations from "@shopify/polaris/locales/fr.json";

const CMS = ({ open, modalId, closeModal,  ...props }) => {

  return (
    <>
      <Modal
      open={open}
        id={modalId}
        variant="max"
        onHide={closeModal}
      >
        <AppProvider i18n={polarisTranslations}>
          <App open={open} {...props} />
        </AppProvider>
      </Modal>
    </>
  );
};

export default CMS;
