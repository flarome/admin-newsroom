import { fetchImageBuffer } from "../../../../../.server/utils/image/fetchImage";
import { processMultipleVariants } from "../../../../../.server/utils/image/resizeAndConvert";

const lib = {
  landing: {
    big: {
      width: 656,
      height: 369,
    },
  },
};

/**
 * Génère les variantes d'image à partir de sources strictes.
 *
 * @param {Object} options
 * @param {string} options.caption
 * @param {string} options.alt
 * @param {Object} options.srcs
 * @param {string} options.srcs.lp
 * @param {string} options.srcs.big
 * @param {string} options.srcs.square
 * @param {string} options.srcs.portrait
 */
export async function tile(config, { caption, alt, srcs }) {
  const { lp, big, square, portrait } = srcs;

  // ❌ Vérifie que toutes les sources sont présentes
  const sources = { lp, big, square, portrait };
  const missing = Object.entries(sources).filter(([, v]) => !v);
  if (missing.length > 0) {
    const missingKeys = missing.map(([k]) => k).join(", ");
    throw new Error(`Les sources suivantes sont manquantes : ${missingKeys}`);
  }

  const urls = [lp, big, square, portrait];
  const responses = await Promise.allSettled(urls.map(fetchImageBuffer));

  const failed = responses.find((res) => res.status === "rejected");
  if (failed) {
    throw new Error("Échec lors du téléchargement d’une des images.");
  }

  const [lpBuffer, bigBuffer, squareBuffer, portraitBuffer] = responses.map(
    (r) => r.value,
  );

  const { output, metadata } = await processMultipleVariants(lpBuffer, [
    {
      key: "landing-big",
      width: lib.landing.big.width,
      height: lib.landing.big.height,
      fit: "cover",
      formats: [
        {
          type: "jpeg",
          options: { quality: 100 },
        },
      ],
      quality: 100,
    },
    {
      key: "landing-big_2",
      width: lib.landing.big.width * 2,
      height: lib.landing.big.height * 2,
      fit: "cover",
      formats: [
        {
          type: "jpeg",
          options: { quality: 100 },
        },
      ],
    },
  ]);



  const res = output["landing-big"].jpeg 




  return {
    caption,
    alt,
    images: output,
    meta: metadata,
  };
}

export default tile;
