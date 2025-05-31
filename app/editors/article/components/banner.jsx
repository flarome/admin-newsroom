import { Banner as ShopifyBanner } from "@shopify/polaris";

const BannerList = ({ banners }) => {
  return (
    <>
      {Array.isArray(banners) &&
        banners.map((banner, index) => (
          <ShopifyBanner
            key={banner.id || index}
            title={banner.title}
            tone={banner.tone}
            icon={banner.icon || undefined}
            hideIcon={banner.icon ? false : true}
            onDismiss={banner.removable ? banner.onRemove : undefined}
            action={banner.action || undefined}
            secondaryAction={banner.secondaryAction || undefined}
          >
            {banner.content}
          </ShopifyBanner>
        ))}
    </>
  );
};

export default BannerList;
