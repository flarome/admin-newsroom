// === ⚙️ CONFIGURATION TEMPS POLLING ===
const POLLING_CONFIG = {
  PROCESSING_INTERVAL_MS: 1, // Pour PROCESSING / UPLOADED / READY sans URL
  FAILED_RETRY_BASE_MS: 1000, // Pour les erreurs
  FAILED_RETRY_MAX: 3, // Nombre max de retries pour FAILED
};

import { getContentTypeFromUrl } from "../../_shared/upload/utils/contentType";

export async function uploadFiles(config, files = [], { ecrase = false } = {}) {
  const { adminClient } = config;

  console.log("files", files);
  console.log(
    "📥 Fichiers à uploader:",
    files.map((f) => f.filename),
  );

  const inputs = files.map((f) => {
    const contentType = f.contentType || getContentTypeFromUrl(f.url);
    const isFile = contentType === "FILE";

    return {
      file: f,
      input: {
        filename: f.filename,
        originalSource: f.url,
        alt: f.altText,
        contentType,
        duplicateResolutionMode:
          isFile && ecrase ? "RAISE_ERROR" : ecrase ? "REPLACE" : "RAISE_ERROR",
      },
      isFile,
      originalType: getContentTypeFromUrl(f.url),
    };
  });

  const res = await adminClient.graphql(
    `mutation($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          id
          fileStatus
          fileErrors { code message details }
          preview { image { url } }
          __typename
        }
        userErrors { field message code }
      }
    }`,
    { files: inputs.map((i) => i.input) },
  );

  const created = res.fileCreate?.files ?? [];

  return Promise.all(
    created.map((createdFile, i) =>
      handleFileStatus(config, inputs[i].file, createdFile, {
        ecrase,
        isFile: inputs[i].isFile,
        originalType: inputs[i].originalType,
      }),
    ),
  );
}

async function handleFileStatus(
  config,
  originalFile,
  createdFile,
  { ecrase, isFile, originalType },
  failedAttempts = 0,
) {
  try {
    const { id, fileStatus, fileErrors, __typename } = createdFile;
    const url = extractUrlFromUpload(createdFile);

    if (url) return { status: "ok", url, data: createdFile };

    if (fileStatus === "READY") {
      const data = await getFileById(config, id);
      const url = extractUrlFromNode(data);
      if (url) return { status: "ok", url, data };

      console.warn(
        `⏳ READY mais URL non dispo pour ${id}, nouvelle tentative...`,
      );
      await wait(POLLING_CONFIG.PROCESSING_INTERVAL_MS);
      return handleFileStatus(
        config,
        originalFile,
        data,
        { ecrase, isFile, originalType },
        failedAttempts + 1,
      );
    }

    if (fileStatus === "FAILED") {
      console.log("fileErrors", fileErrors, createdFile);
      const isDuplicationError = fileErrors.some(
        (err) => err.code === "DUPLICATE_FILENAME_ERROR",
      );

      if (
        (isFile && ecrase && isDuplicationError) ||
        (__typename === "GenericFile" &&
          fileErrors.some(
            (err) => err.code === "GENERIC_FILE_DOWNLOAD_FAILURE",
          ))
      ) {
        console.warn(`🛠️ Passage en fileUpdate pour ${originalFile.filename}`);

        const originalInfos = await getFileByName(config, originalFile.filename);
        return await updateExistingFile(config, originalFile, originalInfos.id, { ecrase, isFile, originalType });
      }

      if (!ecrase && isDuplicationError) {
        return {
          status: "ignored",
          message: "Fichier déjà présent et non écrasable.",
          file: originalFile,
          fileErrors,
        };
      }

      if (failedAttempts >= POLLING_CONFIG.FAILED_RETRY_MAX) {
        return {
          status: "error",
          message: "Le fichier a échoué après plusieurs tentatives.",
          file: originalFile,
          fileErrors,
        };
      }

      const delay =
        POLLING_CONFIG.FAILED_RETRY_BASE_MS * Math.pow(2, failedAttempts);
      console.warn(
        `🔁 Retry FAILED #${failedAttempts + 1} dans ${delay}ms pour ${id}`,
      );
      await wait(delay);
      const retryData = await getFileById(config, id);
      return handleFileStatus(
        config,
        originalFile,
        retryData,
        { ecrase, isFile, originalType },
        failedAttempts + 1,
      );
    }

    if (fileStatus === "PROCESSING" || fileStatus === "UPLOADED") {
      await wait(POLLING_CONFIG.PROCESSING_INTERVAL_MS);
      const retryData = await getFileById(config, id);
      return handleFileStatus(
        config,
        originalFile,
        retryData,
        { ecrase, isFile, originalType },
        failedAttempts,
      );
    }

    return {
      status: "unknown",
      message: `Statut inconnu: ${fileStatus}`,
      file: originalFile,
      fileErrors,
    };
  } catch (e) {
    console.error("FILE STATUS ERROR", e);
  }
}

async function updateExistingFile(config, originalFile, id, { ecrase, isFile, originalType }) {
  const { adminClient } = config;

  const res = await adminClient.graphql(
    `mutation($input: [FileUpdateInput!]!) {
      fileUpdate(files: $input) {
        files {
         id
      fileErrors {
          code
          message
          details
        }fileStatus
          preview { image { url } }
          __typename
        }
        userErrors { field message code }
      }
    }`,
    {
      input: {
        id: id,
        alt: originalFile.altText,
        originalSource: originalFile.url,
      },
    },
  );


  const updatedFile = res.fileUpdate?.files?.[0];
  return await handleFileStatus(config, originalFile, updatedFile, { ecrase, isFile, originalType });
}

function extractUrlFromUpload(file) {
  if (!file || !file.__typename) return undefined;
  if (file.__typename === "MediaImage") return file.preview?.image?.url;
  return extractUrlFromNode(file);
}

function extractUrlFromNode(node) {
  if (!node || !node.__typename) return undefined;
  if (node.__typename === "GenericFile") return node.url;
  if (node.__typename === "MediaImage") return node.image?.url;
  if (node.__typename === "Video") return node.sources?.[0]?.url;
  if (node.__typename === "Model3d") return node.sources?.[0]?.url;
  return undefined;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getFileByName(config, filename) {
  const { adminClient } = config;

  console.log('filename', filename)
  const query = `
    query {
      files (first: 1, query:"filename:${filename}") {
        nodes {
        id
      fileErrors {
          code
          message
          details
        }fileStatus
          __typename
          preview { image { url } }
          ... on GenericFile {
           fileErrors { code message details }
            id alt createdAt fileStatus url
          }
          ... on MediaImage {
           fileErrors { code message details }
            id fileStatus alt image { id url } createdAt
          }
          ... on Video {
           fileErrors { code message details }
            id fileStatus sources { url }
          }
          ... on Model3d {
           fileErrors { code message details }
            id fileStatus sources { url }
          }
        }
      }
    }
  `;
  
  const data = await adminClient.graphql(query);

  console.log('d', data)
    console.log('data.files?.nodes', data.files?.nodes)
  return data.files?.nodes?.[0];
}

export async function getFileById(config, id) {
  const { adminClient } = config;
  const query = `
    query {
      files (first: 1, query:"id:${id.split("/").pop()}") {
        nodes {
        id
      fileErrors {
          code
          message
          details
        }fileStatus
          __typename
          preview { image { url } }
          ... on GenericFile {
           fileErrors { code message details }
            id alt createdAt fileStatus url
          }
          ... on MediaImage {
           fileErrors { code message details }
            id fileStatus alt image { id url } createdAt
          }
          ... on Video {
           fileErrors { code message details }
            id fileStatus sources { url }
          }
          ... on Model3d {
           fileErrors { code message details }
            id fileStatus sources { url }
          }
        }
      }
    }
  `;
  const data = await adminClient.graphql(query);
  return data.files?.nodes?.[0];
}
