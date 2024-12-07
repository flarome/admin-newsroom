import React from "react";
import { Banner as ShopifyBanner } from "@shopify/polaris";

const BannerList = ({ banners }) => {
  if (banners.length === 0) return null; // Pas de bannières à afficher

  return (
    <div>
      {banners.map((banner, index) => (
        <ShopifyBanner
          key={banner.id || index}
          title={banner.title}
          tone={banner.tone}
          icon={banner.icon ? banner.icon : undefined}  // Icône personnalisée pour chaque bannière
          hideIcon={banner.icon ? false : true}
          onDismiss={banner.removable ? banner.onRemove : undefined}
          action={banner.action || undefined}
          secondaryAction={banner.secondaryAction || undefined}
        >
       {banner.content}
        </ShopifyBanner>
      ))}
    </div>
  );
};

export default BannerList;
