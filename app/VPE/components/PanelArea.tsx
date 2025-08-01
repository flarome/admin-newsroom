import { styles as LoadingStyles } from "@VPE/styles/Loading";
import { styles as OnlineStoreStyles } from "@VPE/styles/OnlineStore";

import { useAppStore } from "@VPE/store";

import {
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonThumbnail,
} from "@polaris/npm";

import { Sections } from "./Sections";
import { Settings } from "./Settings";

export const SkeletonPanelArea = () => (
  <>
    <div className={LoadingStyles["WorkspaceHeaderWrapper"]}>
      <div
        className={`${LoadingStyles["WorkspaceHeader"]} ${LoadingStyles["WithPadding"]}`}
      >
        <div className={LoadingStyles["WorkspaceHeaderDisplayText"]}>
          <SkeletonDisplayText size="medium" />
        </div>
        <div className={LoadingStyles["WorkspaceHeaderBodyText"]}>
          <SkeletonBodyText lines={1} />
        </div>
        <div className={LoadingStyles["WorkspaceHeaderSubheading"]}>
          <div className={LoadingStyles["WorkspaceHeaderSubheadingFirstLine"]}>
            <SkeletonBodyText lines={1} />
          </div>
          <div className={LoadingStyles["WorkspaceHeaderSubheadingSecondLine"]}>
            <SkeletonBodyText lines={1} />
          </div>
        </div>
      </div>
      <div className={LoadingStyles["FullLengthDivider"]}></div>
    </div>

    <div className={LoadingStyles["SectionListSkeletonWrapper"]}>
      <div data-class="SectionListSkeleton">
        <div className={LoadingStyles["SkeletonSectionWrapper"]}>
          <div className={LoadingStyles["SkeletonItem"]}>
            <SkeletonThumbnail size="extraSmall" />
            <SkeletonBodyText lines={1} />
          </div>
          <div className={LoadingStyles["SectionDivider"]}></div>
        </div>

        <div className={LoadingStyles["SkeletonSectionWrapper"]}>
          <div>
            <div className={LoadingStyles["SkeletonItem"]}>
              <SkeletonThumbnail size="extraSmall" />
              <SkeletonBodyText lines={1} />
            </div>

            <div className={LoadingStyles["SkeletonListItemWrapper"]}>
              <div>
                <div className={LoadingStyles["SkeletonItem"]}>
                  <SkeletonThumbnail size="extraSmall" />
                  <SkeletonBodyText lines={1} />
                </div>

                <div className={LoadingStyles["SkeletonItem"]}>
                  <SkeletonThumbnail size="extraSmall" />
                  <SkeletonBodyText lines={1} />
                </div>

                <div className={LoadingStyles["SkeletonItem"]}>
                  <SkeletonThumbnail size="extraSmall" />
                  <SkeletonBodyText lines={1} />
                </div>

                <div className={LoadingStyles["SkeletonItem"]}>
                  <SkeletonThumbnail size="extraSmall" />
                  <SkeletonBodyText lines={1} />
                </div>
              </div>
            </div>
          </div>

          <div className={LoadingStyles["SkeletonItem"]}>
            <SkeletonThumbnail size="extraSmall" />
            <SkeletonBodyText lines={1} />
          </div>

          <div className={LoadingStyles["SkeletonItem"]}>
            <SkeletonThumbnail size="extraSmall" />
            <SkeletonBodyText lines={1} />
          </div>
        </div>

        <div className={LoadingStyles["SectionDivider"]}></div>

        <div className={LoadingStyles["SkeletonSectionWrapper"]}>
          <div className={LoadingStyles["SkeletonItem"]}>
            <SkeletonThumbnail size="extraSmall" />
            <SkeletonBodyText lines={1} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export const PanelArea = ({ skipTargetId }) => {
  const selectedAction = useAppStore((s) => s.selectedAction);

  return (
    <div className={OnlineStoreStyles["Online-Store-UI-Frame-PanelArea"]}>
      <a id={skipTargetId} tabIndex={-1}></a>

      <div
        className={OnlineStoreStyles["Online-Store-UI-StaticPanel"]}
        aria-hidden={false}
        tabIndex={-1}
      >
        <div
          className={
            OnlineStoreStyles["Online-Store-UI-StaticPanel__ChildrenWrapper"]
          }
        >
          {selectedAction === "SECTIONS" ? (
            <Sections />
          ) : selectedAction === "SETTINGS" ? (
            <Settings />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
