import query from "./query.graphql";
import { form as formFields } from "../../../editors/article/config/fieldMap";
import { getFieldRoot } from "../../../editors/article/utils/getFieldPath";

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
      .replace(/\.json$/, "")
  );
}

function res(data) {
  const { blogs = {}, article = {}, shop = {}, themes = {} } = data;

  const dataJson = safeJsonParse(article?.dataJson?.value, {});
  const contactPresse = safeJsonParse(article?.contactPresse?.value, []);

  const seoRoot = getFieldRoot(formFields, ["seo"]);
  const mainMediasRoot = getFieldRoot(formFields, "mainMedias");
  const imageRoot = getFieldRoot(formFields, ["mainMedias", "image"]);
  const srcsRoot = getFieldRoot(formFields, ["mainMedias", "image", "srcs"]);
  const contentRoot = getFieldRoot(formFields, ["content"]);

  const formValues = {
    [formFields.publishDate]: article.publishedAt || "",
    [formFields.published]: article.isPublished ?? false,
    [formFields.title]: article.title || "",
    [formFields.subTitle]: dataJson.subhead || "",
    [formFields.blogId]: article.blog?.id || blogs.nodes?.[0]?.id || "",
    [formFields.tags]: article.tags || [],
    [formFields.excerpt]: article.summary || "",
    [formFields.contactPresse]: contactPresse,
    [formFields.template]: article.templateSuffix || "",
    [contentRoot]: {
      [formFields.content.body]: [],
      [formFields.content.header]: [],
    },
    [formFields.settings]: {},
    [seoRoot]: {
      [formFields.seo.metaTitle]: article.seoTitle || "",
      [formFields.seo.metaDescription]: article.seoDescription || "",
      [formFields.seo.urlAnchor]: article.handle || "",
    },
    [mainMediasRoot]: {
      [imageRoot]: {
        [formFields.mainMedias.image.alt]: "",
        [formFields.mainMedias.image.caption]: "",
        [srcsRoot]: {
          [formFields.mainMedias.image.srcs.square]: "",
          [formFields.mainMedias.image.srcs.landscape]: "",
          [formFields.mainMedias.image.srcs.big]: "",
          [formFields.mainMedias.image.srcs.portrait]: "",
        },
      },
    },
  };

  const availableTemplates = extractArticleTemplates(
    themes.nodes?.find((t) => t.role === "MAIN")?.files?.nodes ?? []
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
    console.log("🟢 GraphQL Success:", response);
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