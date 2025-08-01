import { memo, useEffect, useRef, useState } from "react";

// --- Shopify App Bridge ---
import { Modal as BridgeModal, TitleBar } from "@shopify/app-bridge-react";

// --- Utils ---
import { ParentChanel, type ParentAPI } from "@/utils";
import { generateId } from "@/lib";

// --- Routing ---
import { useRoutes } from "@/routes";

// --- Dev Only ---
import { exposePostMessageTools } from "@/_dev";

// --- VPE ---
import type { Config, InputData, UserGenerics } from "@VPE/types";
import { vpeInner } from "@VPE/contexts";

type VpeInnerWithoutOnChange<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>,
> = Omit<vpeInner<UserConfig, G>, "onChange">;

interface CMSProps<
  UserConfig extends Config = Config,
  G extends UserGenerics<UserConfig> = UserGenerics<UserConfig>,
> {
  open: boolean;
  modalId: string;
  closeModal: () => void;
  root: VpeInnerWithoutOnChange;
  onChange?: (data: InputData) => void;
}

const token = generateId();

const CMS = ({ open, modalId, closeModal, root: data, onChange }: CMSProps) => {
  const modalRef = useRef<HTMLIFrameElement | null>(null);
  const [channel, setChannel] = useState<InstanceType<typeof ParentAPI> | null>(
    null,
  );

  // const [token] = useState(() => uuidv4());
  const lastToken = useRef<String>();
  const dataRef = useRef(data);
  const onChangeRef = useRef(onChange);

  const routes = useRoutes();

  useEffect(() => {
    dataRef.current = data;
    onChangeRef.current = onChange;
  }, [data, onChange]);

  // Récupère le modal
  useEffect(() => {
    modalRef.current = document.getElementById(modalId) as HTMLIFrameElement;
  }, [modalId, open]);

  // Crée le channel une seule fois
  useEffect(() => {
    if (channel && token === lastToken.current) return;
    lastToken.current = token;

    console.log("[CMS] Creating secure message channel...");

    const ch = new ParentChanel({
      url: window.location.origin,
      token,
      model: {
        data: () => dataRef.current,
        setData: (data) => onChangeRef.current?.(data),
      },
    });


     if (process.env.NODE_ENV !== "production") {
ParentChanel.debug = true;
     }




    let isCancelled = false;
    let currentAPI: InstanceType<typeof ParentAPI> | null = null;

    ch.awaitHandshake().then((api) => {
      if (isCancelled) {
        // le composant a été démonté entre-temps → on clean l’API
        api.destroy();
        return;
      }
      currentAPI = api;
      setChannel(api);
    });

    return () => {
      isCancelled = true;
      currentAPI?.destroy(); // API déjà prête ?
      ch.destroy(); // Toujours destroy le canal brut
      setChannel(null);
    };
  }, [token]);

  // Quand le channel est prêt et iframeReady, on set le contentWindow

  useEffect(() => {
    if (!channel || !modalRef.current || !open) return;

    const trySetWindow = () => {
      const valid = channel.setIframe(modalRef.current!);

      if (!valid) {
        console.log("[CMS] Attente de contentWindow...");
        setTimeout(trySetWindow, 100); // Retry loop
      }
    };

    trySetWindow();
  }, [channel, open]);

  return (
    <>
      <BridgeModal
        variant="max"
        open={open}
        id={modalId}
        src={`${routes._modules.vpe}?token=${token}`}
        onHide={closeModal}
      >
        <TitleBar title="Contenu de l'article" />
      </BridgeModal>

      {process.env.NODE_ENV !== "production" && <Dev modalId={modalId} />}
    </>
  );
};

function Dev({ modalId }: { modalId: CMSProps["modalId"] }) {
  useEffect(() => {
    const modal = document.getElementById(modalId) as HTMLIFrameElement;

    // window.__MESSAGES__.vpe.send('test')

    exposePostMessageTools(
      "vpe",
      {
        iframe: modal,
      },
      location.origin,
    );
  }, [modalId]);

  return null;
}

export const Modal = memo(CMS);
