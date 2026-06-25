import { randomBytes } from "crypto";

export type Experiment = {
  id: string;
  slug: string;
  name: string;
  pageUrl: string;
  variantA: string;
  variantB: string;
  viewsA: number;
  viewsB: number;
  conversionsA: number;
  conversionsB: number;
  createdAt: string;
};

const experiments = new Map<string, Experiment>();

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

export function createExperiment(
  name: string,
  pageUrl: string,
  variantA: string,
  variantB: string
): Experiment {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...experiments.values()].some((e) => e.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const experiment: Experiment = {
    id,
    slug,
    name: name.trim(),
    pageUrl: pageUrl.trim(),
    variantA: variantA.trim(),
    variantB: variantB.trim(),
    viewsA: 0,
    viewsB: 0,
    conversionsA: 0,
    conversionsB: 0,
    createdAt: new Date().toISOString(),
  };

  experiments.set(id, experiment);
  return experiment;
}

export function getExperimentBySlug(slug: string): Experiment | undefined {
  return [...experiments.values()].find((e) => e.slug === slug);
}

export function listExperiments(): Experiment[] {
  return [...experiments.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function recordView(slug: string, variant: "A" | "B"): Experiment | null {
  const exp = getExperimentBySlug(slug);
  if (!exp) return null;
  if (variant === "A") exp.viewsA += 1;
  else exp.viewsB += 1;
  return exp;
}

export function recordConversion(slug: string, variant: "A" | "B"): Experiment | null {
  const exp = getExperimentBySlug(slug);
  if (!exp) return null;
  if (variant === "A") exp.conversionsA += 1;
  else exp.conversionsB += 1;
  return exp;
}

export function conversionRate(conversions: number, views: number): string {
  if (views === 0) return "0.0";
  return ((conversions / views) * 100).toFixed(1);
}

export function pickWinner(exp: Experiment): "A" | "B" | "tie" | null {
  const totalViews = exp.viewsA + exp.viewsB;
  if (totalViews < 20) return null;
  const rateA = exp.viewsA > 0 ? exp.conversionsA / exp.viewsA : 0;
  const rateB = exp.viewsB > 0 ? exp.conversionsB / exp.viewsB : 0;
  if (Math.abs(rateA - rateB) < 0.01) return "tie";
  return rateA > rateB ? "A" : "B";
}
