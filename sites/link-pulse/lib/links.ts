import { randomBytes } from "crypto";

export type ClickEvent = {
  id: string;
  clickedAt: string;
  referrer: string;
  userAgent: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

export type ShortLink = {
  id: string;
  slug: string;
  destination: string;
  title: string;
  createdAt: string;
  clicks: ClickEvent[];
};

const links = new Map<string, ShortLink>();

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function slugify(input: string): string {
  const base = input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24);
  return base || randomId().slice(0, 8);
}

function uniqueSlug(preferred: string): string {
  let slug = slugify(preferred);
  let attempt = 0;
  while ([...links.values()].some((l) => l.slug === slug)) {
    attempt += 1;
    slug = `${slugify(preferred).slice(0, 16)}-${attempt}`;
  }
  return slug;
}

export function createLink(destination: string, title?: string, customSlug?: string): ShortLink {
  const slug = customSlug?.trim() ? uniqueSlug(customSlug.trim()) : uniqueSlug(randomId());
  const link: ShortLink = {
    id: randomId(),
    slug,
    destination: destination.trim(),
    title: title?.trim() || destination.trim(),
    createdAt: new Date().toISOString(),
    clicks: [],
  };
  links.set(link.id, link);
  return link;
}

export function listLinks(): ShortLink[] {
  return [...links.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getLinkBySlug(slug: string): ShortLink | undefined {
  return [...links.values()].find((l) => l.slug === slug);
}

export function getLinkById(id: string): ShortLink | undefined {
  return links.get(id);
}

export function recordClick(
  slug: string,
  meta: { referrer: string; userAgent: string; utmSource?: string; utmMedium?: string; utmCampaign?: string }
): ClickEvent | null {
  const link = getLinkBySlug(slug);
  if (!link) return null;

  const event: ClickEvent = {
    id: randomId(),
    clickedAt: new Date().toISOString(),
    referrer: meta.referrer || "direct",
    userAgent: meta.userAgent || "unknown",
    utmSource: meta.utmSource,
    utmMedium: meta.utmMedium,
    utmCampaign: meta.utmCampaign,
  };

  link.clicks.unshift(event);
  links.set(link.id, link);
  return event;
}

export function getLinkStats(slug: string) {
  const link = getLinkBySlug(slug);
  if (!link) return null;

  const referrers = new Map<string, number>();
  for (const click of link.clicks) {
    const key = click.referrer || "direct";
    referrers.set(key, (referrers.get(key) ?? 0) + 1);
  }

  const last7 = link.clicks.filter(
    (c) => Date.now() - new Date(c.clickedAt).getTime() < 7 * 24 * 60 * 60 * 1000
  ).length;

  return {
    slug: link.slug,
    destination: link.destination,
    title: link.title,
    totalClicks: link.clicks.length,
    clicksLast7Days: last7,
    topReferrers: [...referrers.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count })),
    recentClicks: link.clicks.slice(0, 10),
  };
}
