// context/MetaobjectEntriesModalContext.jsx
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { get as fetchMetaobjectDefinition } from "../../services/metaobjectDefinition";
import { get as fetchMetaobjectEntrie } from "../../services/metaobjectEntrie";
import { getDefaultValueForField } from "../helpers/validations";
import { useAppBridge } from "@shopify/app-bridge-react";
import Modal from "../modal";
import { put as metaobjectCreate } from "../../services/metaobjectCreate";
import { put as metaobjectUpdate } from "../../services/metaobjectUpdate";
import { prefix } from "../config/ids";
const MetaobjectEntriesModalContext = createContext(null);

export const useMetaobjectEntriesModal = () =>
  useContext(MetaobjectEntriesModalContext);

export function MetaobjectEntriesModalProvider({
  metaobjectDefinitionType,
  children,
}) {

  const modalId = `${prefix}:${metaobjectDefinitionType}:modal`;

  const shopify = useAppBridge();

  const resolveSubmitRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleModalOpen = useCallback(() => {
    setOpen(true);
    shopify.modal.show(modalId);
  }, [shopify]);

  const handleModalClose = useCallback(() => {
    shopify.modal.hide(modalId);
    setOpen(false);
  }, [shopify]);

  const [loading, setLoading] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [entry, setEntry] = useState(null);

  const fieldDefs = useMemo(
    () => definition?.fieldDefinitions || [],
    [definition],
  );

  const defaultValues = useMemo(() => {


    const values = fieldDefs.reduce((acc, def) => {
      const field = entry?.fields?.find((f) => f.key === def.key);

      acc[def.key] = field?.value ?? getDefaultValueForField(def);
      return acc;
    }, {});

    const result = {
      handle: entry?.handle || "",
      values, // ← wrap inside values
    };

    return result;
  }, [entry, fieldDefs]);

  const load = useCallback(
    async (id = null) => {
      setId(id);
      handleModalOpen();
      setLoading(true);

      try {
        if (id) {
          const { entrie, definition } = await fetchMetaobjectEntrie(id);
          setEntry(entrie);
          setDefinition(definition);
        } else {
          const definition = await fetchMetaobjectDefinition(
            metaobjectDefinitionType,
          );
          setEntry({});
          setDefinition(definition);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      } finally {
        setLoading(false);
      }

      return new Promise((resolve) => {
        resolveSubmitRef.current = resolve;
      });
    },
    [metaobjectDefinitionType],
  );

  const close = useCallback(() => {
    handleModalClose();
    setEntry(null);
    setId(null);
    setDefinition(null);
    setLoading(false);
  }, []);

  const onSubmit = useCallback(
    (afterSubmit) => {
      return async (data) => {
        const hasMetaobjet = !!id;

        const res = hasMetaobjet
          ? await metaobjectUpdate(id, fieldDefs, data)
          : await metaobjectCreate(metaobjectDefinitionType, fieldDefs, data);

        shopify.toast.show(hasMetaobjet ? "Entrée Modifiée" : "Entrée crée");

        if (resolveSubmitRef.current) {
          resolveSubmitRef.current(res.metaobject);
          resolveSubmitRef.current = null; // 🔒 reset
        }

        await afterSubmit?.(data, res);
      };
    },
    [metaobjectDefinitionType, fieldDefs, id],
  );

  const contextValue = useMemo(
    () => ({
      open,
      close,
      load,
      loading,
      definition,
      hasEntrie: !!id,
      entry,
      fieldDefs,
      defaultValues,
      onSubmit,
      metaobjectDefinitionType,
      id,
      modalId
    }),
    [
      open,
      close,
      load,
      loading,
      definition,
      entry,
      fieldDefs,
      defaultValues,
      onSubmit,
      metaobjectDefinitionType,
      id,
      modalId
    ],
  );

  return (
    <MetaobjectEntriesModalContext.Provider value={contextValue}>
      {children}
      <Modal />
    </MetaobjectEntriesModalContext.Provider>
  );
}
