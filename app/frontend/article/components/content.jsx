import { useController, useFormContext } from "react-hook-form";
import { MediaCard } from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useState } from "react";
import { Modal } from "../../../modules/VPE";
import { useArticle } from "../context/articleContext";
import { sections as bodySections } from '../../../data/article/input/body'
import { form as FieldsMap } from "../../../data/article/config/fieldMap";
import { getFieldPath, getFieldRoot } from "../../../utils/getFieldPath";
import { prefix } from "../config/ids";
export const contentFieldPath = FieldsMap.content;
export const settingsFieldPath = FieldsMap.settings;

export const bodyFieldPath = getFieldPath(FieldsMap, ["content", "body"]);
export const headerFieldPath = getFieldPath(FieldsMap, ["content", "header"]);

const sectionsCatalog = {
  body: { label: "MON BODY", sections: bodySections },
};

const settingsCatalog = [];

const modalId = `${prefix}:${getFieldRoot(FieldsMap, ["content"])}:modal`;

const Content = () => {
  const { control } = useFormContext();
  const { themes } = useArticle();
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
        sections={{
          [FieldsMap.content.body]: bodyField.value,
          [FieldsMap.content.header]: headerField.value,
        }}
        settings={settingsField.value}
        sectionsCatalog={sectionsCatalog}
        settingsCatalog={settingsCatalog}
        onSectionsChange={(content) => {
          bodyField.onChange(content.body || []);
          headerField.onChange(content.header || []);
        }}
        onSettingsChange={(newSettings) => settingsField.onChange(newSettings)}
        themes={themes.nodes}
      />
    </div>
  );
};

export default Content;
