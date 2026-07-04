import { randomBytes } from "crypto";

export type Waitlist = {
  id: string;
  slug: string;
  name: string;
  description: string;
  createdAt: string;
  signupCount: number;
};

export type Signup = {
  id: string;
  waitlistId: string;
  email: string;
  position: number;
  referralCode: string;
  createdAt: string;
};

const waitlists = new Map<string, Waitlist>();
const signups = new Map<string, Signup[]>();

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

export function createWaitlist(name: string, description: string): Waitlist {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...waitlists.values()].some((w) => w.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const waitlist: Waitlist = {
    id,
    slug,
    name: name.trim(),
    description: description.trim(),
    createdAt: new Date().toISOString(),
    signupCount: 0,
  };

  waitlists.set(id, waitlist);
  signups.set(id, []);
  return waitlist;
}

export function getWaitlistBySlug(slug: string): Waitlist | undefined {
  return [...waitlists.values()].find((w) => w.slug === slug);
}

export function getWaitlistById(id: string): Waitlist | undefined {
  return waitlists.get(id);
}

export function listWaitlists(): Waitlist[] {
  return [...waitlists.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getSignups(waitlistId: string): Signup[] {
  return signups.get(waitlistId) ?? [];
}

export function addSignup(waitlistId: string, email: string): Signup | null {
  const waitlist = waitlists.get(waitlistId);
  if (!waitlist) return null;

  const list = signups.get(waitlistId) ?? [];
  const normalized = email.trim().toLowerCase();
  if (list.some((s) => s.email === normalized)) {
    return list.find((s) => s.email === normalized) ?? null;
  }

  const signup: Signup = {
    id: randomId(),
    waitlistId,
    email: normalized,
    position: list.length + 1,
    referralCode: randomBytes(4).toString("hex"),
    createdAt: new Date().toISOString(),
  };

  list.push(signup);
  signups.set(waitlistId, list);
  waitlist.signupCount = list.length;
  return signup;
}
