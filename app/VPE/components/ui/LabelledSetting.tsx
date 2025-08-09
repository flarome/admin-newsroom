import { useFeatureFlags } from "@VPE/contexts";
import { LabelledSettingClass } from "@VPE/styles/OnlineStore";
import { Tone } from "constants/tone";
import { CSSProperties, type ReactNode } from "react";
import { BlockStack, Box, InlineError, Text } from "@polaris/npm";
import { InfoText } from "./InfoText";
import {InlineStack, Label} from '@polaris/internal'
import { InternalIcon } from "admin-ui-foundations";
import { classnames } from "lib";




interface InlineHighlightProps {
  text: React.ReactNode | string;
}

/**
 * Composant affichant un texte mis en avant avec une icône d’info inline
 */
function InlineHighlight({ text }: InlineHighlightProps) {
  return (
    <div className={LabelledSettingClass.InlineHighlight._base}>
      <Text as="p" tone="inherit" variant="bodySm" breakWord>

        { /* // @ts-ignore */}
        <InlineStack as="span" gap="100" wrap={false}>
          <div className={LabelledSettingClass.InlineHighlight.InfoIcon}>
            <InternalIcon type="info" tone="legacy-inherit" />
          </div>
          {text}
        </InlineStack>
      </Text>
    </div>
  );
}












export interface LabelledSettingProps {
  id: string;
  label: ReactNode;
  error?: string | string[] | null;
  highlightText?: string;
  actions?: ReactNode;
  helpText?: string | null;
  helpTextPosition?: "below" | "above";
  children: ReactNode;
  layout?: "stacked" | "inline";
  labelTopPadding?: string | number;
  labelBlockAlign?: "input-baseline" | "center" | "start";
  tone?: Tone;
}




export function LabelledSetting({
  id,
  label,
  error,
  highlightText,
  actions,
  helpText,
  helpTextPosition = "below",
  children,
  layout,
  labelTopPadding,
  labelBlockAlign = "input-baseline",
  tone,
}: LabelledSettingProps) {


  const { denseUIEnabled } = useFeatureFlags(); // remplace Ja()

  const isHelpTextBelow = helpTextPosition === "below";

  const helpTextMarkup = helpText ? (
    <Box
      paddingBlockStart={denseUIEnabled ? undefined : "100"}
      id={`HelpText-${id}`}
      paddingBlockEnd={isHelpTextBelow ? undefined : "100"}
    >
      <InfoText content={helpText} tone={tone} />
    </Box>
  ) : null;

  const errorList = Array.isArray(error) || error == null ? error : [error];



  const errorMarkup =
    errorList && errorList.length > 0 ? (
      <div className={denseUIEnabled ? LabelledSettingClass.DenseError : LabelledSettingClass.Error}>
        {errorList.map((message, index) => (
          <InlineError key={index} message={message} fieldID={`Error-${id}`} />
        ))}
      </div>
    ) : null;

    

  const highlightMarkup = highlightText ? (
    <InlineHighlight text={highlightText} />
  ) : null;

  // @ts-ignore
  const actionsMarkup = actions ? <InlineStack wrap={false}>{actions}</InlineStack> : null;


  if (denseUIEnabled) {
    if (layout === "stacked") {
      return (
        <StackedLayout
          label={label}
          id={id}
          renderHelpTextBelow={isHelpTextBelow}
          helpTextMarkup={helpTextMarkup}
          actionsMarkup={actionsMarkup}
          highlightMarkup={highlightMarkup}
          errorMarkup={errorMarkup}
          tone={tone}
        >
          {children}
        </StackedLayout>
      );
    }
    return (
      <DefaultLayout
        label={label}
        id={id}
        layout={layout}
        helpTextMarkup={helpTextMarkup}
        highlightMarkup={highlightMarkup}
        errorMarkup={errorMarkup}
        labelTopPadding={labelTopPadding}
        labelBlockAlign={labelBlockAlign}
        tone={tone}
      >
        {children}
      </DefaultLayout>
    );
  }

  // Non dense UI case
  const labelWrapper = (
    <>
      <div className={LabelledSettingClass.LabelWrapper}>
     { /* // @ts-ignore */ }
        <Label id={id} tone={tone === Tone.Magic ? Tone.Magic : undefined}>
          <span className={LabelledSettingClass.Label}>{label}</span>
        </Label>
        {actionsMarkup}
      </div>
      {isHelpTextBelow ? null : helpTextMarkup}
    </>
  );

  const content =
    layout === "inline" ? (
      <div className={LabelledSettingClass.Wrapper}>
        {labelWrapper}
        {children}
      </div>
    ) : (
      <>
        {labelWrapper}
        {children}
      </>
    );

  return (
    <>
      {content}
      {errorMarkup}
      {isHelpTextBelow ? helpTextMarkup : null}
      {highlightMarkup}
    </>
  );
}

interface StackedLayoutProps {
  label: ReactNode;
  id: string;
  children: ReactNode;
  renderHelpTextBelow?: boolean;
  helpTextMarkup?: ReactNode;
  actionsMarkup?: ReactNode;
  highlightMarkup?: ReactNode;
  errorMarkup?: ReactNode;
  tone?: Tone;
}
function StackedLayout({
  label,
  id,
  children,
  renderHelpTextBelow,
  helpTextMarkup,
  actionsMarkup,
  highlightMarkup,
  errorMarkup,
  tone,
}: StackedLayoutProps) {


  // Classes CSS (supposées importées)
  const containerClassName = classnames(
    LabelledSettingClass.DenseLabelWrapper,
    LabelledSettingClass._({stacked: true, withoutActions: actionsMarkup ? false : true,blockAlignCenter:true}, false),
  );

  const helpTextBelow = renderHelpTextBelow ? helpTextMarkup : null;

  const combinedMarkup =
    errorMarkup || helpTextBelow || highlightMarkup ? (
      <div>
        {errorMarkup}
        {helpTextBelow}
        {highlightMarkup}
      </div>
    ) : null;

  return (
    <BlockStack gap="100">
      {!renderHelpTextBelow ? helpTextMarkup : null}
      <div className={containerClassName}>
        <Label variant="bodySm" tone={tone === Tone.Magic ? Tone.Magic : "inherit"} id={id}>
          <div className={LabelledSettingClass.DenseLabel}>{label}</div>
        </Label>
        {actionsMarkup}
      </div>
      {children}
      {combinedMarkup}
    </BlockStack>
  );
}


interface DefaultLayoutProps {
  label: ReactNode;
  id: string;
  children: ReactNode;
  layout?: string;
  helpTextMarkup?: ReactNode;
  highlightMarkup?: ReactNode;
  errorMarkup?: ReactNode;
  labelTopPadding?: string | number;
  labelBlockAlign?: LabelledSettingProps["labelBlockAlign"]
  tone?: Tone;
}

function DefaultLayout({
  label,
  id,
  children,
  layout,
  helpTextMarkup,
  highlightMarkup,
  errorMarkup,
  labelTopPadding,
  labelBlockAlign = "input-baseline",
  tone,
}: DefaultLayoutProps) {

      const wrapperClassName = classnames(
    LabelledSettingClass.DenseWrapper,
    LabelledSettingClass._({unboundedLabel: layout === "inline-unbounded-label"}, false),
  );

      const labelWrapperClassName = classnames(
    LabelledSettingClass.DenseLabelWrapper,
    LabelledSettingClass._({inline: true, blockAlignFlexible:labelBlockAlign === "input-baseline",blockAlignCenter:labelBlockAlign === "center", blockAlignStart:  labelBlockAlign === "start",}, false),
  );



  const labelWrapperStyle: CSSProperties = {
    "--osui-labelled-setting-label-top-padding": `var(--p-space-${
      labelBlockAlign === "input-baseline" && labelTopPadding === undefined
        ? "200"
        : labelTopPadding ?? "0"
    })`,
  } as CSSProperties;

  const combinedMarkup =
    errorMarkup || helpTextMarkup || highlightMarkup ? (
      <div>
        {errorMarkup}
        {helpTextMarkup}
        {highlightMarkup}
      </div>
    ) : null;

  return (
    <BlockStack gap={layout === "inline-unbounded-label" ? "150" : "100"}>
      <div className={wrapperClassName}>
        <div className={labelWrapperClassName} style={labelWrapperStyle}>
          <Label variant="bodySm" tone={tone === Tone.Magic ? Tone.Magic : "inherit"} id={id}>
            <div className={LabelledSettingClass.DenseLabel}>{label}</div>
          </Label>
        </div>

        <BlockStack gap="100">
          <InlineStack wrap={false} gap="150" blockAlign="center">
            <div className={LabelledSettingClass.ChildrenWrapper}>{children}</div>
          </InlineStack>
          {layout === "inline" ? combinedMarkup : null}
        </BlockStack>
      </div>
      {layout === "inline-unbounded-label" ? combinedMarkup : null}
    </BlockStack>
  );
}