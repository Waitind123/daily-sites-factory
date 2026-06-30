import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { StripeHealth } from "@/lib/dashboard-metrics";

export interface RevenueGoalConfig {
  targetUsd: number;
  deadline: string;
  purpose?: string;
  stripeReadyBy?: string;
}

export function loadRevenueGoal(): RevenueGoalConfig | null {
  const paths = [
    join(process.cwd(), "data", "revenue-goal.json"),
    join(process.cwd(), "..", "..", "state.json"),
  ];

  for (const path of paths) {
    if (!existsSync(path)) continue;
    const data = JSON.parse(readFileSync(path, "utf8")) as {
      revenueGoal?: RevenueGoalConfig;
      targetUsd?: number;
    };
    if (data.revenueGoal) return data.revenueGoal;
    if (path.endsWith("revenue-goal.json") && data.targetUsd) {
      return data as RevenueGoalConfig;
    }
  }
  return null;
}

export function loadStripeHealth(): StripeHealth {
  const path = join(process.cwd(), "data", "stripe-status.json");
  const fallback = join(process.cwd(), "..", "..", "analytics", "stripe-status.json");
  const file = existsSync(path) ? path : existsSync(fallback) ? fallback : null;

  if (file) {
    const data = JSON.parse(readFileSync(file, "utf8")) as StripeHealth;
    return data;
  }

  return {
    configured: Boolean(process.env.STRIPE_SECRET_KEY),
    liveCount: 0,
    demoCount: 0,
    failCount: 0,
    updatedAt: null,
  };
}
