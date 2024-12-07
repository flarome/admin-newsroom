import React from "react";
import { SkeletonPage, Layout, LegacyCard, SkeletonBodyText, TextContainer, SkeletonDisplayText, SkeletonThumbnail, PageActions } from "@shopify/polaris";

const Loading = () => {
  return (
    <div className="_Skeleton_1lmrp_21 _WithTitleBar_1lmrp_27">

    <SkeletonPage primaryAction>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <SkeletonBodyText />
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <LegacyCard>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={1} />
            </LegacyCard.Section>
          </LegacyCard>
          <LegacyCard subdued>
            <LegacyCard.Section>
              <TextContainer>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={2} />
              </TextContainer>
            </LegacyCard.Section>
            <LegacyCard.Section>
              <SkeletonBodyText lines={2} />
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
            <PageActions
              primaryAction={{
                disabled: true,
                content: "Enregistrer",
              }}
              secondaryActions={[
                {
                  disabled: true,
                  content: "Supprimer",
                  destructive: true,
                },
              ]}
            />
          </Layout.Section>
      </Layout>
    </SkeletonPage>
  
    </div>
  );
};

export default Loading;
