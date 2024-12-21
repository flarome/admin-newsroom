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
  FormLayout,
  Tooltip,
  TextField,
  Popover,
  Button,
  Modal,
  Scrollable,
  Box,
  InlineStack,
  Text,
  Divider,
  Icon,
  LegacyCard,
  Listbox,
  AutoSelection,
  Autocomplete,
  EmptySearchResult,
} from "@shopify/polaris";
import { PlusCircleIcon, SearchIcon } from "@shopify/polaris-icons";

const type = "press_contacts"
const Author = ({ author, setAuthor }) => {
  const { showModal } = useMetaobjectModal();
  // Article Provider
  const { loadArticle } = useArticle();

  const fetcher = useFetcherWithPromise("metaobjectEntries");

  const [isCH, setCH] = useState(false);

  const [deselectedOptions, setDeselectedOptions] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const [options, setOptions] = useState(deselectedOptions);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setOptions(deselectedOptions);
  }, [deselectedOptions]); // Déclenche l'effet chaque fois que `isModified` change

  const handleAuthor = () => {
    async function loadAuthor() {
      try {
        if (!isCH) {
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
          setDeselectedOptions(entries);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des auteurs :", error);
      } finally {
        setLoading(false);
      }
    }

    loadAuthor();
  };

  const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (!loading) {
        setLoading(true);
      }

      setTimeout(() => {
        if (value === "") {
          setOptions(deselectedOptions);
          setLoading(false);
          return;
        }
        const filterRegex = new RegExp(value, "i");
        const resultOptions = options.filter((option) =>
          option.label.match(filterRegex),
        );
        setOptions(resultOptions);
        setLoading(false);
      }, 300);
    },
    [deselectedOptions, loading, options],
  );

  const updateSelection = useCallback(
    (selected) => {
      const selectedText = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected);
      setInputValue(selectedText[0] || "");
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      onFocus={handleAuthor}
      label="Auteur"
      value={inputValue}
      prefix={<Icon source={SearchIcon} />}
      placeholder="Rechercher des entrées"
      autoComplete="off"
    />
  );

  const emptyState = (
    <Box
      paddingBlockStart={{ xs: "200" }}
      paddingBlockEnd={{ xs: "150" }}
      paddingInline={{ xs: "300" }}
    >
      <InlineStack align="center" wrap direction={{ xs: "row" }}>
        <Box paddingBlock={{ xs: "400" }} paddingInline={{ xs: "400" }}>
          <Text as="span" variant="bodyMd" tone="subdued">
            Aucune entrée trouvée pour Mise en page
          </Text>
        </Box>
      </InlineStack>
    </Box>
  );

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
          <Autocomplete
            actionBefore={{
              accessibilityLabel: "Ajouter une nouvelle entrée",

              content: inputValue
                ? "Ajouter « " + inputValue + " »"
                : "Ajouter une nouvelle entrée",
              icon: PlusCircleIcon,
              wrapOverflow: true,

              onAction: () => {
                showModal(type, null)
              },
            }}
            options={options}
            emptyState={emptyState}
            selected={selectedOptions}
            onSelect={updateSelection}
            loading={loading}
            textField={textField}
          />

          
        </FormLayout>
      </div>
    </div>
  );
};

export default Author;
