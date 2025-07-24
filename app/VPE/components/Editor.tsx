import { styles as LoadingStyles } from "../styles/Loading";
import { styles as EditorStyles } from "../styles/Editor";
import {
  styles as OnlineStoreStyles,
  getPreviewClass,
} from "../styles/OnlineStore";

import { useAppStore } from "store";
import { clsx } from "clsx";

import EditorSW from "../packages/WYSIWYG";
import { createUseVPE } from "../lib/use-vpe";

export const SkeletonEditor = () => (
  <div className={LoadingStyles["Preview"]}>
    <div className={LoadingStyles["MobileCard"]}></div>
  </div>
);

export const EditorURI = "/vpe/editor";


export const Editor = ( 
  {
    /*canRenderEditor*/
  },
) => {
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
                  EditorStyles["visible"],
                )}
              >
              
              <SW />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useVPE = createUseVPE(); 

const SW = () => {
 const data = useVPE((s) => s.WYSIWYG);
 const dispatch = useVPE((s) => s.dispatch);


  const onChange = (value) => {
    dispatch({
      type: "setData",
      data: { WYSIWYG: value },
    });
  };


  return (
  <EditorSW
                  ui={{ mode: "PAGE" }}
                  editor={{ data: data, onChange: onChange }}
                />
  )
}

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
