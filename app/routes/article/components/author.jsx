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
  Autocomplete,
  Tag,
  LegacyStack,
  FormLayout,
  Popover,
  Box,
  Button,
  TextField,
  Listbox,
  AutoSelection,

  EmptySearchResult,
  InlineStack,
} from '@shopify/polaris';
import { PlusCircleIcon, SearchIcon } from '@shopify/polaris-icons';

const type = "press_contacts";


const Author = ({ author, setAuthor, contactPresse: selectedOptions, setContactPresse: setSelectedOptions }) => {

  // Modal Metaobject Provider
  const { showModal } = useMetaobjectModal();

  // Article Provider
  const { loadArticle } = useArticle();
  const fetcher = useFetcherWithPromise("metaobjectEntries" + type);

  // first load
  const [isCH, setCH] = useState(false);

  
  // data


   const [deselectedOptions, setDeselectedOptions] = useState([]);
   const [inputValue, setInputValue] = useState('');
   const [options, setOptions] = useState([]);
   const [loading, setLoading] = useState(true);
 

// get data
const handleAuthor = () => {

  async function loadAuthor() {
    try {
      if (!isCH) {
        setLoading(true);


        const { entries } = await loadArticle(
          fetcher,
          null,
          "metaobjectDefinitionAuthor",
          { first: 250, type: type },
          false,
        );

        // Mise à jour des états
        setCH(true);
         setOptions(entries || []);
        setDeselectedOptions(entries || []);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des auteurs :", error);
    } finally {
      setLoading(false);
    }
  }

  loadAuthor();
};

   // add entrie

const handleClickModalShow = (id, handle) => {
  showModal(type, id, handle);
              setCH(false);
};

   const updateText = useCallback(
    (value) => {
      setInputValue(value);

      if (value === '') {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, 'i');
      const resultOptions = deselectedOptions.filter((option) =>
        option.label.match(filterRegex),
      );

      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const removeTag = useCallback(
    (tag) => () => {
      const options = [...selectedOptions];
      options.splice(options.indexOf(tag), 1);
      setSelectedOptions(options);
    },
    [selectedOptions],
  );



  const verticalContentMarkup =
    selectedOptions.length > 0 ? (
      <LegacyStack spacing="extraTight" alignment="center">
        {selectedOptions.map((option) => {
        
       // Rechercher l'élément correspondant dans deselectedOptions
  const label = deselectedOptions.find((edge) => edge.value === option)?.label;

          return (
            <Tag key={`option${option}`} onRemove={removeTag(option)} 

            onClick={() =>
              handleClickModalShow(option, null)
            }
            
           >
              {label || option}
            </Tag>
          );
        })}
      </LegacyStack>
    ) : null;

  const textField = (
    <Autocomplete.TextField
     prefix={<Icon source={SearchIcon} />}
      onChange={updateText}
      value={inputValue}

      onFocus={handleAuthor}

      label="Auteur"
        placeholder={"Rechercher des entrées"}
      verticalContent={verticalContentMarkup}
      autoComplete="off"
  
    />
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
        accessibilityLabel: 'Ajouter une nouvelle entrée pour le metaobject, press_contacts',
      
        content: 'Ajouter une nouvelle entrée',
        helpText: inputValue,
        icon: PlusCircleIcon,
        onAction: () => {
          handleClickModalShow(null, null);
        },
      }}
        allowMultiple
        options={options}
        loading={loading}
        selected={selectedOptions}
        textField={textField}
        onSelect={setSelectedOptions}

      />



     </FormLayout>
        </div>
      </div>


 
);

}


export default Author;