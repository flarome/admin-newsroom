import React from "react";

import { Banner as ShopifyBanner, Link } from "@shopify/polaris";
import { AlertCircleIcon, CheckCircleIcon } from "@shopify/polaris-icons";


const Banner = ({ errors, success, handleChangeArticle, title, url, isPublished }) => {
  if ((!errors && !success) || (!errors.length > 0 && !success)) return null; // Pas d'erreurs, pas de bannière

  return (
    <div>
      {errors.length > 0 && (
        <ShopifyBanner title={`Il y a ${errors.length} erreur${errors.length > 1 ? "s" : ""}`} tone="critical" icon={AlertCircleIcon}>
          <ul className="Polaris-List Polaris-List--spacingLoose">
            {errors.map((error, index) => (
              <li key={index} className="Polaris-List__Item">
                {error}
              </li>
            ))}
          </ul>
        </ShopifyBanner>
      )}

      {success && (
        <ShopifyBanner title={`${title} créé`} tone="success" icon={CheckCircleIcon}>
          {isPublished && url ? (
            <Link external={true} target="_blank" monochrome={true} url={url}>
              Afficher sur votre boutique en ligne
            </Link>
          ) : (
            "Publiez cet article de blog en le rendant visible"
          )}
          <span> ou </span>
          <span
            role="button"
            onClick={() => {
              handleChangeArticle(null);
            }}
            data-polaris-unstyled="true"
            className="Polaris-Link Polaris-Link--monochrome"
          >
            créer un autre article de blog
          </span>
          .
        </ShopifyBanner>
      )}
    </div>
  );
};

export default Banner;
