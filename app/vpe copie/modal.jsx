// app bridge
import { Modal } from "@shopify/app-bridge-react";

import { AppProvider } from "@shopify/polaris";
import {VPE} from ".";
import polarisTranslations from "@shopify/polaris/locales/fr.json";

export const CMS = ({ open, modalId, closeModal,  ...props }) => {

  return (  
    <>   
      <Modal
      open={open}
        id={modalId}
        variant="max"
        onHide={closeModal}
      >
        <AppProvider i18n={polarisTranslations}>
          <VPE open={open} {...props} />
        </AppProvider>
      </Modal>
    </>
  );
};

export default CMS;
