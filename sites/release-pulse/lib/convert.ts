import { randomBytes } from "crypto";

export type Platform = "twitter" | "linkedin" | "threads";

export type PlatformPost = {
  platform: Platform;
  content: string;
  charCount: number;
  maxChars: number;
};

export type ConvertBatch = {
  id: string;
  original: string;
  title: string;
  version?: string;
  platforms: PlatformPost[];
  createdAt: string;
};

const batches = new Map<string, ConvertBatch>();

const PLATFORM_LIMITS: Record<Platform, number> = {
  twitter: 280,
  linkedin: 3000,
  threads: 500,
};

const PLATFORM_LABELS: Record<Platform, { en: string; zh: string }> = {
  twitter: { en: "X / Twitter", zh: "X / 推特" },
  linkedin: { en: "LinkedIn", zh: "领英" },
  threads: { en: "Threads", zh: "Threads" },
};

export function getPlatformLabel(platform: Platform, locale: "en" | "zh"): string {
  return PLATFORM_LABELS[platform][locale];
}

function randomId(): string {
  return randomBytes(6).toString("hex");
}

function extractVersion(text: string): string | undefined {
  const match = text.match(/v?\d+\.\d+(?:\.\d+)?/i);
  return match?.[0];
}

function extractBullets(text: string): string[] {
  const lines = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  const bullets: string[] = [];
  for (const line of lines) {
    const cleaned = line.replace(/^[-*•]\s*/, "").replace(/^\d+\.\s*/, "").trim();
    if (cleaned.length > 8) bullets.push(cleaned);
  }
  if (bullets.length === 0) {
    return text.split(/(?<=[.!?])\s+/).filter((s) => s.length > 10).slice(0, 5);
  }
  return bullets.slice(0, 6);
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + "…";
}

function toTwitter(title: string, bullets: string[], version?: string): string {
  const ver = version ? ` ${version}` : "";
  const hook = `🚀 Shipped${ver}: ${title}`;
  const topBullets = bullets.slice(0, 2).map((b) => `• ${truncate(b, 80)}`).join("\n");
  const cta = "\n\n#buildinpublic #changelog";
  return truncate(`${hook}\n\n${topBullets}${cta}`, PLATFORM_LIMITS.twitter);
}

function toLinkedIn(title: string, bullets: string[], version?: string, original?: string): string {
  const ver = version ? ` (${version})` : "";
  const opener = `📣 New release${ver}: ${title}\n\n`;
  const body = bullets.map((b) => `→ ${b}`).join("\n");
  const context = original && original.length > 200
    ? `\n\n${truncate(original.replace(/\n+/g, " ").trim(), 400)}`
    : "";
  const closer = "\n\nWhat feature would you like to see next? Drop a comment below.";
  return truncate(opener + body + context + closer, PLATFORM_LIMITS.linkedin);
}

function toThreads(title: string, bullets: string[], version?: string): string {
  const ver = version ? ` ${version}` : "";
  const opener = `Just shipped${ver} 🎉\n\n${title}\n\n`;
  const thread = bullets.slice(0, 4).map((b, i) => `${i + 1}/ ${b}`).join("\n\n");
  const cta = "\n\nBuilding in public — follow for more updates.";
  return truncate(opener + thread + cta, PLATFORM_LIMITS.threads);
}

export function generateConverts(
  original: string,
  title?: string,
  version?: string
): ConvertBatch {
  const trimmed = original.trim();
  const detectedVersion = version?.trim() || extractVersion(trimmed);
  const bullets = extractBullets(trimmed);
  const releaseTitle =
    title?.trim() ||
    bullets[0]?.slice(0, 80) ||
    trimmed.split(/\n/)[0]?.slice(0, 80) ||
    "Product update";

  const platforms: PlatformPost[] = (["twitter", "linkedin", "threads"] as Platform[]).map(
    (platform) => {
      let content: string;
      if (platform === "twitter") {
        content = toTwitter(releaseTitle, bullets, detectedVersion);
      } else if (platform === "linkedin") {
        content = toLinkedIn(releaseTitle, bullets, detectedVersion, trimmed);
      } else {
        content = toThreads(releaseTitle, bullets, detectedVersion);
      }
      return {
        platform,
        content,
        charCount: content.length,
        maxChars: PLATFORM_LIMITS[platform],
      };
    }
  );

  const batch: ConvertBatch = {
    id: randomId(),
    original: trimmed,
    title: releaseTitle,
    version: detectedVersion,
    platforms,
    createdAt: new Date().toISOString(),
  };

  batches.set(batch.id, batch);
  return batch;
}

export function listBatches(): ConvertBatch[] {
  return [...batches.values()].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getBatch(id: string): ConvertBatch | undefined {
  return batches.get(id);
}
