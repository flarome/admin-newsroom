import React, { useCallback, useState, useEffect } from "react";

import "./styles/local.css";
import "./styles/articleLists.css";
import "./styles/main.css";
import "./styles/vendor1.css";
/*import "./styles/vendor2.css";*/
import "./styles/vendor3.css"; 
import "./styles/theme.css";
import "./styles/articleDetails.css"; 


import Blog from "./dashboard/main"; 
import Article from "./article/main";
 

import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react"; 
import {
  Page,
  Toast,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";

import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($product: ProductCreateInput!) {
        productCreate(product: $product) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        product: {
          title: `${color} Snowboard`,
        },
      },
    },
  );
  const responseJson = await response.json();
  const product = responseJson.data.productCreate.product;
  const variantId = product.variants.edges[0].node.id;
  const variantResponse = await admin.graphql(
    `#graphql
    mutation shopifyRemixTemplateUpdateVariant($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
      productVariantsBulkUpdate(productId: $productId, variants: $variants) {
        productVariants {
          id
          price
          barcode
          createdAt
        }
      }
    }`,
    {
      variables: {
        productId: product.id,
        variants: [{ id: variantId, price: "100.00" }],
      },
    },
  );
  const variantResponseJson = await variantResponse.json();

  return json({
    product: responseJson.data.productCreate.product,
    variant: variantResponseJson.data.productVariantsBulkUpdate.productVariants,
  });
};

export default function Index() {
  const fetcher = useFetcher();
  const shopify = useAppBridge();
  const isLoading =
    ["loading", "submitting"].includes(fetcher.state) &&
    fetcher.formMethod === "POST";
  const productId = fetcher.data?.product?.id.replace(
    "gid://shopify/Product/",
    "",
  );

  useEffect(() => {
    if (productId) {
      shopify.toast.show("Product created");
    }
  }, [productId, shopify]);
  const generateProduct = () => fetcher.submit({}, { method: "POST" });






  const [isCreating, setIsCreating] = useState(true);
  const [currentArticleId, setCurrentArticleId] = useState(null);

  const [toastMessage, setToastMessage] = useState(null);
  const toggleActive = useCallback(() => setToastMessage(null), []);


  const prepareArticle = useCallback(
    (ID = null) => {
      if (ID) {
        setCurrentArticleId(ID);
      } else {
        setCurrentArticleId(null);
      }

      if (!isCreating) {
        setIsCreating(true);
      }

      // Sauvegarder uniquement des données sérialisables

    },
    [isCreating],
  );

  const prepareBlog = useCallback(() => {
    if (isCreating) {
      setIsCreating(false);
    }

    setCurrentArticleId(null);


  }, [isCreating]);




  return (


      

      <div>
      <div className="Online-Store-UI-AppProvider_fm6dx-delete">
        <div className="UYl7w-delete kbVb4-delete">{!isCreating ? <Blog prepareEditor={prepareArticle} setIsCreating={setIsCreating} setToastMessage={setToastMessage} /> : <Article currentArticleId={currentArticleId} prepareBlog={prepareBlog} prepareArticle={prepareArticle} setToastMessage={setToastMessage} />}</div>
      </div>

      {toastMessage && <Toast content={toastMessage} onDismiss={toggleActive} />}
    </div>


  );
}
