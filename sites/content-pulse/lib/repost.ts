import { randomBytes } from "crypto";

export type Platform = "twitter" | "linkedin" | "threads" | "reddit" | "producthunt";

export type PlatformPost = {
  platform: Platform;
  content: string;
  charCount: number;
  maxChars: number;
};

export type RepostBatch = {
  id: string;
  original: string;
  title: string;
  platforms: PlatformPost[];
  createdAt: string;
};

const batches = new Map<string, RepostBatch>();

const PLATFORM_LIMITS: Record<Platform, number> = {
  twitter: 280,
  linkedin: 3000,
  threads: 500,
  reddit: 40000,
  producthunt: 260,
};

const PLATFORM_LABELS: Record<Platform, { en: string; zh: string }> = {
  twitter: { en: "X / Twitter", zh: "X / 推特" },
  linkedin: { en: "LinkedIn", zh: "领英" },
  threads: { en: "Threads", zh: "Threads" },
  reddit: { en: "Reddit", zh: "Reddit" },
  producthunt: { en: "Product Hunt", zh: "Product Hunt" },
};

export function getPlatformLabel(platform: Platform, locale: "en" | "zh"): string {
  return PLATFORM_LABELS[platform][locale];
}

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function firstSentence(text: string): string {
  const match = text.match(/^[^.!?\n]+[.!?]?/);
  return (match?.[0] ?? text).trim();
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

function toTwitter(original: string): string {
  const hook = firstSentence(original);
  const body = truncate(original.replace(/\s+/g, " ").trim(), 220);
  const tweet = body.length > 240 ? truncate(body, 240) : body;
  const withHook = tweet.startsWith(hook) ? tweet : `${hook}\n\n${truncate(tweet, 200)}`;
  return truncate(withHook.replace(/\n{3,}/g, "\n\n"), PLATFORM_LIMITS.twitter);
}

function toLinkedIn(original: string): string {
  const lines = original.trim().split(/\n+/).filter(Boolean);
  const opener = "Sharing an update from the build:\n\n";
  const body = lines.join("\n\n");
  const closer = "\n\nWhat resonates with your workflow? Drop a comment.";
  return truncate(opener + body + closer, PLATFORM_LIMITS.linkedin);
}

function toThreads(original: string): string {
  const sentences = original.split(/(?<=[.!?])\s+/).filter(Boolean);
  const thread = sentences.slice(0, 4).join("\n\n");
  const cta = "\n\nBuilding in public — follow for more updates.";
  return truncate(thread + cta, PLATFORM_LIMITS.threads);
}

function toReddit(original: string): string {
  const opener = "Hey r/SideProject — wanted to share something I've been working on:\n\n";
  const body = original.trim();
  const closer =
    "\n\nHappy to answer questions or hear feedback. Not trying to spam — genuinely curious what you'd improve.";
  return truncate(opener + body + closer, PLATFORM_LIMITS.reddit);
}

function toProductHunt(original: string): string {
  const hook = firstSentence(original);
  const bullets = original
    .split(/[.!?]\s+/)
    .filter((s) => s.length > 10)
    .slice(0, 3)
    .map((s) => `• ${s.trim()}`)
    .join("\n");
  const post = `🚀 ${hook}\n\n${bullets}\n\n#buildinpublic #indiehacker`;
  return truncate(post, PLATFORM_LIMITS.producthunt);
}

const TRANSFORMERS: Record<Platform, (text: string) => string> = {
  twitter: toTwitter,
  linkedin: toLinkedIn,
  threads: toThreads,
  reddit: toReddit,
  producthunt: toProductHunt,
};

export function generateReposts(original: string, title?: string): RepostBatch {
  const trimmed = original.trim();
  const platforms: PlatformPost[] = (Object.keys(TRANSFORMERS) as Platform[]).map((platform) => {
    const content = TRANSFORMERS[platform](trimmed);
    return {
      platform,
      content,
      charCount: content.length,
      maxChars: PLATFORM_LIMITS[platform],
    };
  });

  const batch: RepostBatch = {
    id: randomId(),
    original: trimmed,
    title: title?.trim() || firstSentence(trimmed).slice(0, 80),
    platforms,
    createdAt: new Date().toISOString(),
  };

  batches.set(batch.id, batch);
  return batch;
}

export function listBatches(): RepostBatch[] {
  return [...batches.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getBatch(id: string): RepostBatch | undefined {
  return batches.get(id);
}
