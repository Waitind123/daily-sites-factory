import { randomBytes } from "crypto";

export type ComponentStatus = "operational" | "degraded" | "down";

export type StatusComponent = {
  id: string;
  name: string;
  status: ComponentStatus;
};

export type Incident = {
  id: string;
  pageId: string;
  title: string;
  message: string;
  status: "investigating" | "identified" | "monitoring" | "resolved";
  createdAt: string;
  resolvedAt?: string;
};

export type StatusPage = {
  id: string;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  components: StatusComponent[];
  subscriberCount: number;
};

const pages = new Map<string, StatusPage>();
const incidents = new Map<string, Incident[]>();
const subscribers = new Map<string, Set<string>>();

const DEFAULT_COMPONENTS = ["API", "Web App", "Database"];

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

export function createStatusPage(name: string, description: string): StatusPage {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...pages.values()].some((p) => p.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const page: StatusPage = {
    id,
    slug,
    name: name.trim(),
    description: description.trim(),
    createdAt: new Date().toISOString(),
    components: DEFAULT_COMPONENTS.map((n) => ({
      id: randomId(),
      name: n,
      status: "operational" as ComponentStatus,
    })),
    subscriberCount: 0,
  };

  pages.set(id, page);
  incidents.set(id, []);
  subscribers.set(id, new Set());
  return page;
}

export function getPageBySlug(slug: string): StatusPage | undefined {
  return [...pages.values()].find((p) => p.slug === slug);
}

export function listPages(): StatusPage[] {
  return [...pages.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getIncidents(pageId: string): Incident[] {
  return incidents.get(pageId) ?? [];
}

export function getActiveIncidents(pageId: string): Incident[] {
  return getIncidents(pageId).filter((i) => i.status !== "resolved");
}

export function createIncident(
  pageId: string,
  title: string,
  message: string
): Incident | null {
  const page = pages.get(pageId);
  if (!page) return null;

  const incident: Incident = {
    id: randomId(),
    pageId,
    title: title.trim(),
    message: message.trim(),
    status: "investigating",
    createdAt: new Date().toISOString(),
  };

  const list = incidents.get(pageId) ?? [];
  list.unshift(incident);
  incidents.set(pageId, list);

  page.components = page.components.map((c) => ({
    ...c,
    status: c.status === "operational" ? "degraded" : c.status,
  }));

  return incident;
}

export function resolveIncident(pageId: string, incidentId: string): boolean {
  const list = incidents.get(pageId);
  if (!list) return false;

  const incident = list.find((i) => i.id === incidentId);
  if (!incident) return false;

  incident.status = "resolved";
  incident.resolvedAt = new Date().toISOString();

  const page = pages.get(pageId);
  if (page && getActiveIncidents(pageId).length === 0) {
    page.components = page.components.map((c) => ({ ...c, status: "operational" }));
  }

  return true;
}

export function addSubscriber(pageId: string, email: string): boolean {
  const page = pages.get(pageId);
  if (!page) return false;

  const set = subscribers.get(pageId) ?? new Set();
  const normalized = email.trim().toLowerCase();
  if (set.has(normalized)) return false;

  set.add(normalized);
  subscribers.set(pageId, set);
  page.subscriberCount = set.size;
  return true;
}

export function getOverallStatus(page: StatusPage): ComponentStatus {
  if (page.components.some((c) => c.status === "down")) return "down";
  if (page.components.some((c) => c.status === "degraded")) return "degraded";
  return "operational";
}
