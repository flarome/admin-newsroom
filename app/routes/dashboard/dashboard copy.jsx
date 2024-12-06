import React, { useState, useEffect, useMemo, useCallback } from "react";

import { getArticleInfo } from "../modules/getInfo";
import { Page, Badge, Layout, TextField ,Thumbnail,  FormLayout, Modal, PageActions, Card, Box, BlockStack, InlineStack, Text, Button, Bleed, Divider, Icon, LegacyCard, ResourceList, Avatar, ResourceItem, LegacyFilters } from "@shopify/polaris";
import { ChevronLeftIcon, ChevronRightIcon, DeleteIcon } from "@shopify/polaris-icons";

import { useHref } from "@remix-run/react";

function disambiguateLabel(key, value) {
  switch (key) {
    case 'taggedWith1':
      return `Tagged with ${value}`;
    default:
      return value;
  }
}

function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else {
    return value === '' || value == null;
  }
}



const Dashboard = ({ articles, articlesPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedArticles, setSelectedArticles] = useState(new Set()); // Articles sélectionnés

  const [sortBy, setSortBy] = useState("modifiedDesc"); // Critère de tri
  const [filterVisibility, setFilterVisibility] = useState("3"); // true, false ou null
  const [filterTag, setFilterTag] = useState("");
  const [searchTerm, setSearchTerm] = useState(undefined);

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
        const lowerSearch = searchTerm && searchTerm.toLowerCase();
        const matchesSearch = !searchTerm || searchTerm === "" || article.title.toLowerCase().includes(lowerSearch) || article.handle.toLowerCase().includes(lowerSearch) || article.tags.some(tag => tag.toLowerCase().includes(lowerSearch));

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

  const [selectedItems, setSelectedItems] = useState([]);

  const resourceName = {
    singular: "Article de blog",
    plural: "Articles de blog",
  };

  const promotedBulkActions = [
    {
      content: "Edit customers",
      onAction: () => console.log("Todo: implement bulk edit"),
    },
  ];

  const bulkActions = [
    {
      content: "Add tags",
      onAction: () => console.log("Todo: implement bulk add tags"),
    },
    {
      content: "Remove tags",
      onAction: () => console.log("Todo: implement bulk remove tags"),
    },
    {
      icon: DeleteIcon,
      destructive: true,
      content: "Delete customers",
      onAction: () => console.log("Todo: implement bulk delete"),
    },
  ];











  const [taggedWith, setTaggedWith] = useState('VIP');
  const [queryValue, setQueryValue] = useState(undefined);

  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    [],
  );
  const handleTaggedWithRemove = useCallback(
    () => setTaggedWith(undefined),
    [],
  );
  const handleQueryValueRemove = useCallback(
    () => setSearchTerm(undefined),
    [],
  );
  const handleClearAll = useCallback(() => {
    handleTaggedWithRemove();
    handleQueryValueRemove();
  }, [handleQueryValueRemove, handleTaggedWithRemove]);


  const filters = [
    {
      key: 'taggedWith1',
      label: 'Tagged with',
      filter: (
        <TextField
          label="Tagged with"
          value={taggedWith}
          onChange={handleTaggedWithChange}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    }
  ];



  const appliedFilters =
  taggedWith && !isEmpty(taggedWith)
    ? [
        {
          key: 'taggedWith1',
          label: disambiguateLabel('taggedWith1', taggedWith),
          onRemove: handleTaggedWithRemove,
        },
      ]
    : [];


  const filterControl = (
    <LegacyFilters
      queryValue={searchTerm}
      filters={filters}
      appliedFilters={appliedFilters}
      onQueryChange={setSearchTerm}
      onQueryClear={handleQueryValueRemove}
      onClearAll={handleClearAll}
    >

    </LegacyFilters>
  );



  

  return (
    <Page fullWidth title="Articles de blog" compactTitle primaryAction={{ content: "Ajouter un article de blog", disabled: false, url: "/articles/new" }}>
      <Layout>
        <Layout.Section>
          <Card
          padding={{xs: '0'}}
          >
         
            <ResourceList
              resourceName={resourceName}
              items={currentArticles}
             
              renderItem={(item) => {
                const { title, mainImageScare, mainImageAlt, isPublished, id, splitId, lastModifiedText } = getArticleInfo(["title", "downloadsAllsMedia", "handle", "date", "mainImage", "content", "tags", "template", "isPublished", "id", "modified"], item, "fr-FR", 50);


                return (
                  <ResourceItem
 
                 
url={useHref("./" + splitId, { relative: "path"})}

                    id={id}
                    media={
                      <div>
                        {mainImageScare ? (
                          <Thumbnail size="large" alt={mainImageAlt} source={mainImageScare}></Thumbnail>
                        ) : (
                          <div className="PCdp6 O3SI5">
                            <svg viewBox="0 0 20 20" className="mGpXg SwMUh">
                              <path d="M12.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                              <path fillRule="evenodd" d="M9.018 3.5h1.964c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47.043.531.043 1.187.043 2v1.964c0 .813 0 1.469-.043 2-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365-.531.043-1.187.043-2 .043h-1.964c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47-.043-.531-.043-1.187-.043-2v-1.964c0-.813 0-1.469.043-2 .045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365.531-.043 1.187-.043 2-.043Zm-1.877 1.538c-.454.037-.715.107-.912.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912-.037.462-.038 1.057-.038 1.909v1.428l.723-.867a1.75 1.75 0 0 1 2.582-.117l2.695 2.695 1.18-1.18a1.75 1.75 0 0 1 2.604.145l.216.27v-2.374c0-.852 0-1.447-.038-1.91-.037-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.984-.984c-.197-.1-.458-.17-.912-.207-.462-.037-1.056-.038-1.909-.038h-1.9c-.852 0-1.447 0-1.91.038-.453-.037-.714-.107-.911-.207a2.25 2.25 0 0 1-.984-.984c-.1-.197-.17-.458-.207-.912Z"></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    }
                    accessibilityLabel={`Afficher les détails pour ${title}`}
                  >
                    <div className="Polaris-BlockStack" style={{ "--pc-block-stack-order": "column" }}>
                      <div
                        className="Polaris-InlineStack"
                        style={{
                          "--pc-inline-stack-wrap": "wrap",
                          "--pc-inline-stack-gap-xs": "var(--p-space-100)",
                          "--pc-inline-stack-flex-direction-xs": "row",
                        }}
                      >
                        <h3 className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold" tabIndex="-1">
                          {title}
                        </h3>
              
                        {!isPublished && (
                          <span className="Polaris-Badge Polaris-Badge--toneInfo">
                            <span className="Polaris-Text--root Polaris-Text--visuallyHidden">Informations</span>
                            <span className="Polaris-Text--root Polaris-Text--bodySm">Masqué</span>
                          </span>
                        )}
                      </div>
                      <span className="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--breakAlways Polaris-Text--subdued">Dernière édition : {lastModifiedText}</span>
                    </div>
                  </ResourceItem>
                );
              }}
              selectable
              hasMoreItems={articles.length !== pageArticles.length}

              selectedItems={selectedItems}
              
              onSelectionChange={setSelectedItems}
              promotedBulkActions={promotedBulkActions}
              bulkActions={bulkActions}
              filterControl={filterControl}
              totalItemsCount={articles.length}
              pagination={{
                hasNext: currentPage !== totalPages,
                hasPrevious: currentPage !== 1,
                onNext: () => handlepageChange(currentPage + 1),
                onPrevious: () => handlepageChange(currentPage - 1),
              }}
              sortValue={sortBy}
              sortOptions={[
                {label: 'Modifié (le plus récent)', value: 'modifiedDesc'},
                {label: 'Modifié (le moins récent)', value: 'modifiedAsc'},
                {label: 'Titre (A à Z)', value: 'titleAsc'},
                {label: 'Titre (Z à A)', value: 'titleDesc'},
              ]}
              onSortChange={(selected) => {
                setSortBy(selected);
                console.log(`Sort option changed to ${selected}.`);
              }}
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Dashboard;
