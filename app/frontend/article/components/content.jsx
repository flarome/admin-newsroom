import { useController, useFormContext } from "react-hook-form";
import { FormLayout, MediaCard, Text } from "@polaris/npm";
import { useAppBridge } from "@shopify/app-bridge-react";
import { memo, useCallback, useRef, useState } from "react";
//import { Modal } from "../../../modules/VPE";

import { Modal } from "../../../VPE";
// import Editor from "../../../VPE/editor";
import { useArticle } from "../context/articleContext";
import { sections as bodySections } from "../../../data/article/input/body";
import { form as FieldsMap } from "../../../data/article/config/fieldMap";
import { getFieldPath, getFieldRoot } from "../../../utils/getFieldPath";
import { prefix } from "../config/ids";
export const contentFieldPath = FieldsMap.content;
export const settingsFieldPath = FieldsMap.settings;

export const bodyFieldPath = getFieldPath(FieldsMap, ["content", "body"]);
export const headerFieldPath = getFieldPath(FieldsMap, ["content", "header"]);
import { clsx } from "clsx";
import EditorStyles from "../styles/Editor.module.css";
import { SETTINGS_CATALOG } from "../../../VPE/__test__/data";

const sectionsCatalog = {
  body: { label: "MON BODY", sections: bodySections },
};

const settingsCatalog = SETTINGS_CATALOG;

const modalId = `${prefix}:${getFieldRoot(FieldsMap, ["content"])}:modal`;

const EmbeddedContentInnert = () => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  const getInputRef = useCallback(() => {
    return inputRef.current;
  }, []);

  const handleOnFocus = (event) => {
    setFocus(true);
  };

  function handleClick(event) {
    // For TextFields used with Combobox, focus needs to be set again even
    // if the TextField is already focused to trigger the logic to open the
    // Combobox activator

    if (false || focus) {
      return;
    }
    getInputRef()?.focus();
  }

  function handleClickChild(event) {
    if (true) {
      event.stopPropagation();
    }
    if (false || focus) {
      return;
    }
    setFocus(true);
    getInputRef()?.focus();
  }

  function handleOnBlur(event) {
    setFocus(false);
  }

  return (
    <FormLayout>
      <div className={EditorStyles["RichTextEditor"]}>
        <Text as="span" visuallyHidden variant="bodySm">
          Éditeur de texte enrichi
        </Text>

        <div>
          <div className="Polaris-Labelled__LabelWrapper">
            <div className="Polaris-Label">
              <label
                id="article-bodyLabel"
                htmlFor="article-body"
                className="Polaris-Label__Text"
              >
                <span className="Polaris-Text--root Polaris-Text--bodyMd">
                  Contenu
                </span>
              </label>
            </div>
          </div>

          <div
            ref={inputRef}
            onBlur={handleOnBlur}
            onClick={handleClick}
            onFocus={handleOnFocus}
            className={clsx(
              EditorStyles["Editor"],
              focus && EditorStyles["Editor-focused"],
            )}
          >
            <div onClick={handleClickChild}>
              {/*  <Editor editor={{onChange: () => ""}} ui={{ mode: "EMBEDDED", minHeight: "200px", maxHeight: "430px" }} /> */}
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
};

export const EmbeddedContent = memo(EmbeddedContentInnert);

const Content = () => {
  const { control } = useFormContext();
  const shopify = useAppBridge();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    shopify.modal.show(modalId);
  };

  const closeModal = () => {
    setModalOpen(false);
    shopify.modal.hide(modalId);
  };

  // 🔧 Récupère les champs manuellement avec useController
  const { field: bodyField } = useController({ control, name: bodyFieldPath });
  const { field: headerField } = useController({
    control,
    name: headerFieldPath,
  });
  const { field: settingsField } = useController({
    control,
    name: settingsFieldPath,
  });

  return (
    <div>
      <MediaCard
        title="Présentation de l'article"
        primaryAction={{
          content: "🖌️ Éditer l'article",
          onAction: openModal,
          ariaControls: modalId,
          ariaExpanded: modalOpen,
        }}
        description="Personnalisez l’aspect complet de votre article, de l’en-tête au contenu principal."
        size="medium"
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://burst.shopiffycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
        />
      </MediaCard>

      <Modal
        closeModal={closeModal}
        open={modalOpen}
        modalId={modalId}
        root={{
          data: {
    content: bodyField.value,
          settings: settingsField.value,
          },
          config: {
                settings: {
        catalog: settingsCatalog
    },
    content: {
        catalog: sectionsCatalog
    },
          }
      
        }}

          onChange={async (data) => {
    console.log("[CONTENT] ONCHANGE CALLED", data);


      // Simule un délai de traitement async (remplace par ton vrai code si besoin)
    //  await new Promise((resolve) => setTimeout(resolve, 30000));
/*
      const content = data.content;
      bodyField.onChange(content.body || []);
      headerField.onChange(content.header || []);

      const settings = data.settings;
      settingsField.onChange(settings);*/

 
  }}

  
      />
    </div>
  );
};

export default Content;
