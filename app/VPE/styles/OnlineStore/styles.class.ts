import './styles.css';

import getClassNameFactoryGLOBAL from "../../../lib/get-class-name-factory";
import styles from "./styles.module.css";

export {styles};

const prefix = "Online-Store-UI"; 

function getClassNameFactory(rootClass: string) {
  return getClassNameFactoryGLOBAL(`${prefix}-${rootClass}`, styles);
} 

function getName(rootClass: string) {
  return `${prefix}-${rootClass}`;
} 


function getClassName(rootClass: string) {
    return styles[`${prefix}-${rootClass}`]
}
function getSubClassName(rootClass: string, subClass: string) {
    return getClassName(`${rootClass}__${subClass}`)
}
 
/*-- AppProvider --*/
export const AppProviderClass = {
    _: getClassNameFactory("AppProvider")
}
/*-- Frame --*/
export const getFrameClass = getClassNameFactory("Frame");
export const getFrameSidebarClass = getClassNameFactory("Frame-Sidebar");
export const getFrameMainAreaClass = getClassNameFactory("Frame-MainArea");

export const FrameClass = {
_: getClassNameFactory("Frame"),
PanelArea: {
    _: getClassNameFactory("Frame-PanelArea")
}
}

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
export const SegmentedControlClass = {
    _: getClassNameFactory("SegmentedControl"),
    SegmentedControlContainer: getSubClassName("SegmentedControl", "SegmentedControlContainer"),
    Option: {
        _: getClassNameFactory("SegmentedControl-Option"),
        ButtonContainer: getSubClassName("SegmentedControl-Option", "ButtonContainer"),
        SegmentedControlItem:  getSubClassName("SegmentedControl-Option", "SegmentedControlItem"),
        OptionWrapper: getSubClassName("SegmentedControl-Option", "OptionWrapper"),
    }

}

/*-- PlainAction --*/
export const getPlainActionClass = getClassNameFactory("PlainAction");

export const PlainActionClass = {
    _:  getClassNameFactory("PlainAction"),
    Subtitle: getSubClassName("PlainAction", "Subtitle"),
    Interior:  getSubClassName("PlainAction", "Interior"),
    Prefix:  getSubClassName("PlainAction", "Prefix"),

        WrappedContent:  getSubClassName("PlainAction", "WrappedContent"),
        Disclosure:  getSubClassName("PlainAction", "Disclosure"),
        SubtitleWrapperContent:  getSubClassName("PlainAction", "SubtitleWrapperContent"),
        ExternalIcon:  getSubClassName("PlainAction", "ExternalIcon"),
        PrefixItem:  getSubClassName("PlainAction", "PrefixItem"),
        PrefixDark:  getSubClassName("PlainAction", "PrefixDark"),
        Content:  getSubClassName("PlainAction", "Content"),
        IconWrapper:  getSubClassName("PlainAction", "IconWrapper"),
        LoadingIndicator:  getSubClassName("PlainAction", "LoadingIndicator"),
        InteriorWithSubtitle: getSubClassName("PlainAction", "InteriorWithSubtitle"),

        
        
}


export const InfoTextClass = {
DenseInfoText: getSubClassName("InfoText", "DenseInfoText"),
MagicTone: getSubClassName("InfoText", "MagicTone"),
    
}




const tr = "Online-Store-UI-PlainAction_1jhib"
  , nr = "Online-Store-UI-PlainAction--hyperlink_baw6d"
  , rr = "Online-Store-UI-PlainAction--subtitle_1ijt1"
  , or = "Online-Store-UI-PlainAction--looseLineHeight_1gkfs"
  , ar = "Online-Store-UI-PlainAction--extraLooseLineHeight_1dtgh"
  , ir = "Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c"
  , sr = "Online-Store-UI-PlainAction--small_geqok"
  , lr = "Online-Store-UI-PlainAction--fontSizeBodyLg_qzizg"
  , cr = "Online-Store-UI-PlainAction--fontSizeBodyXl_nwihz"
  , ur = "Online-Store-UI-PlainAction--noPadding_4dn71"
  , dr = "Online-Store-UI-PlainAction--hasContent_5372i"
  , _r = "Online-Store-UI-PlainAction--slim_1buo4"
  , fr = "Online-Store-UI-PlainAction--iconOnly_vgqbv"
  , pr = "Online-Store-UI-PlainAction--disclosure_1d0sg"
  , mr = "Online-Store-UI-PlainAction--extraPadding_yq567"
  , gr = "Online-Store-UI-PlainAction--paddingLoose_1e6jv"
  , vr = "Online-Store-UI-PlainAction--backgroundSubdued_w48to"
  , hr = "Online-Store-UI-PlainAction--withSurfaceSubduedBackground_1c0vh"
  , br = "Online-Store-UI-PlainAction--backgroundDark_glaz7"
  , Er = "Online-Store-UI-PlainAction--backgroundGrey_1j6sp"
  , yr = "Online-Store-UI-PlainAction--interactive_1ef4b"
  , Pr = "Online-Store-UI-PlainAction--disabled_11cdm"
  , Or = "Online-Store-UI-PlainAction--pressed_htthh"
  , Ir = "Online-Store-UI-PlainAction--destructive_123ij"
  , kr = "Online-Store-UI-PlainAction--darkInverse_hkusf"
  , Dr = "Online-Store-UI-PlainAction--dark_1buma"
  , Sr = "Online-Store-UI-PlainAction__Subtitle_1ijt1"
  , jr = "Online-Store-UI-PlainAction--unstyled_10tjw"
  , Lr = "Online-Store-UI-PlainAction--alignLeft_22txm"
  , Ar = "Online-Store-UI-PlainAction--fullWidth_133qr"
  , Cr = "Online-Store-UI-PlainAction--fillContainer_qu7am"
  , Tr = "Online-Store-UI-PlainAction--loading_flcmt"
  , xr = "Online-Store-UI-PlainAction--outline_17u2e"
  , wr = "Online-Store-UI-PlainAction--vertical_kpg8x"
  , Rr = "Online-Store-UI-PlainAction__Interior_9sack"
  , Ur = "Online-Store-UI-PlainAction__Prefix_vg8vc"
  , Br = "Online-Store-UI-PlainAction__WrappedContent_qd2on"
  , Mr = "Online-Store-UI-PlainAction__Disclosure_1d0sg"
  , Nr = "Online-Store-UI-PlainAction__SubtitleWrapperContent_1tdea"
  , Vr = "Online-Store-UI-PlainAction__ExternalIcon_ivydx"
  , Fr = "Online-Store-UI-PlainAction__PrefixItem_bid0h"
  , zr = "Online-Store-UI-PlainAction__PrefixDark_12xpi"
  , $r = "Online-Store-UI-PlainAction--truncate_1aegu"
  , Wr = "Online-Store-UI-PlainAction--multilineTruncate_vmngw"
  , Hr = "Online-Store-UI-PlainAction__Content_11f9f"
  , Qr = "Online-Store-UI-PlainAction--removeUnderline_14wmj"
  , qr = "Online-Store-UI-PlainAction__IconWrapper_1suin"
  , Zr = "Online-Store-UI-PlainAction__LoadingIndicator_twftt"
  , Kr = "Online-Store-UI-PlainAction--toneMagic_1nsy4"
  , d = {
    PlainAction: tr,
    hyperlink: nr,
    subtitle: rr,
    looseLineHeight: or,
    extraLooseLineHeight: ar,
    fontSizeBodyMd: ir,
    small: sr,
    fontSizeBodyLg: lr,
    fontSizeBodyXl: cr,
    noPadding: ur,
    hasContent: dr,
    slim: _r,
    iconOnly: fr,
    disclosure: pr,
    extraPadding: mr,
    paddingLoose: gr,
    backgroundSubdued: vr,
    withSurfaceSubduedBackground: hr,
    backgroundDark: br,
    backgroundGrey: Er,
    interactive: yr,
    disabled: Pr,
    pressed: Or,
    destructive: Ir,
    darkInverse: kr,
    dark: Dr,
    Subtitle: Sr,
    unstyled: jr,
    alignLeft: Lr,
    fullWidth: Ar,
    fillContainer: Cr,
    loading: Tr,
    outline: xr,
    vertical: wr,
    Interior: Rr,
    Prefix: Ur,
    WrappedContent: Br,
    Disclosure: Mr,
    SubtitleWrapperContent: Nr,
    ExternalIcon: Vr,
    PrefixItem: Fr,
    PrefixDark: zr,
    truncate: $r,
    multilineTruncate: Wr,
    Content: Hr,
    removeUnderline: Qr,
    IconWrapper: qr,
    LoadingIndicator: Zr,
    toneMagic: Kr
}


/*-- NavHeader --*/
export const getNavHeaderSectionClass = getClassNameFactory("NavHeader-Section");

/*-- StaticPanel --*/
export const getStaticPanelLayoutClass = getClassNameFactory("StaticPanel-Layout");
export const getStaticPanelHeaderClass = getClassNameFactory("StaticPanel-Header")

/*-- StaticPanel --*/
export const StaticPanelClass = {
    layout: {
        _: getClassNameFactory("StaticPanel-Layout"),
        section: getSubClassName("StaticPanel-Layout", "Section"),
        ChildrenWrapper: getSubClassName("StaticPanel-Layout", "ChildrenWrapper"),
    }

}

/*-- SectionHeader --*/
export const SectionHeaderClass = {
    _: getClassNameFactory("SectionHeader"),
    SubheadingWrapper: getSubClassName("SectionHeader", "SubheadingWrapper"),
}

/*-- SubheadingButton --*/
export const SubheadingButtonClass = {
    _: getClassNameFactory("SubheadingButton"),
}





/*-- LabelledSetting --*/
export const LabelledSettingClass = {
    _: getClassNameFactory("LabelledSetting"),

    LabelWrapper:  getSubClassName("LabelledSetting", "LabelWrapper"),
    Wrapper:  getSubClassName("LabelledSetting", "Wrapper"),

     Label:  getSubClassName("LabelledSetting", "Label"),
     Error:  getSubClassName("LabelledSetting", "Error"),
      DenseError:  getSubClassName("LabelledSetting", "DenseError"),
       



DenseLabelWrapper: getSubClassName("LabelledSetting", "DenseLabelWrapper"),
DenseLabel: getSubClassName("LabelledSetting", "DenseLabel"),
DenseWrapper: getSubClassName("LabelledSetting", "DenseWrapper"),
ChildrenWrapper: getSubClassName("LabelledSetting", "ChildrenWrapper"),

InlineHighlight: {
   _: getClassNameFactory("LabelledSetting-InlineHighlight"),
   _base: getClassName("LabelledSetting-InlineHighlight"),
   InfoIcon:  getSubClassName("LabelledSetting-InlineHighlight", "InfoIcon"), 
}
}






const m5e = "Online-Store-UI-LabelledSetting__LabelWrapper_ggzix"
  , p5e = "Online-Store-UI-LabelledSetting__Wrapper_1dm83"
  , v5e = "Online-Store-UI-LabelledSetting__Label_pcxvv"
  , _5e = "Online-Store-UI-LabelledSetting__DenseLabelWrapper_re2ze"
  , g5e = "Online-Store-UI-LabelledSetting--stacked_e49vl"
  , k5e = "Online-Store-UI-LabelledSetting--withoutActions_lz2xl"
  , f5e = "Online-Store-UI-LabelledSetting--blockAlignFlexible_173oj"
  , h5e = "Online-Store-UI-LabelledSetting--blockAlignCenter_11wjz"
  , S5e = "Online-Store-UI-LabelledSetting--blockAlignStart_qte97"
  , y5e = "Online-Store-UI-LabelledSetting__DenseWrapper_gi8tz"
  , T5e = "Online-Store-UI-LabelledSetting--unboundedLabel_oo6ca"
  , b5e = "Online-Store-UI-LabelledSetting__DenseLabel_1s8r5"
  , O5e = "Online-Store-UI-LabelledSetting__DenseError_1frkg"
  , E5e = "Online-Store-UI-LabelledSetting__ChildrenWrapper_14cyy"
  , zi = {
    LabelWrapper: m5e,
    Wrapper: p5e,
    Label: v5e,
    DenseLabelWrapper: _5e,
    stacked: g5e,
    withoutActions: k5e,
    blockAlignFlexible: f5e,
    blockAlignCenter: h5e,
    blockAlignStart: S5e,
    DenseWrapper: y5e,
    unboundedLabel: T5e,
    DenseLabel: b5e,
    Error: "Online-Store-UI-LabelledSetting__Error_p3709",
    DenseError: O5e,
    ChildrenWrapper: E5e
}
  , N5e = "Online-Store-UI-settings-LabelledSetting-InlineHighlight_1v02t"
  , I5e = "Online-Store-UI-settings-LabelledSetting-InlineHighlight__InfoIcon_1jd79"
  , _w = {
    InlineHighlight: N5e,
    InfoIcon: I5e
};



/*-- HyperlinkedText --*/
export const HyperlinkedTextClass = {
    _: getClassNameFactory("HyperlinkedText"),
    _base: getClassName("HyperlinkedText")
}

export const BottomSheetClass = {
    _: getClassNameFactory("BottomSheet"),
    BottomSheetInterior:  getSubClassName("BottomSheet", "BottomSheetInterior"),
    DraggableRegion: {
         _: getClassNameFactory("BottomSheet-DraggableRegion"),
         BackgroundSheet: getSubClassName("BottomSheet-DraggableRegion", "BackgroundSheet"),
         DragHandle: getSubClassName("BottomSheet-DraggableRegion", "DragHandle"),
         Content:  getSubClassName("BottomSheet-DraggableRegion", "Content"),
         ContentInterior: getSubClassName("BottomSheet-DraggableRegion", "ContentInterior"),
    },

    DroppableRegion: {
Droppable:  getSubClassName("BottomSheet-DroppableRegion", "Droppable"),
DroppableInterior:  getSubClassName("BottomSheet-DroppableRegion", "DroppableInterior"),
DroppableMid:  getSubClassName("BottomSheet-DroppableRegion", "DroppableMid"),
DroppableBottom:  getSubClassName("BottomSheet-DroppableRegion", "DroppableBottom"),
DroppableTop:  getSubClassName("BottomSheet-DroppableRegion", "DroppableTop"),
    },
    Header: {
           _base: getClassName("BottomSheet"),
           _: getClassNameFactory("BottomSheet-Header"),
           PrimaryActionGroup:  getSubClassName("BottomSheet-Header", "PrimaryActionGroup"),
           PrimaryActionGroupWrapper: getSubClassName("BottomSheet-Header", "PrimaryActionGroupWrapper"),
           Interior:  getSubClassName("BottomSheet-Header", "Interior"),
           DragHandleIcon: getSubClassName("BottomSheet-Header", "DragHandleIcon"),
           Title:  getSubClassName("BottomSheet-Header", "Title"),
           MiddleAction:getSubClassName("BottomSheet-Header", "MiddleAction"),
MiddleActionInteractive:getSubClassName("BottomSheet-Header", "MiddleActionInteractive"),
MiddleActionButton:getSubClassName("BottomSheet-Header", "MiddleActionButton"), 
TitlePrefixWrapper:getSubClassName("BottomSheet-Header", "TitlePrefixWrapper"), 
SuffixWrapper: getSubClassName("BottomSheet-Header", "SuffixWrapper"), 
SubtitlePrefixWrapper:  getSubClassName("BottomSheet-Header", "SubtitlePrefixWrapper"), 
SubtitleSuffixWrapper: getSubClassName("BottomSheet-Header", "SubtitleSuffixWrapper"), 
TitleWrapper: getSubClassName("BottomSheet-Header", "TitleWrapper"), 
SubtitleWrapper: getSubClassName("BottomSheet-Header", "SubtitleWrapper"), 
EditMode: getSubClassName("BottomSheet-Header", "EditMode"), 
SecondaryAction: getSubClassName("BottomSheet-Header", "SecondaryAction"), 
    }
}




const eF = "Online-Store-UI-BottomSheet-DroppableRegion__Droppable_y9qaq"
  , tF = "Online-Store-UI-BottomSheet-DroppableRegion__DroppableInterior_14eqk"
  , nF = "Online-Store-UI-BottomSheet-DroppableRegion__DroppableBottom_r7259"
  , rF = "Online-Store-UI-BottomSheet-DroppableRegion__DroppableMid_510gi"
  , iF = "Online-Store-UI-BottomSheet-DroppableRegion__DroppableTop_1kyam"
  , bc = {
    Droppable: eF,
    DroppableInterior: tF,
    DroppableBottom: nF,
    DroppableMid: rF,
    DroppableTop: iF
};



export const LegacyIconOSUIClass = {
    _name: getName("LegacyIconOSUI"),
    _:  getClassNameFactory("LegacyIconOSUI"),
    SvgSmScreen: getSubClassName("LegacyIconOSUI", "SvgSmScreen"),
    SvgLgScreen: getSubClassName("LegacyIconOSUI", "SvgLgScreen"),
    Placeholder: getSubClassName("LegacyIconOSUI", "Placeholder"),

    Icon: getSubClassName("LegacyIconOSUI", "Icon"),

}

const KO = "Online-Store-UI-BottomSheet-Header_o6ums"
  , YO = "Online-Store-UI-BottomSheet-Header__Interior_1fk04"
  , ZO = "Online-Store-UI-BottomSheet-Header__EditMode_smhui"
  , e2 = "Online-Store-UI-BottomSheet-Header__SecondaryAction_xsv4j"
  , t2 = "Online-Store-UI-BottomSheet-Header__PrimaryActionGroup_1eama"
  , n2 = "Online-Store-UI-BottomSheet-Header__PrimaryActionGroupWrapper_1gvnn"
  , r2 = "Online-Store-UI-BottomSheet-Header__MiddleAction_kq03q"
  , i2 = "Online-Store-UI-BottomSheet-Header__MiddleActionInteractive_yb4lo"
  , s2 = "Online-Store-UI-BottomSheet-Header__MiddleActionButton_11cil"
  , o2 = "Online-Store-UI-BottomSheet-Header__DragHandleIcon_1hyxq"
  , a2 = "Online-Store-UI-BottomSheet-Header__Title_fy9ht"
  , l2 = "Online-Store-UI-BottomSheet-Header__TitleWrapper_pilh6"
  , u2 = "Online-Store-UI-BottomSheet-Header__SubtitleWrapper_1f3lr"
  , c2 = "Online-Store-UI-BottomSheet-Header__TitlePrefixWrapper_v4gnj"
  , f2 = "Online-Store-UI-BottomSheet-Header__SubtitlePrefixWrapper_1d4p7"
  , h2 = "Online-Store-UI-BottomSheet-Header__SubtitleSuffixWrapper_19pbn"
  , d2 = "Online-Store-UI-BottomSheet-Header__SuffixWrapper_7zffq"
  , bi = {
    Header: KO,
    Interior: YO,
    EditMode: ZO,
    SecondaryAction: e2,
    PrimaryActionGroup: t2,
    PrimaryActionGroupWrapper: n2,
    MiddleAction: r2,
    MiddleActionInteractive: i2,
    MiddleActionButton: s2,
    DragHandleIcon: o2,
    Title: a2,
    TitleWrapper: l2,
    SubtitleWrapper: u2,
    TitlePrefixWrapper: c2,
    SubtitlePrefixWrapper: f2,
    SubtitleSuffixWrapper: h2,
    SuffixWrapper: d2
}


export const EditableTextClass = {
  _: getClassNameFactory("EditableText"),
  PlainTextWrapper: getSubClassName("EditableText", "PlainTextWrapper"),
  ExternalTextFieldTrigger: getSubClassName("EditableText", "ExternalTextFieldTrigger"),
  TextFieldWrapper: getSubClassName("EditableText", "TextFieldWrapper"),
  TextFieldContainer: getSubClassName("EditableText", "TextFieldContainer"),
  TextField: getSubClassName("EditableText", "TextField"),
  ClearButtonSpacing: getSubClassName("EditableText", "ClearButtonSpacing"),
  ClearButton: getSubClassName("EditableText", "ClearButton"),
  TextFieldLabel: getSubClassName("EditableText", "TextFieldLabel"),
};



const F2 = "Online-Store-UI-EditableText__PlainTextWrapper_ekaf9"
  , _2 = "Online-Store-UI-EditableText__ExternalTextFieldTrigger_o3t3a"
  , P2 = "Online-Store-UI-EditableText__TextFieldWrapper_1i7j1"
  , I2 = "Online-Store-UI-EditableText__TextFieldContainer_jbkc3"
  , B2 = "Online-Store-UI-EditableText__TextField_khyvb"
  , N2 = "Online-Store-UI-EditableText__ClearButtonSpacing_143a7"
  , M2 = "Online-Store-UI-EditableText__ClearButton_13dib"
  , R2 = "Online-Store-UI-EditableText--headingXs_d45b9"
  , L2 = "Online-Store-UI-EditableText--headingSm_16bey"
  , j2 = "Online-Store-UI-EditableText--headingMd_17oz3"
  , $2 = "Online-Store-UI-EditableText--headingLg_1kqwf"
  , V2 = "Online-Store-UI-EditableText--headingXl_1f4w1"
  , U2 = "Online-Store-UI-EditableText--heading2xl_7gsil"
  , z2 = "Online-Store-UI-EditableText--heading3xl_1qf79"
  , W2 = "Online-Store-UI-EditableText--bodyXs_vz5g6"
  , H2 = "Online-Store-UI-EditableText--bodySm_pz6yf"
  , q2 = "Online-Store-UI-EditableText--bodyMd_l8867"
  , Q2 = "Online-Store-UI-EditableText--bodyLg_og0s6"
  , Lo = {
    PlainTextWrapper: F2,
    ExternalTextFieldTrigger: _2,
    TextFieldWrapper: P2,
    TextFieldContainer: I2,
    TextField: B2,
    ClearButtonSpacing: N2,
    ClearButton: M2,
    headingXs: R2,
    headingSm: L2,
    headingMd: j2,
    headingLg: $2,
    headingXl: V2,
    heading2xl: U2,
    heading3xl: z2,
    bodyXs: W2,
    bodySm: H2,
    bodyMd: q2,
    bodyLg: Q2
};


export const PopoverClass = {

    _: getClassNameFactory("Popover"),
    NoAnimation: getSubClassName("Popover", "NoAnimation"),
    Card: {
        _: getClassNameFactory("Popover-Card"),
    }
}