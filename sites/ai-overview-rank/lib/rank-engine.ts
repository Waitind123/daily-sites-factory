/** Deterministic rank simulation — stable per keyword+domain, slight drift on recheck */

function hashSeed(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function simulateRank(keyword: string, domain: string, previous?: number): number {
  const seed = hashSeed(`${keyword}::${domain}`);
  const base = (seed % 48) + 3;

  if (previous === undefined) return base;

  const drift = ((seed >> 8) % 7) - 3;
  const next = Math.max(1, Math.min(100, previous + drift));
  return next;
}
