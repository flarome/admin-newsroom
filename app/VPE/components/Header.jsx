import React, { useState, useMemo, useEffect } from "react";
import crypto from "node:crypto";
import {
  TopBar,
  Button,
  ButtonGroup,
  Box,
  Icon,
  Tooltip,
  Spinner,
  SkeletonBodyText,
  Modal,
  Toast,
  Banner,
  Divider,
  Popover,
  Card,
  TextField,
  Text,
  InlineStack,
  FormLayout,
  ProgressBar,
  Select,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ClipboardIcon,
  DesktopIcon,
  EditIcon,
  MenuHorizontalIcon,
  MobileIcon,
  PageDownIcon,
  RedoIcon,
  NoteIcon,
  SidekickIcon,
  UndoIcon,
  ViewportWideIcon,
} from "@shopify/polaris-icons";

import { useAppBridge } from "@shopify/app-bridge-react";

import { usePreview } from "../context/PreviewContext";

import loadable from "@loadable/component";
import { useDesignSystem } from "../context/DesignSystemContext";
import { useArticle } from "../../editors/article/context/articleContext";
const ReactJson = loadable(() => import("react-json-view"), {
  fallback: (
    <div style={{ padding: 20, textAlign: "center" }}>
      <Spinner accessibilityLabel="Chargement de l’éditeur…" size="small" />
    </div>
  ),
});

export const JsonEditor = ({}) => {
  const content = "";
  const setContent = () => "";

  const shopify = useAppBridge();

  const [modalOpen, setModalOpen] = useState(false);
  const [localContent, setLocalContent] = useState(content);

  // Pour le popover de collage
  const [popoverActive, setPopoverActive] = useState(false);
  const [pasteInput, setPasteInput] = useState("");

  const handlePasteJson = () => {
    try {
      const parsed = JSON.parse(pasteInput);
      setLocalContent(parsed);
      setPopoverActive(false);
      setPasteInput("");
      shopify.toast.show("JSON collé et appliqué !");
    } catch (e) {
      shopify.toast.show("Erreur : JSON non valide", { isError: true });
    }
  };

  // Download action
  const downloadJson = () => {
    const data = JSON.stringify(localContent, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "body.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    shopify.toast.show("Fichier téléchargé !");
  };

  // Copy action
  const copyAllJson = () => {
    const el = document.createElement("textarea");
    el.value = JSON.stringify(localContent, null, 2);
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    shopify.toast.show("JSON copié dans le presse-papier !");
  };

  return (
    <>
      {/* Edit Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--truncate_1aegu"
        style={{
          "--osui_plain-action-font-weight": "var(--p-font-weight-regular)",
        }}
      >
        <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
          <span className="Online-Store-UI-PlainAction__PrefixItem_bid0h">
            <Box width="20">
              <Icon source={EditIcon} tone="legacy-inherit" />
            </Box>
          </span>
        </div>
      </button>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Modifier le code JSON"
        large
        footer={
          <InlineStack align="space-between" blockAlign="center">
            {/* Toolbar Download + Copy */}
            <InlineStack gap="400">
              <Button
                icon={PageDownIcon}
                variant="monochromePlain"
                onClick={downloadJson}
              >
                Télécharger
              </Button>
              <Button
                icon={NoteIcon}
                variant="monochromePlain"
                onClick={copyAllJson}
              >
                Copier
              </Button>

              <Popover
                fluidContent={true}
                active={popoverActive}
                autofocusTarget="first-node"
                preferredAlignment="left"
                ariaHaspopup={false}
                preferInputActivator={false}
                sectioned
                onClose={() => {
                  setPopoverActive(false);
                  setPasteInput("");
                }}
                activator={
                  <Button
                    icon={ClipboardIcon}
                    variant="monochromePlain"
                    onClick={() => setPopoverActive(true)}
                  >
                    Coller JSON
                  </Button>
                }
              >
                <FormLayout>
                  <TextField
                    label="Coller du JSON ici"
                    labelHidden
                    value={pasteInput}
                    onChange={setPasteInput}
                    multiline={6}
                    autoComplete="off"
                    placeholder='{"clé": "valeur"}'
                  />
                  <Box display="flex" gap="200" marginTop="300">
                    <Button
                      variant="primary"
                      size="slim"
                      onClick={handlePasteJson}
                    >
                      Valider
                    </Button>
                    <Button
                      size="slim"
                      onClick={() => {
                        setPopoverActive(false);
                        setPasteInput("");
                      }}
                    >
                      Annuler
                    </Button>
                  </Box>
                </FormLayout>
              </Popover>
            </InlineStack>

            {/* Validation Buttons */}
            <ButtonGroup>
              <Button
                tone="critical"
                onClick={() => {
                  setLocalContent(content);
                  setModalOpen(false);
                }}
              >
                Annuler
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setContent(localContent);
                  setModalOpen(false);
                  shopify.toast.show("Modifications enregistrées !");
                }}
              >
                Valider
              </Button>
            </ButtonGroup>
          </InlineStack>
        }
      >
        <Modal.Section>
          <Banner status="info" hideIcon>
            Vous pouvez éditer, copier ou télécharger le JSON ci-dessous.
            <br />
            <Text as="span" fontWeight="medium">
              Attention : les modifications avancées peuvent impacter la
              structure de votre contenu.
            </Text>
          </Banner>
          <Divider />
          <Box
            padding="400"
            background="bg-surface-secondary"
            borderRadius="200"
          >
            <Card>
              <ReactJson
                src={localContent}
                onEdit={(e) => setLocalContent(e.updated_src)}
                onAdd={(e) => setLocalContent(e.updated_src)}
                onDelete={(e) => setLocalContent(e.updated_src)}
                theme="rjv-default"
                collapsed={false}
                enableClipboard={false}
                displayDataTypes={false}
                displayObjectSize={false}
                style={{ fontSize: 14, minHeight: 250 }}
              />
            </Card>
          </Box>
        </Modal.Section>
      </Modal>
    </>
  );
};

export default function Header({}) {
  const undo = () => "";
  const redo = () => "";
  const canUndo = false;
  const canRedo = false;
  const simplified = "";

  const { mode, setMode } = usePreview();
  const { progress, notifyAll, localeDataModified, themes } = useDesignSystem();


  const [themeID, setThemeId] = useState(themes.find((theme) => theme.role === "MAIN").id);


  const optionsThemes = (themes || []).map((theme) => ({
    label: theme.name,
    value: theme.id,
  }));
  
  // Génère une key unique à chaque fois que tu veux “reset”
  const providerKey = useMemo(
    () => crypto.randomUUID(),
    [simplified], // ou toutes les variables à surveiller pour un reset complet
  );


  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      await notifyAll();
      // Optionnel : show “success” message
    } catch (e) {
      // Optionnel : show error
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="Online-Store-UI-TopBar_3tnbt Online-Store-UI-TopBar--usesBottomSheet_qvlkc">
        <div className="Online-Store-UI-TopBar-LayoutGroup_1txj6 Online-Store-UI-TopBar-LayoutGroup--shrink_mtbh8 Online-Store-UI-TopBar-LayoutGroup--spacingBase_l0815 Online-Store-UI-TopBar-LayoutGroup--usesBottomSheet_16ooh">
          <div className="Online-Store-UI-TopBar-ExitAction__ExitActionWrapper_1qbd5 Online-Store-UI-TopBar-ExitAction--animated_9m6nk">
            <a
              href="https://admin.shopify.com/store/flarome-api/themes"
              data-polaris-unstyled="true"
              className="Online-Store-UI-TopBar-ExitAction_143bg"
              aria-label="Sortie"
            >
              <div className="Online-Store-UI-TopBar-ExitAction__Content_qn7vv">
                <div className="Online-Store-UI-TopBar-ExitAction__IconWrapper_15fft">
                  <span className="Online-Store-UI-LegacyIconOSUI__Icon_1a5o2">
                    <span
                      aria-hidden="true"
                      className="Online-Store-UI-LegacyIconOSUI__SvgSmScreen_a0o3a"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="1 1 18 18"
                        focusable="false"
                      >
                        <path
                          fill="#4A4A4A"
                          fillRule="evenodd"
                          d="M10.177 3H14.83c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v5.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.365.03-.81.03-1.345.03H9.963c-.196 0-.347 0-.483-.013a2.75 2.75 0 0 1-2.467-2.467C7 14.134 7 13.983 7 13.787v-.037a.75.75 0 0 1 1.5 0c0 .25 0 .32.006.373a1.25 1.25 0 0 0 1.121 1.121c.052.005.123.006.373.006h4.8c.572 0 .957 0 1.252-.025.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.546c.046-.091.088-.228.111-.515.024-.296.025-.68.025-1.253V6.95c0-.572 0-.957-.025-1.252-.023-.288-.065-.425-.111-.515a1.25 1.25 0 0 0-.547-.547l.339-.663-.338.663c-.091-.046-.228-.088-.516-.111-.295-.024-.68-.025-1.252-.025h-4.55c-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744a.75.75 0 0 1-1.5 0v-.073c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161C9.482 3 9.784 3 10.178 3ZM4.56 10.5l.97.97a.75.75 0 0 1-1.061 1.06l-2.25-2.25a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 1 1 1.06 1.06L4.56 9h6.69a.75.75 0 0 1 0 1.5H4.56Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span
                      aria-hidden="true"
                      className="Online-Store-UI-LegacyIconOSUI__SvgLgScreen_a53ll"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 20"
                        focusable="false"
                      >
                        <path
                          fill="#4A4A4A"
                          fillRule="evenodd"
                          d="M10.177 3H14.83c.535 0 .98 0 1.345.03.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073.03.365.03.81.03 1.345v5.91c0 .535 0 .98-.03 1.345-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27-.365.03-.81.03-1.345.03H9.963c-.196 0-.347 0-.483-.013a2.75 2.75 0 0 1-2.467-2.467C7 14.134 7 13.983 7 13.787v-.037a.75.75 0 0 1 1.5 0c0 .25 0 .32.006.373a1.25 1.25 0 0 0 1.121 1.121c.052.005.123.006.373.006h4.8c.572 0 .957 0 1.252-.025.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.546c.046-.091.088-.228.111-.515.024-.296.025-.68.025-1.253V6.95c0-.572 0-.957-.025-1.252-.023-.288-.065-.425-.111-.515a1.25 1.25 0 0 0-.547-.547l.339-.663-.338.663c-.091-.046-.228-.088-.516-.111-.295-.024-.68-.025-1.252-.025h-4.55c-.5 0-.641.004-.744.024a1.25 1.25 0 0 0-.982.982c-.02.103-.024.243-.024.744a.75.75 0 0 1-1.5 0v-.073c0-.393 0-.696.053-.963a2.75 2.75 0 0 1 2.16-2.161C9.482 3 9.784 3 10.178 3ZM4.56 10.5l.97.97a.75.75 0 0 1-1.061 1.06l-2.25-2.25a.75.75 0 0 1 0-1.06l2.25-2.25a.75.75 0 1 1 1.06 1.06L4.56 9h6.69a.75.75 0 0 1 0 1.5H4.56Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="Online-Store-UI-TopBar-ExitAction__Label_p8gsq">
                  <span className="Polaris-Text--root Polaris-Text--bodyMd">
                    Sortie
                  </span>
                </div>
              </div>
            </a>
            <div className="Online-Store-UI-TopBar-ExitAction__ChildrenWrapper_11ibn">
              <div className="Online-Store-UI-ExitAction-Title_1w1hy">
                <span className="Polaris-Text--root Polaris-Text--bodyMd">
                  Dawn
                </span>
              </div>
            </div>
          </div>
          <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
            <div className="_Badges_1teqy_1">
              <span className="Polaris-Badge Polaris-Badge--toneInfo">
                <span className="Polaris-Text--root Polaris-Text--visuallyHidden">
                  Statut de la boutique en ligne&nbsp;:
                </span>
                <span className="Polaris-Text--root Polaris-Text--bodySm">
                  Brouillon
                </span>
              </span>
            </div>
          </div>

          <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
            <Select
              options={optionsThemes}
              onChange={setThemeId}
              value={themeID}
              label="Thème:"
              labelInline
            />
          </div>

          <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
            <div className="_Menu_unrhk_49">
              <div>
                <button
                  className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--iconOnly_vgqbv"
                  aria-label="Afficher les actions pour Dawn"
                  aria-disabled="false"
                  type="button"
                  aria-expanded="false"
                  tabIndex={0}
                  aria-controls=":r2:"
                  aria-owns=":r2:"
                  data-state="closed"
                  style={{
                    "--osui_plain-action-font-weight":
                      "var(--p-font-weight-regular)",
                  }}
                >
                  <div className="Online-Store-UI-PlainAction__Interior_9sack">
                    <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                      <Icon source={MenuHorizontalIcon} tone="legacy-inherit" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Online-Store-UI-TopBar-LayoutGroup_1txj6 Online-Store-UI-TopBar-LayoutGroup--shrink_mtbh8 Online-Store-UI-TopBar-LayoutGroup--alignRight_9yh95 Online-Store-UI-TopBar-LayoutGroup__spacingExtra--tight_1ywc4 Online-Store-UI-TopBar-LayoutGroup--usesBottomSheet_16ooh">
          <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
            <Box maxWidth="300">
              <JsonEditor key={providerKey} />
            </Box>
          </div>
        </div>

        <div className="Online-Store-UI-TopBar-LayoutGroup_1txj6 Online-Store-UI-TopBar-LayoutGroup--spacingBase_l0815 Online-Store-UI-TopBar-LayoutGroup--paddedRight_175mb Online-Store-UI-TopBar-LayoutGroup--usesBottomSheet_16ooh">
          <div className="Online-Store-UI-TopBar-LayoutGroup_1txj6 Online-Store-UI-TopBar-LayoutGroup__spacingExtra--tight_1ywc4 Online-Store-UI-TopBar-LayoutGroup--usesBottomSheet_16ooh">
            <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
              <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
                <span className>
                  <button
                    className="Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c Online-Store-UI-PlainAction--pressed_htthh Online-Store-UI-PlainAction--iconOnly_vgqbv"
                    aria-label="Désactiver l’inspecteur"
                    aria-disabled="false"
                    type="button"
                    aria-pressed="true"
                    tabIndex={0}
                    aria-describedby=":rb:"
                    data-polaris-tooltip-activator="true"
                    style={{
                      "--osui_plain-action-font-weight":
                        "var(--p-font-weight-regular)",
                    }}
                  >
                    <div className="Online-Store-UI-PlainAction__Interior_9sack">
                      <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                        <span className="Online-Store-UI-LegacyIconOSUI__Icon_1a5o2 Online-Store-UI-LegacyIconOSUI--toneInherit_ryto1">
                          <span
                            aria-hidden="true"
                            className="Online-Store-UI-LegacyIconOSUI__SvgSmScreen_a0o3a"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="1 1 18 18"
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.25 5C3.25 4.0335 4.0335 3.25 5 3.25H5.5C5.91421 3.25 6.25 3.58579 6.25 4C6.25 4.41421 5.91421 4.75 5.5 4.75H5C4.86193 4.75 4.75 4.86193 4.75 5V5.5C4.75 5.91421 4.41421 6.25 4 6.25C3.58579 6.25 3.25 5.91421 3.25 5.5V5ZM3.25 15C3.25 15.9665 4.0335 16.75 5 16.75H5.5C5.91421 16.75 6.25 16.4142 6.25 16C6.25 15.5858 5.91421 15.25 5.5 15.25H5C4.86193 15.25 4.75 15.1381 4.75 15V14.5C4.75 14.0858 4.41421 13.75 4 13.75C3.58579 13.75 3.25 14.0858 3.25 14.5V15ZM15 3.25C15.9665 3.25 16.75 4.0335 16.75 5V5.5C16.75 5.91421 16.4142 6.25 16 6.25C15.5858 6.25 15.25 5.91421 15.25 5.5V5C15.25 4.86193 15.1381 4.75 15 4.75H14.5C14.0858 4.75 13.75 4.41421 13.75 4C13.75 3.58579 14.0858 3.25 14.5 3.25H15ZM4 8.25C4.41421 8.25 4.75 8.58579 4.75 9V11C4.75 11.4142 4.41421 11.75 4 11.75C3.58579 11.75 3.25 11.4142 3.25 11V9C3.25 8.58579 3.58579 8.25 4 8.25ZM11.75 4C11.75 4.41421 11.4142 4.75 11 4.75L9 4.75C8.58579 4.75 8.25 4.41421 8.25 4C8.25 3.58579 8.58579 3.25 9 3.25H11C11.4142 3.25 11.75 3.58579 11.75 4ZM10.2438 9.04278C9.97142 8.94665 9.66806 9.01546 9.46383 9.21969C9.2596 9.42392 9.19079 9.72728 9.28692 9.99964L11.4082 16.01C11.494 16.253 11.6984 16.4349 11.9496 16.4918C12.2008 16.5488 12.4637 16.4729 12.6458 16.2908L13.8832 15.0533L15.2975 16.4675C15.5904 16.7604 16.0652 16.7604 16.3581 16.4675L16.7117 16.114C17.0046 15.8211 17.0046 15.3462 16.7117 15.0533L15.2975 13.6391L16.5349 12.4017C16.717 12.2195 16.793 11.9566 16.736 11.7054C16.679 11.4542 16.4971 11.2498 16.2542 11.1641L10.2438 9.04278Z"
                              />
                            </svg>
                          </span>
                          <span
                            aria-hidden="true"
                            className="Online-Store-UI-LegacyIconOSUI__SvgLgScreen_a53ll"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                              focusable="false"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.25 5C3.25 4.0335 4.0335 3.25 5 3.25H5.5C5.91421 3.25 6.25 3.58579 6.25 4C6.25 4.41421 5.91421 4.75 5.5 4.75H5C4.86193 4.75 4.75 4.86193 4.75 5V5.5C4.75 5.91421 4.41421 6.25 4 6.25C3.58579 6.25 3.25 5.91421 3.25 5.5V5ZM3.25 15C3.25 15.9665 4.0335 16.75 5 16.75H5.5C5.91421 16.75 6.25 16.4142 6.25 16C6.25 15.5858 5.91421 15.25 5.5 15.25H5C4.86193 15.25 4.75 15.1381 4.75 15V14.5C4.75 14.0858 4.41421 13.75 4 13.75C3.58579 13.75 3.25 14.0858 3.25 14.5V15ZM15 3.25C15.9665 3.25 16.75 4.0335 16.75 5V5.5C16.75 5.91421 16.4142 6.25 16 6.25C15.5858 6.25 15.25 5.91421 15.25 5.5V5C15.25 4.86193 15.1381 4.75 15 4.75H14.5C14.0858 4.75 13.75 4.41421 13.75 4C13.75 3.58579 14.0858 3.25 14.5 3.25H15ZM4 8.25C4.41421 8.25 4.75 8.58579 4.75 9V11C4.75 11.4142 4.41421 11.75 4 11.75C3.58579 11.75 3.25 11.4142 3.25 11V9C3.25 8.58579 3.58579 8.25 4 8.25ZM11.75 4C11.75 4.41421 11.4142 4.75 11 4.75L9 4.75C8.58579 4.75 8.25 4.41421 8.25 4C8.25 3.58579 8.58579 3.25 9 3.25H11C11.4142 3.25 11.75 3.58579 11.75 4ZM10.2438 9.04278C9.97142 8.94665 9.66806 9.01546 9.46383 9.21969C9.2596 9.42392 9.19079 9.72728 9.28692 9.99964L11.4082 16.01C11.494 16.253 11.6984 16.4349 11.9496 16.4918C12.2008 16.5488 12.4637 16.4729 12.6458 16.2908L13.8832 15.0533L15.2975 16.4675C15.5904 16.7604 16.0652 16.7604 16.3581 16.4675L16.7117 16.114C17.0046 15.8211 17.0046 15.3462 16.7117 15.0533L15.2975 13.6391L16.5349 12.4017C16.717 12.2195 16.793 11.9566 16.736 11.7054C16.679 11.4542 16.4971 11.2498 16.2542 11.1641L10.2438 9.04278Z"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </button>
                </span>
              </div>
            </div>
            <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
              <ul
                className="Online-Store-UI-SegmentedControl__SegmentedControlContainer_f856a Online-Store-UI-SegmentedControl--dense_pr5yf"
                aria-label="Mode Aperçu"
              >
                <li className="Online-Store-UI-SegmentedControl-Option__OptionWrapper_p6xuw Online-Store-UI-SegmentedControl-Option--dense_7trqb Online-Store-UI-SegmentedControl-Option--truncate_1fk7o">
                  <span className>
                    <div className="Online-Store-UI-SegmentedControl-Option__ButtonContainer_1dt6j Online-Store-UI-SegmentedControl-Option--dense_7trqb">
                      <Tooltip content="Ordinateur de bureau">
                        <button
                          className={`Online-Store-UI-SegmentedControl-Option__SegmentedControlItem_oi5xv ${mode === "normal" ? "Online-Store-UI-SegmentedControl-Option--selected_1xhmj" : ""} Online-Store-UI-SegmentedControl-Option--slim_1x3zd Online-Store-UI-SegmentedControl-Option--dense_7trqb`}
                          type="button"
                          onClick={() => setMode("normal")}
                          aria-current={mode === "normal"}
                        >
                          <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--truncate">
                            <Icon source={DesktopIcon} tone="legacy-inherit" />
                            <span className="Polaris-Text--root Polaris-Text--visuallyHidden">
                              Activer le mode de prévisualisation sur ordinateur
                            </span>
                          </span>
                        </button>
                      </Tooltip>
                    </div>
                  </span>
                </li>
                <li className="Online-Store-UI-SegmentedControl-Option__OptionWrapper_p6xuw Online-Store-UI-SegmentedControl-Option--dense_7trqb Online-Store-UI-SegmentedControl-Option--truncate_1fk7o">
                  <span className>
                    <div className="Online-Store-UI-SegmentedControl-Option__ButtonContainer_1dt6j Online-Store-UI-SegmentedControl-Option--dense_7trqb">
                      <Tooltip content="Mobile">
                        <button
                          className={`Online-Store-UI-SegmentedControl-Option__SegmentedControlItem_oi5xv ${mode === "mobile" ? "Online-Store-UI-SegmentedControl-Option--selected_1xhmj" : ""} Online-Store-UI-SegmentedControl-Option--slim_1x3zd Online-Store-UI-SegmentedControl-Option--dense_7trqb`}
                          type="button"
                          onClick={() => setMode("mobile")}
                          aria-current={mode === "mobile"}
                        >
                          <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--truncate">
                            <Icon source={MobileIcon} tone="legacy-inherit" />
                            <span className="Polaris-Text--root Polaris-Text--visuallyHidden">
                              Activer le mode de prévisualisation sur mobile
                            </span>
                          </span>
                        </button>
                      </Tooltip>
                    </div>
                  </span>
                </li>
                <li className="Online-Store-UI-SegmentedControl-Option__OptionWrapper_p6xuw Online-Store-UI-SegmentedControl-Option--dense_7trqb Online-Store-UI-SegmentedControl-Option--truncate_1fk7o Online-Store-UI-SegmentedControl-Option--selected_1xhmj">
                  <span className>
                    <div className="Online-Store-UI-SegmentedControl-Option__ButtonContainer_1dt6j Online-Store-UI-SegmentedControl-Option--dense_7trqb">
                      <Tooltip content="Plein Écran">
                        <button
                          className={`Online-Store-UI-SegmentedControl-Option__SegmentedControlItem_oi5xv ${mode === "full" ? "Online-Store-UI-SegmentedControl-Option--selected_1xhmj" : ""} Online-Store-UI-SegmentedControl-Option--slim_1x3zd Online-Store-UI-SegmentedControl-Option--dense_7trqb`}
                          type="button"
                          onClick={() => setMode("full")}
                          aria-current={mode === "full"}
                        >
                          <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--truncate">
                            <Icon
                              source={ViewportWideIcon}
                              tone="legacy-inherit"
                            />

                            <span className="Polaris-Text--root Polaris-Text--visuallyHidden">
                              Activer le mode de prévisualisation en plein écran
                            </span>
                          </span>
                        </button>
                      </Tooltip>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
              <span className>
                <button
                  className={`Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c ${!canUndo ? "Online-Store-UI-PlainAction--disabled_11cdm" : ""} Online-Store-UI-PlainAction--iconOnly_vgqbv`}
                  aria-label="Restaurer l'action la plus récente"
                  aria-disabled={!canUndo}
                  disabled={!canUndo}
                  onClick={undo}
                  type="button"
                  aria-describedby=":r8:"
                  data-polaris-tooltip-activator="true"
                  style={{
                    "--osui_plain-action-font-weight":
                      "var(--p-font-weight-regular)",
                  }}
                  tabIndex={0}
                >
                  <div className="Online-Store-UI-PlainAction__Interior_9sack">
                    <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                      <Icon source={UndoIcon} tone="legacy-inherit" />
                    </div>
                  </div>
                </button>
              </span>
              <span className>
                <button
                  className={`Online-Store-UI-PlainAction_1jhib Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c ${!canRedo ? "Online-Store-UI-PlainAction--disabled_11cdm" : ""} Online-Store-UI-PlainAction--iconOnly_vgqbv`}
                  aria-label="Réappliquez la dernière action restaurée"
                  aria-disabled={!canRedo}
                  disabled={!canRedo}
                  onClick={redo}
                  type="button"
                  tabIndex={0}
                  aria-describedby=":r9:"
                  data-polaris-tooltip-activator="true"
                  style={{
                    "--osui_plain-action-font-weight":
                      "var(--p-font-weight-regular)",
                  }}
                >
                  <div className="Online-Store-UI-PlainAction__Interior_9sack">
                    <div className="Online-Store-UI-PlainAction__Prefix_vg8vc">
                      <Icon source={RedoIcon} tone="legacy-inherit" />
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </div>

          <div className="Online-Store-UI-TopBar-LayoutGroup_1txj6 Online-Store-UI-TopBar-LayoutGroup--spacingTight_1lm6d Online-Store-UI-TopBar-LayoutGroup--usesBottomSheet_16ooh">
            <div className="Online-Store-UI-LayoutGroup-Item_cqdv4">
              <span className="">
                <Button
                  onClick={handleClick}
                  variant="primary"
                  size="medium"
                  textAlign="center"
                  disabled={!localeDataModified || loading}
                  loading={loading}
                >
                  <Text variant="bodySm">Enregistrer</Text>
                </Button>
              </span>
            </div>
          </div>
        </div>

        <div className="_LoadingBarWrapper_unrhk_4">
          {progress > 0 && (
            <div className="Online-Store-UI-LoadingBar__ProgressBar_tov2s">
              <ProgressBar
                tone="highlight"
                animated
                progress={progress}
                size="medium"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
