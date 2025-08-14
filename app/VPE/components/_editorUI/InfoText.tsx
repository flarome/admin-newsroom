import { Text } from "@polaris/npm";
import { useFeatureFlags } from "@VPE/contexts";
import { InfoTextClass } from "@VPE/styles/OnlineStore";
import { Tone } from "constants/tone";
import { classnames } from "lib";
import { HyperlinkedText, type HyperlinkedTextProps } from "./HyperlinkedText";

interface InfoTextProps {
  content?: HyperlinkedTextProps["children"];
  tone?: Tone;
}


/**
 * Composant affichant un texte d'information avec styles selon le ton et mode UI dense
 */
export function InfoText({ content, tone }: InfoTextProps) {
  const { denseUIEnabled } = useFeatureFlags(); // remplace Ja()

  // Si tone = Magic, alors "magic", sinon "subdued"
  const toneClass = tone === Tone.Magic ? "magic" : "subdued";

  // Construction des classes conditionnelles
  const className = classnames({
    [InfoTextClass.DenseInfoText]: denseUIEnabled,
    [InfoTextClass.MagicTone]: toneClass === "magic",
  });

  return (
    <Text
      as="p"
      breakWord
      tone={toneClass}
      variant={denseUIEnabled ? "bodyXs" : "bodyMd"}
    >
      <span className={className}>{content ? <HyperlinkedText>{content}</HyperlinkedText> : null}</span>
    </Text>
  );
}