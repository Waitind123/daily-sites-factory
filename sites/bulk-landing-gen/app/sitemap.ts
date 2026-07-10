import type { MetadataRoute } from "next";
import { buildSitemapEntries } from "@/lib/site-seo";
import { publicPaths, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemapEntries(SITE_URL, publicPaths);
}
