import React from "react";

import {
  SkeletonPage,
  Layout,
  LegacyCard,
  SkeletonBodyText,
  TextContainer,
  Spinner,
} from '@shopify/polaris';



const Loading = () => {
  return (
    <SkeletonPage>
    <Layout>
      <Layout.Section>
        <LegacyCard>
        <TextContainer>
          <SkeletonBodyText />
          </TextContainer>
          <TextContainer>
          <SkeletonBodyText />
          </TextContainer>
          <LegacyCard.Section>
          <Spinner accessibilityLabel="Chargement des articles en cours" size="large" />
          </LegacyCard.Section>
        </LegacyCard>
        
      </Layout.Section>
    </Layout>
  </SkeletonPage>
  );
};

export default Loading;
