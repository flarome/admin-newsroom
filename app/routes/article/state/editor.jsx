import React, { useState, useEffect, useMemo, useCallback } from "react";

// Remix
import { useNavigate } from "@remix-run/react"; // Utiliser fetcher pour déclencher l'action
import { SaveBar, useAppBridge } from "@shopify/app-bridge-react";

import { useFetcherWithPromise } from "../../../utils/useFetcherWithPromise";
import { useArticle } from "../context/ArticleProvider";

// Backend API
import { useHref } from "@remix-run/react";

// Lodash
import * as lodash from "lodash";
const { isEqual } = lodash;

// Polaris
import {
  Page,
  Badge,
  Layout,
  TextField,
  FormLayout,
  Modal,
  PageActions,
  Card,
  Box,
  BlockStack,
  InlineStack,
  Text,
  Button,
  Bleed,
  Divider,
} from "@shopify/polaris";
import { ViewIcon } from "@shopify/polaris-icons";

import { useToast } from "../../../context/toast";
// Global components
import EditorText from "../../../tinymce/Editor";

// Local components
import Author from "../components/author";
import Template from "../components/template";
import Tags from "../components/tags";
import Banner from "../components/banner";
import Extrait from "../components/extrait";
import Seo from "../components/seo";
import Visible from "../components/visible";
import MainImage from "../components/MainImage";

// Event
import { beforeunload } from "../../../modules/EventListener";
import { constants } from "buffer";

const Editor = ({}) => {
  // Remix
  const navigate = useNavigate();

  // Shopify Provider
  const shopify = useAppBridge();

  // App Provider
  const { showToast } = useToast();

  // Article Provider
  const {
    fields,
    setFields,
    blog,
    originalFields,
    errors,
    removeError : handleRemoveError,
    loadArticle,
  } = useArticle();

  const isNewArticle = useMemo(() => {
    return fields.isNewArticle;
  }, [fields]);



  const hasFieldsErrors = useMemo(() => {
    return  Object.keys(errors).length > 0;
  }, [errors]);


  

  // Form

  const handleChangeFields = (value, id) => {
    setFields((prevFields) => ({
      ...prevFields,
      [id]: value,
    }));
    handleRemoveError(id);
  };

  const isModified = useMemo(() => {
    return !isEqual(fields, originalFields);
  }, [fields, originalFields]);

  const otherInfo = [
    {
      label: "Url téléchargement médias",
      value: fields.downloadsAllsMedia,
      onChange: (value) => handleChangeFields(value, "downloadsAllsMedia"), // Ou simplement `handleChange` si pas besoin d'ajuster
    },
  ];

  // SaveBar

  useEffect(() => {
    if (isModified) {
      shopify.saveBar.show("modifier");
    } else if (!isNewArticle) {
      shopify.saveBar.hide("modifier");
    }
  }, [isModified]); // Déclenche l'effet chaque fois que `isModified` change

  const handleSaveBar = useCallback(() => shopify.saveBar.toggle("modifier"));

  // Beforeunload
  useEffect(() => {
    beforeunload(isModified);
  }, [isModified]); // Déclenche l'effet chaque fois que `isModified` change

  // Submit
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const fetcherArticleCreate = useFetcherWithPromise(
    "articleCreate" + originalFields.id,
  );
  const fetcherArticleUpdate = useFetcherWithPromise(
    "articleUpdate" + originalFields.id,
  );

  const handleSubmit = async () => {
    setIsLoadingSubmit(true);
    // Détermine la fonction à appeler en fonction de l'état (nouvel article ou modification existante)
    const fetcher = isNewArticle ? fetcherArticleCreate : fetcherArticleUpdate;
    const action = isNewArticle ? "articleCreate" : "articleUpdate";

    try {
      const response = await loadArticle(
        fetcher,
        null,
        action,
        fields,
        !isNewArticle,
      );

      if (isNewArticle) {
        shopify.saveBar.hide("modifier");
        showToast("Article créé");
        return navigate("../" + response.id.split("/").pop(), {
          replace: true,
          relative: "path",

          state: {
            bannerIds: ["articleCreateSuccess"],
          },
        });
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors du traitement :", error);
      // Vous pouvez ici gérer les erreurs non prévues
    } finally {
      setIsLoadingSubmit(false);
    }
  };

  // Close

  const handleCloseEditor = (
    event = null,
    force = true,
    reloadData = false,
  ) => {
    if (force || !isModified) {
      shopify.saveBar.hide("modifier");
      // Si l'article est modifié, prévenir la navigation

      navigate("/articles", {
        replace: false,
        relative: "route",
        state: { reload: reloadData },
      });
    } else {
      if (event) {
        event.preventDefault(); // Empêcher la navigation par défaut
      }
      // Si l'article n'est pas modifié, on peut naviguer normalement

      handleChange(!active);
    }
  };

  // Delete

  // HandleDeleteBanner
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = useCallback(
    () => setIsModalOpen((isModalOpen) => !isModalOpen),
    [],
  );

  const fetcherArticleDelete = useFetcherWithPromise(
    "articleDelete" + originalFields.id,
  );

  const [isLoadingDelete, setIsLoadingDelete] = useState(false);


  const handleDelete = async () => {
    setIsLoadingDelete(true);

    try {

      await loadArticle(
        fetcherArticleDelete,
        null,
        "articleDelete",
        { articleId: originalFields.id },
        false,
      );


      showToast("Article supprimé");

      shopify.saveBar.hide("modifier");


      return handleCloseEditor(null, true, true);
    } catch (error) {
      // En cas d'erreur
      console.error("Erreur lors de la suppression :", error);
    } finally {
      setIsModalOpen(false);
      setIsLoadingDelete(false);
    }
  };

  // HandleModifiedBanner
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);



  const [pagination, setPagination] = useState({
    hasPrevious: false,
    hasNext: false,
    onPrevious: null,
    onNext: null,
  })


  const fetcherAdjacentArticle = useFetcherWithPromise(
    "adjacentArticle" + originalFields.id + originalFields.defaultCursor,
  );

   // Fetch des articles adjacents
useEffect(() => {
  const fetchAdjacentArticles = async () => {
    try {
      const response = await loadArticle(
        fetcherAdjacentArticle,
        null,
        "adjacentArticle",
        { defaultCursor: originalFields.defaultCursor },
        false
      );

      const { articleBefore: previous, articleAfter: next } = response;

      setPagination({
        hasPrevious: !!(previous && previous.id),
        hasNext: !!(next && next.id),
        onPrevious: previous
          ? () => {
              const previousId = previous.id.split("/").pop();
              navigate(`../${previousId}`, {
                replace: false,
                relative: "path",
              });
            }
          : null,
        onNext: next
          ? () => {
              const nextId = next.id.split("/").pop();
              navigate(`../${nextId}`, {
                replace: false,
                relative: "path",
              });
            }
          : null,
      });
    } catch (error) {
      console.error("Erreur lors du chargement des articles adjacents :", error);
    }
  };

  fetchAdjacentArticles();
}, [originalFields.defaultCursor]);


const disabledSubmit = useMemo(() => {
  return !isModified || hasFieldsErrors;
}, [hasFieldsErrors, isModified]);


  return (
    <div>
      {" "}
      <SaveBar id="modifier" discardConfirmation={true} open={isNewArticle}>
        <button
          variant="primary"
          onClick={() => handleSubmit()}
          disabled={disabledSubmit}
          loading={isLoadingSubmit ? "" : undefined}
        ></button>
        <button
          onClick={() => {
            if (isModified) {
              setFields(originalFields); // Appel de la fonction si isModified est vrai
            } else {
              handleSaveBar(); // Appel de handleSaveBar si isModified est faux
              handleCloseEditor(null, true, false); // Appel de handleCloseEditor dans tous les cas
            }
          }}
        >
          Save
        </button>
      </SaveBar>
      <Page
        backAction={{
          accessibilityLabel: "Accéder à la section des articles de blog",

          url: useHref("/articles", { relative: "route" }),
          onAction: (event) => handleCloseEditor(event, false, false),
        }}
        title={originalFields.title || `Ajouter un article de blog`}
        titleMetadata={
          !isNewArticle &&
          !originalFields.isPublished && <Badge tone="info">Masqué</Badge>
        }
        compactTitle
        secondaryActions={[
          {
            content: "Aperçu",
            icon: ViewIcon,
            url: "https://www.facebook.com/business/learn/facebook-page-build-audience",
            onAction: () => alert("View on your store action"),
          },
        ]}
        pagination={{
          hasPrevious: pagination.hasPrevious,
          hasNext: pagination.hasNext,
          onPrevious: pagination.onPrevious,
          onNext: pagination.onNext,
        }}
      >
        <Layout>
          <Layout.Section>
            <Banner />
          </Layout.Section>
          <Layout.Section>
            <BlockStack gap={{ xs: "400", sm: "500" }}>
              <Card>
                <BlockStack gap={{ xs: "400" }}>
                  <FormLayout>
                    <div className="XgxFi">
                      <TextField
                        label="Titre"
                        onChange={(value, id) => handleChangeFields(value, id)} // Ou simplement `handleChange` si pas besoin d'ajuster
                        autoComplete="off"
                        maxLength="255"
                        value={fields.title}
                        error={errors.title || false}
                        id="title"
                        type="text"
                        requiredIndicator={true} // Si `true`, ajoute un astérisque pour indiquer que le champ est obligatoire
                        clearButton={true}
                        onClearButtonClick={(id) => handleChangeFields("", id)} // Callback pour gérer l'effacement
                        placeholder="p. ex. Article de blog sur vos derniers produits ou offres"
                      />
                    </div>
                  </FormLayout>

                  <FormLayout>
                    <div className="XgxFi">
                      <TextField
                        label="Sous-Titre"
                        onChange={(value, id) => handleChangeFields(value, id)} // Ou simplement `handleChange` si pas besoin d'ajuster
                        autoComplete="off"
                        value={fields.subTitle}
                        error={errors.subTitle || false}
                        id="subTitle"
                        type="text"
                        multiline={2}
                        clearButton={true}
                        onClearButtonClick={(id) => handleChangeFields("", id)} // Callback pour gérer l'effacement
                        placeholder="p. ex. Résumé de l'article"
                      />
                    </div>
                  </FormLayout>

                  <FormLayout>
                    <div className="v7Z1h">
                      <div className="Polaris-Labelled__LabelWrapper">
                        <div className="Polaris-Label">
                          <label
                            id="contentLabel"
                            htmlFor="content"
                            className="Polaris-Label__Text"
                          >
                            <span className="Polaris-Text--root Polaris-Text--bodyMd">
                              Contenu
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="Polaris-Connected">
                        <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
                          <EditorText
                            content={fields.content}
                            setContent={(content) =>
                              handleChangeFields(content, "content")
                            }
                            selector="content"
                          />
                        </div>
                      </div>
                    </div>
                  </FormLayout>
                </BlockStack>
              </Card>

              <Card>
                <BlockStack>
                  <InlineStack
                    align="space-between"
                    wrap
                    direction={{ xs: "row" }}
                  >
                    <Box paddingInlineEnd={{ xs: "400" }}>
                      <h2
                        className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold"
                        tabIndex="-1"
                      >
                        Informations Supplémentaires
                      </h2>
                    </Box>
                  </InlineStack>

                  <Box paddingBlock={{ xs: 400 }}>
                    {otherInfo.map((info, index) => (
                      <Box key={index} paddingBlockEnd={{ xs: "200" }}>
                        <div className="_ActivatorWrapper_1ivxc_74">
                          <div>
                            <div
                              role="button"
                              tabIndex={0}
                              aria-label={`Modifier le champ méta ${info.label}`}
                              className="_ActivatorButton_1ivxc_78"
                            >
                              <div
                                className="_LegacyRowWrapper_1ivxc_4"
                                style={{
                                  paddingLeft: 0,
                                  gridTemplateColumns: "30% minmax(0, 70%)",
                                }}
                              >
                                <div className="_FormFieldLabelLegacy_1ivxc_38">
                                  <p className="Polaris-Text--root Polaris-Text--bodyMd">
                                    {info.label}
                                  </p>
                                </div>

                                <div className="_EditField_1ivxc_318">
                                  <div style={{ display: "contents" }}>
                                    <TextField
                                      id={`meta-field-${index}`}
                                      label={info.label}
                                      labelHidden
                                      value={info.value}
                                      onChange={(value, id) =>
                                        info.onChange(value)
                                      } // Ou simplement `handleChange` si pas besoin d'ajuster
                                      autoComplete="off"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Box>
                    ))}
                  </Box>
                </BlockStack>
              </Card>

              <Extrait
                extrait={fields.extrait}
                setExtrait={(content) => handleChangeFields(content, "extrait")}
              />

              <Seo
              isNewArticle={isNewArticle}
              errorHandle={errors.handle || false}
              initialHandle={originalFields.handle}
                blogUrl={blog?.url + "/"}
                metaDescription={fields.metaDescription}
                setMetaDescription={(content) =>
                  handleChangeFields(content, "metaDescription")
                }
                metaTitle={fields.metaTitle}
                setRedirectNewHandle={(content) =>
                  handleChangeFields(content, "redirectNewHandle")
                }
                redirectNewHandle={fields.redirectNewHandle}
                setMetaTitle={(content) =>
                  handleChangeFields(content, "metaTitle")
                }
                handle={fields.handle}
                setMetaHandle={(content) =>
                  handleChangeFields(content, "handle")
                }
                title={fields.title}
                content={fields.content}
              />
            </BlockStack>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <BlockStack gap={{ xs: "400", sm: "500" }}>
              <Visible
                isPublished={fields.isPublished}
                setPublished={(content) =>
                  handleChangeFields(content, "isPublished")
                }
                date={fields.date}
                setDate={(content) => handleChangeFields(content, "date")}
              />
              <MainImage
                mainImage={fields.mainImage}
                setMainImage={(content) =>
                  handleChangeFields(content, "mainImage")
                }
              />

              <Card>
                <BlockStack gap={{ xs: "400", sm: "500" }}>
                  <Author
                    author={fields.author}
                    setAuthor={(content) =>
                      handleChangeFields(content, "author")
                    }
                  />

                  <Bleed
                    marginBlockEnd={{ xs: "400", sm: "500" }}
                    marginInlineStart={{ xs: "400", sm: "500" }}
                    marginInlineEnd={{ xs: "400", sm: "500" }}
                  >
                    <Divider />
                  </Bleed>

                  <Tags
                    allTags={blog?.tags}
                    tags={fields.tags}
                    setTags={(content) => handleChangeFields(content, "tags")}
                  />
                </BlockStack>
              </Card>

              <Template
                templates={blog?.templates}
                template={fields.template}
                setTemplate={(content) =>
                  handleChangeFields(content, "template")
                }
                url={originalFields.url}
                isPublished={originalFields.isPublished}
              />
            </BlockStack>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <PageActions
              primaryAction={{
                content: !isNewArticle ? "Enregistrer" : "Créer",
                disabled: disabledSubmit,
                onAction: () => handleSubmit(),
                loading: isLoadingSubmit,
              }}
              secondaryActions={[
                {
                  content: "Supprimer l’article de blog",
                  destructive: true,
                  disabled: isNewArticle,
                  onAction: () => toggleModal(),
                },
              ]}
            />
          </Layout.Section>
        </Layout>
      </Page>
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        title={`Supprimer ${originalFields.title} ?`}
        primaryAction={{
          destructive: true,
          loading: isLoadingDelete,
          content: "Supprimer",
          onAction: handleDelete,
        }}
        secondaryActions={[
          {
            content: "Annuler",
            onAction: toggleModal,
          },
        ]}
      >
        <Modal.Section>
          <p>Cette opération est irréversible.</p>
        </Modal.Section>
      </Modal>
      <Modal
        open={active}
        onClose={handleChange}
        title="Vous avez des changements non enregistrés"
        primaryAction={{
          destructive: true,
          content: "Quitter la page",
          onAction: () => handleCloseEditor(null, true),
        }}
        secondaryActions={[
          {
            content: "Annuler",
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <p>
            Si vous quittez cette page, toutes les modifications non
            enregistrées seront perdues.
          </p>
        </Modal.Section>
      </Modal>
    </div>
  );
};

export default Editor;
