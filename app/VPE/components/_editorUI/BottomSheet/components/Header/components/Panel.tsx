import React, { useEffect, isValidElement } from "react";
import { Text, type TextProps } from "@polaris/npm"; // ou ton composant Li
import { useHeaderContext } from "../context";
import { usePrevious } from '@shopify/react-hooks';
import { Tone } from "constants/tone";
import { BottomSheetClass } from "@VPE/styles/OnlineStore";
import {Icon, type IconProps} from '../../../../../_ui/Icon';
import { EditableText, type EditableTextProps } from "@VPE/components/_editorUI/EditableText";
import { extractTextFromReactNode } from "utils/react/extractTextFromReactNode";


type RenamingOptions = {
  text: string;                          // texte actuel éditable
  initialText: string;                   // texte initial
  setInitialText: (text: string) => void; // setter du texte initial
  onRename: (text: string) => void;     // callback lors d’une modification
  isEditing: boolean;                    // est en mode édition
  prevIsEditing?: boolean;               // mode édition précédent (optionnel)
  canRename: boolean;                    // permission de renommer
  onEditModeChange: EditableTextProps["onEditModeChange"]; // callback sur changement mode édition
  maxLength?: EditableTextProps["maxLength"];                    // longueur max texte
};


export interface PanelTitleProps {
  renamingOptions?: RenamingOptions;
  tone?: string; // ton du texte
}



function useCurrentPanelTitle() {
  const context = useHeaderContext();

   if (!context || !(context != null && context.titles))
        return null;



       const {titles} = context
         const lastTitle = Array.from(titles.values()).slice(-1)[0];


  if (!lastTitle) return null;


    const title = lastTitle.title;


 

  if (isValidElement(title)) {
    return {
      title,
      currentPanelTitle: lastTitle,
    };
  }


   const subtitle = lastTitle.subtitle;

  return {
    titleOptions: typeof title === "string" ? { content: title } : title,
    subtitleOptions: typeof subtitle === "string" ? { content: subtitle } : subtitle,
    currentPanelTitle: lastTitle,
  };
}





function getTone({ tone, isSubdued }: { tone?: string; isSubdued?: boolean }): string | undefined {
  if (tone === Tone.Magic) {
    return Tone.Magic;
  }
  return isSubdued ? "subdued" : undefined;
}



function hasIconSource(iconData?: IconProps): boolean {
  return iconData?.source !== undefined;
}




type RenderIconElementProps = {
  iconData?: IconProps;
  isRenaming?: boolean;
  isSubtitle?: boolean;
  tone?: string; // ou Ka | string si tu veux typer plus fort
};

function renderIcon({
  iconData,
  isRenaming,
  isSubtitle,
  tone,
}: RenderIconElementProps) {
  if (isRenaming || !hasIconSource(iconData)) return null;

  const isMagic = tone === Tone.Magic;
  const dynamicTone = isMagic ? "ai" : iconData?.tone;
  const dynamicColor = isMagic ? undefined : iconData?.color;

  const finalProps: IconProps = {
    ...iconData,
    tone: dynamicTone,
    color: dynamicColor,
    ...(isSubtitle && {
      tone: "neutral",
      color: "subdued",
      size: "base"
    }),
  };

  return Icon(finalProps); // ou <Icon {...finalProps} /> si `xd` est un composant
}



export const PanelTitle: React.FC<PanelTitleProps> = ({ renamingOptions, tone }) => {
  const panelContext = useCurrentPanelTitle();



  const currentPanelTitleId = panelContext?.currentPanelTitle?.id;
  const selectedTitleId = usePrevious(currentPanelTitleId);



      if (useEffect( () => {
        
            if (!(panelContext != null && panelContext.titleOptions) || !renamingOptions) return;

    const {
      text,
      initialText,
      setInitialText,
      onRename,
      isEditing,
      prevIsEditing,
    } = renamingOptions;

    const panelTitleId = panelContext.currentPanelTitle.id;
    const isCurrent = selectedTitleId && selectedTitleId === panelTitleId;

    const normalizedContent = extractTextFromReactNode(panelContext.titleOptions.content);
    const textIsEmpty = !text || text.trim() === "";
    const textIsDefault = text === normalizedContent;
    const initialTextIsEmpty = !initialText || initialText.trim() === "";

    if (
      !isCurrent ||
      (isCurrent && textIsEmpty && initialTextIsEmpty) ||
      (!isEditing && !textIsDefault && text === initialText)
    ) {
      onRename(normalizedContent);
      setInitialText(normalizedContent);
      return;
    }

    if (textIsEmpty && !initialTextIsEmpty && !isEditing && prevIsEditing) {
      onRename(initialText);
      return;
    }

    if (!textIsDefault && !textIsEmpty && !isEditing) {
      setInitialText(text);
    }

        
      }
      , [panelContext?.titleOptions, panelContext?.currentPanelTitle, renamingOptions, selectedTitleId]),
 !panelContext)
        return null;




  const { title, titleOptions, subtitleOptions } = panelContext;
  const isEditing = renamingOptions?.canRename && renamingOptions.isEditing;

  if (title) return title;

  const toneClass = getTone({ tone, isSubdued: titleOptions?.subdued });

  // Props communs pour titre et sous-titre
  const textProps = {
    variant: "headingMd",
    as: "h2" as const,
    tone: toneClass,
    truncate: true,
  } as TextProps;

  const content = titleOptions?.content;



  const editableTitle =   renamingOptions && renamingOptions != null && renamingOptions.canRename && content ? (
    <EditableText
      text={renamingOptions.text}
      defaultText={renamingOptions.initialText}
      isEditing={renamingOptions.isEditing}
      onChange={renamingOptions.onRename}
      onEditModeChange={renamingOptions.onEditModeChange}
      textProps={textProps}
      showClearButton={true}
      disableClick={true}
      maxLength={renamingOptions.maxLength}
    />
  ) : null;

  const staticTitle = content ? (
    <Text {...textProps}>{titleOptions.content}</Text>
  ) : null;

  const titleContent = renamingOptions && renamingOptions != null && renamingOptions?.canRename ? editableTitle : staticTitle;


const TitlePrefixWrapper = (
  <div className={BottomSheetClass.Header.TitlePrefixWrapper}>
    {renderIcon({
      iconData: titleOptions?.prefix,
      isRenaming: isEditing,
      tone: tone,
    })}
  </div>
);

const SuffixWrapper = (
  <div className={BottomSheetClass.Header.SuffixWrapper}>
    {renderIcon({
      iconData: titleOptions?.suffix,
      isRenaming: isEditing,
      tone: tone,
    })}
  </div>
);


const Subtitle =  subtitleOptions && subtitleOptions != null && subtitleOptions?.content ? (
  <Text variant="bodySm" as="p" tone="subdued" truncate>
    {subtitleOptions.content}
  </Text>
) : null;

const SubtitlePrefixWrapper = (
  <div className={BottomSheetClass.Header.SubtitlePrefixWrapper}>
    {renderIcon({
      iconData: subtitleOptions?.prefix,
      isRenaming: isEditing,
      isSubtitle: true,
    })}
  </div>
);

const SubtitleSuffixWrapper = (
  <div className={BottomSheetClass.Header.SubtitleSuffixWrapper}>
    {renderIcon({
      iconData: subtitleOptions?.suffix,
      isRenaming: isEditing,
      isSubtitle: true,
    })}
  </div>
);

const showSutitle = subtitleOptions && !isEditing;

return (
  <>
    <div className={BottomSheetClass.Header.TitleWrapper}>
      {TitlePrefixWrapper}
      {titleContent}
      {SuffixWrapper}
    </div>
    {showSutitle && (
      <div className={BottomSheetClass.Header.SubtitleWrapper}>
        {SubtitlePrefixWrapper}
        {Subtitle}
        {SubtitleSuffixWrapper}
      </div>
    )}
  </>
);
};

