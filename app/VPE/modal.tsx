// components/CMS.tsx
import { memo, useEffect, useRef, useState } from "react";
import { Modal as BridgeModal, TitleBar } from "@shopify/app-bridge-react";
import { createMessageChannel } from "../utils/postMessageSecure";
import { v4 as uuidv4 } from "uuid";
import { useGlobalLang } from "../i18n/global";
import { exposePostMessageTools } from "../_dev";
import { ModalProps} from './route';
import { messageChanel } from "./_intercom";


import { Config, UserGenerics,   UiState,  Data,  InitialHistory, } from "./types";

const iframeSrc = "/vpe";


interface CMSProps<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>
> {
  open: boolean;
  modalId: string;
  closeModal: () => void;
  data: ModalProps;
 onChange?: (data: Partial<G["UserData"]>) => void;
}


const CMS = ({ open, modalId, closeModal, data, onChange }: CMSProps) => {
  const lang = useGlobalLang();
  const modalRef = useRef<HTMLIFrameElement | null>(null);
  const [channel, setChannel] = useState<ReturnType<typeof createMessageChannel> | null>(null);
  const [iframeReady, setIframeReady] = useState(false);
  const [token] = useState(() => uuidv4());

// Récupère le modal
useEffect(() => {
  modalRef.current = document.getElementById(modalId) as HTMLIFrameElement;
}, [modalId, open]);

  // Crée le channel une seule fois
  useEffect(() => {
    if (!modalRef.current) return;

    console.log("[CMS] Creating secure message channel...");
    const ch = createMessageChannel({
      targetOrigin: window.location.origin,
      token,
    });

    setChannel(ch);

    ch.on(messageChanel._READY, () => {
      console.log("[CMS] Received READY message from iframe");
      setIframeReady(true);
      ch.send(messageChanel._ACK, { msg: "Ready received" });
    });

    ch.on(messageChanel._ACK, (payload) => {
      console.log("[CMS] Received ACK from iframe:", payload);
    });


    ch.on(messageChanel.set, (data: ModalProps) => {
      console.log("[CMS] Received DATA:", data);
      onChange?.(data?.data);
      ch.send(messageChanel._ACK, { msg: "Data received" });
    });

    return () => {
      console.log("[CMS] Destroying message channel");
      ch.destroy();
      setChannel(null);
      setIframeReady(false);
    };
  }, [modalRef.current, token]);



// Quand le channel est prêt et iframeReady, on set le contentWindow

  useEffect(() => {
    if (!iframeReady || !channel) return;


  const trySetWindow = () => {
    if (modalRef.current!.contentWindow) {
      console.log("[CMS] iframe.contentWindow disponible");
      channel?.setTargetWindow(modalRef.current!.contentWindow);
    } else {
      console.log("[CMS] Attente de contentWindow...");
      setTimeout(trySetWindow, 100); // Retry loop
    }
  };

  trySetWindow();
}, [modalRef.current, channel, iframeReady]);



  // Envoie les données dès que tout est prêt

  useEffect(() => {
    if (!open) {
      setIframeReady(false);
      return;
    }
    if (!iframeReady || !channel) {
      console.log("[CMS] Waiting for iframe to be ready...");
      return;
    }

    console.log("[CMS] Sending DATA to iframe:", data);
    channel.send(messageChanel.set, data);
  }, [open, iframeReady, channel, data]);

  return (
    <>
      <BridgeModal
        variant="max"
        open={open}
        id={modalId}
        src={`${iframeSrc}?lang=${lang}&token=${token}`}
        onHide={closeModal}
      >
        <TitleBar title="Contenu de l'article" />
      </BridgeModal>

      {process.env.NODE_ENV !== "production" && (
        <Dev modalId={modalId}  />
      )}
    </>
  );
};






function Dev({modalId}) {
  useEffect(() => {

        const modal = document.getElementById(modalId) as HTMLIFrameElement;
  
    // window.__MESSAGES__.vpe.send('test')

    exposePostMessageTools("vpe", {
  iframe: modal
}, location.origin);



  
  }, [modalId]);

  return null;
}

export const Modal = memo(CMS);

