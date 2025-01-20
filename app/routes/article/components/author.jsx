import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";


import { useFetcherWithPromise } from "../../../utils/useFetcherWithPromise";
import { useArticle } from "../context/ArticleProvider";

import { useMetaobjectModal } from "../../metaobjects/context/ModalContext";

import {
  Icon,
  LegacyCard,
  LegacyStack,
  FormLayout,
  Popover,
  Box,
  Button,
  TextField,
  Listbox,
  AutoSelection,
  Scrollable,
  EmptySearchResult,
  InlineStack,
} from '@shopify/polaris';
import { PlusCircleIcon, SearchIcon, EditIcon} from '@shopify/polaris-icons';

import { author } from "../../../modules/initialState";
const type = author.type;
const listboxId = 'SearchableListbox' + type;
const actionValue = '__ACTION__' + type;
const addItemActionValue = '__ACTIONADDITEM__' + type;



const interval = 25;

const Author = ({ author, setAuthor }) => {

  // Modal Metaobject Provider
  const { showModal } = useMetaobjectModal();

  // Article Provider
  const { loadArticle } = useArticle();
  const fetcher = useFetcherWithPromise("metaobjectEntries" + type);

  // first load
  const [isCH, setCH] = useState(false);

  // data
   const [segments, setSegments] = useState([]);
   const [activeOptionId, setActiveOptionId] = useState(null);
   

const [showFooterAction, setShowFooterAction] = useState(true);
const [query, setQuery] = useState(String(author.name));
const [lazyLoading, setLazyLoading] = useState(true);
const [willLoadMoreResults, setWillLoadMoreResults] = useState(true);
const [visibleOptionIndex, setVisibleOptionIndex] = useState(6);


const [filteredSegments, setFilteredSegments] = useState([]);





// show all
const handleClickShowAll = () => {
  setShowFooterAction(false);
  setVisibleOptionIndex(segments.length);
};

// add entrie
const handleClickModalShow = (id, handle) => {
  showModal(type, id, handle);
  setPopoverActive(false);
              setCH(false);
};

const handleFilterSegments = (query) => {
  const nextFilteredSegments = segments.filter((segment) => {
    return segment.label
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase().trim());
  });

  setFilteredSegments(nextFilteredSegments);
};

const handleQueryChange = (query) => {
  setQuery(query);

  if (query && query.length >= 2) handleFilterSegments(query);
};

// clear query button
const handleQueryClear = () => {
  handleQueryChange('');
};

const handleSegmentSelect = (segmentIndex) => {
  if (segmentIndex === actionValue) {
    return handleClickShowAll();
  }

  if (segmentIndex === addItemActionValue) {
      return handleClickModalShow(null, null);
    }

    const element = segments.find(item => item.value === segmentIndex);

    setAuthor({...author, name: element.label, handle: element.handle, id: element.id});
    handleQueryChange(element.label);
};

const handleActiveOptionChange = (_, domId) => {
  setActiveOptionId(domId);
};

// This is just to illustrate lazy loading state vs loading state. This is an
// example, so we aren't fetching from GraphQL. You'd use `pageInfo.hasNextPage`
// from your GraphQL query data instead of this fake "willLoadMoreResults" state
// along with setting `first` your GraphQL query's variables to your app's
// default max edges limit (e.g., 250).

const handleLazyLoadSegments = () => {
  if (willLoadMoreResults && !showFooterAction) {
    setLazyLoading(true);

    const options = query ? filteredSegments : segments;

    setTimeout(() => {
      const remainingOptionCount = options.length - visibleOptionIndex;
      const nextVisibleOptionIndex =
        remainingOptionCount >= interval
          ? visibleOptionIndex + interval
          : visibleOptionIndex + remainingOptionCount;

      setLazyLoading(false);
      setVisibleOptionIndex(nextVisibleOptionIndex);

      if (remainingOptionCount <= interval) {
        setWillLoadMoreResults(false);
      }
    }, 1000);
  }
};


// get data
const handleAuthor = () => {
  setPopoverActive(true);

  async function loadAuthor() {
    try {
      if (!isCH) {
          setLazyLoading(true);


        const { entries, pageInfo } = await loadArticle(
          fetcher,
          null,
          "metaobjectDefinitionAuthor",
          { first: 250, type: type },
          false,
        );

        // Mise à jour des états
        setCH(true);
        setSegments(entries || []);
        setActiveOptionId(entries?.[0]?.id);
        const element = entries.find(item => item.value === author.value);
        setAuthor({...author, name: element.label, handle: element.handle, id: element.id});
      }
    } catch (error) {
      console.error("Erreur lors du chargement des auteurs :", error);
    } finally {

      setLazyLoading(false);
    }
  }

  loadAuthor();
};



const textFieldMarkup = (
    <TextField
      onFocus={handleAuthor}
     
      clearButton

      label="Auteur"
        placeholder={author.name ? author.name : "Rechercher des entrées"}
      autoComplete="off"
      value={query}
      prefix={<Icon source={SearchIcon} />}
      ariaActiveDescendant={activeOptionId}
      ariaControls={listboxId}
      onChange={handleQueryChange}
      onClearButtonClick={handleQueryClear}
    />

);

const segmentOptions = query ? filteredSegments : segments;


const ListboxItem = ({ label }) => {
  return (
  <Text variant="bodySm" tone="subdued" as="span">
  <InlineStack
    align="space-between"
    blockAlign="start"
    gap={{ xs: "200" }}
    direction={{ xs: "row" }}
  >
    <Text variant="bodyMd" tone="subdued" as="span">
    {label}
    </Text>
    <Box>
      <Button
        icon={EditIcon}
        variant="plain"
        size="medium"
        textAlign="center"
        accessibilityLabel="Modifier l'entrée"
        onClick={() => {
         handleClickModalShow(null, null);

       }}
      ></Button>
    </Box>
  </InlineStack>
</Text>);
};

const segmentList =
  segmentOptions.length > 0
    ? segmentOptions
        .slice(0, visibleOptionIndex)
        .map(({label, id, value}) => {
          const selected = author.id === value;

          return (
            <Listbox.Option key={id} value={value} selected={selected}>

<Listbox.TextOption selected={selected}>
                  
                
              <InlineStack
    align="space-between"
    blockAlign="start"
    gap={{ xs: "200" }}
    direction={{ xs: "row" }}
  >
            
            
             <Button
                icon={EditIcon}
                variant="plain"
                size="small"
                accessibilityLabel="Modifier l'entrée"
                onClick={() => handleClickModalShow(id, value)}
              />
             
           
             {label}
             </InlineStack>
             </Listbox.TextOption>
            </Listbox.Option>
          );
        })
    : null;


    

const showAllMarkup = showFooterAction && segments.length > visibleOptionIndex  ? (
  <Listbox.Action value={actionValue}>
    <span style={{color: 'var(--p-color-text-emphasis)'}}>
      Montrer les {segments.length} entrées
    </span>
  </Listbox.Action>
) : null;

const lazyLoadingMarkup = lazyLoading ? (
  <Listbox.Loading
    accessibilityLabel={`${
      query ? 'Filtering' : 'Loading'
    } customer segments`}
  />
) : null;

const noResultsMarkup =
  segmentOptions.length === 0 && query?.trim() ? (
    <EmptySearchResult
      title=""
      description={`Aucun résultats trouvé pour "${query}"`}
    />
  ) : null;

const listboxMarkup = (
  <Listbox
  autoSelection={AutoSelection.FirstSelected}


    enableKeyboardControl
    
    accessibilityLabel="Rechercher et selectionner une entrée"
    customListId={listboxId}
    onSelect={handleSegmentSelect}
    onActiveOptionChange={handleActiveOptionChange}
  >

<Listbox.Action value={addItemActionValue}>
      <LegacyStack spacing="tight">
        <Icon source={PlusCircleIcon} tone="base" />
        <div>{query
              ? "Ajouter « " + query + " »"
              : "Ajouter une nouvelle entrée"}</div>
      </LegacyStack>
    </Listbox.Action>

    {segmentList}
    {showAllMarkup}
    {noResultsMarkup}
    {lazyLoadingMarkup}
  </Listbox>
);





const [popoverActive, setPopoverActive] = useState(false);

const handleClosePicker = () => {
  setPopoverActive(false);
  handleQueryClear();
};

return (
<div>
    <h2
      className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold"
      tabIndex="-1"
    >
      Organisation
    </h2>
    <div
      className="Polaris-BlockStack"
      style={{
        "--pc-block-stack-order": "column",
        "--pc-block-stack-gap-xs": "var(--p-space-400)",
      }}
    >
      <FormLayout>

  



<Popover



preferInputActivator={false}
      active={popoverActive}
      fullWidth
      activator={textFieldMarkup}
      
      ariaHaspopup="listbox"
      preferredAlignment="center"
      autofocusTarget="none"
      preferredPosition="below"

      onClose={handleClosePicker}
    >
      <Popover.Pane fixed>
   
        

          <Scrollable
            shadow
        
            onScrolledToBottom={handleLazyLoadSegments}
          >

      <Box

      paddingInline={0}
      paddingBlock={{xs: '200'}}
      
      >
            {listboxMarkup}
            </Box>

          </Scrollable>

  


       
      </Popover.Pane>
    </Popover>

     </FormLayout>
        </div>
      </div>


 
);
}

export default Author;