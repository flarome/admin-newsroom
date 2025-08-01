import { useState, useCallback, useEffect, useRef, Fragment } from "react";
import {
  Icon,
  Autocomplete,
  TextContainer,
  FormLayout,
  Text,
  Button,
} from "@polaris/npm";
import { PlusCircleIcon, SearchIcon, EditIcon } from "@shopify/polaris-icons";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import _ from "lodash";

import { prefix } from "../config/ids";
import { form as FieldsMap } from "../../../data/article/config/fieldMap";
import { form as MetaobjectsRefsMap } from "../../../data/article/config/metaobjectsRefs";
import {
  MetaobjectEntriesModalProvider,
  useMetaobjectEntriesModal,
} from "../../../modules/metaobjects/entries/context/MetaobjetsEntriesModalContext";
import createMetaobjectFetcher from "../services/metaobjectAutocomplete";

export const fieldPath = FieldsMap.category;
const FieldMetaobjectsRefs = MetaobjectsRefsMap[fieldPath];

function formatEntrie(node) {
  return {
    value: node.id,
    label: extractLabel(node),
    color: node.fields?.find((f) => f.key === "color")?.value ?? null,
  };
}

function extractLabel(node) {
  const { displayName, handle, fields } = node;
  if (displayName && displayName !== handle) return displayName;
  const getField = (key) => fields?.find((f) => f.key === key)?.value;
  return getField("title") || displayName || handle || node.id;
}

const categoryFetcher = createMetaobjectFetcher({
  format: formatEntrie,
});

const Category = () => {
  return (
    <MetaobjectEntriesModalProvider
      metaobjectDefinitionType={FieldMetaobjectsRefs}
    >
      <Main />
    </MetaobjectEntriesModalProvider>
  );
};

const Main = () => {
  const { control, setValue, register } = useFormContext();
  const selectedOption = useWatch({ control, name: fieldPath }) || null;
  const { load } = useMetaobjectEntriesModal();

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputValueModif, setInputValueModif] = useState(false);
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [willLoadMoreResults, setWillLoadMoreResults] = useState(true);
  const [allOptionsMap, setAllOptionsMap] = useState(new Map());
  const [preloadLabel, setPreloadLabel] = useState(null);

  const currentRequestId = useRef(0);

  useEffect(() => {
    register(fieldPath, {
      required: "Ce champ est requis",
    });
  }, [register]);

  useEffect(() => {
    const preload = async () => {
      if (selectedOption) {
        const { entries } = await categoryFetcher.preload(
          FieldMetaobjectsRefs,
          [selectedOption],
        );
        const label = entries?.[0]?.label;
        if (label) {
          setPreloadLabel(label);

          if (selectedOption ===  entries?.[0]?.value && !inputValueModif) {
            setInputValue(label);
          }
        }
      }
    };
    preload();
  }, [selectedOption, inputValueModif]);

  const fetchEntries = useCallback(
    async (search = "", cursor = null, append = false) => {
      const requestId = ++currentRequestId.current;
      setLoading(true);

      try {
        const { entries, pageInfo } = await categoryFetcher.get(
          FieldMetaobjectsRefs,
          250,
          search,
          cursor,
        );

        if (currentRequestId.current !== requestId) return;

        setOptions((prev) => (append ? [...prev, ...entries] : entries));
        setPageInfo(pageInfo);
        setWillLoadMoreResults(Boolean(pageInfo?.hasNextPage));

        setAllOptionsMap((prev) => {
          const updated = new Map(prev);
          entries.forEach(({ value, label, color }) => {
            if (value && label) {
              updated.set(value, { label, color });
            }
          });
          return updated;
        });

        setAllOptionsMap((prev) => {
          const updated = new Map(prev);
          entries.forEach(({ value, label }) => {
            if (value && label) updated.set(value, label);
          });
          return updated;
        });
      } catch (err) {
        console.error("🔴 fetchEntries error:", err);
      } finally {
        if (currentRequestId.current === requestId) setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const handleSearch = useCallback(
    (value) => {
      setInputValue(value);
      fetchEntries(value);
    },
    [fetchEntries],
  );

  const handleClickModalShow = useCallback(
    async (id) => {
      const result = await load(id);
      if (!result) return;

      const entrie = formatEntrie(result);

      const { value, label } = entrie;
      setValue(fieldPath, value, {
        shouldValidate: true,
        shouldDirty: true,
      });

      setOptions((prev) => {
        const filtered = prev.filter((opt) => opt.value !== value);

        return [entrie, ...filtered];
      });

      setAllOptionsMap((prev) => {
        const updated = new Map(prev);

        if (value && label) {
          if (updated.has(value)) {
            updated.delete(value);
          }

          updated.set(value, label);
        } else {
          console.warn("⚠️ Entrie invalide pour map :", entrie);
        }

        return updated;
      });

      setInputValue(label);
    },
    [selectedOption, load, setValue],
  );

  const handleScrolledToBottom = useCallback(() => {
    if (willLoadMoreResults && !loading) {
      fetchEntries(inputValue, pageInfo?.endCursor, true);
    }
  }, [willLoadMoreResults, loading, inputValue, fetchEntries, pageInfo]);

  
  return (
    <FormLayout>
      <Controller
        control={control}
        name={fieldPath}
        defaultValue={null}
        rules={{ required: "Ce champ est requis" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const selectedLabel = value
            ? allOptionsMap.get(value) || preloadLabel || ""
            : "";

        const inputLoading = !allOptionsMap.get(value) && selectedOption === value;
          return (
            <Autocomplete
              allowMultiple={false}
              options={options}
              selected={value ? [value] : []}
              loading={loading}
              onSelect={([val]) => {
                const label = allOptionsMap.get(val) || "";
                onChange(val);
                setInputValue(label);
              }}
              onLoadMoreResults={handleScrolledToBottom}
              willLoadMoreResults={willLoadMoreResults}
              textField={
                <Autocomplete.TextField
                disabled={inputLoading}
                loading={inputLoading}
                  name={`${prefix}.${fieldPath}`}
                  id={`${prefix}:${fieldPath}`}
                  prefix={ <Icon source={SearchIcon} /> }
                  suffix={
                    value &&
                    inputValue === selectedLabel && (
                      <div style={{ display: "flex" }}>
                        <Button
                          icon={EditIcon}
                          onClick={() => handleClickModalShow(selectedOption)}
                          variant="monochromePlain"
                          accessibilityLabel="Modifier cette category"
                        />
                      </div>
                    )
                  }
                  onChange={(v) => {
                    handleSearch(v);
                    if (!setInputValueModif) setInputValueModif(true);
                  }}
                  onBlur={() => {
                    const label = allOptionsMap.get(value) || "";
                    setInputValue(label);
                  }}
                  value={inputLoading ?  "Chargement en cours..."  : inputValue}
                  error={error?.message}
                  label="Catégorie"
                  placeholder="Rechercher une catégorie"
                  autoComplete="off"
                  requiredIndicator
                />
              }
              emptyState={
                <Fragment>
                  <Icon source={SearchIcon} />
                  <div style={{ textAlign: "center" }}>
                    <TextContainer>Aucun résultat trouvé</TextContainer>
                  </div>
                </Fragment>
              }
              actionBefore={{
                content: "Ajouter une nouvelle catégorie",
                helpText: inputValue,
                icon: PlusCircleIcon,
                onAction: () => handleClickModalShow(),
                accessibilityLabel: "Ajouter une catégorie",
              }}
            />
          );
        }}
      />
    </FormLayout>
  );
};

export default Category;
