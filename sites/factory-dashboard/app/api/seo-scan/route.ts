import { NextRequest, NextResponse } from "next/server";
import { loadRollup, updateSiteSeo } from "@/lib/analytics-store";
import { scanSiteSeo } from "@/lib/seo-scanner";
import { loadSitesFromState } from "@/lib/sites-registry";

export async function POST(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  const adminToken = process.env.ANALYTICS_ADMIN_TOKEN;
  if (adminToken && token !== adminToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const sites = loadSitesFromState();
  const results = [];

  for (const site of sites.slice(0, 40)) {
    try {
      const seo = await scanSiteSeo(site.url);
      await updateSiteSeo(site.id, site.url, seo, site.name);
      results.push({ id: site.id, score: seo.score, ok: true });
    } catch (err) {
      results.push({
        id: site.id,
        ok: false,
        error: err instanceof Error ? err.message : "scan failed",
      });
    }
  }

  const rollup = await loadRollup();
  return NextResponse.json({ scanned: results.length, results, updatedAt: rollup.updatedAt });
}
