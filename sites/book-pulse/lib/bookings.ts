import { randomBytes } from "crypto";

export type TimeSlot = {
  day: string;
  start: string;
  end: string;
};

export type BookingPage = {
  id: string;
  slug: string;
  name: string;
  bio: string;
  project: string;
  timezone: string;
  durationMin: number;
  slots: TimeSlot[];
  publishedAt: string | null;
  createdAt: string;
  bookingsCount: number;
};

const pages = new Map<string, BookingPage>();

function randomId(): string {
  return randomBytes(8).toString("hex");
}

function slugify(name: string): string {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 24);
  return base || `page-${randomId().slice(0, 6)}`;
}

function uniqueSlug(name: string): string {
  let slug = slugify(name);
  let i = 0;
  while ([...pages.values()].some((p) => p.slug === slug)) {
    i += 1;
    slug = `${slugify(name)}-${i}`;
  }
  return slug;
}

function defaultSlots(): TimeSlot[] {
  return [
    { day: "Mon", start: "10:00", end: "12:00" },
    { day: "Wed", start: "14:00", end: "17:00" },
    { day: "Fri", start: "09:00", end: "11:00" },
  ];
}

export function createBookingPage(input: {
  name: string;
  bio?: string;
  project?: string;
  timezone?: string;
}): BookingPage {
  const id = randomId();
  const slug = uniqueSlug(input.name.trim());

  const page: BookingPage = {
    id,
    slug,
    name: input.name.trim(),
    bio: input.bio?.trim() || "",
    project: input.project?.trim() || "",
    timezone: input.timezone?.trim() || "UTC+8",
    durationMin: 30,
    slots: defaultSlots(),
    publishedAt: null,
    createdAt: new Date().toISOString(),
    bookingsCount: 0,
  };

  pages.set(id, page);
  return page;
}

export function listBookingPages(): BookingPage[] {
  return [...pages.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getBookingPage(id: string): BookingPage | undefined {
  return pages.get(id);
}

export function getBookingPageBySlug(slug: string): BookingPage | undefined {
  return [...pages.values()].find((p) => p.slug === slug && p.publishedAt);
}

export function publishBookingPage(id: string): BookingPage | null {
  const page = pages.get(id);
  if (!page) return null;

  page.publishedAt = new Date().toISOString();
  pages.set(id, page);
  return page;
}

export function recordBooking(slug: string): BookingPage | null {
  const page = getBookingPageBySlug(slug);
  if (!page) return null;
  page.bookingsCount += 1;
  pages.set(page.id, page);
  return page;
}
