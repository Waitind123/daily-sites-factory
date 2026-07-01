import { randomBytes } from "crypto";

export type CohortRow = {
  month: string;
  signups: number;
  retention: number;
};

export type MetricSnapshot = {
  mrr: number;
  arr: number;
  churnRate: number;
  activeCustomers: number;
  newCustomers: number;
  churnedCustomers: number;
  expansionMrr: number;
  contractionMrr: number;
  netRevenue: number;
  cohorts: CohortRow[];
  syncedAt: string;
};

export type Dashboard = {
  id: string;
  name: string;
  stripeKeyHint: string;
  createdAt: string;
  lastSync: string | null;
  metrics: MetricSnapshot | null;
};

const dashboards = new Map<string, Dashboard>();

function randomId(): string {
  return randomBytes(8).toString("hex");
}

function demoCohorts(seed: number): CohortRow[] {
  const now = new Date();
  const months: CohortRow[] = [];
  for (let i = 3; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthLabel = d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
    const signups = 20 + ((seed + i * 7) % 30);
    const retention = 55 + ((seed + i * 13) % 40);
    months.push({ month: monthLabel, signups, retention });
  }
  return months;
}

function demoMetrics(seed: string): MetricSnapshot {
  const hash = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const base = 4200 + (hash % 5000);
  const churn = 2.0 + (hash % 25) / 10;
  const customers = 120 + (hash % 250);
  const newCust = Math.round(customers * 0.09);
  const churned = Math.round(customers * (churn / 100));

  return {
    mrr: base,
    arr: base * 12,
    churnRate: churn,
    activeCustomers: customers,
    newCustomers: newCust,
    churnedCustomers: churned,
    expansionMrr: Math.round(base * 0.05),
    contractionMrr: Math.round(base * 0.025),
    netRevenue: base + Math.round(base * 0.025),
    cohorts: demoCohorts(hash),
    syncedAt: new Date().toISOString(),
  };
}

export function createDashboard(name: string, stripeKey?: string): Dashboard {
  const id = randomId();
  const hint = stripeKey?.trim()
    ? `${stripeKey.slice(0, 7)}…${stripeKey.slice(-4)}`
    : "demo";

  const dashboard: Dashboard = {
    id,
    name: name.trim(),
    stripeKeyHint: hint,
    createdAt: new Date().toISOString(),
    lastSync: null,
    metrics: null,
  };

  dashboards.set(id, dashboard);
  return dashboard;
}

export function listDashboards(): Dashboard[] {
  return [...dashboards.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getDashboard(id: string): Dashboard | undefined {
  return dashboards.get(id);
}

export function syncDashboard(id: string): MetricSnapshot | null {
  const dashboard = dashboards.get(id);
  if (!dashboard) return null;

  const metrics = demoMetrics(id + dashboard.name);
  dashboard.metrics = metrics;
  dashboard.lastSync = metrics.syncedAt;
  dashboards.set(id, dashboard);
  return metrics;
}
