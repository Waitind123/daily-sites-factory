import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

export interface FeedbackMessage {
  id: string;
  text: string;
  createdAt: string;
  reply?: string | null;
  repliedAt?: string | null;
  status?: "open" | "replied" | "implemented";
}

export interface FeedbackFile {
  siteId: string;
  messages: FeedbackMessage[];
}

const REPO = process.env.GITHUB_REPO || "Waitind123/daily-sites-factory";
const TOKEN =
  process.env.ANALYTICS_GITHUB_PAT ||
  process.env.GITHUB_TOKEN ||
  process.env.GH_TOKEN;

function repoRoot() {
  return join(process.cwd(), "..", "..");
}

function localPath(siteId: string) {
  return join(repoRoot(), "feedback", `${siteId}.json`);
}

function emptyFile(siteId: string): FeedbackFile {
  return { siteId, messages: [] };
}

async function githubGet(path: string): Promise<{ sha: string; content: string } | null> {
  if (!TOKEN) return null;
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/${path}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "daily-sites-factory",
      },
      signal: AbortSignal.timeout(15000),
    }
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET ${path}: ${res.status}`);
  const data = await res.json();
  const content = Buffer.from(data.content, "base64").toString("utf8");
  return { sha: data.sha, content };
}

async function githubPut(path: string, content: string, sha?: string) {
  if (!TOKEN) throw new Error("GITHUB_TOKEN not configured");
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "daily-sites-factory",
    },
    body: JSON.stringify({
      message: `feedback: update ${path}`,
      content: Buffer.from(content, "utf8").toString("base64"),
      sha,
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub PUT ${path}: ${res.status} ${err}`);
  }
}

function readLocal(siteId: string): FeedbackFile {
  const path = localPath(siteId);
  if (!existsSync(path)) return emptyFile(siteId);
  return JSON.parse(readFileSync(path, "utf8")) as FeedbackFile;
}

function writeLocal(siteId: string, data: FeedbackFile) {
  const path = localPath(siteId);
  const dir = join(repoRoot(), "feedback");
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

export async function loadFeedback(siteId: string): Promise<FeedbackFile> {
  const ghPath = `feedback/${siteId}.json`;
  try {
    const remote = await githubGet(ghPath);
    if (remote) return JSON.parse(remote.content) as FeedbackFile;
  } catch {
    // fall through to local
  }
  return readLocal(siteId);
}

export async function saveFeedback(siteId: string, data: FeedbackFile) {
  const content = JSON.stringify(data, null, 2) + "\n";
  const ghPath = `feedback/${siteId}.json`;
  if (!TOKEN) {
    if (process.env.NODE_ENV === "development") {
      writeLocal(siteId, data);
      return;
    }
    throw new Error("GITHUB_TOKEN not configured");
  }
  const remote = await githubGet(ghPath);
  await githubPut(ghPath, content, remote?.sha);
}

export async function addFeedback(siteId: string, text: string) {
  const data = await loadFeedback(siteId);
  const message: FeedbackMessage = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    text: text.trim(),
    createdAt: new Date().toISOString(),
    status: "open",
  };
  data.messages.unshift(message);
  await saveFeedback(siteId, data);
  return message;
}
