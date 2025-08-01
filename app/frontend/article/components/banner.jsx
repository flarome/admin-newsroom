import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "@remix-run/react";
import { Banner as ShopifyBanner, Text, Link, Button } from "@polaris/npm";
import { CheckCircleIcon } from "@shopify/polaris-icons";
import { useArticle } from "../context/articleContext";
import { useGetUrl } from "../selectors/article";
import { useAppBridge } from "@shopify/app-bridge-react";
import { useWasModified } from "../selectors/form";

const BannerList = ({ banners }) => {
  const wasModified = useWasModified()
  const { article } = useArticle();
  const articleUrl = useGetUrl();

  const location = useLocation();
  const navigate = useNavigate();
  const shopify = useAppBridge();

  const { isNew = false } = location.state || {};
  const [visible, setVisible] = useState(isNew);



  // ✅ Cache la bannière si une modif a eu lieu
  useEffect(() => {
    if (wasModified && visible) {
      setVisible(false);
    }
  }, [wasModified, visible]);

  const navigateWithSaveBarCheck = useCallback(
    (url, options) => {
      shopify.saveBar.leaveConfirmation().then(() => {
        // Si leaveConfirmation() se termine, on considère qu'on peut naviguer
        navigate(url, options);
      }).catch((err) => {
        // S'il y avait un blocage (très rare), on log
        console.warn("Navigation bloquée par Shopify SaveBar", err);
      });
    },
    [shopify, navigate],
  );
  


  return (
    <>
      {isNew && visible && (
        <ShopifyBanner
          title={`${article?.title ?? "Article"} créé`}
          tone="success"
          icon={CheckCircleIcon}
          onDismiss={() => setVisible(false)}
        >
          <Text as="p" variant="bodyMd">
            {article?.isPublished ? (
              <>
                <Link url={articleUrl} target="_blank" monochrome>
                  Afficher sur votre boutique en ligne
                </Link>
                <span> ou </span>
              </>
            ) : (
              <>
                Publiez cet article de blog en le rendant visible
                <span> ou </span>
              </>
            )}
            <Button
              onClick={() => navigateWithSaveBarCheck("../new", { relative: "path" })}
              variant="plain"
            >
              Créer un autre article de blog
            </Button>
            .
          </Text>
        </ShopifyBanner>
      )}

      {Array.isArray(banners) &&
        banners.map((banner, index) => (
          <ShopifyBanner
            key={banner.id || index}
            title={banner.title}
            tone={banner.tone}
            icon={banner.icon}
            hideIcon={!banner.icon}
            onDismiss={banner.removable ? banner.onRemove : undefined}
            action={banner.action}
            secondaryAction={banner.secondaryAction}
          >
            {banner.content}
          </ShopifyBanner>
        ))}
    </>
  );
};

export default BannerList;
