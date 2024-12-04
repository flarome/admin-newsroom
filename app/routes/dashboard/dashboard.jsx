import React, { useState, useEffect, useMemo, useCallback } from "react";

import { Page, Badge, Layout, TextField, FormLayout, Modal, PageActions, Card, Box, BlockStack, InlineStack, Text, Button, Bleed, Divider, Icon,   LegacyCard,
  ResourceList,
  Avatar,
  ResourceItem , LegacyFilters,} from "@shopify/polaris";
import { ChevronLeftIcon, ChevronRightIcon, DeleteIcon } from "@shopify/polaris-icons";



import Filters from "./components/filters";
import Actions from "./components/actions";
import Articles from "./components/articles";

const Dashboard = ({ articles, prepareEditor, articlesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedArticles, setSelectedArticles] = useState(new Set()); // Articles sélectionnés

  const [sortBy, setSortBy] = useState("modifiedDesc"); // Critère de tri
  const [filterVisibility, setFilterVisibility] = useState("3"); // true, false ou null
  const [filterTag, setFilterTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [selectAll, setSelectAll] = useState(false);
  const [selectAllGlobal, setSelectAllGlobal] = useState(false); // Si tous les articles sont sélectionnés
  const [actionsVisible, setActionsVisible] = useState(false); // Afficher le bouton Actions

  const resetDashboard = () => {
    resetFilters();
  };

  const EditArticle = (id = null) => {
    resetDashboard();

    prepareEditor(id);
  };

  const resetFilters = () => {
    setSelectedArticles(new Set());
    setSelectAll(false);
    setSelectAllGlobal(false);
    setActionsVisible(false);
  };

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        // Filtrer par recherche (titre, handle ou tags)
        const lowerSearch = searchTerm.toLowerCase();
        const matchesSearch = article.title.toLowerCase().includes(lowerSearch) || article.handle.toLowerCase().includes(lowerSearch) || article.tags.some(tag => tag.toLowerCase().includes(lowerSearch));

        // Filtrer par visibilité
        const matchesVisibility = filterVisibility === "3" || (filterVisibility === "1" && article.isPublished === true) || (filterVisibility === "2" && article.isPublished !== true);

        // Filtrer par tag
        const matchesTag = filterTag === "" || article.tags.includes(filterTag);

        return matchesSearch && matchesVisibility && matchesTag;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "modifiedDesc":
            return new Date(b.updatedAt) - new Date(a.updatedAt);
          case "modifiedAsc":
            return new Date(a.updatedAt) - new Date(b.updatedAt);
          case "titleAsc":
            return a.title.localeCompare(b.title);
          case "titleDesc":
            return b.title.localeCompare(a.title);
          default:
            return 0;
        }
      });
  }, [articles, searchTerm, filterVisibility, filterTag, sortBy]);

  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);
  const pageArticles = currentArticles.length;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const hasSelected = selectedArticles?.size !== 0;

  const handlepageChange = page => {
    setCurrentPage(page);
    resetFilters();
  };

  return (
    <Page fullWidth title="Articles de blog" compactTitle primaryAction={{ content: "Ajouter un article de blog", disabled: false, onAction: () => EditArticle(null) }}>

      <Layout>
        <Layout.Section>
          <Card>
            <Filters setSearchTerm={setSearchTerm} searchTerm={searchTerm} setSortBy={setSortBy} sortBy={sortBy} setFilterVisibility={setFilterVisibility} filterVisibility={filterVisibility} setFilterTag={setFilterTag} filterTag={filterTag} />

            <div className="Polaris-ResourceList__ResourceListWrapper">
              <Actions setSelectedArticles={setSelectedArticles} selectedArticles={selectedArticles} currentArticles={currentArticles} articles={articles} pageArticles={pageArticles} selectAll={selectAll} setSelectAll={setSelectAll} selectAllGlobal={selectAllGlobal} setSelectAllGlobal={setSelectAllGlobal} actionsVisible={actionsVisible} setActionsVisible={setActionsVisible} />

              {/* Articles List */}
              <Articles articles={currentArticles} selectedArticles={selectedArticles} setSelectedArticles={setSelectedArticles} hasSelected={hasSelected} EditArticle={EditArticle} />
            </div>

            <div className="FXLzF">
              <div className="Polaris-LegacyStack Polaris-LegacyStack--distributionCenter Polaris-LegacyStack--alignmentCenter">
                <div className="Polaris-LegacyStack__Item">
                  <nav aria-label="Pagination" className="Polaris-Pagination">
                    <div className="Polaris-ButtonGroup Polaris-ButtonGroup--variantSegmented" data-buttongroup-variant="segmented">
                      <div className="Polaris-ButtonGroup__Item">
                        <button id="previousURL" onClick={() => handlepageChange(currentPage - 1)} className={`Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly${currentPage === 1 ? " Polaris-Button--disabled" : ""}`} aria-label="Précédent" aria-disabled={currentPage === 1} type="button" tabIndex={`${currentPage === 1 ? "-1" : "0"}`}>
                          <span className="Polaris-Button__Icon">
                            <span className="Polaris-Icon">
                              <Icon source={ChevronLeftIcon} tone="inherit" />
                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="Polaris-ButtonGroup__Item">
                        <span>
                          <button id="nextURL" className={`Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly${currentPage === totalPages ? " Polaris-Button--disabled" : ""}`} aria-label="Suivant" onClick={() => handlepageChange(currentPage + 1)} aria-disabled={currentPage === totalPages} type="button" tabIndex={`${currentPage === totalPages ? "-1" : "0"}`}>
                            <span className="Polaris-Button__Icon">
                              <span className="Polaris-Icon">
                                <Icon source={ChevronRightIcon} tone="inherit" />
                              </span>
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Dashboard;
