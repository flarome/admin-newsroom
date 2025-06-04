import { app as appConfig } from "../../../config/metadata";
import _ from "lodash";
import { toShopifySlug } from "../../../utils/str";

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
  isValidDate,
} from "../../../frontend/article/components/visible";
import {
  bodyFieldPath,
  headerFieldPath,
} from "../../../frontend/article/components/content";

import {
  mainImage_AltFieldPath,
  mainImage_Srcs_PortraitFieldPath,
  mainImage_Srcs_BigFieldPath,
  mainImage_Srcs_LandscapeFieldPath,
  mainImage_Srcs_SquareFieldPath,
  mainImage_CaptionFieldPath,
} from "../../../frontend/article/components/mainMedias/image";

import { fieldPath as categoryPath } from "../../../frontend/article/components/category";
export async function generateArticle(
  config,
  fields,
  isNewArticle,
  skipMetafields = false,
) {
  try {
    const title = _.get(fields, titlePath)?.trim() || "New Article Title";
    const excerpt = _.get(fields, excerptPath) || "";
    const metaDescription = _.get(fields, metaDescPath) || "";
    const metaTitle = _.get(fields, metaTitlePath) || "";
    const handle = toShopifySlug(new Date()) || _.get(fields, handlePath) || null;
    const redirectNewHandle = _.get(fields, redirectPath) === true;
    const publishDateRaw = _.get(fields, publishDateFieldPath);
    const isPublished = Boolean(_.get(fields, publishedFieldPath));
    const contactPresse = _.get(fields, contactPath) || [];
    const blogId = _.get(fields, blogPath);
    const template = _.get(fields, templatePath) || null;
    const tags = _.get(fields, tagsPath) || [];

    const inputBase = {
      blogId,
      title,
      author: { name: "Flarome Inc" },
      handle: handle ? toShopifySlug(handle) : undefined,
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

    if (skipMetafields) return {...inputBase, publishDate: undefined, isPublished: undefined};

    const subTitle = _.get(fields, subtitlePath, "");
    const body = _.get(fields, bodyFieldPath, []);
    const header = _.get(fields, headerFieldPath, []);
    const category = _.get(fields, categoryPath, []);

    const mainImage_alt = _.get(fields, mainImage_AltFieldPath);
    const mainImage_caption = _.get(fields, mainImage_CaptionFieldPath);

    const mainImage_BIG = _.get(fields, mainImage_Srcs_BigFieldPath);
    const mainImage_LP = _.get(fields, mainImage_Srcs_LandscapeFieldPath);
    const mainImage_SQUARE = _.get(fields, mainImage_Srcs_SquareFieldPath);
    const mainImage_PORTRAIT = _.get(fields, mainImage_Srcs_PortraitFieldPath);

    const [bodyResult, imageResult] = await Promise.allSettled([
      body_generate(body),
      mainImage_tile(
        config,
        { handle },
        {
          caption: mainImage_caption,
          alt: mainImage_alt,
          srcs: {
            lp: mainImage_LP,
            big: mainImage_BIG,
            portrait: mainImage_PORTRAIT,
            square: mainImage_SQUARE,
          },
        },
      ),
    ]);

    // ✅ Extraction sécurisée
    const { copyText, body: body_generated } =
      bodyResult.status === "fulfilled"
        ? bodyResult.value
        : { copyText: null, body: null };

    const { mainImage } =
      imageResult.status === "fulfilled"
        ? imageResult.value
        : { mainImage: null };

    const metafields = [
      {
        namespace: "cms",
        key: "config",
        type: "json",
        value: JSON.stringify({
          version: appConfig.version,
        }),
      },

      {
        namespace: "article",
        key: "data_json",
        type: "json",
        value: JSON.stringify({
          headline: title,
          subhead: subTitle,
          analytics: {
            asset: title,
          },
          mainMedias: {
            image: mainImage,
          },
          category: "",
          copyText,
          body: body_generated,
        }),
      },

         {
        namespace: "article",
        key: "category",
        type: "metaobject_reference",
        value: category,
      },

      {
        namespace: "contact",
        key: "editor",
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
