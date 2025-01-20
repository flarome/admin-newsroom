import React, {
    useState,
    useEffect,
    useMemo,
    useRef,
    useCallback,
  } from "react";


import { useFetcherWithPromise } from "../../../utils/useFetcherWithPromise";
import { useArticle } from "../context/ArticleProvider";


import {
    Icon,
    LegacyCard,
    TextField,
    Listbox,
    AutoSelection,
    Scrollable,
    EmptySearchResult,
    InlineStack,
  } from '@shopify/polaris';
import { PlusCircleIcon, SearchIcon, EditIcon} from '@shopify/polaris-icons';

const type = "press_contacts"
const actionValue = '__ACTION__';
const addItemActionValue = '__ACTIONADDITEM__';

const segments = [
  {
    label: 'All customers',
    id: 'gid://shopify/CustomerSegment/1',
    value: '0',
  },
  {
    label: 'VIP customers',
    id: 'gid://shopify/CustomerSegment/2',
    value: '1',
  },
  {
    label: 'New customers',
    id: 'gid://shopify/CustomerSegment/3',
    value: '2',
  },
  {
    label: 'Abandoned carts - last 30 days',
    id: 'gid://shopify/CustomerSegment/4',
    value: '3',
  },
  {
    label: 'Wholesale customers',
    id: 'gid://shopify/CustomerSegment/5',
    value: '4',
  },
  {
    label: 'Email subscribers',
    id: 'gid://shopify/CustomerSegment/6',
    value: '5',
  },
  {
    label: 'From New York',
    id: 'gid://shopify/CustomerSegment/7',
    value: '6',
  },
  {
    label: 'Repeat buyers',
    id: 'gid://shopify/CustomerSegment/8',
    value: '7',
  },
  {
    label: 'First time buyers',
    id: 'gid://shopify/CustomerSegment/9',
    value: '8',
  },
  {
    label: 'From Canada',
    id: 'gid://shopify/CustomerSegment/10',
    value: '9',
  },
  {
    label: 'Bought in last 60 days',
    id: 'gid://shopify/CustomerSegment/11',
    value: '10',
  },
  {
    label: 'Bought last BFCM',
    id: 'gid://shopify/CustomerSegment/12',
    value: '11',
  },
];



const interval = 25;

function ListboxWithSearchExample() {

     const [segments, setSegments] = useState([]);


  const [showFooterAction, setShowFooterAction] = useState(true);
  const [query, setQuery] = useState('');
  const [lazyLoading, setLazyLoading] = useState(true);
  const [willLoadMoreResults, setWillLoadMoreResults] = useState(true);
  const [visibleOptionIndex, setVisibleOptionIndex] = useState(6);
  const [activeOptionId, setActiveOptionId] = useState(segments[0].id);
  const [selectedSegmentIndex, setSelectedSegmentIndex] = useState(0);
  const [filteredSegments, setFilteredSegments] = useState([]);

  const handleClickShowAll = () => {
    setShowFooterAction(false);
    setVisibleOptionIndex(segments.length);
  };

  const handleClickModalShow = (id, handle) => {
    showModal(type, id, handle);
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

    if (query.length >= 2) handleFilterSegments(query);
  };

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

    setSelectedSegmentIndex(Number(segmentIndex));
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

  const { showModal } = useMetaobjectModal();
    // Article Provider
    const { loadArticle } = useArticle();
  
    const fetcher = useFetcherWithPromise("metaobjectEntries");

  const [isCH, setCH] = useState(false);

  const handleAuthor = () => {
    setPopoverActive(true);

    async function loadAuthor() {
      try {
        if (!isCH) {
            setLazyLoading(true);
          setLoading(true);

          const { entries, pageInfo } = await loadArticle(
            fetcher,
            null,
            "metaobjectDefinitionAuthor",
            { first: 250, type: type },
            false,
          );

          // Mise à jour des états
          setCH(true);
          setSegments(entries);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des auteurs :", error);
      } finally {
        setLoading(false);
        setLazyLoading(false);
      }
    }

    loadAuthor();
  };

  const listboxId = 'SearchableListbox';

  const textFieldMarkup = (
    <div style={{padding: '12px'}}>
      <TextField
        onFocus={handleAuthor}
        focused={showFooterAction}
        clearButton
        labelHidden
        label="Auteur"
          placeholder="Rechercher des entrées"
        autoComplete="off"
        value={query}
        prefix={<Icon source={SearchIcon} />}
        ariaActiveDescendant={activeOptionId}
        ariaControls={listboxId}
        onChange={handleQueryChange}
        onClearButtonClick={handleQueryClear}
      />
    </div>
  );

  const segmentOptions = query ? filteredSegments : segments;

  const segmentList =
    segmentOptions.length > 0
      ? segmentOptions
          .slice(0, visibleOptionIndex)
          .map(({label, id, value}) => {
            const selected = segments[selectedSegmentIndex].value === value;

            return (
              <Listbox.Option key={id} value={value} selected={selected}>
                <Listbox.TextOption selected={selected}>

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
                                                handleClickModalShow(id, value);
                                    
                                              }}
                                             ></Button>
                                           </Box>
                                         </InlineStack>
                                       </Text>
                  
                </Listbox.TextOption>
              </Listbox.Option>
            );
          })
      : null;

  const showAllMarkup = showFooterAction ? (
    <Listbox.Action value={actionValue}>
      <span style={{color: 'var(--p-color-text-emphasis)'}}>
        Show all 111 segments
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
    segmentOptions.length === 0 ? (
      <EmptySearchResult
        title=""
        description={`No segments found matching "${query}"`}
      />
    ) : null;

  const listboxMarkup = (
    <Listbox
      enableKeyboardControl
      autoSelection={AutoSelection.FirstSelected}
      accessibilityLabel="Search for and select a customer segment"
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
        active={popoverActive}
        activator={textFieldMarkup}
        ariaHaspopup="listbox"
        preferredAlignment="center"
        autofocusTarget="first-node"
        preferredPosition="below"
        onClose={handleClosePicker}
      >
        <Popover.Pane fixed>
          <div
            style={{
              alignItems: 'stretch',
              borderTop: '1px solid #DFE3E8',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'stretch',
              position: 'relative',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
          

            <Scrollable
              shadow
              style={{
                position: 'relative',
                width: '310px',
                height: '292px',
                padding: 'var(--p-space-200) 0',
                borderBottomLeftRadius: 'var(--p-border-radius-200)',
                borderBottomRightRadius: 'var(--p-border-radius-200)',
              }}
              onScrolledToBottom={handleLazyLoadSegments}
            >
              {listboxMarkup}
            </Scrollable>

    


          </div>
        </Popover.Pane>
      </Popover>

       </FormLayout>
          </div>
        </div>


   
  );
}