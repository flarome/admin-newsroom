import React, { useState, useEffect, useMemo, useCallback } from "react";

import { useMetaobjectModal } from "../context/ModalContext";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";

// Remix
import { useNavigate } from "@remix-run/react"; // Utiliser fetcher pour déclencher l'action

import { useFetcherWithPromise } from "../../../utils/useFetcherWithPromise";
import { useMetaobject } from "../context/MetaobjectsProvider";

// Backend API
import { useHref } from "@remix-run/react";

// Lodash
import * as lodash from "lodash";
const { isEqual } = lodash;

// Polaris
import {
  Page,
  Badge,
  Layout,
  TextField,
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
} from "@shopify/polaris";
import { ViewIcon, EditIcon } from "@shopify/polaris-icons";

import { useToast } from "../../../context/toast";
// Global components
import EditorText from "../../../tinymce/Editor";

// Local components

// uuid
import { v4 as uuid } from "uuid";

import handle from "../../../global-modules/utils/handle";

// Event
import { beforeunload } from "../../../modules/EventListener";

const Editor = ({}) => {
  const { closeModal, modalState } = useMetaobjectModal();

  const modalId = "metaobject-" + handle(modalState.id) + "-" + uuid();

  // Shopify Provider
  const shopify = useAppBridge();

  // Article Provider
  const {
    errors,

    removeError,
    originalFields,
    fields,
    setFields,
    isLoading,
    setIsLoading,
    loadMetaobject,
  } = useMetaobject();

  return (
    <button


 
  >
    Annuler
  </button>
  );
};

export default Editor;
