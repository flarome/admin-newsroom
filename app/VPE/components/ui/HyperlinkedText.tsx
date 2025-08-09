import React from "react";
import {classnames} from "lib"; // si ce est classnames, adapte si nécessaire
import { HyperlinkedTextClass } from "@VPE/styles/OnlineStore";
import { Link } from "@polaris/npm";

const INTERNAL_LINK_REGEX = /(^\/\S+)/;
const MARKDOWN_LINK_SPLIT_REGEX = /(\[.+?\]\(.+?\))/;
const MARKDOWN_LINK_EXTRACT_REGEX = /\[(.+?)\]\((.+?)\)/;
const ALLOWED_PROTOCOLS = ["https:", "http:", "mailto:", "tel:"];

export interface HyperlinkedTextProps {
  children: string;
  hideExternalIcon?: boolean;
}

/**
 * Composant qui analyse un texte avec des liens markdown et rend des liens React
 */
function HyperlinkedTextInner({ children, hideExternalIcon = false }: HyperlinkedTextProps) {
  const containerClassName = classnames(HyperlinkedTextClass._({hideExternalIcon: hideExternalIcon }));


  const parts = children.split(MARKDOWN_LINK_SPLIT_REGEX).map((part, index) => {
    const match = MARKDOWN_LINK_EXTRACT_REGEX.exec(part);
    if (!match) return part;

    const [, linkText, url] = match;
    const isInternal = INTERNAL_LINK_REGEX.test(url);

    if (isInternal || isAllowedProtocol(url)) {
      return (
        <Link url={url} external={!isInternal} key={`${linkText}-${url}`}>
          {linkText}
        </Link>
      );
    }
    return part;
  });

  return <span className={containerClassName}>{parts}</span>;

  function isAllowedProtocol(urlString: string): boolean {
    try {
      const parsedUrl = new URL(urlString);
      return ALLOWED_PROTOCOLS.includes(parsedUrl.protocol);
    } catch {
      return false;
    }
  }
}

export const HyperlinkedText = React.memo(HyperlinkedTextInner);