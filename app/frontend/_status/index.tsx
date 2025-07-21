import { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.css"; // Remplace par Zu dans ton code obfusqué
import { Text } from "@shopify/polaris";

type StatusProps = {
  imgSrc?: string;
  altText?: string;
  heading: string;
  wideGap?: boolean;
  body?: ReactNode;
  centerImage?: boolean;
};

export const Status: FC<StatusProps> = ({
  imgSrc,
  altText,
  heading,
  wideGap = false,
  body,
  centerImage = false,
}) => {
  return (
    <div
      className={classNames(
        centerImage ? styles.CenteredPageIllustration : styles.PageIllustration,
        {
          [styles.WideGap]: wideGap,
        }
      )}
    >
      {imgSrc && (
        <div
          className={
            centerImage ? styles.CenteredImageContainer : styles.ImageContainer
          }
        >
          <img src={imgSrc} alt={altText ?? ""} />
        </div>
      )}
      <div className={styles.TextContainer}>
        <Text as="h3" variant="headingXl">
          {heading}
        </Text>
        {body}
      </div>
    </div>
  );
};