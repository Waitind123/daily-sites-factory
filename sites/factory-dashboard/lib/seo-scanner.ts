import type { SiteSeoMetrics } from "./analytics-store";

function scoreSeo(input: Omit<SiteSeoMetrics, "score" | "lastChecked">): number {
  let score = 0;
  if (input.robotsOk) score += 15;
  if (input.sitemapOk) score += 15;
  if (input.titleLen >= 30 && input.titleLen <= 65) score += 20;
  else if (input.titleLen > 0) score += 10;
  if (input.descriptionLen >= 80 && input.descriptionLen <= 160) score += 20;
  else if (input.descriptionLen > 0) score += 10;
  if (input.hasOg) score += 15;
  if (input.hasJsonLd) score += 10;
  if (input.guideCount > 0) score += 5;
  return Math.min(100, score);
}

export async function scanSiteSeo(baseUrl: string): Promise<SiteSeoMetrics> {
  const url = baseUrl.replace(/\/$/, "");
  let robotsOk = false;
  let sitemapOk = false;
  let title = "";
  let description = "";
  let hasOg = false;
  let hasJsonLd = false;
  let guideCount = 0;

  try {
    const robots = await fetch(`${url}/robots.txt`, { signal: AbortSignal.timeout(12000) });
    if (robots.ok) {
      const text = await robots.text();
      robotsOk = /Sitemap:/i.test(text) || text.includes("Allow:");
    }
  } catch {
    robotsOk = false;
  }

  try {
    const sitemap = await fetch(`${url}/sitemap.xml`, { signal: AbortSignal.timeout(12000) });
    if (sitemap.ok) {
      const xml = await sitemap.text();
      sitemapOk = xml.includes("<urlset") || xml.includes("<url>");
      guideCount = (xml.match(/\/guide\//g) || []).length;
    }
  } catch {
    sitemapOk = false;
  }

  try {
    const home = await fetch(url, {
      headers: { "User-Agent": "factory-dashboard-seo/1.0" },
      signal: AbortSignal.timeout(15000),
    });
    if (home.ok) {
      const html = await home.text();
      title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim() || "";
      description =
        html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1]?.trim() ||
        html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i)?.[1]?.trim() ||
        "";
      hasOg = /property=["']og:title["']/i.test(html);
      hasJsonLd = /application\/ld\+json/i.test(html);
    }
  } catch {
    // keep defaults
  }

  const partial = {
    robotsOk,
    sitemapOk,
    title,
    titleLen: title.length,
    description,
    descriptionLen: description.length,
    hasOg,
    hasJsonLd,
    guideCount,
  };

  return {
    ...partial,
    lastChecked: new Date().toISOString(),
    score: scoreSeo(partial),
  };
}
