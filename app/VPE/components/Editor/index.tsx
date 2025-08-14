import { styles as LoadingStyles } from "@VPE/styles/Loading";
import {
  PreviewClass,
} from "../../styles/OnlineStore";

import { useAppStore } from "@VPE/store";

import { classnames } from "lib";

import Styles from './styles.module.css';
import { WYSIWYG } from "../WYSIWYG";


export const SkeletonEditor = () => (
  <div className={LoadingStyles["Preview"]}>
    <div className={LoadingStyles["MobileCard"]}></div>
  </div>
);


export const Editor = ( 
  {
    /*canRenderEditor*/
  }, 
) => {
  const zoomConfig = useAppStore((s) => s.zoomConfig);

  return (
    <div className={PreviewClass._}>
      <div
        className={PreviewClass.PreviewInner}
      >
        <div
          className={PreviewClass.HeaderWrapper}
        ></div>

        <div className={PreviewClass.Main}>
          <div
            className={ classnames(PreviewClass.Interior, PreviewClass._options({ modeDesktop: zoomConfig === "DESKTOP", modeFullscreen: zoomConfig === "FULLSCREEN", modeTabletLandscape: zoomConfig === "TABLET_LANDSCAPE", modeMobile: zoomConfig == "MOBILE", modeMobileLandscape: zoomConfig === "MOBILE_LANDSCAPE", scaled: false }))}
            data-preview-container=""
          >
            <div className={Styles.SafeArea}></div>

            <div
              className={PreviewClass.ShopFrame}
            >


       
              <WYSIWYG />
              </div>
    
          </div>
        </div>
      </div>
    </div>
  ); 
};

