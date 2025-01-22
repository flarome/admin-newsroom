import React, { useState, useMemo, useEffect } from "react";

// uuid
import { v4 as uuid } from "uuid";

// Lodash
import * as lodash from "lodash";
const { isEqual } = lodash;

// app bridge
import { Modal, TitleBar, useAppBridge } from "@shopify/app-bridge-react";

// Polaris
import {
  Scrollable,
  DescriptionList,
  Card,
  Select,
  ChoiceList,
  Button,
  BlockStack,
  InlineStack,
  Text,
  Layout as LayoutPolaris,
  LegacyCard,
  FormLayout,
  Page,
} from "@shopify/polaris";

import { EditIcon } from "@shopify/polaris-icons";

// data
import { layout as initialLayoutContent } from "../../../modules/initialState";
import { layout as finalLayoutContent } from "../../../modules/finalState";

// local data
const themeOptions = [
  { label: "Blanc", value: "Light" },
  { label: "Noir", value: "Dark" },
];
const booleanOptions = [
  { label: "Vrai", value: "true" },
  { label: "Faux", value: "false" },
];

const optionModalName = "modal";
const optionBannerName = "banner_full";

const optionHeaderName = "header";
const optionHeaderScrimName = "header_scrim";

const optionNavName = "nav";
const optionNavScrimName = "nav_scrim";

const optionFooterName = "footer";
const optionFooterScrimName = "footer_scrim";

const optionBodyName = "body";
const optionLatestName = "latest";

const themePlaceholder = "Sélectionner un thème";
const modalId = "layout-modal" + uuid();

const SelectOption = ({
  setValue,
  value,
  label,
  options,
  helpText,
  placeholder,
}) => {
  return (
    <FormLayout>
      <Select
        label={label}
        options={options}
        onChange={(value) => setValue(value)}
        value={value}
        helpText={helpText}
        placeholder={placeholder}
      />
    </FormLayout>
  );
};

const Option = ({
  setValue,
  value,
  initialValue,
  choices,
  title,
}) => {
  return (
    <FormLayout>
      <InlineStack
        align="space-between"
        blockAlign="center"
        wrap
        direction={{ xs: "row" }}
        gap={{ xs: "100" }}
      >
        <label htmlFor="modal" className="_MetaobjectFieldLabel_zhfgm_1">
          <Text as="p" variant="bodyMd">
            {title}
          </Text>
        </label>

        {value !== null && (
          <div className="_ClearButton_o2sq4_4">
            <Button
              variant="plain"
              size="medium"
              textAlign="center"
              onClick={() => setValue(initialValue)}
            >
              <Text as="span" variant="bodyMd" fontWeight="regular">
                Effacer
              </Text>
            </Button>
          </div>
        )}
      </InlineStack>

      <div className="_spacingContainer_1qi64_1">
        <ChoiceList
          name={title}
          title={title}
          titleHidden
          choices={choices}
          selected={value === null ? [] : [String(value)]} // Affiche la sélection si existante
          onChange={(value) => setValue(value[0] === "true")} // Gère le changement
        />
      </div>
    </FormLayout>
  );
};

const ModalLayout = ({ setLayout, layout }) => {
  const shopify = useAppBridge();

  // Synchronisation de fields avec layout via useEffect
  const [fields, setFields] = useState(layout);

  useEffect(() => {
    setFields(layout); // Met à jour fields chaque fois que layout change
  }, [layout]); // Le tableau de dépendances permet de déclencher l'effet seulement lorsque layout change

  const handleChangeFields = (value, id) => {
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));
  };

  const isModified = useMemo(() => {
    return !isEqual(fields, layout);
  }, [fields, layout]);

  return (
    <Modal id={modalId} variant="large">
      <TitleBar title="Ajouter une mise en page">
        <button
          disabled={!isModified}
          variant="primary"
          onClick={() => {
            shopify.modal.hide(modalId); // Ferme le modal avec l'ID spécifié
            setLayout(fields); // Met à jour le layout avec les champs
          }}
        >
          Valider
        </button>

        <button
          disabled={!isModified}
          tone="critical"
          onClick={() => {
            shopify.modal.hide(modalId); // Ferme le modal avec l'ID spécifié
            setFields(layout); // Met à jour le layout avec les champs
          }}
        >
          Annuler
        </button>
      </TitleBar>

      <Page>
        <LayoutPolaris>
          <LayoutPolaris.Section variant="oneThird">
            <LegacyCard title="Présentation Générale">
              <LegacyCard.Section>
                <Option
                  setValue={(content) =>
                    handleChangeFields(content, optionModalName)
                  }
                  value={fields[optionModalName]}
                  initialValue={initialLayoutContent?.[optionModalName]}
                  choices={booleanOptions}
                  title="Sur la page newsroom, afficher une modal ?"
                />
              </LegacyCard.Section>
            </LegacyCard>
          </LayoutPolaris.Section>
          <LayoutPolaris.Section variant="oneThird">
          <LegacyCard title="Page">
              <LegacyCard.Section>
                <BlockStack gap={{ xs: "400" }}>
                  <SelectOption
                    setValue={(content) =>
                      handleChangeFields(content, optionBodyName)
                    }
                    value={fields[optionBodyName]}
                    label="Arrière plan de la page"
                    options={themeOptions}
                    helpText={
                      "Default: " + finalLayoutContent[optionBodyName]
                    }
                    placeholder={themePlaceholder}
                  />
                </BlockStack>
              </LegacyCard.Section>
            </LegacyCard>
          </LayoutPolaris.Section>
          <LayoutPolaris.Section variant="oneThird">
            <LegacyCard title="Disposition des articles mis en avant">
              <LegacyCard.Section>
              <SelectOption
                    setValue={(content) =>
                      handleChangeFields(content, optionLatestName)
                    }
                    value={fields[optionLatestName]}
                    label="Dispoition des articles mis en avant"
                    options={[
                      { label: "Le même blog", value: "blog" },
                      { label: "Le même tag", value: "tag" },
                    ]}
                    helpText={
                      "Default: " + finalLayoutContent[optionLatestName]
                    }
                    placeholder={'Sélectionner une catégorie'}
                  />
            
              </LegacyCard.Section>
            </LegacyCard>
          </LayoutPolaris.Section>
          <LayoutPolaris.Section variant="oneThird">
            <LegacyCard title="Entête">
              <LegacyCard.Section>
                <BlockStack gap={{ xs: "400" }}>
                  <SelectOption
                    setValue={(content) =>
                      handleChangeFields(content, optionHeaderName)
                    }
                    value={fields[optionHeaderName]}
                    label="Arrière plan de l'entête"
                    options={themeOptions}
                    helpText={
                      "Default: " + finalLayoutContent[optionHeaderName]
                    }
                    placeholder={themePlaceholder}
                  />
                  <Option
                    setValue={(content) =>
                      handleChangeFields(content, optionHeaderScrimName)
                    }
                    value={fields[optionHeaderScrimName]}
                    initialValue={initialLayoutContent?.[optionHeaderScrimName]}
                    choices={booleanOptions}
                    title="Header scrim ?"
                  />
                </BlockStack>
              </LegacyCard.Section>
            </LegacyCard>
          </LayoutPolaris.Section>
          <LayoutPolaris.Section variant="oneThird">
            <LegacyCard title="Navigation Locale">
              <LegacyCard.Section>
                <BlockStack gap={{ xs: "400" }}>
                  <SelectOption
                    setValue={(content) =>
                      handleChangeFields(content, optionNavName)
                    }
                    value={fields[optionNavName]}
                    label="Arrière plan de le la navigation locale"
                    options={themeOptions}
                    helpText={"Default: " + finalLayoutContent[optionNavName]}
                    placeholder={themePlaceholder}
                  />
                  <Option
                    setValue={(content) =>
                      handleChangeFields(content, optionNavScrimName)
                    }
                    value={fields[optionNavScrimName]}
                    initialValue={initialLayoutContent?.[optionNavScrimName]}
                    choices={booleanOptions}
                    title="Nav scrim ?"
                  />
                </BlockStack>
              </LegacyCard.Section>
            </LegacyCard>
          </LayoutPolaris.Section>
          <LayoutPolaris.Section variant="oneThird">
            <LegacyCard title="Pied de Page">
              <LegacyCard.Section>
                <BlockStack gap={{ xs: "400" }}>
                  <SelectOption
                    setValue={(content) =>
                      handleChangeFields(content, optionFooterName)
                    }
                    value={fields[optionFooterName]}
                    label="Arrière plan du pied de page"
                    options={themeOptions}
                    helpText={
                      "Default: " + finalLayoutContent[optionFooterName]
                    }
                    placeholder={themePlaceholder}
                  />
                  <Option
                    setValue={(content) =>
                      handleChangeFields(content, optionFooterScrimName)
                    }
                    value={fields[optionFooterScrimName]}
                    initialValue={initialLayoutContent?.[optionFooterScrimName]}
                    choices={booleanOptions}
                    title="Footer scrim ?"
                  />
                </BlockStack>
              </LegacyCard.Section>
            </LegacyCard>
          </LayoutPolaris.Section>
    
        </LayoutPolaris>
      </Page>
    </Modal>
  );
};



const Layout = ({ setLayout, layout }) => {
  const shopify = useAppBridge();

  return (
    <Card>
      <BlockStack gap={{ xs: "200" }}>
        <InlineStack align="space-between" wrap direction={{ xs: "row" }}>
          <Text as="h2" variant="headingSm" fontWeight="semibold">
            Mise en page
          </Text>

          <span>
            <Button
              onClick={() => shopify.modal.show(modalId)}
              variant="tertiary"
              size="medium"
              textAlign="center"
              icon={EditIcon}
              accessibilityLabel="Modifier la mise en page"
            ></Button>
          </span>
        </InlineStack>

        <BlockStack gap={{ xs: "200" }}>
          <Scrollable
            style={{ height: "70px" }}
            scrollbarGutter="stable"
            scrollbarWidth="thin"
          >
            <DescriptionList
              gap="tight"
              items={Object.keys(finalLayoutContent).map((key) => ({
                term: key,
                description: layout[key]
                  ? String(layout[key])
                  : String(finalLayoutContent[key]),
              }))}
            />
          </Scrollable>
          <ModalLayout setLayout={setLayout} layout={layout} />
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default Layout;
