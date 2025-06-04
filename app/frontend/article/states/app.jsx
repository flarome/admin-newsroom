import { useEffect, useCallback, useState, useRef } from "react";
import {
  useNavigate,
  useHref,
  useNavigation,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";
import { useAppBridge, TitleBar } from "@shopify/app-bridge-react";

import { Page, Badge, Layout, BlockStack, Card, Text } from "@shopify/polaris";
import { DeleteIcon, ViewIcon } from "@shopify/polaris-icons";
import { useArticle } from "../context/articleContext";
import { get as fetchAdjacentArticle } from "../services/adjacentArticle";
import { make as creatArticle } from "../services/creatArticle";
import { make as updateArticle } from "../services/updateArticle";
import {
  Tags,
  Banner,
  Template,
  Author,
  Extrait,
  Seo,
  Visible,
  MainMedia,
  Blog as BlogA,
  Title,
  SubTitle,
  Category
} from "../components";

import Content from "../components/content";

import { getYear } from "../../../utils/date";
import { Banner as BannerForm } from "../../../modules/form/components";
import { FormProviderWrapper } from "../../../modules/form";
import { Actions, SaveBar } from "../structures";
import { useFormContext } from "react-hook-form";
import { DeleteModalProvider, useDeleteModal } from "../context/deleteContext";
import { saveBarId } from "../structures/saveBar";
import { get as fetchArticleDetails } from "../services/articleDetails";
import { mapShopifyErrorsToFormErrors } from "../helpers/errors";
import { useApplyShopifyErrors } from "../helpers/shopifyErrors";
const App = ({ isDelete }) => {
  const { form } = useArticle();
  /*
  // Fige `form` à la première valeur non-null
  const initialFormRef = useRef();

  if (!initialFormRef.current && form) {
    initialFormRef.current = form;
  }*/

  return (
    <FormProviderWrapper initialData={form}>
      <DeleteModalProvider isDelete={isDelete}>
        <RHFAppContent />
      </DeleteModalProvider>
    </FormProviderWrapper>
  );
};

const RHFAppContent = ({}) => {
  const { show: showDeleteModal } = useDeleteModal();

  const navigate = useNavigate();
  const shopify = useAppBridge();

  const { article, hasArticle, shop, setData } = useArticle();

  const [pagination, setPagination] = useState(
    hasArticle
      ? {
          hasPrevious: false,
          hasNext: false,
        }
      : null,
  );


  const navigateWithSaveBarCheck = useCallback(
    (url, options) => {
      shopify.saveBar
        .leaveConfirmation()
        .then(() => {
          // Si leaveConfirmation() se termine, on considère qu'on peut naviguer
          navigate(url, options);
        })
        .catch((err) => {
          // S'il y avait un blocage (très rare), on log
          console.warn("Navigation bloquée par Shopify SaveBar", err);
        });
    },
    [shopify.saveBar.leaveConfirmation, navigate],
  );


  // Adjacents articles (pagination)
  useEffect(() => {
    if (!hasArticle || !article?.defaultCursor) return;

    fetchAdjacentArticle(article.defaultCursor).then(
      ({ beforeId: previous, afterId: next }) => {
        setPagination({
          hasPrevious: !!previous,
          hasNext: !!next,
          onPrevious: previous
            ? () => {
                const previousId = previous.split("/").pop();
                navigateWithSaveBarCheck(`../${previousId}`, {
                  replace: false,
                  relative: "path",
                });
              }
            : null,
          onNext: next
            ? () => {
                const nextId = next.split("/").pop();
                navigateWithSaveBarCheck(`../${nextId}`, {
                  replace: false,
                  relative: "path",
                });
              }
            : null,
        });
      },
    );
  }, [navigate, article?.defaultCursor]);

  const { reset } = useFormContext();

  const applyShopifyErrors = useApplyShopifyErrors();

  const handleSubmit = useCallback(
    async (data) => {
      console.log("data", data);

      if (hasArticle) {
        const response = await updateArticle(article.id, data);

        await applyShopifyErrors(response, async () => {
          const update = await fetchArticleDetails(response.article.id);
          setData(update);
          reset(update.form);
          shopify.toast.show("Article mis à jour");
        });
      } else {
        const response = await creatArticle(data);

        await applyShopifyErrors(response, () => {
          shopify.saveBar.hide(saveBarId);

          return navigate("../" + response.article.id.split("/").pop(), {
            replace: true,
            relative: "path",
            state: { isNew: true },
          });
        }); 
      }
    },
    [hasArticle, reset, shopify, creatArticle, navigate],
  );

  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";


  return (
    <>
      <div className="Polaris-Frame__Scrollable Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--scrollbarWidthThin">
        <div
          className={clsx(
            "Polaris-Frame__Content",
            "_ChildContainer_r6730_7",
            isLoading && "_loading_r6730_20",
          )}
        >
          <div className="Polaris-Frame__ScrollbarSafeArea">
            <Page
              backAction={{
                accessibilityLabel: "Accéder à la section des articles de blog",
                //  url: useHref("..", { relative: "route" }),
                onAction: (e) =>
                  navigateWithSaveBarCheck("..", {
                    replace: false,
                    relative: "route",
                  }),
              }}
              title={hasArticle ? article.title : "Ajouter un article de blog"}
              titleMetadata={
                hasArticle &&
                !article.isPublished && <Badge tone="info">Masqué</Badge>
              }
              compactTitle
              secondaryActions={[
                article?.isPublished && {
                  content: "Aperçu",
                  icon: ViewIcon,
                  url: `${shop.url}/blogs/${article.blog.handle}/${article.handle}`, // à remplacer par ton lien réel
                  target: "_blank",
                },
              ].filter(Boolean)}
              actionGroups={[
                {
                  title: "Autres actions",
                  actions: [
                    hasArticle && {
                      content: "Supprimer",
                      icon: DeleteIcon,
                      destructive: true,
                      active: false,
                      accessibilityLabel: "Supprimer l'article de blog",
                      onAction: showDeleteModal,
                    },
                  ].filter(Boolean),
                },
              ]}
              pagination={pagination}
            >
              <SaveBar handleSubmit={handleSubmit} />
              <TitleBar />

              <BlockStack gap={{ xs: "400" }}>
                <Banner />

                <BannerForm />

                <form
                  action={useHref(".", { relative: "route" })}
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  autoComplete="off"
                >
                  <Layout>
                    <Layout.Section>
                      <BlockStack gap={{ xs: "400" }} align="space-between">
                        <Card>
                          <BlockStack gap={{ xs: "400" }}>
                            {/* Titre */}
                            <Title />
                            {/* Sous-titre */}
                            <SubTitle />
                          </BlockStack>
                        </Card>
                        {/* */}

                        <Content />
                        {/* Extrait*/}

                        <Extrait />
                        {/* Seo*/}
                        <Seo />
                      </BlockStack>
                    </Layout.Section>
                    {/* Sidebar */}
                    <Layout.Section variant="oneThird">
                      <BlockStack gap={{ xs: "400" }} align="space-between">
                        <Visible />

                        <MainMedia />

                        <Card>
                          <BlockStack gap={{ xs: "200" }}>
                            <Text
                              as="h2"
                              variant="headingSm"
                              fontWeight="semibold"
                            >
                              Organisation
                            </Text>

                            <BlockStack gap={{ xs: "400" }}>
                           

  <Category />
   <Author />
                              <BlogA />

                              <Tags />
                            </BlockStack>
                          </BlockStack>
                        </Card>

                        <Template />
                      </BlockStack>
                    </Layout.Section>
                  </Layout>

                  <Actions handleSubmit={handleSubmit} />
                </form>
              </BlockStack>

              <div
                className="Polaris-FooterHelp"
                style={{ "--pc-footer-help-align": "center" }}
              >
                <Text as="p" variant="bodySm">
                  Copyright © {getYear()} Flarome. Tous droits réservés.
                </Text>
              </div>
            </Page>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
