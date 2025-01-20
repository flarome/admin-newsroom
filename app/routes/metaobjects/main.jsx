import React, { useEffect, useCallback } from "react";

import {
  MetaobjectProvider,
  useMetaobject,
} from "./context/MetaobjectsProvider";

import { Modal as PolarisModal } from "@shopify/polaris";
import { useFetcherWithPromise } from "../../utils/useFetcherWithPromise";

import { useMetaobjectModal } from "./context/ModalContext";
// State
import Loading from "./state/loading";
import Editor from "./state/editor";

import handle from "../../global-modules/utils/handle";

import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { v4 as uuid } from "uuid";

export function MetaobjectModal() {
  const { modalState } = useMetaobjectModal();

  if (!modalState.isOpen) return null; // Ne rien afficher si la modal est fermée

  return (
    <MetaobjectProvider>
      <MetaobjectContent metaobjectType={modalState.type} metaobjectId={modalState.id} isOpen={modalState.isOpen} />
    </MetaobjectProvider>
  );
}

function MetaobjectContent({ metaobjectType, metaobjectId, isOpen }) {

  const shopify = useAppBridge();

  const { closeModal } = useMetaobjectModal();

  const isNew = metaobjectId ? false : true;
  const what = isNew ? "metaobjectDefinition": "metaobjectEntrie";
  const id = what + metaobjectId + metaobjectType;
  const fetcher = useFetcherWithPromise(id);


  const { isLoading, loadMetaobject, resetMetaobject } = useMetaobject();

  useEffect(() => {
    loadMetaobject(fetcher, "initial", what, {
      metaobjectId,
      type: metaobjectType
    });

  }, [metaobjectId]);

 const handleClose = useCallback(() => {

  closeModal();
  resetMetaobject();



  }, []);

  return (

    <PolarisModal
    open={isOpen}
    onClose={handleClose}
    title={isNew ? "Ajouter une entrée" : "Modifier l'entrée"}
    key={"metaobjectModal" + metaobjectType + metaobjectId}
    size="fullScreen"

    
    >

{isLoading ? <Loading /> : <Editor handleClose={handleClose} />}


    </PolarisModal>

    /*
    <Modal id={"metaobjectModal" + metaobjectType + metaobjectId} variant="large" onHide={handleClose} open={isOpen}>
      <TitleBar title={isNew ? "Ajouter une entrée" : "Modifier l'entrée"}>
    
      </TitleBar>


      {isLoading ? <Loading /> : <Editor handleClose={handleClose} />}
    </Modal>*/
  );
}
