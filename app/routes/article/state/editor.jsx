import React, { useState, useEffect, useMemo, useCallback } from "react";

// Remix
import { useNavigate } from "@remix-run/react"; // Utiliser fetcher pour déclencher l'action
import {
  SaveBar,
  useAppBridge,
  Modal as BModal,
  TitleBar,
} from "@shopify/app-bridge-react";

import { useFetcherWithPromise } from "../../../utils/useFetcherWithPromise";
import { useArticle } from "../context/ArticleProvider";

import { v4 as uuid } from "uuid";
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
  Bleed,
  Divider,
} from "@shopify/polaris";
import { ViewIcon } from "@shopify/polaris-icons";

import { useToast } from "../../../context/toast";
// Global components
//import EditorText from "../../../tinymce/Editor";

// Local components
import {
  Banner,
  Tags,
  Template,
  Author,
  Extrait,
  Seo,
  Visible,
  MainImage,
  Blog as BlogA,
  Layout as LayoutCO,
  Editor as EditorText,
} from "../components";

// local state
const modifiedBannerId = "modifiedBanner" + uuid();
const saveBarId = "saveBar" + uuid();

// Event
import { beforeunload } from "../../../modules/EventListener";

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
    staticData,
    errors,
    submit: submitProvider,
    setIsLoading: setIsLoadingGlobal,
    removeError: handleRemoveError,
    loadArticle,
  } = useArticle();


const blog = staticData.blogs.find(blog => blog.id === fields?.blogId);


  // isNewArticle
  const isNewArticle = useMemo(() => {
    return fields.isNewArticle;
  }, [fields]);

  // errors
  const hasFieldsErrors = useMemo(() => {
    return Object.keys(errors).length > 0;
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
    return !isEqual(fields, staticData?.article);
  }, [fields, staticData?.article]);

  // SaveBar
  const handleSaveBar = useCallback(() => shopify.saveBar.toggle(saveBarId));

  // before leave
  useEffect(() => {
    beforeunload(isModified);
    if (isModified) {
      shopify.saveBar.show(saveBarId);
    } else if (!isNewArticle) {
      shopify.saveBar.hide(saveBarId);
    }
  }, [isModified]); // Déclenche l'effet chaque fois que `isModified` change

  // Submit
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);

  const fetcherArticleCreate = useFetcherWithPromise(
    "articleCreate" + staticData?.article.id,
  );
  const fetcherArticleUpdate = useFetcherWithPromise(
    "articleUpdate" + staticData?.article.id,
  );

 

  const handleSubmit = async () => {
    setIsLoadingSubmit(true);

    const action = isNewArticle ? "articleCreate" : "articleUpdate";

    try {
 

      const response = await submitProvider(
        null,
        action,
        fields,
        !isNewArticle,
      );


      
      if (isNewArticle && response?.id) {
        shopify.saveBar.hide(saveBarId);
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
      shopify.saveBar.hide(saveBarId);
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
      handleModifiedBanner();
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
    "articleDelete" + staticData?.article.id,
  );

  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleDelete = async () => {
    setIsLoadingDelete(true);

    try {
      await loadArticle(
        fetcherArticleDelete,
        null,
        "articleDelete",
        { articleId: staticData?.article.id },
        false,
      );

      showToast("Article supprimé");

      shopify.saveBar.hide(saveBarId);

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
  const handleModifiedBanner = useCallback(() =>
    shopify.modal.toggle(modifiedBannerId),
  );

  // adjacents articles

  const [pagination, setPagination] = useState({
    hasPrevious: false,
    hasNext: false,
    onPrevious: null,
    onNext: null,
  });

  const fetcherAdjacentArticle = useFetcherWithPromise(
    "adjacentArticle" + staticData?.article.id + staticData?.article.defaultCursor,
  );

  // Fetch des articles adjacents
  useEffect(() => {
    const fetchAdjacentArticles = async () => {
      try {
        const response = await loadArticle(
          fetcherAdjacentArticle,
          null,
          "adjacentArticle",
          { defaultCursor: staticData?.article.defaultCursor },
          false,
        );

        const { articleBefore: previous, articleAfter: next } = response;

        setPagination({
          hasPrevious: !!(previous && previous.id),
          hasNext: !!(next && next.id),
          onPrevious: previous
            ? () => {
                setIsLoadingGlobal(true);
                const previousId = previous.id.split("/").pop();
                navigate(`../${previousId}`, {
                  replace: false,
                  relative: "path",
                });
              }
            : null,
          onNext: next
            ? () => {
                setIsLoadingGlobal(true);
                const nextId = next.id.split("/").pop();
                navigate(`../${nextId}`, {
                  replace: false,
                  relative: "path",
                });
              }
            : null,
        });
      } catch (error) {
        console.error(
          "Erreur lors du chargement des articles adjacents :",
          error,
        );
      }
    };

    fetchAdjacentArticles();
  }, [staticData?.article.defaultCursor]);

  const disabledSubmit = useMemo(() => {
    return !isModified || hasFieldsErrors;
  }, [hasFieldsErrors, isModified]);

  return (
    <div>
      {" "}
      <SaveBar id={saveBarId} discardConfirmation="" open={isNewArticle}>
        <button
          variant="primary"
          onClick={() => handleSubmit()}
          disabled={disabledSubmit}
          loading={isLoadingSubmit ? "" : undefined}
        ></button>
        <button
          onClick={() => {
            if (isModified) {
              setFields(staticData?.article); // Appel de la fonction si isModified est vrai
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
        title={staticData?.article.title || `Ajouter un article de blog`}
        titleMetadata={
          !isNewArticle &&
          !staticData?.article.isPublished && <Badge tone="info">Masqué</Badge>
        }
        compactTitle
        secondaryActions={
          staticData?.article.isPublished && [
            {
              content: "Aperçu",
              icon: ViewIcon,
              url: staticData?.article.url,
              target: "_blank",
            },
          ]
        }
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
                        onChange={(value, id) => handleChangeFields(value, id)}
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
                        onChange={(value, id) => handleChangeFields(value, id)}
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
                           // value={fields.content}
                           value={fields.body}
                            onChange={(content) =>
                              handleChangeFields(content, "body")
                            }
                
                          />
                        </div>
                      </div>
                    </div>
                  </FormLayout>
                </BlockStack>
              </Card>

              <Extrait
                extrait={fields.extrait}
                setExtrait={(content) => handleChangeFields(content, "extrait")}
              />

              <Seo
                isNewArticle={isNewArticle}
                errorHandle={errors.handle || false}
                initialHandle={staticData?.article.handle}
                blog={blog}
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

              <LayoutCO
                setLayout={(content) => handleChangeFields(content, "layout")}
                layout={fields.layout}
              ></LayoutCO>

              <MainImage
                mainImage={fields.mainImage}
                setMainImage={(content) =>
                  handleChangeFields(content, "mainImage")
                }
              />

              <Card>
                <BlockStack gap={{ xs: "400", sm: "500" }}>
                  <Author
                   error={errors.contactPresse || false}
                    allAuthor={staticData?.libs?.authors}
                    contactPresse={fields.contactPresse}
                    setContactPresse={(content) =>
                      handleChangeFields(content, "contactPresse")
                    }
                  />



                  <Bleed
                    marginBlockEnd={{ xs: "400", sm: "500" }}
                    marginInlineStart={{ xs: "400", sm: "500" }}
                    marginInlineEnd={{ xs: "400", sm: "500" }}
                  >
                    <Divider />
                  </Bleed>

                  
     <BlogA
        error={errors?.blogId || false}
             blogs={staticData?.blogs}
                 blogID={fields?.blogId}
                   setBlogID={(content) =>
                      handleChangeFields(content, "blogId")
                    }
                  />

                  <Tags
                    allTags={staticData?.libs?.tags}
                    tags={fields.tags}
                    setTags={(content) => handleChangeFields(content, "tags")}
                  />
                </BlockStack>
              </Card>

              <Template
                templates={staticData?.libs?.templates}
                template={fields.template}
                setTemplate={(content) =>
                  handleChangeFields(content, "template")
                }
                url={staticData?.article.url}
                isPublished={staticData?.article.isPublished}
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
        title={`Supprimer ${staticData?.article.title} ?`}
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
      <BModal id={modifiedBannerId}>
        <TitleBar title="Vous avez des changements non enregistrés">
          <button
            tone="critical"
            variant="primary"
            onClick={() => {
              handleModifiedBanner();
              handleCloseEditor(null, true);
            }}
          >
            Quitter la page
          </button>

          <button
            onClick={() => {
              handleModifiedBanner();
            }}
          >
            Annuler
          </button>
        </TitleBar>

        <Box paddingBlock="400" paddingInline="400">
          <p>
            Si vous quittez cette page, toutes les modifications non
            enregistrées seront perdues.
          </p>
        </Box>
      </BModal>
    </div>
  );
};

export default Editor;
