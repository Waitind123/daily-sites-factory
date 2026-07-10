import { randomBytes } from "crypto";

export type RiskLevel = "healthy" | "at-risk" | "critical";

export type CustomerHealth = {
  id: string;
  name: string;
  email: string;
  healthScore: number;
  riskLevel: RiskLevel;
  mrr: number;
  daysSinceActive: number;
  paymentFailures: number;
  trend: "up" | "down" | "flat";
};

export type HealthSnapshot = {
  avgHealthScore: number;
  atRiskCount: number;
  criticalCount: number;
  healthyCount: number;
  churnProbability: number;
  customers: CustomerHealth[];
  syncedAt: string;
};

export type Workspace = {
  id: string;
  name: string;
  stripeKeyHint: string;
  createdAt: string;
  lastSync: string | null;
  snapshot: HealthSnapshot | null;
};

const workspaces = new Map<string, Workspace>();

function randomId(): string {
  return randomBytes(8).toString("hex");
}

function riskFromScore(score: number): RiskLevel {
  if (score >= 70) return "healthy";
  if (score >= 40) return "at-risk";
  return "critical";
}

function demoCustomers(seed: string): CustomerHealth[] {
  const names = [
    { name: "Acme Corp", email: "billing@acme.io" },
    { name: "Startup Labs", email: "finance@startuplabs.com" },
    { name: "Design Studio", email: "ops@designstudio.co" },
    { name: "DevTools Inc", email: "accounts@devtools.dev" },
    { name: "Cloud Nine", email: "pay@cloudnine.app" },
    { name: "Pixel Works", email: "hello@pixelworks.io" },
    { name: "DataFlow", email: "billing@dataflow.ai" },
    { name: "Nomad SaaS", email: "team@nomadsaas.com" },
  ];

  const hash = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);

  return names.map((n, i) => {
    const score = Math.max(15, Math.min(98, 55 + ((hash + i * 17) % 45) - (i % 3) * 12));
    const mrr = 29 + ((hash + i * 7) % 200);
    const daysSinceActive = score < 40 ? 21 + (i % 10) : score < 70 ? 8 + (i % 5) : 1 + (i % 3);
    const paymentFailures = score < 40 ? 2 : score < 70 ? 1 : 0;
    const trend: CustomerHealth["trend"] =
      score < 40 ? "down" : score > 75 ? "up" : "flat";

    return {
      id: `cust_${i}`,
      name: n.name,
      email: n.email,
      healthScore: score,
      riskLevel: riskFromScore(score),
      mrr,
      daysSinceActive,
      paymentFailures,
      trend,
    };
  });
}

function demoSnapshot(seed: string): HealthSnapshot {
  const customers = demoCustomers(seed);
  const avgHealthScore = Math.round(
    customers.reduce((s, c) => s + c.healthScore, 0) / customers.length
  );
  const atRiskCount = customers.filter((c) => c.riskLevel === "at-risk").length;
  const criticalCount = customers.filter((c) => c.riskLevel === "critical").length;
  const healthyCount = customers.filter((c) => c.riskLevel === "healthy").length;
  const churnProbability = Math.round(
    (criticalCount * 0.85 + atRiskCount * 0.35) / customers.length * 100
  );

  return {
    avgHealthScore,
    atRiskCount,
    criticalCount,
    healthyCount,
    churnProbability,
    customers: customers.sort((a, b) => a.healthScore - b.healthScore),
    syncedAt: new Date().toISOString(),
  };
}

export function createWorkspace(name: string, stripeKey?: string): Workspace {
  const id = randomId();
  const hint = stripeKey?.trim()
    ? `${stripeKey.slice(0, 7)}…${stripeKey.slice(-4)}`
    : "demo";

  const workspace: Workspace = {
    id,
    name: name.trim(),
    stripeKeyHint: hint,
    createdAt: new Date().toISOString(),
    lastSync: null,
    snapshot: null,
  };

  workspaces.set(id, workspace);
  return workspace;
}

export function listWorkspaces(): Workspace[] {
  return [...workspaces.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getWorkspace(id: string): Workspace | undefined {
  return workspaces.get(id);
}

export function syncWorkspace(id: string): HealthSnapshot | null {
  const workspace = workspaces.get(id);
  if (!workspace) return null;

  const snapshot = demoSnapshot(id + workspace.name);
  workspace.snapshot = snapshot;
  workspace.lastSync = snapshot.syncedAt;
  workspaces.set(id, workspace);
  return snapshot;
}
