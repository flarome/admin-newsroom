// modal/index.jsx
import { memo, useCallback, useEffect } from "react";
import {  Modal as PolarisModal } from "@shopify/polaris";
import { Modal, TitleBar } from "@shopify/app-bridge-react";
import Skeleton from "./states/loading";
import Editor from "./states/editor";
import { useMetaobjectEntriesModal } from "./context/MetaobjetsEntriesModalContext";
import { useFormContext, useFormState } from "react-hook-form";
import { FormProviderWrapper } from "../../form";


import './styles/styles.css'
import { PolarisProvider } from "../../../polaris/npm";
const MetaobjectModalPortal = memo(({ onReady }) => {
  const {
    open,
    close,
    loading,
    definition,
    onSubmit: providerOnSubmit,
    defaultValues,
    hasEntrie,
    modalId
  } = useMetaobjectEntriesModal();

  const { reset, handleSubmit: rhfHandleSubmit } = useFormContext();
  const { errors, isSubmitting, isDirty } = useFormState();


  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues]);



  const handleClose = useCallback(() => {
    reset();
    close();
  }, [reset, close]);

  const onSubmit = useCallback(
    async (data, res) => {

      handleClose();
    },
    [handleClose],
  );

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  return (
    <Modal id={modalId} open={open} onHide={handleClose}>
      <TitleBar title={definition?.name || definition?.type}>
        <button
          variant="primary"
          onClick={rhfHandleSubmit(providerOnSubmit(onSubmit))}
          disabled={!isDirty || isSubmitting || Object.keys(errors).length > 0}
          loading={isSubmitting ? "" : undefined}
        >
          {hasEntrie ? "Modifier" : "Créer"}
        </button>
        <button onClick={handleClose} disabled={!isDirty || isSubmitting}>
          Annuler
        </button>
      </TitleBar>

<PolarisProvider>

        <PolarisModal.Section>
          {loading ? <Skeleton /> : <Editor />}
        </PolarisModal.Section>
</PolarisProvider>
    </Modal>
  );
});

const MetaobjectContent = memo(({ onReady }) => {
  const { defaultValues } = useMetaobjectEntriesModal();




   


  return (
    <FormProviderWrapper initialData={defaultValues}>
      <MetaobjectModalPortal onReady={onReady} />
    </FormProviderWrapper>
  );
});

export default MetaobjectContent;
