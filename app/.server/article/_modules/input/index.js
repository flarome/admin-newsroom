



import { app as appConfig } from "../../../../editors/article/config/metadata";


import _ from "lodash";
import body_generate from "./body";

// 📌 Champs simples
import { fieldPath as titlePath } from "../../../../editors/article/components/title";
import { fieldPath as subtitlePath } from "../../../../editors/article/components/subtitle";
import { fieldPath as excerptPath } from "../../../../editors/article/components/extrait";
import { fieldPath as metaDescPath } from "../../../../editors/article/components/seo/components/metaDescription";
import { fieldPath as metaTitlePath } from "../../../../editors/article/components/seo/components/metaTitle";
import { fieldPath as handlePath } from "../../../../editors/article/components/seo/components/handle";
import { fieldPath as redirectPath } from "../../../../editors/article/components/seo/components/redirectNewHandle";
import { fieldPath as contactPath } from "../../../../editors/article/components/author";
import { fieldPath as blogPath } from "../../../../editors/article/components/blog";
import { fieldPath as templatePath } from "../../../../editors/article/components/template";
import { fieldPath as tagsPath } from "../../../../editors/article/components/tags";

// 📌 Champs imbriqués
import { publishDateFieldPath, publishedFieldPath, isValidDate } from "../../../../editors/article/components/visible";
import { bodyFieldPath, headerFieldPath } from "../../../../editors/article/components/content";

export async function generateArticle(fields, isNewArticle) {
  try {
    // Extraction des champs
    const title = _.get(fields, titlePath)?.trim() || "New Article Title";
    const subTitle = _.get(fields, subtitlePath) || "";
    const excerpt = _.get(fields, excerptPath) || "";
    const metaDescription = _.get(fields, metaDescPath) || "";
    const metaTitle = _.get(fields, metaTitlePath) || "";
    const handle = _.get(fields, handlePath) || undefined;
    const redirectNewHandle = _.get(fields, redirectPath) === true;
    const publishDateRaw = _.get(fields, publishDateFieldPath);
    const isPublished = Boolean(_.get(fields, publishedFieldPath));
    const contactPresse = _.get(fields, contactPath) || [];
    const body = _.get(fields, bodyFieldPath) || [];
    const header = _.get(fields, headerFieldPath) || [];
    const blogId = _.get(fields, blogPath);
    const template = _.get(fields, templatePath) || null;
    const tags = _.get(fields, tagsPath) || [];

    const { copyText, body: body_generated } = await body_generate(body);

    const metafields = [
      {
        namespace: "article",
        key: "data_json",
        type: "json",
        value: JSON.stringify({
          version: appConfig.version,
          copyText,
          body_generated,
        }),
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

    const input = {
      blogId,
      metafields,
      title,
      author: { name: "Flarome Inc" },
      handle,
      body: "",
      summary: excerpt,
      ...(isNewArticle ? {} : { redirectNewHandle }),
      isPublished,
      templateSuffix: template,
      publishDate: isValidDate(publishDateRaw) ? new Date(publishDateRaw).toISOString() : undefined,
      tags,
    };

    return input;
  } catch (error) {
    console.error("❌ Erreur dans generateArticle:", error);
    throw error;
  }
}

export default generateArticle;