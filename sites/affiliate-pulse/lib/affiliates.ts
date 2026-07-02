import { randomBytes } from "crypto";

export type Conversion = {
  id: string;
  convertedAt: string;
  amount: number;
  commission: number;
};

export type AffiliateProgram = {
  id: string;
  affiliateName: string;
  productUrl: string;
  commissionRate: number;
  trackingCode: string;
  createdAt: string;
  clicks: number;
  conversions: Conversion[];
};

const programs = new Map<string, AffiliateProgram>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function uniqueCode(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 16);
  const code = base || randomId().slice(0, 8);
  let attempt = 0;
  let final = code;
  while ([...programs.values()].some((p) => p.trackingCode === final)) {
    attempt += 1;
    final = `${code.slice(0, 12)}-${attempt}`;
  }
  return final;
}

export function createProgram(
  affiliateName: string,
  productUrl: string,
  commissionRate: number
): AffiliateProgram {
  const program: AffiliateProgram = {
    id: randomId(),
    affiliateName: affiliateName.trim(),
    productUrl: productUrl.trim(),
    commissionRate: Math.min(100, Math.max(1, commissionRate)),
    trackingCode: uniqueCode(affiliateName),
    createdAt: new Date().toISOString(),
    clicks: 0,
    conversions: [],
  };
  programs.set(program.id, program);
  return program;
}

export function listPrograms(): AffiliateProgram[] {
  return [...programs.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getProgramByCode(code: string): AffiliateProgram | undefined {
  return [...programs.values()].find((p) => p.trackingCode === code);
}

export function recordClick(code: string): boolean {
  const program = getProgramByCode(code);
  if (!program) return false;
  program.clicks += 1;
  programs.set(program.id, program);
  return true;
}

export function recordConversion(code: string, amount: number): Conversion | null {
  const program = getProgramByCode(code);
  if (!program) return null;
  const commission = Math.round(amount * (program.commissionRate / 100) * 100) / 100;
  const conversion: Conversion = {
    id: randomId(),
    convertedAt: new Date().toISOString(),
    amount,
    commission,
  };
  program.conversions.unshift(conversion);
  programs.set(program.id, program);
  return conversion;
}

export function getProgramStats(code: string) {
  const program = getProgramByCode(code);
  if (!program) return null;

  const totalCommission = program.conversions.reduce((sum, c) => sum + c.commission, 0);
  const totalRevenue = program.conversions.reduce((sum, c) => sum + c.amount, 0);
  const conversionRate =
    program.clicks > 0
      ? Math.round((program.conversions.length / program.clicks) * 1000) / 10
      : 0;

  return {
    trackingCode: program.trackingCode,
    affiliateName: program.affiliateName,
    productUrl: program.productUrl,
    commissionRate: program.commissionRate,
    clicks: program.clicks,
    conversions: program.conversions.length,
    conversionRate,
    totalRevenue,
    commissionOwed: totalCommission,
    recentConversions: program.conversions.slice(0, 5),
  };
}
