import { styles as LoadingStyles } from "styles/Loading";
import { styles as EditorStyles } from "styles/Editor";
import {
  styles as OnlineStoreStyles,
  getPreviewClass,
} from "styles/OnlineStore";

import { useState } from "react";
import { useAppStore } from "store";
import { clsx } from 'clsx';

import EditorSW from "editor";

export const SkeletonEditor = () => (
  <div className={LoadingStyles["Preview"]}>
    <div className={LoadingStyles["MobileCard"]}></div>
  </div>
);

export const EditorURI = "/vpe/editor";

export const Editor = ({/*canRenderEditor*/}) => {
  const zoomConfig = useAppStore((s) => s.zoomConfig);

  return (
    <div className={getPreviewClass()}>
      <div
        className={OnlineStoreStyles["Online-Store-UI-Preview__PreviewInner"]}
      >
        <div
          className={
            OnlineStoreStyles["Online-Store-UI-Preview__HeaderWrapper"]
          }
        ></div>

        <div className={OnlineStoreStyles["Online-Store-UI-Preview__Main"]}>
          <div
            className={`${OnlineStoreStyles["Online-Store-UI-Preview__Interior"]} ${getPreviewClass({ modeDesktop: zoomConfig === "DESKTOP", modeFullscreen: zoomConfig === "FULLSCREEN", modeTabletLandscape: zoomConfig === "TABLET_LANDSCAPE", modeMobile: zoomConfig == "MOBILE", modeMobileLandscape: zoomConfig === "MOBILE_LANDSCAPE", scaled: false }, false)}`}
         data-preview-container=""
         >
            <div className={EditorStyles["SafeArea"]}></div>

            <div
              className={
                OnlineStoreStyles["Online-Store-UI-Preview__ShopFrame"]
              }
            >

   <div
                  className={clsx(
                    EditorStyles["StaticIframe"],
                    EditorStyles["visible"]
                  )}
    


                >
            <EditorSW />
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
      <div
                  className={clsx(
                    EditorStyles["StaticIframe"],
                    canRenderEditor && EditorStyles["visible"]
                  )}
    


                >
{canRenderEditor &&  <EditorSW />}
                 



                </div>
*/