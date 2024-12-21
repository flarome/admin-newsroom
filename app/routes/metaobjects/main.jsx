import React, { useEffect } from "react";

import {
  MetaobjectProvider,
  useMetaobject,
} from "./context/MetaobjectsProvider";

import { useFetcherWithPromise } from "../../utils/useFetcherWithPromise";

import { useMetaobjectModal } from "./context/ModalContext";
// State
import Loading from "./state/loading";
import Editor from "./state/editor";

import handle from "../../global-modules/utils/handle";

import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { v4 as uuid } from "uuid";

export function MetaobjectModal() {
  const { modalState, closeModal } = useMetaobjectModal();

  if (!modalState.isOpen) return null; // Ne rien afficher si la modal est fermée

  return (
    <MetaobjectProvider>
      <MetaobjectContent metaobjectType={modalState.type} metaobjectId={modalState.id} />
    </MetaobjectProvider>
  );
}

function MetaobjectContent({ metaobjectType, metaobjectId }) {
  const { closeModal } = useMetaobjectModal();

  const what = metaobjectId ? "metaobjectEntrie" : "metaobjectDefinition";
  const id = what + metaobjectId + metaobjectType + uuid;
  const fetcher = useFetcherWithPromise(id);


  const { isLoading, loadMetaobject } = useMetaobject();

  useEffect(() => {
    loadMetaobject(fetcher, "initial", what, {
      metaobjectId,
      type: metaobjectType
    });

  }, [metaobjectId]);



  return (
    <Modal id={id} variant="large" open>
      <TitleBar title="Ajouter une mise en page">
        <button
 
          variant="primary"
          onClick={() => {
            closeModal()
          }}
        >
          Valider
        </button>

        <button

          tone="critical"
          onClick={() => {
            closeModal()
          }}
        >
          Annuler
        </button>
      </TitleBar>

      {isLoading ? <Loading /> : <Editor />}
    </Modal>
  );
}
