import { randomBytes } from "crypto";

export type BetaListing = {
  id: string;
  slug: string;
  productName: string;
  description: string;
  targetAudience: string;
  createdAt: string;
  applicationCount: number;
};

export type Application = {
  id: string;
  listingId: string;
  email: string;
  profile: string;
  position: number;
  createdAt: string;
};

const listings = new Map<string, BetaListing>();
const applications = new Map<string, Application[]>();

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

export function createListing(
  productName: string,
  description: string,
  targetAudience: string
): BetaListing {
  const id = randomId();
  const baseSlug = slugify(productName);
  let slug = baseSlug;
  let i = 1;
  while ([...listings.values()].some((l) => l.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const listing: BetaListing = {
    id,
    slug,
    productName: productName.trim(),
    description: description.trim(),
    targetAudience: targetAudience.trim(),
    createdAt: new Date().toISOString(),
    applicationCount: 0,
  };

  listings.set(id, listing);
  applications.set(id, []);
  return listing;
}

export function getListingBySlug(slug: string): BetaListing | undefined {
  return [...listings.values()].find((l) => l.slug === slug);
}

export function getListingById(id: string): BetaListing | undefined {
  return listings.get(id);
}

export function listListings(): BetaListing[] {
  return [...listings.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getApplications(listingId: string): Application[] {
  return applications.get(listingId) ?? [];
}

export function addApplication(
  listingId: string,
  email: string,
  profile: string
): Application | null {
  const listing = listings.get(listingId);
  if (!listing) return null;

  const list = applications.get(listingId) ?? [];
  const normalized = email.trim().toLowerCase();
  if (list.some((a) => a.email === normalized)) {
    return list.find((a) => a.email === normalized) ?? null;
  }

  const application: Application = {
    id: randomId(),
    listingId,
    email: normalized,
    profile: profile.trim(),
    position: list.length + 1,
    createdAt: new Date().toISOString(),
  };

  list.push(application);
  applications.set(listingId, list);
  listing.applicationCount = list.length;
  return application;
}
