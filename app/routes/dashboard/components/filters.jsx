import React from "react";


import { Icon } from "@shopify/polaris";
import {MinusIcon, CheckboxIcon, MenuHorizontalIcon, ChevronDownIcon, SearchIcon, XCircleIcon } from "@shopify/polaris-icons"; 


const Filters = ({ setSearchTerm, searchTerm, setSortBy, sortBy, setFilterVisibility, filterVisibility, setFilterTag, filterTag }) => {
  // Fonction pour effacer le champ de texte
  const clearInput = () => {
    setSearchTerm("");
  };

  return (
    <div className="Polaris-ResourceList__FiltersWrapper">
      <div className="h4zWl">
        <div
          className="Polaris-InlineGrid"
          style={{
            "--pc-inline-grid-grid-template-columns-xs": "auto min-content",
            "--pc-inline-grid-gap-xs": "var(--p-space-200)",
          }}
        >
          <div className="Polaris-LegacyFilters">
            <div className="Polaris-LegacyFilters-ConnectedFilterControl__ProxyButtonContainer" aria-hidden="true">
              {["Visibilité", "Marqué avec", "Blog", "Auteur"].map((label, index) => (
                <div key={index} data-key={label.toLowerCase().replace(" ", "_")}>
                  <button className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button">
                    <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">{label}</span>
                    <span className="Polaris-Button__DisclosureIcon Polaris-Button__Icon">
                      <span className="Polaris-Icon">
                      <Icon source={ChevronDownIcon} tone="inherit" />
                      </span>
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <div className="Polaris-LegacyFilters-ConnectedFilterControl__Wrapper">
              <div className="Polaris-LegacyFilters-ConnectedFilterControl Polaris-LegacyFilters-ConnectedFilterControl--right">
                <div className="Polaris-LegacyFilters-ConnectedFilterControl__CenterContainer">
                  <div className="Polaris-LegacyFilters-ConnectedFilterControl__Item">
                    <div className="Polaris-Labelled--hidden">
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label id=":r4:Label" htmlFor=":r4:" className="Polaris-Label__Text">
                            <span className="Polaris-Text--root Polaris-Text--bodyMd">Filtrer les articles de blogs</span>
                          </label>
                        </div>
                      </div>
                      <div className="Polaris-Connected">
                        <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                          <div className="Polaris-TextField">
                            <div className="Polaris-TextField__Prefix" id=":r4:-Prefix">
                              <span className="Polaris-LegacyFilters__SearchIcon">
                                <span className="Polaris-Icon">

                                  <Icon source={SearchIcon} tone="inherit" />
                                </span>
                              </span>
                            </div>
                            <input id=":r4:" placeholder="Filtrer les articles de blogs" autoComplete="off" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="Polaris-TextField__Input Polaris-TextField__Input--hasClearButton" type="text" aria-labelledby=":r4:Label :r4:-Prefix" aria-invalid="false" data-1p-ignore="true" data-lpignore="true" data-form-type="other" />
                            {searchTerm && (
                              <button onClick={clearInput} type="button" className="Polaris-TextField__ClearButton">
                                <span className="Polaris-Text--root Polaris-Text--visuallyHidden">Effacer</span>
                                <span className="Polaris-Icon">

                                  <Icon source={XCircleIcon} tone="inherit" />
                                </span>
                              </button>
                            )}
                            <div className="Polaris-TextField__Backdrop"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Polaris-LegacyFilters-ConnectedFilterControl__RightContainer">
                  <div className="Polaris-LegacyFilters-ConnectedFilterControl__Item">
                    <div>
                      <button onClick={() => setFilterVisibility(filterVisibility === "1" ? "2" : filterVisibility === "2" ? "3" : "1")} className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure" type="button" tabIndex="0" aria-controls={`:r4:`} aria-owns={`:r4:`} aria-expanded="false" data-state="closed">
                        <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Visibilité: {filterVisibility === "1" ? "Publiés" : filterVisibility === "2" ? "Non Publiés" : "Tous"}</span>
                        <span className="Polaris-Button__DisclosureIcon Polaris-Button__Icon">
                          <span className="Polaris-Icon">

                            <Icon source={ChevronDownIcon} tone="inherit" />
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="Polaris-LegacyFilters-ConnectedFilterControl__Item">
                    <div>
                      <button
                        onClick={() => {
                          const tag = prompt("Entrez un tag pour filtrer :");
                          setFilterTag(tag || "");
                        }}
                        className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--disclosure"
                        type="button"
                        tabIndex="0"
                        aria-controls={`:r4:`}
                        aria-owns={`:r4:`}
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Par Tag</span>
                        <span className="Polaris-Button__DisclosureIcon Polaris-Button__Icon">
                          <span className="Polaris-Icon">
                          <Icon source={ChevronDownIcon} tone="inherit" />

                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Polaris-LegacyFilters-ConnectedFilterControl__AuxiliaryContainer">
                <div
                  className="Polaris-Box"
                  style={{
                    "--pc-box-padding-inline-start-xs": "var(--p-space-200)",
                  }}
                >
                  <div
                    className="Polaris-InlineStack"
                    style={{
                      "--pc-inline-stack-block-align": "center",
                      "--pc-inline-stack-wrap": "nowrap",
                      "--pc-inline-stack-gap-xs": "var(--p-space-200)",
                      "--pc-inline-stack-flex-direction-xs": "row",
                    }}
                  >
                    <div>
                      <div className="vSY1w" aria-hidden="true">
                        <button className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                          <span className="Polaris-Button__Icon">
                            <span className="Polaris-LegacyIcon__Icon">{/* SVG content */}</span>
                          </span>
                          <span className="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Enregistrés</span>
                        </button>
                      </div>
                    </div>

                    <div className="Polaris-Box">
                      <div>
                        {/* Bouton de tri */}

                        <select id="SortPopoverActivator" className="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button" tabIndex="0" aria-controls=":r61:" aria-owns=":r61:" aria-expanded="false" data-state="closed" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                          <option value="modifiedDesc">Modifié (le plus récent)</option>
                          <option value="modifiedAsc">Modifié (le moins récent)</option>
                          <option value="titleAsc">Titre (A à Z)</option>
                          <option value="titleDesc">Titre (Z à A)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="Polaris-Text--root Polaris-Text--visuallyHidden">
            <div className="Polaris-LegacyFilters__TagsContainer" aria-live="polite"></div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
