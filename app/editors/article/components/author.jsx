import { useState, useCallback, useEffect, useRef, Fragment } from "react";
import {
  Icon,
  Autocomplete,
  Tag,
  TextContainer,
  LegacyStack,
  FormLayout,
  InlineStack,
} from "@shopify/polaris";
import { PlusCircleIcon, SearchIcon, EditIcon } from "@shopify/polaris-icons";
import { useFormContext, Controller, useWatch } from "react-hook-form";
import _ from "lodash";

import { useMetaobjectModal } from "../../../routes/metaobjects/context/ModalContext";
import { get as fetchMetaobjects, preload as preloadMetaobjects } from "../api/pressContacts";

import { prefix } from "../config/ids";
import { form as FieldsMap } from "../config/fieldMap";
import { form as MetaobjectsRefsMap } from "../config/metaobjectsRefs";

export const fieldPath = FieldsMap.contactPresse;
const FieldMetaobjectsRefs = MetaobjectsRefsMap[fieldPath];

const Author = () => {
  const { control, setValue, register } = useFormContext();
  const selectedOptions = useWatch({ control, name: fieldPath }) || [];
  const { showModal } = useMetaobjectModal();

  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [willLoadMoreResults, setWillLoadMoreResults] = useState(true);
  const [allOptionsMap, setAllOptionsMap] = useState(new Map());

  const [preloadIDS, setPreloadIDS] = useState(selectedOptions || []);
  const [preloadOptions, setPreloadOptions] = useState(new Map());

useEffect(() => {
  const loadPreload = async () => {
    if (preloadIDS.length > 0) {






      const { entries } = await preloadMetaobjects(
        FieldMetaobjectsRefs,
        preloadIDS,
      );

      const preloadMap = new Map();
      entries.forEach(({ value, label }) => {
        if (value && label) preloadMap.set(value, label);
      });

      setPreloadOptions(preloadMap);
      setPreloadIDS([]);
    }
  };

  loadPreload();
}, []);

  const currentRequestId = useRef(0);

  useEffect(() => {
    register(fieldPath, {
      required: "Ce champ est requis",
      validate: (val) => (val?.length > 0 ? true : "Ce champ est requis"),
    });
  }, [register]);

  const fetchEntries = useCallback(
    async (search = "", cursor = null, append = false) => {
      const requestId = ++currentRequestId.current;
      setLoading(true);

      try {
        const { entries, pageInfo } = await fetchMetaobjects(
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

  const handleRemoveTag = useCallback(
    (tag) => () => {
      setValue(
        fieldPath,
        selectedOptions.filter((v) => v !== tag),
        { shouldValidate: true, shouldDirty: true },
      );
    },
    [selectedOptions, setValue],
  );

  const handleClickModalShow = useCallback(
    (id = null, handle = null) => {
      showModal(FieldMetaobjectsRefs, id, handle);
      setInputValue("");
    },
    [showModal],
  );

  const handleScrolledToBottom = useCallback(() => {
    if (willLoadMoreResults && !loading) {
      fetchEntries(inputValue, pageInfo?.endCursor, true);
    }
  }, [willLoadMoreResults, loading, inputValue, fetchEntries, pageInfo]);

  const verticalContentMarkup = (() => {
    if (selectedOptions.length > 0) {
      return (
        <LegacyStack spacing="extraTight" alignment="center">
          {selectedOptions.map((option) => {
            const label =
              allOptionsMap.get(option) ||
              preloadOptions.get(option);

            const isLoading = !allOptionsMap.get(option) && preloadIDS.includes(option);

            return (
              <LegacyStack key={option} alignment="center" spacing="extraTight">
                <Tag onRemove={handleRemoveTag(option)}>
                  <InlineStack gap={{ xs: "100" }}>
                    {isLoading ? (
                      <div
                        className="Polaris-SkeletonDisplayText Polaris-SkeletonDisplayText--sizeSmall"
                        style={{ height: 16, width: 60, background: "#E0E0E0", borderRadius: 4 }}
                      />
                    ) : (
                      <span>{label || option}</span>
                    )}
                    {!isLoading && (
                      <button
                        type="button"
                        onClick={() => handleClickModalShow(option)}
                        className="Polaris-Tag__Button"
                        aria-label={`Modifier ${label || option}`}
                      >
                        <Icon source={EditIcon} tone="base" />
                      </button>
                    )}
                  </InlineStack>
                </Tag>
              </LegacyStack>
            );
          })}
        </LegacyStack>
      );
    }
    return null;
  })();

  return (
    <FormLayout>
      <Controller
        control={control}
        name={fieldPath}
        defaultValue={[]}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Autocomplete
            preferredPosition="mostSpace"
            allowMultiple
            options={options}
            selected={value || []}
            loading={loading}
            onSelect={(val) => {
              setInputValue("");
              onChange(val);
            }}
            onLoadMoreResults={handleScrolledToBottom}
            willLoadMoreResults={willLoadMoreResults}
            textField={
              <Autocomplete.TextField
                name={`${prefix}.${fieldPath}`}
                id={`${prefix}:${fieldPath}`}
                prefix={<Icon source={SearchIcon} />}
                onChange={handleSearch}
                value={inputValue}
                error={error?.message}
                label="Contact presse"
                placeholder="Rechercher des auteurs"
                verticalContent={verticalContentMarkup}
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
              content: "Ajouter une nouvelle entrée",
              helpText: inputValue,
              icon: PlusCircleIcon,
              onAction: () => handleClickModalShow(),
              accessibilityLabel:
                "Ajouter une nouvelle entrée de contact presse",
            }}
          />
        )}
      />
    </FormLayout>
  );
};

export default Author;
