import { randomBytes } from "crypto";

export type WikiPage = {
  id: string;
  title: string;
  content: string;
  order: number;
};

export type WikiSpace = {
  id: string;
  slug: string;
  name: string;
  description: string;
  pages: WikiPage[];
  createdAt: string;
  viewCount: number;
};

const spaces = new Map<string, WikiSpace>();

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

function defaultPages(name: string): WikiPage[] {
  return [
    {
      id: "p1",
      title: "Team Onboarding",
      content: `Welcome to ${name}.\n\nThis wiki covers onboarding, engineering runbooks, and team processes. New members: start here, then read Engineering Runbook.`,
      order: 0,
    },
    {
      id: "p2",
      title: "Engineering Runbook",
      content: "## Deploy checklist\n\n1. Run tests locally\n2. Open PR with changelog\n3. Merge to main → auto-deploy\n\n## On-call\n\nPagerDuty rotation in #eng-oncall. Escalate P1 within 15 minutes.",
      order: 1,
    },
    {
      id: "p3",
      title: "Product Processes",
      content: "## Weekly rhythm\n\n- Monday: sprint planning\n- Wednesday: async updates in wiki\n- Friday: demo + retro\n\n## Feature requests\n\nLog in the wiki under Product > Requests. Tag with priority P0–P3.",
      order: 2,
    },
  ];
}

export function createWikiSpace(name: string, description: string): WikiSpace {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...spaces.values()].some((s) => s.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const space: WikiSpace = {
    id,
    slug,
    name: name.trim(),
    description: description.trim(),
    pages: defaultPages(name.trim()),
    createdAt: new Date().toISOString(),
    viewCount: 0,
  };

  spaces.set(id, space);
  return space;
}

export function getWikiSpaceBySlug(slug: string): WikiSpace | undefined {
  return [...spaces.values()].find((s) => s.slug === slug);
}

export function getWikiSpaceById(id: string): WikiSpace | undefined {
  return spaces.get(id);
}

export function listWikiSpaces(): WikiSpace[] {
  return [...spaces.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function recordView(spaceId: string): void {
  const space = spaces.get(spaceId);
  if (space) space.viewCount += 1;
}

export function addPage(spaceId: string, title: string, content: string): WikiPage | null {
  const space = spaces.get(spaceId);
  if (!space) return null;

  const page: WikiPage = {
    id: randomId(),
    title: title.trim(),
    content: content.trim(),
    order: space.pages.length,
  };
  space.pages.push(page);
  return page;
}

export function generateMcpManifest(space: WikiSpace): string {
  const lines = [
    `# ${space.name}`,
    `> ${space.description}`,
    "",
    "## Pages",
    ...space.pages.map((p) => `- [${p.title}](/w/${space.slug}#${slugify(p.title)})`),
    "",
    "## MCP",
    "mcp-server: wiki-pulse",
    "tools: search, read_page, list_pages",
  ];
  return lines.join("\n");
}
