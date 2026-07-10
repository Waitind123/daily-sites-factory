import { readFileSync, existsSync } from "fs";
import { join } from "path";

export interface SiteEntry {
  id: string;
  name: string;
  url: string;
  deployedAt?: string;
}

export function loadSitesFromState(): SiteEntry[] {
  const bundled = join(process.cwd(), "data", "sites.json");
  if (existsSync(bundled)) {
    return JSON.parse(readFileSync(bundled, "utf8")) as SiteEntry[];
  }
  const statePath = join(process.cwd(), "..", "..", "state.json");
  if (!existsSync(statePath)) return [];
  const state = JSON.parse(readFileSync(statePath, "utf8")) as {
    history?: Array<{ verticalId: string; name: string; url: string; deployedAt?: string }>;
  };
  return (state.history || [])
    .filter((h) => h.verticalId !== "factory-dashboard")
    .map((h) => ({
      id: h.verticalId,
      name: h.name,
      url: h.url,
      deployedAt: h.deployedAt,
    }));
}
