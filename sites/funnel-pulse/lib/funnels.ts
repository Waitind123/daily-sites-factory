import { randomBytes } from "crypto";

export type Funnel = {
  id: string;
  slug: string;
  name: string;
  steps: string[];
  stepCounts: number[];
  createdAt: string;
};

const funnels = new Map<string, Funnel>();

function slugify(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) || randomBytes(4).toString("hex")
  );
}

function randomId(): string {
  return randomBytes(8).toString("hex");
}

export function createFunnel(name: string, steps: string[]): Funnel {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...funnels.values()].some((f) => f.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const funnel: Funnel = {
    id,
    slug,
    name: name.trim(),
    steps: steps.map((s) => s.trim()).filter(Boolean),
    stepCounts: steps.map(() => 0),
    createdAt: new Date().toISOString(),
  };

  funnels.set(id, funnel);
  return funnel;
}

export function getFunnelBySlug(slug: string): Funnel | undefined {
  return [...funnels.values()].find((f) => f.slug === slug);
}

export function listFunnels(): Funnel[] {
  return [...funnels.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function recordStep(slug: string, stepIndex: number): Funnel | null {
  const funnel = getFunnelBySlug(slug);
  if (!funnel || stepIndex < 0 || stepIndex >= funnel.steps.length) return null;
  funnel.stepCounts[stepIndex] += 1;
  return funnel;
}

export function dropOffRate(from: number, to: number): string {
  if (from === 0) return "0.0";
  return (((from - to) / from) * 100).toFixed(1);
}

export function conversionRate(count: number, top: number): string {
  if (top === 0) return "0.0";
  return ((count / top) * 100).toFixed(1);
}

export function biggestDropOff(funnel: Funnel): { index: number; rate: number } | null {
  let max = { index: -1, rate: 0 };
  for (let i = 0; i < funnel.steps.length - 1; i++) {
    const from = funnel.stepCounts[i];
    const to = funnel.stepCounts[i + 1];
    if (from === 0) continue;
    const rate = ((from - to) / from) * 100;
    if (rate > max.rate) max = { index: i, rate };
  }
  return max.index >= 0 ? max : null;
}
