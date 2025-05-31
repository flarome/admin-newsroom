import { useEffect, useCallback, useState } from "react";
import { useNavigate, useHref, redirect, useFetcher } from "@remix-run/react";
import {
  useAppBridge,
  TitleBar,
} from "@shopify/app-bridge-react";

import {
  Page,
  Badge,
  Layout,
  BlockStack,
  Card,
  Text,
  FooterHelp,
} from "@shopify/polaris";
import { DeleteIcon, ViewIcon } from "@shopify/polaris-icons";
import { useArticle } from "../context/articleContext";
import { get as fetchAdjacentArticle } from "../api/adjacentArticle";
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
} from "../components";


import Content from "../components/content";


import { getYear } from "../utils/date";
import { Banner as BannerForm } from "../form/components";
import { FormProviderWrapper } from "../context/FormProviderWrapper";
import { Actions, SaveBar } from "../structures";
import { useFormContext } from "react-hook-form";
import { DeleteModalProvider, useDeleteModal } from "../context/deleteContext";

const App = ({isDelete}) => {


  const { form } = useArticle();

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

  const { article, hasArticle, shop } = useArticle();

  console.log("render");

  const [pagination, setPagination] = useState(null);

  // Adjacents articles (pagination)
  useEffect(() => {
    if (!hasArticle || !article?.defaultCursor) return;

    fetchAdjacentArticle(article.defaultCursor).then(({ beforeId: previous, afterId: next }) => {

      setPagination({
        hasPrevious: !!(previous),
        hasNext: !!(next),
        onPrevious: previous
          ? () => {
              const previousId = previous.split("/").pop();
              navigate(`../${previousId}`, {
                replace: false,
                relative: "path",
              });
            }
          : null,
        onNext: next
          ? () => {
              const nextId = next.split("/").pop();
              navigate(`../${nextId}`, {
                replace: false,
                relative: "path",
              });
            }
          : null,
      });
    });
  }, [navigate, article?.defaultCursor]);


  const { reset } = useFormContext();



  const fetcher = useFetcher();

const handleSubmit = useCallback(
  async (data) => {
    console.log("data", data);

    if (hasArticle) {
      reset(data);
      shopify.toast.show("Article mis à jour");
    } else {

      fetcher.submit(data,
    {
      method: "post",
      encType: "application/json"
    });

    navigate(`/articles/`)

     /* const response = await creatArticle(data);
      console.log("response", response);

  const id = response.article.id.split("/").pop();
console.log("Navigating to:", id);
setCreatedId(id);*/

    }
  },
  [hasArticle, reset, shopify, navigate]
);


  return (
    <>
      <Page
        backAction={{
          accessibilityLabel: "Accéder à la section des articles de blog",
          url: useHref("..", { relative: "route" }),
          onAction: (e) =>
            navigate("..", {
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
                      <Text as="h2" variant="headingSm" fontWeight="semibold">
                        Organisation
                      </Text>

                      <BlockStack gap={{ xs: "400" }}>
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

        <FooterHelp align="center">
          <Text as="p" variant="bodySm">
            Copyright © {getYear()} Flarome. Tous droits réservés.
          </Text>
        </FooterHelp>
      </Page>

    </>
  );
};

export default App;
