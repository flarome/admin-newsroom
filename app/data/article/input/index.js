import { app as appConfig } from "../../../config/metadata";
import _ from "lodash";
import { toShopifySlug } from "../../../utils/str";
import query from "./query.graphql";
import body_generate from "./body";
import { mainImage_tile } from "./mainMedias";

// 📌 Champs simples
import { fieldPath as titlePath } from "../../../frontend/article/components/title";
import { fieldPath as subtitlePath } from "../../../frontend/article/components/subtitle";
import { fieldPath as excerptPath } from "../../../frontend/article/components/extrait";
import { fieldPath as metaDescPath } from "../../../frontend/article/components/seo/components/metaDescription";
import { fieldPath as metaTitlePath } from "../../../frontend/article/components/seo/components/metaTitle";
import { fieldPath as handlePath } from "../../../frontend/article/components/seo/components/handle";
import { fieldPath as redirectPath } from "../../../frontend/article/components/seo/components/redirectNewHandle";
import { fieldPath as contactPath } from "../../../frontend/article/components/author";
import { fieldPath as blogPath } from "../../../frontend/article/components/blog";
import { fieldPath as templatePath } from "../../../frontend/article/components/template";
import { fieldPath as tagsPath } from "../../../frontend/article/components/tags";
 
// 📌 Champs imbriqués
import {
  publishDateFieldPath,
  publishedFieldPath,
} from "../../../frontend/article/components/visible";
import {
  bodyFieldPath,
  headerFieldPath,
} from "../../../frontend/article/components/content";

import {
  mainImage_AltFieldPath,
  mainImage_Srcs_PortraitFieldPath,
  mainImage_Srcs_LandscapeFieldPath,
  mainImage_Srcs_SquareFieldPath,
  mainImage_CaptionFieldPath,
} from "../../../frontend/article/components/mainMedias/image";

import { fieldPath as categoryPath } from "../../../frontend/article/components/category";
import {
  getMonth,
  getValidDate,
  getYear,
  isValidDate,
} from "../../../utils/date";
import { safeJsonParse } from "../../../utils/json";
import { formatHandlePrefix } from "./helpers/handle";
export async function generateArticle(
  config,
  fields,
  isNewArticle,
  skipMetafields = false,
  variables = {},
) {
  try {
    const { adminClient } = config;

    const title = _.get(fields, titlePath)?.trim() || "";
    const excerpt = _.get(fields, excerptPath) || "";
    const metaDescription = _.get(fields, metaDescPath) || "";
    const metaTitle = _.get(fields, metaTitlePath) || "";

    const redirectNewHandle = _.get(fields, redirectPath) === true;

    const publishDateRaw = _.get(fields, publishDateFieldPath);

    const isPublished = Boolean(_.get(fields, publishedFieldPath));
    const contactPresse = _.get(fields, contactPath) || [];
    const blogId = _.get(fields, blogPath);
    const template = _.get(fields, templatePath) || null;
    const tags = _.get(fields, tagsPath) || [];

    const validDate = getValidDate(publishDateRaw);

    const handle = toShopifySlug(_.get(fields, handlePath) || title);
    const handleWithDate = `${formatHandlePrefix(validDate)}${handle}`;

    const inputBase = {
      blogId,
      title,
      author: { name: "Flarome Inc" },
      handle: handleWithDate,
      body: "",
      summary: excerpt,
      ...(isNewArticle ? {} : { redirectNewHandle }),
      isPublished,
      templateSuffix: template,
      publishDate: isValidDate(publishDateRaw)
        ? new Date(publishDateRaw).toISOString()
        : null,
      tags,
    };

    if (skipMetafields)
      return { ...inputBase, publishDate: undefined, isPublished: undefined };

    const subTitle = _.get(fields, subtitlePath, "");
    const body = _.get(fields, bodyFieldPath, []);
    const header = _.get(fields, headerFieldPath, []);
    const category = _.get(fields, categoryPath, []);

    const mainImage_alt = _.get(fields, mainImage_AltFieldPath);
    const mainImage_caption = _.get(fields, mainImage_CaptionFieldPath);

    const mainImage_LP = _.get(fields, mainImage_Srcs_LandscapeFieldPath);
    const mainImage_SQUARE = _.get(fields, mainImage_Srcs_SquareFieldPath);
    const mainImage_PORTRAIT = _.get(fields, mainImage_Srcs_PortraitFieldPath);

    console.log("1");

    const data = await adminClient.graphql(query, {
      articleId: variables.id ?? "gid://shopify/Article/undefined",
      hasArticleId: Boolean(variables.id),
      blogID: blogId,
    });

    const { blog = {}, article = {}, shop = {} } = data;

    const history = safeJsonParse(_.get(article, "history.value", {}));

    const fileNames = {
      images: {
        article: `blog_${blog.handle}_images_${getYear(validDate)}_${getMonth(validDate)}_${handle}_article`,
        tile: `blog_${blog.handle}_images_${getYear(validDate)}_${getMonth(validDate)}_${handle}_tile`,
      },
    };

    console.log("fileNames", fileNames);

    const [bodyResult, imageResult] = await Promise.allSettled([
      body_generate(body),
      mainImage_tile(
        config,
        { fileNames, isNewArticle },
        { shop, history: history?.mainMedias?.image || {} },
        {
          caption: mainImage_caption,
          alt: mainImage_alt,
          srcs: {
            landscape: mainImage_LP,
            portrait: mainImage_PORTRAIT,
            square: mainImage_SQUARE,
          },
        },
      ),
    ]);
    console.log("🧩 Promise.allSettled terminé");

    if (bodyResult.status === "rejected") {
      console.error("❌ Échec de body_generate :", bodyResult.reason);
    }
    if (imageResult.status === "rejected") {
      console.error("❌ Échec de mainImage_tile :", imageResult.reason);
    }

    const {
      history: body_HISTORY,
      admin: body_ADMIN,
      frontend: body_FRONTEND,
    } = bodyResult.status === "fulfilled"
      ? bodyResult.value
      : { history: {}, admin: {}, frontend: {} };

    const {
      history: mainImage_HISTORY,
      admin: mainImage_ADMIN,
      frontend: mainImage_FRONTEND,
    } = imageResult.status === "fulfilled"
      ? imageResult.value
      : { history: {}, admin: {}, frontend: {} };

    const metafields = [
      {
        namespace: "system",
        key: "history",
        type: "json",
        value: JSON.stringify({
          mainMedias: {
            image: mainImage_HISTORY,
          },
          content: {
            body: body_HISTORY,
          },
        }),
      },

      {
        namespace: "system",
        key: "internal",
        type: "json",
        value: JSON.stringify({
          version: appConfig.version,
        }),
      },

      {
        namespace: "admin",
        key: "data",
        type: "json",
        value: JSON.stringify({
          handleWithOutDate: handle,
          subTitle: subTitle,
          mainMedias: {
            image: mainImage_ADMIN,
          },
          content: {
            body: body_ADMIN,
          },
        }),
      },

      {
        namespace: "frontend",
        key: "tile",
        type: "json",
        value: JSON.stringify({
          mainMedias: {
            image: mainImage_FRONTEND,
          },
        }),
      },

      {
        namespace: "frontend",
        key: "article",
        type: "json",
        value: JSON.stringify({
          header: {
            keyline: false,
            headline: title,
            subhead: subTitle,
            analytics: {
              asset: title,
              click: "",
              title: "",
              intrapage: ""
            },
            largeImg: false,
            chiclet: false,
    
            /* 
                    imageDescription: {

                    caption: "",
                    nodownload: false,
                    theme: "", // secondary | other
                    mediaType: video | media,
        


          

    class: "", // classe CSS additionnelle dans <a>

    downloadFile: "/path/to/file.jpg", // utilisé dans href download
    downloadButtonAnalyticsTitle: "string", // fallback de data-analytics-title
    altText: "alternative text", // utilisé dans aria-label
    analytics: {
      downloadClick: "analytics-event-name" // utilisé dans data-analytics-click
    }

                    
                    }, 
            */
      
            image: {
              metadata: {
                lazy: false,
                classes: "",
                altText: "",
                uuid: "b9088fe5-2788-4811-ba98-ba790eb953ec",
                srcs: {

                 
                  // for largeimg == true
 small: "",
 small2x: "",
 medium: "",
 medium2x:"",
 large: "",
 large2x: ""  ,     
 xlarge: "",
 xlarge2x: "",
 
 // for chiclet == true
                  large: "",
                  large2x: "",

                },
              },
            },
            hTag: "h2",

            featuredcta: "" ,// string pour l'header cf: categoryeyebrow.hbs
            hideDate: false,
            hideShareButton: false,
          },
          body: body_FRONTEND.body,
          sosumi: {},
          docsAndDownloads: {
            heading: "",
            entries: [],
          },
          accordion: {},
          copyText: body_FRONTEND.copyText,
      
        }),
      },

      {
        namespace: "global",
        key: "category",
        type: "metaobject_reference",
        value: category,
      },

      {
        namespace: "global",
        key: "press_contacts",
        type: "list.metaobject_reference",
        value: `[${contactPresse.map((id) => `"${id}"`).join(",")}]`,
      },
      {
        namespace: "global",
        key: "title_tag",
        type: "single_line_text_field",
        value: metaTitle,
      },
      {
        namespace: "global",
        key: "description_tag",
        type: "single_line_text_field",
        value: metaDescription,
      },
    ];

    return {
      ...inputBase,
      metafields,
    };
  } catch (error) {
    console.error("❌ Erreur dans generateArticle:", error);
    throw error;
  }
}

export default generateArticle;
