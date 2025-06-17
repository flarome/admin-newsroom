import { styles as EditorStyles } from "styles/Editor";
import {
  getStaticPanelHeaderClass,
  getStaticPanelLayoutClass,
  styles as OnlineStoreStyles,
} from "styles/OnlineStore";

import { Text } from "@shopify/polaris";

export const Settings = () =>  (
    <div className={EditorStyles["ScrollableWrapper"]}>
      <div
        className={getStaticPanelLayoutClass({
          layoutSpacingDefault: true,
          divided: true,
          fullHeight: true,
          scrollable: true,
        })}
      >
        <div
          className={`${EditorStyles["HeadingOverride"]} ${EditorStyles["dense"]}`}
        >
          <div
            className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingDefault: true, paddingBase: true, sticky: true, isStuck: true, denseUi: true }, false)}`}
          >
            <div
              className={
                OnlineStoreStyles[
                  "Online-Store-UI-StaticPanel-Layout__ChildrenWrapper"
                ]
              }
            >
              <header
                className={getStaticPanelHeaderClass({
                  sticky: true,
                  alignToActionBar: true,
                })}
              >
                <div
                  className={
                    OnlineStoreStyles[
                      "Online-Store-UI-StaticPanel-Header__HeaderContentWrapper"
                    ]
                  }
                >
                  <div
                    className={
                      OnlineStoreStyles[
                        "Online-Store-UI-StaticPanel-Header__TitleWrapper"
                      ]
                    }
                  >
                    <div
                      className={
                        OnlineStoreStyles[
                          "Online-Store-UI-StaticPanel-Header__TitleMiddleSection"
                        ]
                      }
                    >
                      <Text
                        as="h1"
                        variant="headingMd"
                        fontWeight="semibold"
                        truncate
                      >
                        Paramètres
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    OnlineStoreStyles[
                      "Online-Store-UI-StaticPanel-Header__ActionWrapper"
                    ]
                  }
                ></div>
              </header>
            </div>
          </div>
        </div>

        <div
          className={getStaticPanelLayoutClass({
            layoutSpacingDefault: true,
            fullHeight: true,
            scrollable: true,
          })}
        >
          <section
            className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingNone: true, paddingNone: true, denseUi: true }, false)}`}
          >
            <div
              className={
                OnlineStoreStyles[
                  "Online-Store-UI-StaticPanel__ChildrenWrapper"
                ]
              }
            >
              <div
                className={getStaticPanelLayoutClass({
                  layoutSpacingDefault: true,
                  dividerAfter: true,
                })}
              >
                <section
                  className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingNone: true, paddingNone: true, denseUi: true }, false)}`}
                ></section>
                <section
                  className={`${OnlineStoreStyles["Online-Store-UI-StaticPanel-Layout__Section"]} ${getStaticPanelLayoutClass({ sectionSpacingNone: true, paddingNone: true, denseUi: true }, false)}`}
                ></section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
