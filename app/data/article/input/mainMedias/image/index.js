import { uploadFiles } from "../../../../../.server/uploadToAdmin/cdn";
import {
  getStagedUploadTargets,
  uploadFile,
} from "../../../../../.server/uploadToAdmin/StagedUpload";

import { fetchImageBuffer } from "../../../../../.server/utils/image/fetchImage";
import { getCompactTimestamp } from "../../../../../utils/date";
import { stableUUID } from "../../../../../utils/id";
import {
  buildRelativeUrl,
  getExtensionFromContentType,
  getExtensionFromUrl,
  getFilenameFromUrl,
} from "../../../../../utils/url";
import {
  ADMIN_IMAGE_VERSION,
  createZipWithLicenceAndImages,
  isSameImageThatAlreadyUploaded,
} from "../../helpers/image";


// ✅ Vérifie que toutes les sources sont présentes
function validateSources(sources) {
  const missing = Object.entries(sources).filter(([, v]) => !v);
  if (missing.length > 0) {
    const keys = missing.map(([k]) => k).join(", ");
    throw new Error(`⛔ Sources manquantes : ${keys}`);
  }
}

// ✅ Upload uniquement si `files.length > 0`
async function uploadTileImages(config, files) {
  if (!files.length) {
    console.log("📁 Aucune image modifiée. Skip upload.");
    return [];
  }

  console.log(`🚚 Upload de ${files.length} image(s)...`);
  const uploaded = await uploadFiles(config, files, { ecrase: true });

  return uploaded.map((file, index) => {
    const url = file?.url;
    if (!url) throw new Error("Missing file URL");
    return { url, filename: getFilenameFromUrl(url), key: files[index].key};
  });
}

// ✅ Upload du fichier ZIP
async function uploadZip(config, sourceUrl, zipFilename) {
  console.log("📥 Récupération de l'image source :", sourceUrl);
  const { buffer, contentType } = await fetchImageBuffer(sourceUrl);
  const extension = getExtensionFromContentType(contentType);

  const { buffer: zipBuffer, size: zipSize } = await createZipWithLicenceAndImages([
    { buffer, name: `hero${extension}` },
  ]);

  console.log("📦 ZIP généré :", zipSize, "octets");


  const [target] = await getStagedUploadTargets(config, [
    {
      resource: "FILE",
      filename: zipFilename,
      mimeType: "application/zip",
      size: zipSize,
    },
  ]);

  await uploadFile(target, zipBuffer, zipFilename);

  const [result] = await uploadFiles(
    config,
    [
      {
        filename: zipFilename,
        url: target.resourceUrl,
        altText: "",
        contentType: "FILE",
      },
    ],
    { ecrase: true },
  );

  console.log('result', result)
  const url = result?.url;
  if (!url) throw new Error("Missing file URL");

  return { filename: getFilenameFromUrl(url)};
}

// ✅ Fonction principale
export async function tile(config, { fileNames, isNewArticle }, { shop, history }, { caption, alt, srcs }) {
  try {
    console.log("🚀 Lancement génération image tile");

    const sources = {
      landscape: srcs.landscape,
      square: srcs.square,
      portrait: srcs.portrait,
    };

    validateSources(sources);

    const tileBasename = fileNames.images.tile;
    const articleBasename = fileNames.images.article;
    const mainImageFileName = "hero";
    const mainImageZipFileName = `${articleBasename}_${mainImageFileName}.zip`;

    const tileImages = Object.entries(sources).map(([key, url]) => {
      const ext = getExtensionFromUrl(url);
      const filename = `${tileBasename}_${mainImageFileName}_${key}.${ext}`;
      const imageModified = !isSameImageThatAlreadyUploaded(shop.url, url, filename);

      const fileVersion = imageModified || isNewArticle ? getCompactTimestamp() : history.srcs?.[key]?.version || getCompactTimestamp()

      console.log(`📄 ${filename} ← ${url} | modifiée: ${imageModified}`);
      return { key, filename, url, altText: alt, imageModified, version: fileVersion };
    });

    const filesToUpload = tileImages.filter((img) => img.imageModified);

    const landscapeModified = tileImages.find((img) => img.key === "landscape")?.imageModified;
    const shouldUploadZip = Boolean(landscapeModified) || history.zipUrl?.filename !== mainImageZipFileName || isNewArticle;
    const zipVersion = shouldUploadZip ? getCompactTimestamp() : history.zipUrl?.version || getCompactTimestamp()

    const [imageUploadRes, zipUploadRes] = await Promise.allSettled([
      uploadTileImages(config, filesToUpload),
      shouldUploadZip
        ? uploadZip(config, sources.landscape, mainImageZipFileName)
        : Promise.resolve({ filename: mainImageZipFileName }),
    ]);

    if (imageUploadRes.status !== "fulfilled") {
      console.error("❌ Échec upload image :", imageUploadRes.reason);
      throw new Error("Échec upload des images");
    }

    if (zipUploadRes.status !== "fulfilled") {
      console.error("❌ Échec ZIP :", zipUploadRes.reason);
      throw new Error("Échec création du ZIP");
    }

    const uploadedMap = new Map();
    imageUploadRes.value.forEach((img) => uploadedMap.set(img.key, img));

    const allFinalInfos = tileImages.map(({ key, filename, version }) => {
      const uploaded = uploadedMap.get(key);
      return {
        key,
        filename: uploaded?.filename || filename,
        version: version,
      };
    });

    const getInfo = (key) => {
      const info = allFinalInfos.find((i) => i.key === key);
      if (!info) throw new Error(`❌ Info manquante pour ${key}`);
      return info;
    };

    const landscape = getInfo("landscape");
    const square = getInfo("square");
    const portrait = getInfo("portrait");
    const zipName = zipUploadRes.value.filename;

    return {
      admin: {
        caption,
        alt,
        srcs: {
          landscape: buildRelativeUrl(landscape.filename, { [ADMIN_IMAGE_VERSION]: landscape.version }),
          square: buildRelativeUrl(square.filename, { [ADMIN_IMAGE_VERSION]: square.version }),
          portrait: buildRelativeUrl(portrait.filename, { [ADMIN_IMAGE_VERSION]: portrait.version }),
        },
      },

      history: {
        zipUrl: {
          filename: zipName,
          version: zipVersion,
        },
        srcs: {
           landscape: {
              filename: landscape.filename,
              version: landscape.version,
            },
            square: {
              filename: square.filename,
              version: square.version,
            },
            portrait: {
              filename: portrait.filename,
              version: portrait.version,
            },
        },
      },

      frontend: {
       /* caption,
        downloadFile: {
          filename: zipName,
          version: zipVersion,
          full: buildRelativeUrl(zipName, {v: zipVersion}),
        },
        analytics: {
          asset: landscape.filename
        },*/
        metadata: {
          alt,
          uuid: stableUUID(`${tileBasename}_${mainImageFileName}`),
          srcs: {
            landscape:  `/${buildRelativeUrl(landscape.filename, { v: landscape.version })}`,
            square: `/${buildRelativeUrl(square.filename, { v: square.version })}`,
            portrait: `/${buildRelativeUrl(portrait.filename, { v: portrait.version })}`,
        
          },
        },
      },
    };
  } catch (e) {
    console.error("💥 ERREUR À MAINMEDIAS/IMAGE :", e);
    throw e;
  }
}

export default tile;