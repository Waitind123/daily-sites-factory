import { randomBytes } from "crypto";

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

function demoMetrics(seed: string): MetricSnapshot {
  const hash = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const base = 2800 + (hash % 4000);
  const churn = 1.5 + (hash % 30) / 10;
  const customers = 80 + (hash % 200);
  const newCust = Math.round(customers * 0.08);
  const churned = Math.round(customers * (churn / 100));

  return {
    mrr: base,
    arr: base * 12,
    churnRate: churn,
    activeCustomers: customers,
    newCustomers: newCust,
    churnedCustomers: churned,
    expansionMrr: Math.round(base * 0.04),
    contractionMrr: Math.round(base * 0.02),
    netRevenue: base + Math.round(base * 0.02),
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
