import { randomBytes } from "crypto";

export type Bookmark = {
  id: string;
  url: string;
  title: string;
  folderId: string | null;
  favicon: string;
  createdAt: string;
};

export type Folder = {
  id: string;
  slug: string;
  name: string;
  isPublic: boolean;
  createdAt: string;
};

const bookmarks = new Map<string, Bookmark>();
const folders = new Map<string, Folder>();

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

function faviconFromUrl(url: string): string {
  try {
    const host = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=32`;
  } catch {
    return "https://www.google.com/s2/favicons?domain=example.com&sz=32";
  }
}

function titleFromUrl(url: string, customTitle?: string): string {
  if (customTitle?.trim()) return customTitle.trim();
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, "");
  } catch {
    return url.slice(0, 60);
  }
}

export function createFolder(name: string, isPublic = false): Folder {
  const id = randomId();
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let i = 1;
  while ([...folders.values()].some((f) => f.slug === slug)) {
    slug = `${baseSlug}-${i++}`;
  }

  const folder: Folder = {
    id,
    slug,
    name: name.trim(),
    isPublic,
    createdAt: new Date().toISOString(),
  };
  folders.set(id, folder);
  return folder;
}

export function getFolderBySlug(slug: string): Folder | undefined {
  return [...folders.values()].find((f) => f.slug === slug && f.isPublic);
}

export function listFolders(): Folder[] {
  return [...folders.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function createBookmark(
  url: string,
  title?: string,
  folderId?: string | null
): Bookmark {
  const id = randomId();
  const normalizedUrl = url.trim();
  const bookmark: Bookmark = {
    id,
    url: normalizedUrl,
    title: titleFromUrl(normalizedUrl, title),
    folderId: folderId ?? null,
    favicon: faviconFromUrl(normalizedUrl),
    createdAt: new Date().toISOString(),
  };
  bookmarks.set(id, bookmark);
  return bookmark;
}

export function listBookmarks(folderId?: string | null): Bookmark[] {
  let list = [...bookmarks.values()];
  if (folderId !== undefined) {
    list = list.filter((b) => b.folderId === folderId);
  }
  return list.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function listPublicFolderBookmarks(slug: string): { folder: Folder; bookmarks: Bookmark[] } | null {
  const folder = getFolderBySlug(slug);
  if (!folder) return null;
  return { folder, bookmarks: listBookmarks(folder.id) };
}
