/**
 * Upload groupé de fichiers vers Shopify, avec polling intelligent
 * et récupération d'URL une fois READY.
 *
 * @param {object} config - Contient `adminClient`
 * @param {Array} files - [{ filename, url, altText }]
 * @param {object} options - { ecrase: boolean }
 * @returns {Promise<Array<{status: string, url?: string, data?: object, file?: object, message?: string, fileErrors?: Array}>>}
 */
export async function uploadFiles(config, files = [], { ecrase = false } = {}) {
  const { adminClient } = config;

  console.log("📥 Fichiers à uploader :", files.map(f => f.filename));

  const input = files.map(f => ({
    filename: f.filename,
    originalSource: f.url,
    alt: f.altText,
    contentType: getContentTypeFromUrl(f.url),
    duplicateResolutionMode: ecrase ? "REPLACE" : "RAISE_ERROR",
  }));

  console.log(`🚀 Mutation fileCreate (${ecrase ? "REPLACE" : "RAISE_ERROR"})`, input);

  try {
    const res = await adminClient.graphql(
      `mutation($files: [FileCreateInput!]!) {
        fileCreate(files: $files) {
          files {
            id
            fileStatus
            fileErrors { code message details }
          }
          userErrors { field message code }
        }
      }`,
      { files: input }
    );

    const created = res.fileCreate?.files ?? [];

    return Promise.all(
      created.map((createdFile, i) =>
        handleFileStatus(config, files[i], createdFile, { ecrase })
      )
    );
  } catch (err) {
    console.error("❌ Erreur mutation fileCreate :", err);
    return files.map(file => ({
      status: "error",
      code: "CREATE_FAILED",
      message: err.message || "Erreur inconnue",
      file,
    }));
  }
}

async function handleFileStatus(config, originalFile, createdFile, { ecrase }, failedAttempts = 0) {
  const { id, fileStatus, fileErrors } = createdFile;

  if (fileStatus === "READY") {
    const data = await getFileById(config, id);
    const url = extractUrlFromNode(data);
     if (url) {
      return { status: "ok", url, data };
    }

       console.warn(`⏳ READY mais URL non dispo pour ${id}, nouvelle tentative...`);
    await wait(1000 * (failedAttempts + 1));
    return handleFileStatus(config, originalFile, data, { ecrase }, failedAttempts + 1);
  }

  if (fileStatus === "FAILED") {
    const isDuplicationError = fileErrors.some(err => err.code === "DUPLICATE_FILENAME_ERROR");
    if (!ecrase && isDuplicationError) {
      return {
        status: "ignored",
        message: "Fichier déjà présent et non écrasable.",
        file: originalFile,
        fileErrors,
      };
    }

    if (failedAttempts >= 3) {
      return {
        status: "error",
        message: "Le fichier a échoué après plusieurs tentatives.",
        file: originalFile,
        fileErrors,
      };
    }

    console.warn(`🔁 Retry #${failedAttempts + 1} for FAILED file: ${id}`);
    await wait(1000 * (failedAttempts + 1));
    const retryData = await getFileById(config, id);
    return handleFileStatus(config, originalFile, retryData, { ecrase }, failedAttempts + 1);
  }

  if (fileStatus === "PROCESSING" || fileStatus === "UPLOADED") {
    await wait(1000);
    const retryData = await getFileById(config, id);
    return handleFileStatus(config, originalFile, retryData, { ecrase }, failedAttempts);
  }

  return {
    status: "unknown",
    message: `Statut inconnu: ${fileStatus}`,
    file: originalFile,
    fileErrors,
  };
}

function extractUrlFromNode(node) {
    console.log('node', node)
  if (!node || !node.__typename) return undefined;

  if (node.__typename === "GenericFile") return node.url;
  if (node.__typename === "MediaImage") return node.image?.url;
  if (node.__typename === "Video") return node.sources?.[0]?.url;
  if (node.__typename === "Model3d") return node.sources?.[0]?.url;

  return undefined;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getContentTypeFromUrl(url) {
  const ext = url.split(".").pop().split("?")[0].toLowerCase();

  return ["jpg", "jpeg", "png", "webp", "gif", "bmp", "tiff", "svg"].includes(ext)
    ? "IMAGE"
    : ["mp4", "mov", "webm", "avi", "mkv"].includes(ext)
    ? "VIDEO"
    : ["usdz", "glb"].includes(ext)
    ? "MODEL_3D"
    : ["pdf", "zip", "doc", "docx", "xls", "xlsx", "csv", "txt", "rtf"].includes(ext)
    ? "FILE"
    : undefined;
}

export async function getFileById(config, id) {
  const { adminClient } = config;
  const query = `
    query {
      node(id: "${id}") {
        __typename
        ... on GenericFile {
          id
          alt
          createdAt
          fileStatus
          url
        }
        ... on MediaImage {
          id
          fileStatus
          alt
          image { 
          id
          url 
          }
          createdAt
        }
        ... on Video {
          id
          fileStatus
          sources { 
          url
          }
        }
        ... on Model3d {
          id
          fileStatus
          sources { 
  
          url
           }
        }
      }
    }
  `;
  const data = await adminClient.graphql(query);
  return data.node;
}