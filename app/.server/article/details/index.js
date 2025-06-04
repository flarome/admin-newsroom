import query from "./query.graphql";
import { form as formFields } from "../../../data/article/config/fieldMap";
import { form as formStates } from "../../../data/article/config/fieldState";


import { revertStructure as body_revertStructure } from "../../../data/article/input/body";
import { getFieldRoot } from "../../../utils/getFieldPath";
import _ from "lodash";

// Parser JSON safe
function safeJsonParse(str, fallback = {}) {
  try {
    return typeof str === "string" ? JSON.parse(str) : fallback;
  } catch {
    return fallback;
  }
}

export function extractArticleTemplates(files) {
  return files.map(({ filename }) =>
    filename
      .replace(/^templates\/article\./, "article.")
      .replace(/^templates\/article/, "article")
      .replace(/\.liquid$/, "")
      .replace(/\.json$/, ""),
  );
}

function res(data) {
  const { blogs = {}, article = {}, shop = {}, themes = {} } = data;

const dataJson = safeJsonParse(article?.dataJson?.value) || {};
const rawContactPresse = safeJsonParse(article?.contactPresse?.value);
const contactPresse = _.isArray(rawContactPresse) ? rawContactPresse : [];

const category = article?.category?.value || ""





  const mainImage = _.get(dataJson, "mainMedias.image") || {};
const mainImageMetadata = _.isPlainObject(mainImage.metadata) ? mainImage.metadata : {};
const mainImageSrcs = _.isPlainObject(mainImageMetadata.srcs) ? mainImageMetadata.srcs : {};

  const seoRoot = getFieldRoot(formFields, ["seo"]);
  const mainMediasRoot = getFieldRoot(formFields, "mainMedias");
  const imageRoot = getFieldRoot(formFields, ["mainMedias", "image"]);
  const srcsRoot = getFieldRoot(formFields, ["mainMedias", "image", "srcs"]);
  const contentRoot = getFieldRoot(formFields, ["content"]);

  const formValues = {
    // ⏱ Publication
    [formFields.publishDate]: article.publishedAt ?? formStates.publishDate,
    [formFields.published]: article.isPublished ?? false,

    // 📝 Infos générales
    [formFields.title]: article.title ?? "",
    [formFields.subTitle]: dataJson.subhead ?? "",
    [formFields.blogId]: article.blog?.id ?? blogs?.nodes?.[0]?.id ?? "",
    [formFields.tags]: article.tags ?? [],
    [formFields.excerpt]: article.summary ?? "",
    [formFields.contactPresse]: contactPresse,
    [formFields.template]: article.templateSuffix ?? "",
    [formFields.category]: category ?? [],

    // 📄 Contenu
    [contentRoot]: {
      [formFields.content.body]: dataJson.body
        ? body_revertStructure(dataJson.body)
        : [],
      [formFields.content.header]: [],
    },

    // ⚙️ Réglages
    [formFields.settings]: {},

    // 🔍 SEO
    [seoRoot]: {
      [formFields.seo.metaTitle]: article.seoTitle?.value ?? "",
      [formFields.seo.metaDescription]: article.seoDescription?.value ?? "",
      [formFields.seo.urlAnchor]: article.handle ?? "",
    },

    // 🖼 Médias principaux
    [mainMediasRoot]: {
      [imageRoot]: {
        [formFields.mainMedias.image.alt]: mainImageMetadata.alt ?? "",
        [formFields.mainMedias.image.caption]: mainImage.caption ?? "",
        [srcsRoot]: {
          [formFields.mainMedias.image.srcs.square]: mainImageSrcs.square ?? "",
          [formFields.mainMedias.image.srcs.landscape]:
            mainImageSrcs.landscape ?? "",
          [formFields.mainMedias.image.srcs.big]: mainImageSrcs.big ?? "",
          [formFields.mainMedias.image.srcs.portrait]:
            mainImageSrcs.portrait ?? "",
        },
      },
    },
  };

  const availableTemplates = extractArticleTemplates(
    themes.nodes?.find((t) => t.role === "MAIN")?.files?.nodes ?? [],
  );

  const allTags = [...new Set(blogs.nodes?.flatMap((b) => b.tags || []) ?? [])];

  return {
    hasArticle: Boolean(article?.id),
    article,
    form: formValues,
    shop,
    themes,
    blogs,
    availableTemplateOptions: availableTemplates,
    allArticlesTags: allTags,
  };
}

export async function get(config, body = {}) {
  const { adminClient } = config;
  const { id } = body;

  const hasArticleId = Boolean(id);
  const variables = {
    articleId: `gid://shopify/Article/${id ?? "undefined"}`,
    hasArticleId,
    blogsFirst: 150,
  };

  try {
    const response = await adminClient.graphql(query, variables);
    return res(response);
  } catch (error) {
    if (error instanceof Response) {
      const body = await error.json();
      console.error("🔴 GraphQL Error (400):", JSON.stringify(body, null, 2));
      return {
        error: true,
        message: body?.errors?.[0]?.message ?? "GraphQL 400",
      };
    }

    console.error("🔴 Unexpected Error:", error);
    return { error: true, message: error?.message ?? "Unknown error" };
  }
}
