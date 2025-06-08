import { Modal, TitleBar } from "@shopify/app-bridge-react";
import { useEffect } from "react";

const CMS = ({ open, modalId, closeModal, ...props1 }) => {
  const iframeSrc = "/vpe";

  const props = {p:2};


  useEffect(() => {
    function handleMessageFromModal(ev) {
      console.log('Message received in main app:', ev.data);
    }

    window.addEventListener('message', handleMessageFromModal)
    return () => {
      window.removeEventListener('message', handleMessageFromModal)
    }
  }, [])
  // Envoie les données dès que l'iframe est prêt
  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
       const modal = document.getElementById(modalId);

      if (modal?.contentWindow?.postMessage) {
          modal.contentWindow.postMessage(   {
            type: "EDITOR_INIT",
            payload: props, // les données à envoyer (article, metadata, etc.)
          }, location.origin);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [open, props, modalId]);

  return (
    <>
      <Modal variant="max" open={open} id={modalId} src={iframeSrc} onHide={closeModal}>
        <TitleBar title="Contenu de l'article" />
      </Modal>
    </>
  );
};

export default CMS;
