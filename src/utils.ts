export function truncate(text: string, max = 15) {
  if (!text) return "";
  return text.length > max ? text.substring(0, max) + "..." : text;
}
