// /src/config/seoFieldMap.js

import { flattenWithRoot } from "../../../utils/buildFieldsMap";

export const form = {
  category: "category",
  publishDate: "date",
  published: "isPublished", 
  title: "headline",
  subTitle: "subhead",
  blogId: "blogId",
  tags: "tags",
  excerpt: "excerpt",
  contactPresse: "contactPresse",
  template: "template",
  settings: "settings",
  content: flattenWithRoot(
    {
      body: "body",
      header: "header",
    },
    "content",
  ),
  seo: flattenWithRoot(
    {
      metaTitle: "metaTitle",
      metaDescription: "metaDescription",
      urlAnchor: "handle", // ou "ancre", ou "slug" selon ton modèle de données
      redirect: "redirectNewHandle",
    },
    "seo",
  ),
  mainMedias: flattenWithRoot(
    {
      image: flattenWithRoot(
        {
          alt: "alt",
          caption: "caption",
          srcs: flattenWithRoot(
            {
              square: "square",
              landscape: "landscape",
              big: "big",
              portrait: "portrait",
            },
            "srcs",
          ),
        },
        "image",
      ),
      video: {},
    },
    "mainMedias",
  ),
  // ... etc
};



