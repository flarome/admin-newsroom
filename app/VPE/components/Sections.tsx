
import { styles as EditorStyles } from "@VPE/styles/Editor";
import {
  getNavHeaderSectionClass,
  getStaticPanelLayoutClass,
  styles as OnlineStoreStyles,
} from "@VPE/styles/OnlineStore";

import { Box, Text } from "@polaris/npm";

export const Sections = () => (
  <>
    <div className={OnlineStoreStyles["Online-Store-UI-NavHeader"]}>
      <Box paddingInlineStart={{ xs: "400" }}>
        <div
          className={getNavHeaderSectionClass({
            alignToNav: true,
            alignToActionBar: true,
            dense: true,
          })}
        >
          <div
            className={`${EditorStyles["TemplateHeadingWithoutPicker"]} ${EditorStyles["removeHeadingSpacing"]}`}
          >
            <div className={EditorStyles["Heading"]}>
              <Text as="h1" variant="headingMd">
                Article
              </Text>
            </div>
          </div>
        </div>
      </Box>
    </div>

    <div
      className={getStaticPanelLayoutClass({
        layoutSpacingDefault: true,
        spaceAfter: true,
        divided: true,
        fullHeight: true,
        scrollable: true,
      })}
    ></div>
  </>
);
