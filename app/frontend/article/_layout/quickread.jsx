

import {  useHref } from "@remix-run/react";

import { Page, Badge, Layout, BlockStack, Text, Button, InlineGrid, Box, List, Spinner } from "@polaris/npm";

import {
  Tags,
  Banner,
  Template,
  Author,
  Extrait,
  Seo,
  Visible,
  MainImage,
  MainVideo,
  Blog as BlogA,
  Title,
  SubTitle,
  Category,
  Content,
  EmbeddedContent,
} from "../components";

import {
  Card as CardV2,
  Page as PageV2,
  AppWrapper as AppWrapperV2,
  PageGroup,
  Text as TextV2,
} from "@polaris/internal";

import { Banner as BannerForm } from "../../../modules/form/components";
import { Actions } from "../structures";

export const Editor = ({}) => {


  return (
 
            <Layout>
              <Layout.Section>
                <BlockStack gap={{ xs: "400" }} align="space-between">
                  <CardV2>
                    <BlockStack gap={{ xs: "400" }}>
                      {/* Titre */}
                      <Title />
                      {/* Sous-titre */}
                      <SubTitle />

                      <EmbeddedContent  />
                    </BlockStack>
                  </CardV2>
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

                  <MainImage />
                  <MainVideo />

                  <CardV2>
                    <BlockStack gap={{ xs: "200" }}>
                      <Text as="h2" variant="headingSm" fontWeight="semibold">
                        Organisation
                      </Text>

                      <BlockStack gap={{ xs: "400" }}>
                        <Category />
                        <Author />
                        <BlogA />

                        <Tags />
                      </BlockStack>
                    </BlockStack>
                  </CardV2>

                  <Template />
                </BlockStack>
              </Layout.Section>
            </Layout>

      
  )

}

export default Editor;