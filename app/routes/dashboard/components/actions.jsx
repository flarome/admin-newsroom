import React, { useRef, useState, useEffect, useMemo } from "react";

import { Icon } from "@shopify/polaris";
import {MinusIcon, CheckboxIcon, MenuHorizontalIcon, ChevronDownIcon } from "@shopify/polaris-icons";



import ActionsModal from "./ActionsModal";

const Actions = ({ setSelectedArticles, selectedArticles, currentArticles, articles, pageArticles, selectAll, setSelectAll, selectAllGlobal, setSelectAllGlobal, actionsVisible, setActionsVisible }) => {
 


  const selectedArticlesSize = useMemo(() => {
    return selectedArticles.size;
  }, [selectedArticles]);


  const selectManual = useMemo(() => {
    return (selectedArticlesSize > 0 && selectAll && pageArticles > selectedArticlesSize) || (selectedArticlesSize > 0 && selectAllGlobal && articles.length > selectedArticlesSize);
  }, [selectedArticlesSize, selectAll, selectAllGlobal, articles, pageArticles]);

  const ActiveselectAllGlobal = selectAllGlobal && articles.length === selectedArticlesSize;

  const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour ouvrir/fermer le modal pour l'image principale

  useEffect(() => {
    // Afficher le bouton Actions si des articles sont sélectionnés
    setActionsVisible(selectedArticlesSize > 0);
    setSelectAll(selectedArticlesSize > 0);
    setSelectAllGlobal(selectedArticlesSize === 0 ? false : selectAllGlobal);
    setIsModalOpen(selectedArticlesSize === 0 ? false : isModalOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedArticlesSize, selectAllGlobal, isModalOpen]);

  const toggleSelectAll = () => {
    const newSelectAllState = !selectAll;
    if (newSelectAllState || selectManual) {
      setSelectedArticles(new Set(currentArticles.map(article => article.id)));
    } else {
      setSelectedArticles(new Set());
      setSelectAllGlobal(false);
    }
  };

  const handleselectAllGlobalArticles = () => {
    const newSelectAllState = !ActiveselectAllGlobal;
    setSelectAllGlobal(newSelectAllState);
    if (newSelectAllState) {
      setSelectAllGlobal(true);
      setSelectedArticles(new Set(articles.map(article => article.id)));
    } else {
      setSelectAllGlobal(false);
      setSelectedArticles(new Set(currentArticles.map(article => article.id)));
    }
  };

  const actions = [
    {
      label: "test",
      key: "test",
    },
  ];

  const buttonRef = useRef(null);

  return (
    <div className="Polaris-ResourceList__HeaderOuterWrapper">
      <div>
        <div className={`Polaris-ResourceList__HeaderWrapper Polaris-ResourceList__HeaderWrapper--hasSelect${selectAll ? " Polaris-ResourceList__HeaderWrapper--inSelectMode" : ""}`}>
          <div className="Polaris-ResourceList__HeaderContentWrapper">
            <div className="Polaris-ResourceList__HeaderTitleWrapper">
              <span className="Polaris-Text--root Polaris-Text--bodyMd">{pageArticles}&nbsp;Articles de blog sont affichés</span>
            </div>
            <div className="Polaris-ResourceList__CheckableButtonWrapper">
              <div className="Polaris-CheckableButton">
                <div className="Polaris-CheckableButton__Checkbox-d">
                  <label className="Polaris-Choice Polaris-Choice--labelHidden Polaris-Checkbox__ChoiceLabel" htmlFor=":r3v:">
                    <span className="Polaris-Choice__Control">
                      <span className={`Polaris-Checkbox${selectManual ? " Polaris-Checkbox__Input--indeterminate" : ""}`}>
                        <input id=":r3v:" type="checkbox" value="" className="Polaris-Checkbox__Input" checked={selectAll} onChange={toggleSelectAll} aria-invalid="false" />

                        <span className="Polaris-Checkbox__Backdrop"></span>
                        <span className={`Polaris-Checkbox__Icon${selectManual ? " Polaris-Checkbox__IconIndeterminate" : " Polaris-Checkbox--animated"}`}>
                          {selectManual ? (
                            <span className="Polaris-Icon">

                              <Icon source={MinusIcon} tone="inherit" />
                            </span>
                          ) : (
                            <svg viewBox="0 0 16 16" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                              <path
                                className={selectAll ? "Polaris-Checkbox--checked" : undefined}
                                d="M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5"
                                transform="translate(2 2.980376)"
                                opacity={selectAll ? "1" : "0"} // Ajuste l'opacité selon `selectAll`
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                pathLength="1"
                              ></path>
                            </svg>
                          )}
                        </span>
                      </span>
                    </span>
                    <span className="Polaris-Choice__Label">
                      <span className="Polaris-Text--root Polaris-Text--bodyMd">Sélectionner la totalité des {pageArticles} Articles de blog</span>
                    </span>
                  </label>
                </div>
                <span className="Polaris-CheckableButton__Label">
                  <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{pageArticles}&nbsp;Articles de blog sont affichés</span>
                </span>
              </div>
            </div>
            <div className="Polaris-ResourceList__SelectButtonWrapper">
              <button className={`Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText${selectAll ? " Polaris-Button--disabled" : ""}`} aria-disabled={selectAll} tabIndex={`${selectAll ? "-1" : "0"}`} type="button">
                <span className="Polaris-Button__Icon">
                  <span className="Polaris-Icon">

                    <Icon source={CheckboxIcon} tone="inherit" />
                  </span>
                </span>
                <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Sélectionner</span>
              </button>
            </div>
          </div>
          <div className={`Polaris-ResourceList__BulkActionsWrapper${actionsVisible ? " Polaris-ResourceList__BulkActionsWrapperVisible" : ""}`}>
            <div>
              <div
                className="Polaris-InlineStack"
                style={{
                  "--pc-inline-stack-block-align": "center",
                  "--pc-inline-stack-wrap": "wrap",
                  "--pc-inline-stack-gap-xs": "var(--p-space-400)",
                  "--pc-inline-stack-flex-direction-xs": "row",
                }}
              >
                <div className="Polaris-BulkActions__BulkActionsSelectAllWrapper">
                  <div className="Polaris-CheckableButton">
                    <div className="Polaris-CheckableButton__Checkbox-d">
                      <label className="Polaris-Choice Polaris-Choice--labelHidden Polaris-Checkbox__ChoiceLabel" htmlFor=":r40:">
                        <span className="Polaris-Choice__Control">
                          <span className={`Polaris-Checkbox${selectManual ? " Polaris-Checkbox__Input--indeterminate" : ""}`}>
                            <input id=":r40:" type="checkbox" checked={selectAll} onChange={toggleSelectAll} className="Polaris-Checkbox__Input" aria-invalid="false" />
                            <span className="Polaris-Checkbox__Backdrop"></span>
                            <span className={`Polaris-Checkbox__Icon${selectManual ? " Polaris-Checkbox__IconIndeterminate" : " Polaris-Checkbox--animated"}`}>
                              {selectManual ? (
                                <span className="Polaris-Icon">


                                  <Icon source={MinusIcon} tone="inherit" />
                                </span>
                              ) : (
                                <svg viewBox="0 0 16 16" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                                  <path
                                    className={selectAll ? "Polaris-Checkbox--checked" : undefined}
                                    d="M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5"
                                    transform="translate(2 2.980376)"
                                    opacity={selectAll ? "1" : "0"} // Ajuste l'opacité selon `selectAll`
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    pathLength="1"
                                  ></path>
                                </svg>
                              )}
                            </span>
                          </span>
                        </span>
                        <span className="Polaris-Choice__Label">
                          <span className="Polaris-Text--root Polaris-Text--bodyMd">Sélectionner la totalité des {pageArticles} Articles de blog</span>
                        </span>
                      </label>
                    </div>
                    <span className="Polaris-CheckableButton__Label" aria-live={ActiveselectAllGlobal ? "polite" : undefined}>
                      <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{ActiveselectAllGlobal ? `La totalité des ${pageArticles}+ (${selectedArticlesSize}) Articles de blog de votre boutique est sélectionnée` : `${selectedArticlesSize}\u00A0sélectionné(s)`}</span>
                    </span>
                  </div>
                  <button className="Polaris-BulkActions__AllAction" aria-disabled="false" type="button" onClick={handleselectAllGlobalArticles}>
                    <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{ActiveselectAllGlobal ? "Annuler" : `Sélectionner la totalité des ${pageArticles}+ (${articles.length}) Articles de blog de votre boutique`}</span>
                  </button>
                </div>

                {actionsVisible && (
                  <div className="Polaris-BulkActions__BulkActionsPromotedActionsWrapper">
                    <div
                      className="Polaris-InlineStack"
                      style={{
                        "--pc-inline-stack-block-align": "center",
                        "--pc-inline-stack-wrap": "wrap",
                        "--pc-inline-stack-gap-xs": "var(--p-space-100)",
                        "--pc-inline-stack-flex-direction-xs": "row",
                      }}
                    >
                      <div className="Polaris-BulkActions__BulkActionsOuterLayout">
                        <div className="Polaris-BulkActions__BulkActionsMeasurerLayout">
                          <div className="Polaris-BulkActions__BulkActionButton">
                            <span>
                              <button className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" aria-label="Autres actions" type="button" tabIndex="0" aria-describedby=":r7c:" data-polaris-tooltip-activator="true">
                                <span className="Polaris-Button__Icon">
                                  <span className="Polaris-Icon">
                                    <Icon source={MenuHorizontalIcon} tone="neutral" />
                                  </span>
                                </span>
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="Polaris-BulkActions__BulkActionsLayout Polaris-BulkActions--bulkActionsLayoutMeasuring"></div>
                      </div>
                      <div>
                        <div ref={buttonRef} className="Polaris-BulkActions__BulkActionButton">
                          <button onClick={() => setIsModalOpen(!isModalOpen)} className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button" tabIndex="0" aria-controls=":r7d:" aria-owns=":r7d:" aria-expanded={isModalOpen} data-state={isModalOpen ? "open" : `closed`}>
                            <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Actions</span>
                            <span className="Polaris-Button__DisclosureIcon Polaris-Button__Icon">
                              <span className="Polaris-Icon">
                                <Icon source={ChevronDownIcon} tone="inherit" />
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <ActionsModal isModalOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} actions={actions} targetRef={buttonRef} offset={{ bottom: 5, right: 1 }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
