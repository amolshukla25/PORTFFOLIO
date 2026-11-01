/** Stable key for a (dataset, sql) pair, used to look up generated MySQL results. */
export function snippetKey(dataset: string, sql: string): string {
  const s = `${dataset}\u0000${sql.trim()}`;
  // FNV-1a 32-bit, twice with different seeds → 16 hex chars. No crypto needed.
  let h1 = 0x811c9dc5, h2 = 0x01000193 ^ 0x5bd1e995;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;
    h2 = Math.imul(h2 ^ c, 0x01000193 ^ 0x2f) >>> 0;
  }
  return h1.toString(16).padStart(8, "0") + h2.toString(16).padStart(8, "0");
}
