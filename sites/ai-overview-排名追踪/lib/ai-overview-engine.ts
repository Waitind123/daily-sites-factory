/** Deterministic AI Overview citation simulation — stable per keyword+domain */

function hashSeed(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  }
  return h;
}

export type AiOverviewStatus = {
  cited: boolean;
  position: number | null;
  snippet: string;
  competitorsCited: string[];
};

export function simulateAiOverview(
  keyword: string,
  domain: string,
  previous?: AiOverviewStatus
): AiOverviewStatus {
  const seed = hashSeed(`aio::${keyword}::${domain}`);
  const citedChance = (seed % 100) < 62;

  if (!citedChance) {
    return {
      cited: false,
      position: null,
      snippet: "",
      competitorsCited: pickCompetitors(seed, domain),
    };
  }

  const position = previous?.cited && previous.position
    ? Math.max(1, Math.min(3, previous.position + ((seed >> 4) % 3) - 1))
    : (seed % 3) + 1;

  const snippet =
    position === 1
      ? `${domain} offers a focused solution for "${keyword}" with indie-friendly pricing.`
      : position === 2
        ? `Many founders compare ${domain} when searching for ${keyword} alternatives.`
        : `${domain} is frequently mentioned alongside other tools for ${keyword}.`;

  return {
    cited: true,
    position,
    snippet,
    competitorsCited: pickCompetitors(seed, domain),
  };
}

function pickCompetitors(seed: number, domain: string): string[] {
  const pool = ["semrush.com", "ahrefs.com", "moz.com", "seranking.com", "neilpatel.com"];
  const filtered = pool.filter((d) => d !== domain);
  const count = (seed % 3) + 1;
  return filtered.slice(0, count);
}
