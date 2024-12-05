import React, { useState, useEffect, useMemo, useCallback } from "react";

import { useNavigate } from "@remix-run/react";

import * as lodash from 'lodash';
const { isEqual } = lodash;

import { Page, Badge, Layout, TextField, FormLayout, Modal, PageActions, Card, Box, BlockStack, InlineStack, Text, Button, Bleed, Divider } from "@shopify/polaris";
import { ViewIcon } from "@shopify/polaris-icons";

import { articleCreate, articleDelete, articleUpdate } from "../../modules/api";

import { setAppState } from "../../modules/state";

import { formatArticle } from "../modules/loadArticle";

import EditorText from "../../Editor";
 
import Author from "./author";
import Template from "./template";
import Tags from "./tags";
import Banner from "./banner";
import Extrait from "./extrait";
import Seo from "./seo";
import Visible from "./visible";
import MainImage from "./MainImage";

import { beforeunload } from "../../../modules/EventListener";

const Editor = ({ derivedState, blog, isNewArticle, setDerivedState, setIsLoading }) => {
  // Errors
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const listErrors = useMemo(() => {
    return Object.values(errors);
  }, [errors]);

  const handleRemoveError = useCallback(key => {
    setErrors(prevErrors => {
      const { [key]: _, ...rest } = prevErrors;
      return rest;
    });
  }, []);

  // Form

  const [fields, setFields] = useState(derivedState);

  const otherInfo = [
    {
      label: "Url téléchargement médias",
      value: fields.downloadsAllsMedia,
      onChange: (value) => handleChangeFields(value, "downloadsAllsMedia") // Ou simplement `handleChange` si pas besoin d'ajuster
    },
  ];

  const handleChangeFields = (value, id) => {
    setFields(prevFields => ({
      ...prevFields,
      [id]: value,
    }));
    handleRemoveError(id);
  };

  const isModified = useMemo(() => {
    return !isEqual(fields, derivedState);
  }, [fields, derivedState]);

  useEffect(() => {
    beforeunload(isModified);
  }, [isModified]); // Déclenche l'effet chaque fois que `isModified` change

  // Banner

  const [success, setSuccess] = useState(false);

  // Submit

  const handleSubmit = async () => {
    // Détermine la fonction à appeler en fonction de l'état (nouvel article ou modification existante)
    const action = isNewArticle ? articleCreate : articleUpdate;
    const params = fields;

    try {
      // Appel de l'API correspondante
      const { article, errors } = await action(params);

      if (!errors || !Object.keys(errors).length > 0) {
        // Réinitialise les erreurs, met à jour l'article et change l'état général
        setIsLoading(true);

        setDerivedState(formatArticle(article));

        setIsLoading(false); // Arrête l'indicateur de chargement
        setErrors({});
        setAppState(true, article.id);
        setSuccess(isNewArticle); // Indique si une création a réussi
      } else {
        // Enregistre et affiche les erreurs en cas d'échec
        setErrors(errors);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors du traitement :", error);
      // Vous pouvez ici gérer les erreurs non prévues
    } finally {
    }
  };

  const handleChangeArticle = (id = null) => {
    setIsLoading(true);
    if (id) {
      prepareArticle(id);
    } else {
      setSuccess(false);

      setErrors({});
      setDerivedState(formatArticle(null));
      setAppState(true, null);
    }

    setIsLoading(false);
  };

  const handleCloseEditor = (force = true) => {
    if (force || !isModified) {
    
      navigate(-1);
    
      setActive(false);
    } else {
      handleChange(!active);
    }
  };

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleDelete = async () => {
    setIsLoadingDelete(true);

    try {
      // Appel de l'API correspondante
      const { deletedOnlineStoreArticleId, errors } = await articleDelete({ articleId: derivedState.id });

      if (!errors || !Object.keys(errors).length > 0) {
        // Réinitialise les erreurs, met à jour l'article et change l'état général
        setSuccess(false);
        setToastMessage("Article de blog supprimé");
        prepareBlog();
      } else {
        // Enregistre et affiche les erreurs en cas d'échec
        setErrors(errors);
      }
    } catch (error) {
      console.error("Une erreur s'est produite lors du traitement :", error);
      // Vous pouvez ici gérer les erreurs non prévues
    } finally {
      setIsModalOpen(false);
      setIsLoadingDelete(false);
    }
  };

  const handleSubmit1 = async () => {
    setIsLoadingSubmit(true);
    handleSubmit();
    setIsLoadingSubmit(false);
    // Détermine la fonction à appeler en fonction de l'état (nouvel article ou modification existante
  };

  // HandleDeleteBanner
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = useCallback(() => setIsModalOpen(isModalOpen => !isModalOpen), []);

  // HandleModifiedBanner
  const [active, setActive] = useState(false);
  const handleChange = useCallback(() => setActive(!active), [active]);
  return (
    <Page
      backAction={{
        accessibilityLabel: "Accéder à la section des articles de blog",
        onAction: () => handleCloseEditor(false),
      }}
      title={derivedState?.title || `Ajouter un article de blog`}
      titleMetadata={!isNewArticle && !derivedState?.isPublished && <Badge tone="info">Masqué</Badge>}
      compactTitle
      primaryAction={{ content: "Enregistrer", disabled: false, onAction: () => alert("View on your store action") }}
      secondaryActions={[
        {
          content: "Aperçu",
          icon: ViewIcon,
          url: "https://www.facebook.com/business/learn/facebook-page-build-audience",
          onAction: () => alert("View on your store action"),
        },
      ]}
      pagination={{
        hasPrevious: true,
        hasNext: true,
      }}
    >
      <Layout>
        <Layout.Section>
          <Banner errors={listErrors} success={success} handleChangeArticle={handleChangeArticle} title={derivedState.title} url={derivedState.url} isPublished={derivedState.isPublished} />
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
                      onClearButtonClick={id => handleChangeFields("", id)} // Callback pour gérer l'effacement
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
                      onClearButtonClick={id => handleChangeFields("", id)} // Callback pour gérer l'effacement
                      placeholder="p. ex. Résumé de l'article"
                    />
                  </div>
                </FormLayout>

                <FormLayout>
                  <div className="v7Z1h">
                    <div class="Polaris-Labelled__LabelWrapper">
                      <div class="Polaris-Label">
                        <label id="contentLabel" for="content" class="Polaris-Label__Text">
                          <span class="Polaris-Text--root Polaris-Text--bodyMd">Contenu</span>
                        </label>
                      </div>
                    </div>
                    <div class="Polaris-Connected">
                      <div class="Polaris-Connected__Item Polaris-Connected__Item--primary">
                        <EditorText content={fields.content} setContent={content => handleChangeFields(content, "content")} selector="content" />
                      </div>
                    </div>
                  </div>
                </FormLayout>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack>
                <InlineStack align="space-between" wrap direction={{ xs: "row" }}>
                  <Box paddingInlineEnd={{ xs: "400" }}>
                    <h2 className="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--semibold" tabIndex="-1">
                      Informations Supplémentaires
                    </h2>
                  </Box>
                </InlineStack>

                <Box paddingBlock={{ xs: 400 }}>
                  {otherInfo.map((info, index) => (
                    <Box key={index} paddingBlockEnd={{ xs: "200" }}>
                      <div className="_ActivatorWrapper_1ivxc_74">
                        <div>
                          <div role="button" tabIndex={0} aria-label={`Modifier le champ méta ${info.label}`} className="_ActivatorButton_1ivxc_78">
                            <div className="_LegacyRowWrapper_1ivxc_4" style={{ paddingLeft: 0, gridTemplateColumns: "30% minmax(0, 70%)" }}>
                              <div className="_FormFieldLabelLegacy_1ivxc_38">
                                <p className="Polaris-Text--root Polaris-Text--bodyMd">{info.label}</p>
                              </div>

                              <div className="_EditField_1ivxc_318">
                                <div style={{ display: "contents" }}>
                                  <TextField
                                    id={`meta-field-${index}`}
                                    label={info.label}
                                    labelHidden
                                    value={info.value}
                                    onChange={(value, id) => info.onChange(value)} // Ou simplement `handleChange` si pas besoin d'ajuster
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

            <Extrait extrait={fields.extrait} setExtrait={content => handleChangeFields(content, "extrait")} />

            <Seo blogUrl={blog?.url + "/"} metaDescription={fields.metaDescription} setMetaDescription={content => handleChangeFields(content, "metaDescription")} metaTitle={fields.metaTitle} setMetaTitle={content => handleChangeFields(content, "metaTitle")} handle={fields.handle} setMetaHandle={content => handleChangeFields(content, "handle")} title={fields.title} content={fields.content} />
          </BlockStack>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <BlockStack gap={{ xs: "400", sm: "500" }}>
            <Visible isPublished={fields.isPublished} setPublished={content => handleChangeFields(content, "isPublished")} date={fields.date} setDate={content => handleChangeFields(content, "date")} />
            <MainImage mainImage={fields.mainImage} setMainImage={content => handleChangeFields(content, "mainImage")} />

            <Card>
              <BlockStack gap={{ xs: "400", sm: "500" }}>
                <Author author={fields.author} setAuthor={content => handleChangeFields(content, "author")} />

                <Bleed marginBlockEnd={{ xs: "400", sm: "500" }} marginInlineStart={{ xs: "400", sm: "500" }} marginInlineEnd={{ xs: "400", sm: "500" }}>
                  <Divider />
                </Bleed>

                <Tags allTags={blog?.tags} tags={fields.tags} setTags={content => handleChangeFields(content, "tags")} />
              </BlockStack>
            </Card>

            <Template templates={blog?.templates} template={fields.template} setTemplate={content => handleChangeFields(content, "template")} url={derivedState.url} isPublished={derivedState.isPublished} />
          </BlockStack>
        </Layout.Section>
      </Layout>

      <Layout>
        <Layout.Section>
          <PageActions
            primaryAction={{
              content: !isNewArticle ? "Enregistrer" : "Créer",
              disabled: !isModified,
              onAction: () => handleSubmit1(),
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


      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        title={`Supprimer ${derivedState.title} ?`}
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
        <Modal.Section><p>Cette opération est irréversible.</p></Modal.Section>
      </Modal>

      <Modal
        open={active}
        onClose={handleChange}
        title="Vous avez des changements non enregistrés"
        primaryAction={{
          destructive: true,
          content: "Quitter la page",
          onAction: () => handleCloseEditor(true),
        }}
        secondaryActions={[
          {
            content: "Annuler",
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <p>Si vous quittez cette page, toutes les modifications non enregistrées seront perdues.</p>
        </Modal.Section>
      </Modal>

      
    </Page>
  );
};

export default Editor;
