import './styles.css';

import getClassNameFactoryGLOBAL from "../../../lib/get-class-name-factory";
import styles from "./styles.module.css";


const prefix = "Online-Store-UI";

function getClassNameFactory(rootClass: string) {
  return getClassNameFactoryGLOBAL(`${prefix}-${rootClass}`, styles);
} 

function getClassName(rootClass: string) {
    return styles[`${prefix}-${rootClass}`]
}
function getSubClassName(rootClass: string, subClass: string) {
    return getClassName(`${rootClass}__${subClass}`)
}

/*-- AppProvider --*/
export const getAppProviderClass = getClassNameFactory("AppProvider");

/*-- Frame --*/
export const getFrameClass = getClassNameFactory("Frame");
export const getFrameSidebarClass = getClassNameFactory("Frame-Sidebar");
export const getFrameMainAreaClass = getClassNameFactory("Frame-MainArea");

/*-- SkipToAction --*/
export const getSkipToActionClass = getClassNameFactory("SkipToAction");

/*-- Preview --*/
export const getPreviewClass = getClassNameFactory("Preview");

/*-- TopBar --*/
export const getTopBarClass = getClassNameFactory("TopBar");
export const getTopBarLayoutGroupClass = getClassNameFactory("TopBar-LayoutGroup");
export const getTopBarExitActionClass = getClassNameFactory("TopBar-ExitAction");
export const getTopBarLayoutGroupSpacingExtraClass = getClassNameFactory("TopBar-LayoutGroup__spacingExtra");

/*-- SegmentedControl --*/
export const getSegmentedControlClass = getClassNameFactory("SegmentedControl");
export const getSegmentedControlOptionClass = getClassNameFactory("SegmentedControl-Option");
export const SegmentedControlClass = {
    Option: {
        _: getClassNameFactory("SegmentedControl-Option"),
        ButtonContainer: getSubClassName("SegmentedControl-Option", "ButtonContainer"),
        SegmentedControlItem:  getSubClassName("SegmentedControl-Option", "SegmentedControlItem"),
    }

}

/*-- PlainAction --*/
export const getPlainActionClass = getClassNameFactory("PlainAction");

/*-- NavHeader --*/
export const getNavHeaderSectionClass = getClassNameFactory("NavHeader-Section");

/*-- StaticPanel --*/
export const getStaticPanelLayoutClass = getClassNameFactory("StaticPanel-Layout");
export const getStaticPanelHeaderClass = getClassNameFactory("StaticPanel-Header")
