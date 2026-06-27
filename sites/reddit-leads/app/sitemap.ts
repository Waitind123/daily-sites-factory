import type { Metadata } from "next";
import { buildSitemapEntries } from "@/lib/site-seo";
import { SITE_URL, publicPaths } from "@/lib/seo";

export default function sitemap() {
  return buildSitemapEntries(SITE_URL, publicPaths);
}
