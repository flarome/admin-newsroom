import React, { useState, useMemo, useCallback } from "react";
import {
  Modal as PolarisModal,
  Banner,
  IndexTable,
  Text,
  Box,
  Card,
  Checkbox,
  Badge,
  InlineStack,
  BlockStack,
  Divider,
  Scrollable,
  Button,
  Collapsible,
} from "@polaris/npm";
import { ChevronDownIcon, ChevronRightIcon } from "@shopify/polaris-icons";
import { useAppBridge } from "@shopify/app-bridge-react";

// -- UTIL pour Collapsible --
function useCollapsibleSet() {
  const [open, setOpen] = useState({});
  const toggle = useCallback((id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] })), []);
  const isOpen = useCallback((id) => !!open[id], [open]);
  return [isOpen, toggle];
}

// -- COMPTEUR GLOBAL RESTANT --
function getTotalToRemove(overflowSections, sectionsToRemove, overflowBlocks, blocksToRemove) {
  let total = 0;
  for (const infos of Object.values(overflowSections)) {
    for (const { max, items } of infos) {
      const over = items.length - max;
      const checked = items.filter(s => sectionsToRemove.includes(s.id)).length;
      total += Math.max(0, over - checked);
    }
  }
  for (const [sectionId, blocks] of Object.entries(overflowBlocks)) {
    const byType = {};
    blocks.forEach(({ block, max }) => {
      byType[block.type] = byType[block.type] || [];
      byType[block.type].push(block);
      byType[block.type][0].max = max;
    });
    for (const [type, blocksArr] of Object.entries(byType)) {
      const max = blocksArr[0].max;
      const over = blocksArr.length - max;
      const checked = blocksArr.filter(b =>
        (blocksToRemove[sectionId] || []).includes(b.id)
      ).length;
      total += Math.max(0, over - checked);
    }
  }
  return total;
}

function hasAllOverflowsResolved(overflowSections, sectionsToRemove, overflowBlocks, blocksToRemove) {
  return getTotalToRemove(overflowSections, sectionsToRemove, overflowBlocks, blocksToRemove) === 0;
}

export const Modal = ({
  open,
  overflowSections,
  overflowBlocks,
  resolveOverflow,
}) => {
  const shopify = useAppBridge();

  const [sectionsToRemove, setSectionsToRemove] = useState([]);
  const [blocksToRemove, setBlocksToRemove] = useState({});
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [isGroupOpen, toggleGroup] = useCollapsibleSet();
  const [isSectionTypeOpen, toggleSectionType] = useCollapsibleSet();
  const [isSectionOpen, toggleSection] = useCollapsibleSet();

  // -- Compteur global --
  const totalToRemove = useMemo(
    () => getTotalToRemove(overflowSections, sectionsToRemove, overflowBlocks, blocksToRemove),
    [overflowSections, sectionsToRemove, overflowBlocks, blocksToRemove]
  );

  function sectionRemainingToRemove(items, max, type) {
    const over = items.length - max;
    const checked = items.filter(s => sectionsToRemove.includes(s.id)).length;
    return Math.max(0, over - checked);
  }

  function blockRemainingToRemove(blocksArr, sectionId) {
    const max = blocksArr[0]?.max;
    const over = blocksArr.length - max;
    const checked = blocksArr.filter(b =>
      (blocksToRemove[sectionId] || []).includes(b.id)
    ).length;
    return Math.max(0, over - checked);
  }

  function sectionIsAtLimit(type, group, infos) {
    return sectionRemainingToRemove(infos.items, infos.max, type) <= 0;
  }

  function blockIsAtLimit(type, sectionId, blocksArr) {
    return blockRemainingToRemove(blocksArr, sectionId) <= 0;
  }

  function handleSectionCheck(sectionId, items, max) {
    setSectionsToRemove(prev => {
      const checked = prev.includes(sectionId);
      if (!checked && sectionRemainingToRemove(items, max) <= 0) return prev;
      return checked ? prev.filter(id => id !== sectionId) : [...prev, sectionId];
    });
  }
  function handleBlockCheck(sectionId, blockId, blocksArr) {
    setBlocksToRemove(prev => {
      const arr = prev[sectionId] || [];
      const checked = arr.includes(blockId);
      if (!checked && blockRemainingToRemove(blocksArr, sectionId) <= 0) return prev;
      return {
        ...prev,
        [sectionId]: checked ? arr.filter(id => id !== blockId) : [...arr, blockId],
      };
    });
  }

  // -- Seconde modale de confirmation --
  function handleValidateRequest() {
    setConfirmOpen(true);
  }
  function handleValidateConfirm() {
    resolveOverflow(sectionsToRemove, blocksToRemove);
    setSectionsToRemove([]);
    setBlocksToRemove({});
    setConfirmOpen(false);
  }
  function handleValidateCancel() {
    setConfirmOpen(false);
  }

  // Fermeture principale
  const isDisabled = totalToRemove > 0;
  function handleClose() {
    if (!isDisabled) {
      handleValidateRequest();
    } else {
      shopify.toast.show(
        `Il reste encore ${totalToRemove} élément(s) à sélectionner pour revenir sous les limites.`,
        { isError: true }
      );
    }
  }

  // Blocks regroupés par section/type
  const blocksOverflowBySection = useMemo(() => {
    const bySection = {};
    for (const [sectionId, blocks] of Object.entries(overflowBlocks)) {
      const byType = {};
      blocks.forEach(({ block, max }) => {
        byType[block.type] = byType[block.type] || [];
        byType[block.type].push({ ...block, max });
      });
      bySection[sectionId] = byType;
    }
    return bySection;
  }, [overflowBlocks]);

  return (
    <>
      <PolarisModal
        open={open}
        onClose={handleClose}
        title="Limites dépassées : gestion hiérarchique"
        size="large"
        footer={
          <BlockStack gap="2">
            {isDisabled ? (
              <Text color="critical" variant="bodySm" as="span">
                Il vous reste <b>{totalToRemove}</b> élément(s) à sélectionner pour revenir sous les limites.
              </Text>
            ) : (
              <Text color="success" variant="bodySm" as="span">
                Toutes les limites sont respectées. Vous pouvez valider.
              </Text>
            )}
          </BlockStack>
        }
        primaryAction={{
          content: "Supprimer la sélection",
          onAction: handleValidateRequest,
          disabled: isDisabled,
        }}
        sectioned
      >
        <Banner
          title="Réduisez le nombre de sections et de blocs"
          tone="warning"
          hideIcon={false}
        >
          <InlineStack gap="3">
            <Text as="span">
              Veuillez sélectionner les sections et/ou blocs à supprimer pour revenir sous les limites.
            </Text>
            <Badge tone={isDisabled ? "critical" : "success"}>
              {isDisabled
                ? `${totalToRemove} à sélectionner`
                : "Limites atteintes 🎉"}
            </Badge>
          </InlineStack>
          <br />
          <Text as="span" color="subdued">
            (Cette fenêtre restera ouverte tant que tout n’est pas corrigé)
          </Text>
        </Banner>

        <Scrollable shadow style={{ maxHeight: 540, marginTop: 24 }}>
          <BlockStack gap="6">
            {Object.keys(overflowSections).length === 0 &&
            Object.keys(blocksOverflowBySection).length === 0 ? (
              <Text as="span" tone="subdued">
                Aucun dépassement à afficher.
              </Text>
            ) : (
              Object.entries(overflowSections).map(([group, sectionTypes], idx) => (
                <Card rounded key={group} padding="6">
                  {/* Groupe */}
                  <Box>
                    <Button
                      variant="plain"
                      icon={isGroupOpen(group) ? ChevronDownIcon : ChevronRightIcon}
                      onClick={() => toggleGroup(group)}
                      tone="info"
                    >
                      <Text as="h2" variant="headingMd">
                        Groupe <Badge size="small" tone="info">{group}</Badge>
                      </Text>
                    </Button>
                    <Collapsible open={isGroupOpen(group)}>
                      <BlockStack gap="4">
                        {/* Section types */}
                        {sectionTypes.map(({ type, max, items }) => {
                          const sectionTypeId = `${group}-${type}`;
                          const remainingToRemove = sectionRemainingToRemove(items, max, type);

                          return (
                            <Box key={sectionTypeId} paddingBlockStart="2">
                              <InlineStack gap="3" blockAlign="center">
                                <Button
                                  variant="plain"
                                  icon={isSectionTypeOpen(sectionTypeId) ? ChevronDownIcon : ChevronRightIcon}
                                  onClick={() => toggleSectionType(sectionTypeId)}
                                  tone="subdued"
                                >
                                  <InlineStack gap="2">
                                    <Badge tone="success">{type}</Badge>
                                    <Text as="span" tone="subdued">
                                      max {max}
                                    </Text>
                                    <Text as="span" tone={remainingToRemove > 0 ? "critical" : "success"}>
                                      À supprimer : <b>{remainingToRemove}</b>
                                    </Text>
                                  </InlineStack>
                                </Button>
                              </InlineStack>
                              <Collapsible open={isSectionTypeOpen(sectionTypeId)}>
                                <Box paddingInlineStart="6">
                                  <IndexTable
                                    resourceName={{ singular: "section", plural: "sections" }}
                                    itemCount={items.length}
                                    headings={[
                                      { title: "Sélectionner" },
                                      { title: "Titre" },
                                      { title: "Type" },
                                      { title: "ID" },
                                    ]}
                                    selectable={false}
                                    condensed
                                  >
                                    {items.map(section => (
                                      <IndexTable.Row id={section.id} key={section.id} position={0}>
                                        <IndexTable.Cell>
                                          <Checkbox
                                            checked={sectionsToRemove.includes(section.id)}
                                            onChange={() =>
                                              handleSectionCheck(section.id, items, max)
                                            }
                                            disabled={
                                              !sectionsToRemove.includes(section.id) &&
                                              sectionIsAtLimit(type, group, { items, max })
                                            }
                                            aria-label={`Supprimer la section ${section.title || section.type}`}
                                          />
                                        </IndexTable.Cell>
                                        <IndexTable.Cell>
                                          <Text fontWeight="medium">{section.title || "Sans titre"}</Text>
                                        </IndexTable.Cell>
                                        <IndexTable.Cell>
                                          <Badge tone="info">{section.type}</Badge>
                                        </IndexTable.Cell>
                                        <IndexTable.Cell>
                                          <Text as="span" tone="subdued">{section.id}</Text>
                                        </IndexTable.Cell>
                                      </IndexTable.Row>
                                    ))}
                                  </IndexTable>
                                </Box>
                                {/* Overflow blocks dans cette section */}
                                {items.map(section => {
                                  const blocksByType = blocksOverflowBySection[section.id];
                                  if (!blocksByType) return null;
                                  return Object.entries(blocksByType).map(([blockType, blocksArr]) => {
                                    const remainingBlock = blockRemainingToRemove(blocksArr, section.id);
                                    const sectionBlockTypeId = `${section.id}-${blockType}`;
                                    const max = blocksArr[0]?.max;
                                    return (
                                      <Box key={sectionBlockTypeId} paddingInlineStart="8" paddingBlockStart="2">
                                        <InlineStack gap="3" blockAlign="center">
                                          <Button
                                            variant="plain"
                                            icon={isSectionOpen(sectionBlockTypeId) ? ChevronDownIcon : ChevronRightIcon}
                                            onClick={() => toggleSection(sectionBlockTypeId)}
                                            size="micro"
                                            tone="subdued"
                                          >
                                            <InlineStack gap="2">
                                              <Badge>{blockType}</Badge>
                                              <Text as="span" tone="subdued">max {max}</Text>
                                              <Text as="span" tone={remainingBlock > 0 ? "critical" : "success"}>
                                                À supprimer : <b>{remainingBlock}</b>
                                              </Text>
                                            </InlineStack>
                                          </Button>
                                        </InlineStack>
                                        <Collapsible open={isSectionOpen(sectionBlockTypeId)}>
                                          <Box paddingInlineStart="6">
                                            <IndexTable
                                              resourceName={{ singular: "block", plural: "blocks" }}
                                              itemCount={blocksArr.length}
                                              headings={[
                                                { title: "Sélectionner" },
                                                { title: "Type" },
                                                { title: "ID" },
                                              ]}
                                              selectable={false}
                                              condensed
                                            >
                                              {blocksArr.map(block => (
                                                <IndexTable.Row id={block.id} key={block.id} position={0}>
                                                  <IndexTable.Cell>
                                                    <Checkbox
                                                      checked={
                                                        blocksToRemove[section.id]?.includes(block.id) || false
                                                      }
                                                      onChange={() =>
                                                        handleBlockCheck(section.id, block.id, blocksArr)
                                                      }
                                                      disabled={
                                                        !(
                                                          blocksToRemove[section.id]?.includes(block.id)
                                                        ) &&
                                                        blockIsAtLimit(blockType, section.id, blocksArr)
                                                      }
                                                      aria-label={`Supprimer le block ${block.type}`}
                                                    />
                                                  </IndexTable.Cell>
                                                  <IndexTable.Cell>
                                                    <Badge>{block.type}</Badge>
                                                  </IndexTable.Cell>
                                                  <IndexTable.Cell>
                                                    <Text as="span" tone="subdued">{block.id}</Text>
                                                  </IndexTable.Cell>
                                                </IndexTable.Row>
                                              ))}
                                            </IndexTable>
                                          </Box>
                                        </Collapsible>
                                      </Box>
                                    );
                                  });
                                })}
                              </Collapsible>
                            </Box>
                          );
                        })}
                      </BlockStack>
                    </Collapsible>
                  </Box>
                  {idx < Object.entries(overflowSections).length - 1 && <Divider />}
                </Card>
              ))
            )}
          </BlockStack>
        </Scrollable>





      </PolarisModal>

    



{/* BACKDROP CUSTOM */}
      {confirmOpen && (
      <div className="Online-Store-UI-Popover-Backdrop_1er5d"></div>
       
      )}

      {/* ---- MODALE DE CONFIRMATION IRREVERSIBLE ---- */}
      <PolarisModal
        open={confirmOpen}
        
        title="Confirmer la suppression"
        primaryAction={{
          content: "Oui, supprimer",
          destructive: true,
          onAction: handleValidateConfirm,
        }}
        secondaryActions={[
          {
            content: "Annuler",
            onAction: handleValidateCancel,
          },
        ]}
        onClose={handleValidateCancel}
        sectioned
      >
        <BlockStack gap="4">
          <Banner
            tone="critical"
            title="Cette action est irréversible"
            hideIcon={false}
          >
            <Text>
              Vous êtes sur le point de supprimer définitivement les éléments sélectionnés.<br />
              <b>Cette opération ne peut pas être annulée.</b>
            </Text>
          </Banner>
          <Text as="span" color="critical">
            Êtes-vous certain de vouloir continuer ?
          </Text>
        </BlockStack>
      </PolarisModal>
      
    </>
  );
};