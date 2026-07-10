import { randomBytes } from "crypto";

export type CustomerProfit = {
  id: string;
  name: string;
  revenue: number;
  aiCost: number;
  profit: number;
  margin: number;
  apiCalls: number;
  model: string;
};

export type ProfitSnapshot = {
  totalRevenue: number;
  totalAiCost: number;
  grossProfit: number;
  avgMargin: number;
  profitableCustomers: number;
  unprofitableCustomers: number;
  customers: CustomerProfit[];
  syncedAt: string;
};

export type Workspace = {
  id: string;
  name: string;
  stripeKeyHint: string;
  monthlyAiBudget: number;
  createdAt: string;
  lastSync: string | null;
  snapshot: ProfitSnapshot | null;
};

const workspaces = new Map<string, Workspace>();

function randomId(): string {
  return randomBytes(8).toString("hex");
}

const DEMO_CUSTOMERS = [
  { name: "Acme Corp", revenue: 299, aiCost: 42, apiCalls: 12400, model: "gpt-4o" },
  { name: "StartupXYZ", revenue: 99, aiCost: 78, apiCalls: 8900, model: "gpt-4o-mini" },
  { name: "IndieDev Co", revenue: 49, aiCost: 12, apiCalls: 2100, model: "claude-3-haiku" },
  { name: "BigClient Inc", revenue: 499, aiCost: 156, apiCalls: 45200, model: "gpt-4o" },
  { name: "SoloFounder", revenue: 29, aiCost: 31, apiCalls: 5600, model: "gpt-4o-mini" },
  { name: "AgencyPro", revenue: 199, aiCost: 45, apiCalls: 7800, model: "claude-3-sonnet" },
  { name: "BetaUser42", revenue: 0, aiCost: 18, apiCalls: 3200, model: "gpt-4o-mini" },
  { name: "EnterpriseCo", revenue: 999, aiCost: 89, apiCalls: 22100, model: "gpt-4o" },
];

function demoSnapshot(seed: string): ProfitSnapshot {
  const hash = seed.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const offset = hash % 3;

  const customers: CustomerProfit[] = DEMO_CUSTOMERS.map((c, i) => {
    const rev = c.revenue + (i === offset ? 50 : 0);
    const cost = c.aiCost + (i % 2 === 0 ? 5 : -3);
    const profit = rev - cost;
    const margin = rev > 0 ? (profit / rev) * 100 : -100;
    return {
      id: `cust-${i + 1}`,
      name: c.name,
      revenue: rev,
      aiCost: Math.max(0, cost),
      profit,
      margin,
      apiCalls: c.apiCalls,
      model: c.model,
    };
  });

  const totalRevenue = customers.reduce((s, c) => s + c.revenue, 0);
  const totalAiCost = customers.reduce((s, c) => s + c.aiCost, 0);
  const grossProfit = totalRevenue - totalAiCost;
  const profitable = customers.filter((c) => c.profit > 0).length;
  const unprofitable = customers.filter((c) => c.profit <= 0).length;

  return {
    totalRevenue,
    totalAiCost,
    grossProfit,
    avgMargin: totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0,
    profitableCustomers: profitable,
    unprofitableCustomers: unprofitable,
    customers,
    syncedAt: new Date().toISOString(),
  };
}

export function createWorkspace(
  name: string,
  stripeKey?: string,
  monthlyAiBudget?: number
): Workspace {
  const id = randomId();
  const hint = stripeKey?.trim()
    ? `${stripeKey.slice(0, 7)}…${stripeKey.slice(-4)}`
    : "demo";

  const workspace: Workspace = {
    id,
    name: name.trim(),
    stripeKeyHint: hint,
    monthlyAiBudget: monthlyAiBudget ?? 500,
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

export function syncWorkspace(id: string): ProfitSnapshot | null {
  const workspace = workspaces.get(id);
  if (!workspace) return null;

  const snapshot = demoSnapshot(id + workspace.name);
  workspace.snapshot = snapshot;
  workspace.lastSync = snapshot.syncedAt;
  workspaces.set(id, workspace);
  return snapshot;
}
