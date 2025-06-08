export function safeJsonParse(str, fallback = {}) {
  try {
    if (typeof str === "object") return str;
    return typeof str === "string" ? JSON.parse(str) : fallback;
  } catch {
    return fallback;
  }
}