export function createIdGenerator(prefix: string): () => string {
  let counter = 1;
  return () => `${prefix}${counter++}`;
}