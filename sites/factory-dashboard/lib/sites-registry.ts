import { readFileSync, existsSync } from "fs";
import { join } from "path";

export interface SiteEntry {
  id: string;
  name: string;
  url: string;
  deployedAt?: string;
}

export function loadSitesFromState(): SiteEntry[] {
  const statePath = join(process.cwd(), "..", "..", "state.json");
  if (!existsSync(statePath)) return [];
  const state = JSON.parse(readFileSync(statePath, "utf8")) as {
    history?: Array<{ verticalId: string; name: string; url: string; deployedAt?: string }>;
    lastVerticalId?: string;
    lastDeployedUrl?: string;
  };

  const map = new Map<string, SiteEntry>();
  for (const h of state.history || []) {
    map.set(h.verticalId, {
      id: h.verticalId,
      name: h.name,
      url: h.url,
      deployedAt: h.deployedAt,
    });
  }
  if (state.lastVerticalId && state.lastDeployedUrl) {
    const existing = map.get(state.lastVerticalId);
    map.set(state.lastVerticalId, {
      id: state.lastVerticalId,
      name: existing?.name || state.lastVerticalId,
      url: state.lastDeployedUrl,
      deployedAt: existing?.deployedAt,
    });
  }
  return [...map.values()].sort((a, b) => (b.deployedAt || "").localeCompare(a.deployedAt || ""));
}
