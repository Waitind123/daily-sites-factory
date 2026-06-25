import { randomBytes } from "crypto";

export type DocPage = {
  id: string;
  title: string;
  content: string;
  order: number;
};

export type DocSite = {
  id: string;
  slug: string;
  name: string;
  description: string;
  pages: DocPage[];
  createdAt: string;
  viewCount: number;
};

const sites = new Map<string, DocSite>();

function slugify(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) || randomBytes(4).toString("hex")
  );
}

function randomId(): string {
  return randomBytes(8).toString("hex");
}

function defaultPages(name: string): DocPage[] {
  return [
    {
      id: "p1",
      title: "Getting Started",
      content: `Welcome to ${name} documentation.\n\nThis guide walks you through authentication, core endpoints, and error handling.`,
      order: 0,
    },
    {
      id: "p2",
      title: "Authentication",
      content: "All API requests require a Bearer token in the Authorization header.\n\n```\nAuthorization: Bearer sk_live_xxx\n```",
      order: 1,
    },
    {
      id: "p3",
      title: "API Reference",
      content: "## POST /v1/items\n\nCreate a new item.\n\n**Parameters:**\n- `name` (string, required)\n- `description` (string, optional)",
      order: 2,
    },
  ];
}

export function createDocSite(name: string, description: string): DocSite {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...sites.values()].some((s) => s.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const site: DocSite = {
    id,
    slug,
    name: name.trim(),
    description: description.trim(),
    pages: defaultPages(name.trim()),
    createdAt: new Date().toISOString(),
    viewCount: 0,
  };

  sites.set(id, site);
  return site;
}

export function getDocSiteBySlug(slug: string): DocSite | undefined {
  return [...sites.values()].find((s) => s.slug === slug);
}

export function getDocSiteById(id: string): DocSite | undefined {
  return sites.get(id);
}

export function listDocSites(): DocSite[] {
  return [...sites.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function recordView(siteId: string): void {
  const site = sites.get(siteId);
  if (site) site.viewCount += 1;
}

export function addPage(siteId: string, title: string, content: string): DocPage | null {
  const site = sites.get(siteId);
  if (!site) return null;

  const page: DocPage = {
    id: randomId(),
    title: title.trim(),
    content: content.trim(),
    order: site.pages.length,
  };
  site.pages.push(page);
  return page;
}

export function generateLlmsTxt(site: DocSite): string {
  const lines = [
    `# ${site.name}`,
    `> ${site.description}`,
    "",
    "## Pages",
    ...site.pages.map((p) => `- [${p.title}](/d/${site.slug}#${slugify(p.title)})`),
  ];
  return lines.join("\n");
}
