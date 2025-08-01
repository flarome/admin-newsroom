import { createContext, useContext, useState, useCallback } from "react";
import { Modal as AppModal } from "@shopify/app-bridge-react";
import { Modal as PolarisModal, Text } from "@polaris/npm";
import { TitleBar } from "@shopify/app-bridge-react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useArticle } from "./articleContext";
import { prefix } from "../config/ids";

export const id = `${prefix}:delete:modal`;
 
const DeleteModalContext = createContext(null);

export const DeleteModalProvider = ({ isDelete, children }) => {
  const { article } = useArticle();

  const shopify = useAppBridge();

  const [open, setOpen] = useState(
    isDelete || typeof window !== "undefined" && window.location.pathname.endsWith("/delete"), 
  );
  const [isLoading, setIsLoading] = useState(false);

  const show = useCallback(() => {

    setOpen(true);
    shopify.modal.show(id);

    if(typeof window === "undefined") return;
    window.history.pushState({}, "", `${window.location.pathname}/delete`);
  }, [shopify]);

  const hide = useCallback(() => {
    setOpen(false);
    shopify.modal.hide(id);
    window.history.pushState(
      {},
      "",
      window.location.pathname.replace(/\/delete$/, ""),
    );
  }, [shopify]);

  const handleDelete = async () => {
    setIsLoading(true);

    function waitOneMinute() {
      return new Promise((resolve) => {
        setTimeout(resolve, 60 * 1);
      });
    }

    await waitOneMinute();

    setIsLoading(false);
    hide();
  };

  return (
    <DeleteModalContext.Provider value={{ show }}>
      {children}

      <AppModal id={id} open={open} onHide={hide}>
        <TitleBar title={`Supprimer ${article?.title} ?`}>
          {" "}
          <button
            tone="critical"
            variant="primary"
            type="button"
            loading={isLoading ? "" : undefined}
            onClick={handleDelete}
          >
            Supprimer
          </button>
          <button type="button" onClick={hide}>
            Annuler
          </button>
        </TitleBar>
        <PolarisModal.Section>
          <Text as="p" variant="bodyMd">
            Voulez-vous vraiment supprimer{" "}
            <Text as="span" variant="bodyMd" fontWeight="semibold">
              {article?.title || "cet article"}
            </Text>{" "}
            ? Cette action est irréversible.
          </Text>
        </PolarisModal.Section>
      </AppModal>
    </DeleteModalContext.Provider>
  );
};

export const useDeleteModal = () => useContext(DeleteModalContext);
