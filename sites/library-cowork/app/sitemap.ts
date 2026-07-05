import type { MetadataRoute } from "next";
import { SITE_URL, publicPaths } from "@/lib/seo";
import { buildSitemapEntries } from "@/lib/site-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries(SITE_URL, publicPaths);
}
