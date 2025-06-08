export function getContentTypeFromUrl(url) {
  const ext = url.split(".").pop().split("?")[0].toLowerCase();

  return ["jpg", "jpeg", "png", "webp", "gif", "bmp", "tiff", "svg"].includes(
    ext,
  )
    ? "IMAGE"
    : ["mp4", "mov", "webm", "avi", "mkv"].includes(ext)
      ? "VIDEO"
      : ["usdz", "glb"].includes(ext)
        ? "MODEL_3D"
        : [
              "pdf",
              "zip",
              "doc",
              "docx",
              "xls",
              "xlsx",
              "csv",
              "txt",
              "rtf",
            ].includes(ext)
          ? "FILE"
          : undefined;
}