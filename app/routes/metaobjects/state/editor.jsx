import React, { useState, useEffect, useMemo, useCallback } from "react";

import { useFetcherWithPromise } from "../../../utils/useFetcherWithPromise";
import { useMetaobject } from "../context/MetaobjectsProvider";

// Remix
import {
  SaveBar,
  useAppBridge,
  Modal as BModal,
  TitleBar,
} from "@shopify/app-bridge-react";

// Lodash
import * as lodash from "lodash";
const { isEqual } = lodash;

// Polaris
import {
  Page,
  Badge,
  Layout,
  TextField,
  Select,
  Checkbox,
  FormLayout,
  PageActions,
  Card,
  Box,
  BlockStack,
  InlineStack,
  Text,
  Button,
  Bleed,
  Divider,
  Form,
  LegacyCard,
} from "@shopify/polaris";
import { ViewIcon, EditIcon } from "@shopify/polaris-icons";

import { useToast } from "../../../context/toast";

// Local components
import Loading from "./loading";

// uuid
import { v4 as uuid } from "uuid";

// local state
const modifiedBannerId = "metaobjectModifiedBanner" + uuid();

import { useMetaobjectModal } from "../context/ModalContext";

const Editor = ({ handleClose }) => {

    const { modalState } = useMetaobjectModal();
  // Shopify Provider
  const shopify = useAppBridge();

  // App Provider
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(true); // Etat de chargement

  // Metaobject Provider
  const {
    errors = {},
    isNew,
    template = {},
    originalFields = {},
    fields = {},
    setFields,
    loadMetaobject,
  } = useMetaobject();

  const fieldDefinitions = useMemo(() => {
    return template?.fieldDefinitions || [];
  }, [template]);

  // errors
  const hasFieldsErrors = useMemo(() => {
    return Object.keys(errors).length > 0;
  }, [errors]);

  // Form

  const handleChangeFields = (value, id) => {
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));
  };

  const isModified = useMemo(() => {
    return !isEqual(fields, originalFields);
  }, [fields, originalFields]);

  const renderField = (field, index) => {
    const { type, name, key, required, description } = field;

    // Vérifie si c'est le dernier champ et si l'état isLoading est encore à true
    if (index === fieldDefinitions.length - 1 && isLoading) {
      setIsLoading(false); // On arrête le chargement uniquement si c'est le dernier champ
    }
    // Handle different field types
    switch (type.category) {
      case "TEXT":
        return (
          <TextField
            id={key}
            label={name}
            value={fields[key]}
            onChange={(value, id) => handleChangeFields(value, id)}
            required={required}
            helpText={description}
          />
        );

      case "CHOICES":
        return (
          <Select
            key={key}
            label={name}
            options={field.type.supportedValidations[0]?.type
              ?.split(",")
              .map((choice) => ({ label: choice, value: choice }))}
            onChange={() => {}}
            required={required}
          />
        );

      case "CHECKBOX":
        return (
          <Checkbox
            key={key}
            label={name}
            checked={false}
            onChange={() => {}}
          />
        );

      default:
        return (
          <TextStyle key={key} variation="negative">
            Field type not supported
          </TextStyle>
        );
    }
  };

  // Submit
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

    const fetcherMetaobjectCreate = useFetcherWithPromise(
      "metaobjectUpsert" + template.id,
    );
    const fetcherMetaobjectUpdate = useFetcherWithPromise(
      "metaobjectUpsert" + template.id,
    );

  const handleSubmit = async () => {
    setIsLoadingSubmit(true);
    // Détermine la fonction à appeler en fonction de l'état (nouvel article ou modification existante)
    const fetcher = isNew ? fetcherMetaobjectCreate : fetcherMetaobjectUpdate;

    try {
      const response = await loadMetaobject(
        fetcher,
        null,
        "metaobjectUpsert",
        {...modalState, fields: fields},
        true,
      );

      if (isNew) {
        showToast("Metaobject créé");
       handleClose();
      } else {
        showToast("Metaobject mis à jour");

      }
    } catch (error) {
      console.error("Une erreur s'est produite lors du traitement :", error);
      // Vous pouvez ici gérer les erreurs non prévues
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  const disabledSubmit = useMemo(() => {
    return !isModified || hasFieldsErrors;
  }, [hasFieldsErrors, isModified]);

  // Close

  // HandleModifiedBanner
  const handleModifiedBanner = useCallback(() =>
    shopify.modal.toggle(modifiedBannerId),
  );

  const handleCloseEditor = (
    event = null,
    force = true,
    reloadData = false,
  ) => {
    if (force || !isModified) {
      handleClose();
    } else {
      if (event) {
        event.preventDefault(); // Empêcher la navigation par défaut
      }
      // Si l'article n'est pas modifié, on peut naviguer normalement
      handleModifiedBanner();
    }
  };

  return (
    <div>
      <div style={{ display: isLoading ? "none" : "block" }}>
        <Page
          title={
            isNew
              ? "Ajouter " + template.name
              : template.name + " #" + 
              modalState.handle
          }
          subtitle={template.description}
        >
          <BlockStack gap={{ xs: "400" }}>
            <Form
              autoComplete={false}
              method="post"
              implicitSubmit={false}
              onSubmit={handleSubmit}
            >
              <Layout>
                <Layout.Section>
                  <LegacyCard>
                    <LegacyCard.Section>
                      <BlockStack gap={{ xs: "400" }}>
                        {fieldDefinitions.map((field, index) => (
                          <FormLayout key={field.key || index}>
                            {" "}
                            {/* Assuming 'field.id' is a unique identifier */}
                            {renderField(field, index)}
                            {/* Assuming renderField is a function that returns the JSX for each field */}
                          </FormLayout>
                        ))}
                      </BlockStack>
                    </LegacyCard.Section>
                  </LegacyCard>
                </Layout.Section>
              </Layout>
              <Layout>
                <Layout.Section>
                  <PageActions
                    primaryAction={{
                      content: !isNew ? "Enregistrer" : "Créer",
                      disabled: disabledSubmit,
                      onAction: () => handleSubmit(),
                      loading: isLoadingSubmit,
                    }}
                    secondaryActions={[
                      {
                        content: "Annuler",

                        disabled: !isModified,
                        onAction: () => handleCloseEditor(),
                      },
                    ]}
                  />
                </Layout.Section>
              </Layout>
            </Form>
          </BlockStack>
        </Page>
      </div>

      {isLoading && <Loading />}

      <BModal id={modifiedBannerId}>
        <TitleBar title="Vous avez des changements non enregistrés">
          <button
            tone="critical"
            variant="primary"
            onClick={() => {
              handleModifiedBanner();
              handleCloseEditor(null, true);
            }}
          >
            Quitter la page
          </button>

          <button
            onClick={() => {
              handleModifiedBanner();
            }}
          >
            Annuler
          </button>
        </TitleBar>

        <Box paddingBlock="400" paddingInline="400">
          <p>
            Si vous quittez cette page, toutes les modifications non
            enregistrées seront perdues.
          </p>
        </Box>
      </BModal>
    </div>
  );
};

export default Editor;
