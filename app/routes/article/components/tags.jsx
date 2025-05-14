import React, { useState, useMemo, useCallback } from "react";

import { Autocomplete, Icon, Box, BlockStack, InlineStack } from "@shopify/polaris";
import { XSmallIcon, PlusCircleIcon } from "@shopify/polaris-icons";

const Tags = ({ allTags, tags: selectedOptions, setTags }) => {
 
  const deselectedOptions = useMemo(() => allTags.map(tag => ({ value: tag, label: tag })), [allTags]);

  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  const updateText = useCallback(
    value => {
      setInputValue(value);

      if (value === "") {
        setOptions(deselectedOptions);
        return;
      }

      const filterRegex = new RegExp(value, "i");
      const resultOptions = deselectedOptions.filter(option => option.label.match(filterRegex));

      setOptions(resultOptions);
    },
    [deselectedOptions],
  );

  const placeholder = useMemo(() => {
    if (!allTags || allTags.length === 0) return "";

    // Récupère les trois premières valeurs, met la première lettre en majuscule
    const formattedValues = allTags
      .slice(0, 3) // Prend les trois premiers éléments
      .map(item => item.charAt(0).toUpperCase() + item.slice(1)); // Met la première lettre en majuscule

    // Concatène les éléments avec ', ' et ajoute '...' si le tableau a plus de trois éléments
    return formattedValues.join(", ") + (allTags.length > 3 ? "..." : "");
  }, [allTags]);

 /* const handleAddTag = e => {
    if (e.key === "Enter" && e.target.value.trim()) {
      onAdd(e.target.value);
    }
  };
  onKeyDown={e => handleAddTag(e)}*/

  const removeTag = tag => {
    setTags(selectedOptions.filter(t => t !== tag));
  };

  const onAdd = tag => {
    const trimmedTag = tag.trim(); // Supprimer les espaces et convertir en minuscule

    // Vérifier si le tag existe déjà (insensible à la casse)
    if (!selectedOptions.some(existingTag => existingTag.trim() === trimmedTag)) {
      setTags([...selectedOptions, trimmedTag]); // Ajouter le tag avec le trim appliqué
    }
    setInputValue(""); // Réinitialiser le champ d'entrée
  };

  const hasTagInput = useMemo(() => {
    return inputValue && inputValue !== "";
  }, [inputValue]);
  return (
    <Box paddingBlockStart={{ xs: "400", sm: "500" }}>
      <BlockStack gap={{ xs: "400", sm: "500" }}>
        <InlineStack align="space-between" blockAlign="baseline" wrap gap={{ xs: "100" }} direction={{ xs: "row" }}>
          <h3 className="Polaris-Text--root Polaris-Text--headingSm" tabIndex="-1">
            Balises
          </h3>

      
        </InlineStack>
        <div>
          <div>
            <Autocomplete
              allowMultiple
              actionBefore={
                hasTagInput && allTags.every(tag => tag.trim().toLowerCase() !== inputValue.trim().toLowerCase())
                  ? {
                      accessibilityLabel: "Ajouter le tag " + inputValue,
                      content: `Ajouter ${inputValue}`,
                      icon: PlusCircleIcon,
                      wrapOverflow: true,
                      onAction: () => {
                        onAdd(inputValue);
                      },
                    }
                  : undefined
              }
              options={options}
              selected={selectedOptions}
              preferredPosition="above"
              textField={<Autocomplete.TextField onChange={updateText} label="Modifier les balises" labelHidden value={inputValue} placeholder={placeholder} autoComplete="off" autoCapitalize="off"  type="text" maxLength="255" />}
              onSelect={setTags}
              listTitle={options && options.length > 0 ? "Balises fréquemment utilisées" : undefined}
            />
          </div>
        </div>

        {selectedOptions.length > 0 && (
          <ul className="_OOn3">
            {selectedOptions.map(option => {
              return (
                <li key={`tag${option}`} className="RLCPg">
                  <span className="B2aXA Fxhth">
                    <span title={option}>{option}</span>
                    <button onClick={() => removeTag(option)} type="button" aria-label="Retirer" className="TgNBI">
                      <Icon source={XSmallIcon} tone="legacy-inherit" />
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </BlockStack>
    </Box>
  );
};

export default Tags;
