import sharp from "sharp";

/**
 * 🔧 Extrait un buffer d’image en plusieurs variantes (resize + multi-format)
 * avec toutes les options Sharp personnalisables par format.
 *
 * 💡 Exemple d'appel :
 * const { output, metadata } = await processMultipleVariants(inputBuffer, [
 *   {
 *     key: "desktop_banner",
 *     width: 1440,
 *     height: 720,
 *     fit: "cover",
 *     position: "center",
 *     withoutEnlargement: true,
 *     forceAlpha: false,
 *     density: 300,
 *     formats: [
 *       {
 *         type: "jpeg",
 *         options: {
 *           quality: 88,
 *           progressive: true,
 *           chromaSubsampling: "4:4:4",
 *           trellisQuantisation: true,
 *         },
 *       },
 *       {
 *         type: "webp",
 *         options: {
 *           quality: 90,
 *           alphaQuality: 100,
 *           smartSubsample: true,
 *         },
 *       },
 *     ],
 *   },
 *   {
 *     key: "mobile_avif",
 *     width: 800,
 *     height: 400,
 *     fit: "cover",
 *     formats: [
 *       {
 *         type: "avif",
 *         options: {
 *           quality: 80,
 *           effort: 4,
 *           chromaSubsampling: "4:4:4",
 *         },
 *       },
 *     ],
 *   },
 * ]);
 *
 * 🧾 Résultat :
 * {
 *   output: {
 *     desktop_banner: { jpeg: <Buffer>, webp: <Buffer> },
 *     mobile_avif: { avif: <Buffer> },
 *   },
 *   metadata: sharp.Metadata
 * }
 */

/**
 * 🔧 Traite un buffer d'image source en plusieurs variantes (resize + multi-format),
 * avec options complètes par format (jpeg, webp, avif, png, etc.).
 *
 * @param {Buffer} inputBuffer - Image source à transformer (ex: upload d'un CMS).
 * @param {Array<{
 *   key: string, // Clé unique de la variante (ex: "desktop_banner")
 *   width?: number, // Largeur cible (en pixels)
 *   height?: number, // Hauteur cible (en pixels)
 *   fit?: "cover" | "contain" | "fill" | "inside" | "outside", // Mode de redimensionnement
 *   position?: string, // Position du crop si `fit: 'cover'` (ex: 'center', 'top')
 *   withoutEnlargement?: boolean, // Empêche l'agrandissement si l'image est plus petite que les dimensions cibles
 *   forceAlpha?: boolean, // Force l'ajout d'un canal alpha (utile si format avec transparence)
 *   density?: number, // DPI (résolution) à injecter dans les métadonnées (ex: 300 pour print)
 *   formats: Array<{
 *     type: "jpeg" | "webp" | "avif" | "png" | "tiff" | "heif", // Format de sortie
 *     options?: Record<string, any> // Options spécifiques du format (voir ci-dessous)
 *   }>
 * }>} variants - Tableau des variantes à générer. Chacune peut avoir des formats multiples.
 *
 * Chaque `options` est propre à son format :
 *
 * jpeg:
 * - quality (1–100), progressive, chromaSubsampling, trellisQuantisation, optimiseCoding, mozjpeg
 *
 * webp:
 * - quality, lossless, alphaQuality, smartSubsample
 *
 * avif:
 * - quality, lossless, effort (1–9), chromaSubsampling
 *
 * png:
 * - compressionLevel (0–9), palette, progressive
 *
 * tiff:
 * - quality, compression ('jpeg', 'lzw', etc.), predictor, pyramid
 *
 * heif:
 * - quality, lossless, compression ('hevc', 'av1'), chromaSubsampling
 *
 * @returns {Promise<{
 *   output: Record<string, Record<string, Buffer>>, // Ex: { desktop_banner: { jpeg: Buffer, webp: Buffer } }
 *   metadata: sharp.Metadata // Métadonnées de l'image source (format, dimensions, etc.)
 * }>}
 *
 * @throws {Error} - En cas de format inconnu ou d'erreur de traitement spécifique
 */
export async function processMultipleVariants(inputBuffer, variants = []) {
  const baseMetadata = await sharp(inputBuffer).metadata();

  const formatMap = {
    jpeg: (instance, options) => instance.jpeg(options),
    webp: (instance, options) => instance.webp(options),
    avif: (instance, options) => instance.avif(options),
    png: (instance, options) => instance.png(options),
    tiff: (instance, options) => instance.tiff(options),
    heif: (instance, options) => instance.heif(options),
  };

  const variantResults = await Promise.all(
    variants.map(async (variant) => {
      const {
        key,
        width,
        height,
        fit = "inside",
        position = "centre",
        withoutEnlargement = true,
        forceAlpha = false,
        density,
        formats = [],
      } = variant;

      if (!key || !formats.length) {
        throw new Error(`Variant "${key}" is missing "key" or "formats".`);
      }

      const resized = sharp(inputBuffer)
        .resize({ width, height, fit, position, withoutEnlargement })
        .withMetadata(density ? { density } : undefined);

      const base = forceAlpha && !baseMetadata.hasAlpha
        ? resized.ensureAlpha()
        : resized;

      const formatEntries = await Promise.all(
        formats.map(async ({ type, options = {} }) => {
          if (!formatMap[type]) {
            throw new Error(`Unsupported image format: ${type}`);
          }
          try {
            const buffer = await formatMap[type](base.clone(), options).toBuffer();
            return [type, buffer];
          } catch (err) {
            throw new Error(`Erreur sur format ${type} pour la variante "${key}": ${err.message}`);
          }
        })
      );

      return [key, Object.fromEntries(formatEntries)];
    })
  );

  return {
    output: Object.fromEntries(variantResults),
    metadata: baseMetadata,
  };
}