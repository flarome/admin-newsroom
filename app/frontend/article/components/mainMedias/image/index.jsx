import { useState, useCallback, useMemo, useEffect, memo, useId } from "react";
import {
  Button,
  Card,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Popover,
  TextField,
  Modal as PolarisModal,
  Icon,
  Thumbnail,
  InlineGrid,
  Collapsible,
  DropZone,
  ActionList,
} from "@shopify/polaris";
import {
  DeleteIcon,
  NoteIcon,
  LinkIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@shopify/polaris-icons";
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import _ from "lodash";
import { form as formFieldMap } from "../../../../../data/article/config/fieldMap";
import { prefix } from "../../../config/ids";
import { getFieldPath, getFieldRoot } from "../../../../../utils/getFieldPath";
import { Banner as BannerForm } from "../../../../../modules/form/components";
import { validateSrc } from "../../../../../modules/form/validate/image";
import {
  useFormContext,
  Controller,
  useController,
  useFormState,
} from "react-hook-form";

import "../../../styles/featureImageCard.css";
import { FormProviderWrapper } from "../../../../../modules/form";
import { isSameFile } from "../../../../../utils/file";
import { PolarisProvider } from "../../../../../polaris";

const mainImagePrefix = `${prefix}:${getFieldRoot(formFieldMap, ["mainMedias"])}`;

export const mainImage_AltFieldPath = getFieldPath(formFieldMap, [
  "mainMedias",
  "image",
  "alt",
]);
export const mainImage_CaptionFieldPath = getFieldPath(formFieldMap, [
  "mainMedias",
  "image",
  "caption",
]);

export const mainImage_Srcs_SquareFieldPath = getFieldPath(formFieldMap, [
  "mainMedias",
  "image",
  "srcs",
  "square",
]);
export const mainImage_Srcs_LandscapeFieldPath = getFieldPath(formFieldMap, [
  "mainMedias",
  "image",
  "srcs",
  "landscape",
]);
export const mainImage_Srcs_PortraitFieldPath = getFieldPath(formFieldMap, [
  "mainMedias",
  "image",
  "srcs",
  "portrait",
]);


const modalId = `${mainImagePrefix}:${getFieldRoot(formFieldMap.mainMedias.image)}`;

const alignmentOptions = [
  { label: "Aucun", value: "none" },
  { label: "Centre", value: "center" },
  { label: "Haut", value: "top" },
  { label: "Bas", value: "bottom" },
  { label: "Gauche", value: "left" },
  { label: "Droit", value: "right" },
];

const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

export const Srcs = ({ name, label, helpText, id, control }) => {
  const collapsibleId = useId();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: "Cette source est requise" },
  });

  const [open, setOpen] = useState(Boolean(error));

  useEffect(() => {
    if (error) setOpen(true);
  }, [error]);

  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  const { trigger, setValue } = useFormContext(); // ⬅️ Ajoute ceci

  const handleDropZoneDrop = useCallback(
    async (_dropFiles, acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const newFile = acceptedFiles[0];

        const same = await isSameFile(value, newFile);

        if (same) {
          onChange(newFile);
        } else {
          setValue(name, newFile, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
        }

        setOpen(true);
      }
    },
    [name, trigger, value, onChange, setValue],
  );
  /*
  const handleDropZoneDrop = useCallback(
    (_dropFiles, acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles[0]);
        setOpen(true);
      }
    },
    [onChange],
  );*/

  const imagePreview = useMemo(() => {
    if (!value) return null;

    if (typeof value === "string") {
      return <Thumbnail alt="Image préchargée" size="small" source={value} />;
    }

    const isValidType = validImageTypes.includes(value.type);
    const previewSrc = isValidType
      ? window?.URL?.createObjectURL(value)
      : NoteIcon;

    return (
      <InlineStack gap={{ xs: "200" }}>
        <Thumbnail alt={value.name} size="small" source={previewSrc} />
        <Box
          paddingBlock="50"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "3rem",
          }}
        >
          <Text as="p" variant="bodySm">
            {value.name}
          </Text>
          <Text as="p" variant="bodySm" tone="subdued">
            {(value.size / 1024).toFixed(1)} Ko
          </Text>
        </Box>
      </InlineStack>
    );
  }, [value]);

  return (
    <Card>
      <InlineGrid columns={{ xs: "1fr auto" }} alignItems="center">
        <Text as="h2" variant="headingSm" fontWeight="semibold">
          {label}
        </Text>
        <Button
          aria-expanded={open}
          aria-controls={collapsibleId}
          icon={open ? ChevronDownIcon : ChevronRightIcon}
          onClick={toggleOpen}
          accessibilityLabel={
            open ? "Réduire le contenu" : "Afficher le contenu"
          }
          variant="plain"
        />
      </InlineGrid>

      <Collapsible
        id={collapsibleId}
        open={open}
        transition={{ duration: "100ms", timingFunction: "ease-in-out" }}
        expandOnPrint
      >
        <Box paddingBlockStart="400">
          <BlockStack gap="400">
            <DropZone
              error={error?.message}
              onDrop={handleDropZoneDrop}
              allowMultiple={false}
              variableHeight
              label="Téléversez une image"
              type="image"
            >
              {imagePreview || (
                <DropZone.FileUpload actionHint="Formats acceptés : .jpg, .png" />
              )}
            </DropZone>

            <TextField
              label="ou collez une URL"
              prefix={<Icon source={LinkIcon} />}
              name={name}
              id={id}
              value={
                typeof value === "string"
                  ? value || ""
                  : value instanceof File
                    ? value.name || ""
                    : ""
              }
              onChange={(v) => onChange(v === "" ? null : v)}
              error={error?.message}
              helpText={helpText}
              placeholder="https://..."
              autoComplete="off"
              clearButton
              onClearButtonClick={() => onChange(null)}
            />

            {value && (
              <Button
                icon={DeleteIcon}
                tone="critical"
                variant="plain"
                onClick={() => onChange(null)}
              >
                Supprimer l’image
              </Button>
            )}
          </BlockStack>
        </Box>
      </Collapsible>
    </Card>
  );
};

const requireImage = [
      mainImage_Srcs_LandscapeFieldPath,
      mainImage_Srcs_SquareFieldPath,
  mainImage_Srcs_PortraitFieldPath,




];

const globalFieldPaths = requireImage.concat([
  mainImage_AltFieldPath,
  mainImage_CaptionFieldPath,
]);

function getLabelFromPath(path) {
  if (path === mainImage_Srcs_LandscapeFieldPath) return "Paysage (source)";
  if (path === mainImage_Srcs_PortraitFieldPath) return "Portrait";
  if (path === mainImage_Srcs_SquareFieldPath) return "Carrée";
  return "Image";
}

function getHelpTextFromPath(path) {
  if (path === mainImage_Srcs_LandscapeFieldPath)
    return "3840x2160px recommandé (16:9)";
  if (path === mainImage_Srcs_PortraitFieldPath)
    return "2400×3000 px recommandé (4:5)";
  if (path === mainImage_Srcs_SquareFieldPath)
    return "2048×2048 px recommandé (1:1)";
  return "";
}

const ImageModalContent = memo(function ImageModalContent({
  open,
  onClose,
  onValid,
}) {
  const {
    control,
    setError,
    getValues,
    reset,
    handleSubmit: rhfHandleSubmit,
  } = useFormContext();
  const { errors, isSubmitting, isDirty, defaultValues, dirtyFields } =
    useFormState();

  const handleCancel = useCallback(() => {
    reset(defaultValues);
    onClose();
  }, [onClose, reset, defaultValues]);

  const handleSubmit = rhfHandleSubmit(async () => {
    const data = getValues();

    const changedSrcFields = requireImage.filter((path) => {
      const isDirty = _.get(dirtyFields, path) === true;
      return isDirty;
    });

    const errorsList =
      changedSrcFields.length > 0
        ? await validateSrc(changedSrcFields, data, validImageTypes)
        : [];

    if (errorsList.length > 0) {
      errorsList.forEach(({ path, error }) => {
        setError(path, { type: "manual", message: error });
      });
      return;
    }

    onValid(data);
  });

  return (
    <Modal id={modalId} open={open} onHide={onClose} variant="large">
      <TitleBar title="Ajouter une image principale">
        <button
          variant="primary"
          onClick={handleSubmit}
          loading={isSubmitting ? "" : undefined}
          disabled={!isDirty || isSubmitting || Object.keys(errors).length > 0}
        >
          Valider
        </button>
        <button
          tone="critical"
          onClick={handleCancel}
          disabled={!isDirty || isSubmitting}
        >
          Annuler
        </button>
      </TitleBar>

<PolarisProvider>

        <PolarisModal.Section>
          <BlockStack gap="600">
            <BannerForm />
            <InlineGrid columns={{ xs: 1, md: 2 }} gap="600">
              {/* Métadonnées */}
              <Card padding="500" rounded="2xl">
                <BlockStack gap="400">
                  <Text variant="headingSm" fontWeight="semibold">
                    Métadonnées
                  </Text>
                  <Controller
                    name={mainImage_AltFieldPath}
                    control={control}
                    rules={{ required: "Le texte alternatif est obligatoire" }}
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label="Texte alternatif (alt)"
                        placeholder="Ex : Présentation du nouveau MacBook Pro"
                        helpText="Utilisé pour l’accessibilité et le SEO"
                        error={error?.message}
                        autoComplete="off"
                        clearButton
                        onClearButtonClick={() => onChange("")}
                      />
                    )}
                  />

                  <Controller
                    name={mainImage_CaptionFieldPath}
                    control={control}
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label="Légende"
                        placeholder="Ex : Lancement Apple Park, octobre 2025"
                        helpText="Texte affiché sous l’image dans certains contextes"
                        error={error?.message}
                        multiline={2}
                        autoComplete="off"
                        clearButton
                        onClearButtonClick={() => onChange("")}
                      />
                    )}
                  />
                </BlockStack>
              </Card>

              {/* Variantes d'image */}
              <Card padding="500" rounded="2xl">
                <BlockStack gap="300">
                  <Text variant="headingSm" fontWeight="semibold">
                    Variantes d’image
                  </Text>

                  {requireImage.map((fieldPath) => (
                    <Srcs
                      key={fieldPath}
                      name={fieldPath}
                      id={`${mainImagePrefix}:${fieldPath}`}
                      label={getLabelFromPath(fieldPath)}
                      helpText={getHelpTextFromPath(fieldPath)}
                      control={control}
                    />
                  ))}
                </BlockStack>
              </Card>
            </InlineGrid>
          </BlockStack>
        </PolarisModal.Section>
      </PolarisProvider>
    </Modal>
  );
});

const ImageModal = ({ open: modalOpen, onClose }) => {
  const parent = useFormContext();

  const defaultValues = useMemo(() => {
    const obj = {};
    globalFieldPaths.forEach((path) => {
      _.set(obj, path, _.get(parent.getValues(), path));
    });
    return obj;
  }, [parent]);

  const onValid = async (data) => {
    globalFieldPaths.forEach((path) => {
      const value = _.get(data, path);
      parent.setValue(path, value, { shouldDirty: true });
    });
    onClose();
  };

  return (
    <FormProviderWrapper
      initialData={defaultValues}
      key={JSON.stringify(defaultValues)}
    >
      <ImageModalContent open={modalOpen} onClose={onClose} onValid={onValid} />
    </FormProviderWrapper>
  );
};

const MainImage = () => { 
  const { setValue, watch } = useFormContext();
  const shopify = useAppBridge();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setModalOpen(true);
    shopify.modal.show(modalId);
  }, [shopify]);

  const handleModalClose = useCallback(() => {
    shopify.modal.hide(modalId);
    setModalOpen(false);
  }, [shopify]);


  const file = watch(mainImage_Srcs_SquareFieldPath);

  const imagePreview = useMemo(() => {
    if (!file) return null;


       return (
        <button
          type="button"
          onClick={handleModalOpen}
          className="_ImageContainerClickable_t82h6_28"
        >
          <div className="_ImageContainerWrapper_t82h6_5">
            <img className="_ImageElement_t82h6_40" src={typeof file === "string" ? file : window?.URL?.createObjectURL(file)} alt="" />
          </div>
        </button>
      );


  }, [file]);

  const handleDeleteImage = useCallback(() => {
    globalFieldPaths.forEach((path) => {
      setValue(path, "");
    });
  }, [setValue]);

  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  return (
    
    <Card>
      <BlockStack gap={{ xs: "400", sm: "500" }} inlineAlign="stretch">
        <InlineStack wrap align="space-between" direction={{ xs: "row" }}>
          <Text as="h2" variant="headingSm" fontWeight="semibold">
            Image Principale
          </Text>

          {file && (
            <Popover
              active={active}
              autofocusTarget="first-node"
              onClose={toggleActive}
              activator={
                <Button
                  onClick={toggleActive}
                  disclosure
                  variant="plain"
                  size="medium"
                  textAlign="center"
                  icon={""}
                >
                  <Text as="span" variant="bodySm" fontWeight="regular">
                    Modifier
                  </Text>
                </Button>
              }
            >
              <Popover.Pane>
                <ActionList
                  actionRole="menuitem"
                  items={[
                    {
                      content: "Modifier l'image",
                      onAction: () => {
                        toggleActive();
                        handleModalOpen();
                      },
                    },
                    {
                      content: "Supprimer",
                      destructive: true,
                      onAction: handleDeleteImage,
                    },
                  ]}
                />
              </Popover.Pane>
            </Popover>
          )}
        </InlineStack>

        <div
          className="Polaris-DropZone Polaris-DropZone--hasOutline Polaris-DropZone--sizeLarge"
          onClick={handleModalOpen}
        >
          <div className="Polaris-DropZone__Container">
            {imagePreview || (
              <div className="Polaris-DropZone-FileUpload Polaris-DropZone-FileUpload--large">
                <BlockStack align="center">
                  <Button
                    ariaControls={modalId}
                    ariaExpanded={modalOpen}
                    variant="secondary"
                    size="medium"
                    textAlign="center"
                    onClick={handleModalOpen}
                  >
                    <Text as="span" variant="bodySm" fontWeight="medium">
                      Ajouter une image
                    </Text>
                  </Button>
                </BlockStack>
              </div>
            )}
          </div>
        </div>
      </BlockStack>

      <ImageModal open={modalOpen} onClose={handleModalClose} />
    </Card>





  );
};

export default MainImage;
