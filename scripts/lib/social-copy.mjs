/**
 * 真人风格推广文案 — 每次随机组合，避免重复人机感
 */

const JOIN_BASE = "https://ai-headshots-navy.vercel.app/join";

export const SUBREDDITS = [
  { name: "SideProject", flair: null, weight: 4 },
  { name: "SaaS", flair: null, weight: 2 },
  { name: "EntrepreneurRideAlong", flair: null, weight: 2 },
  { name: "passive_income", flair: null, weight: 1 },
  { name: "linkedin", flair: null, weight: 1 },
];

const TITLE_OPENERS = [
  "Finally shipped something small — AI headshots for LinkedIn",
  "Built a PhotoAI alternative because $29/mo felt silly",
  "30-second LinkedIn headshots from a selfie (indie project)",
  "Anyone else hate paying for AI headshot subscriptions?",
  "Weekend project: pro headshots without a photo studio",
  "Launched: flat $9.9/mo headshots after my own LinkedIn refresh",
  "Tried to keep this simple — upload selfie, get 4 styles",
];

const TITLE_SUFFIXES = [
  "",
  " — feedback welcome",
  " ($9.9/mo flat)",
  ", 5 free tries",
  " [bootstrapped]",
];

const BODY_HOOKS = [
  "I've been updating my LinkedIn photo forever and didn't want to book a studio.",
  "PhotoAI pricing kept creeping up so I hacked together my own version.",
  "Needed a decent headshot for job apps — studio quotes were wild.",
  "Shipped this last week between client work. Still rough around the edges.",
  "Not trying to be the next unicorn — just something useful at a fair price.",
  "Built this for myself first, then added a paywall when hosting bills showed up.",
];

const BODY_FEATURES = [
  "Upload one selfie → corporate / casual / creative / academic styles in ~30s.",
  "5 free generations, then $9.9/mo unlimited. No per-image fees.",
  "Runs in the browser. Photos auto-delete in 24h (privacy thing I cared about).",
  "Compared to PhotoAI ($29+) it's intentionally boring and cheap.",
  "LinkedIn 1:1 and resume sizes export as PNG.",
];

const BODY_CLOSERS = [
  "Happy to hear what's broken.",
  "Roast the landing page if you want — I can take it.",
  "If you've tried similar tools, curious what I'm missing.",
  "Still figuring out distribution so any honest feedback helps.",
  "Not affiliated with any big AI shop — solo builder.",
  "",
];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickWeighted(items) {
  const total = items.reduce((s, i) => s + i.weight, 0);
  let r = Math.random() * total;
  for (const item of items) {
    r -= item.weight;
    if (r <= 0) return item;
  }
  return items[0];
}

function utmLink(subreddit, variant) {
  const params = new URLSearchParams({
    utm_source: "reddit",
    utm_medium: subreddit.toLowerCase(),
    utm_campaign: `auto_${variant}`,
  });
  return `${JOIN_BASE}?${params}`;
}

function hashText(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return String(h);
}

export function generateRedditPost(state = { history: [] }) {
  const usedHashes = new Set((state.history || []).map((h) => h.hash));
  const sub = pickWeighted(SUBREDDITS);
  const variant = Date.now().toString(36).slice(-5);

  for (let attempt = 0; attempt < 12; attempt++) {
    const title = `${pick(TITLE_OPENERS)}${pick(TITLE_SUFFIXES)}`.trim();
    const paragraphs = [
      pick(BODY_HOOKS),
      pick(BODY_FEATURES),
      utmLink(sub.name, variant),
      pick(BODY_CLOSERS),
    ].filter(Boolean);
    const body = paragraphs.join("\n\n");
    const hash = hashText(`${title}|${body}`);

    if (!usedHashes.has(hash)) {
      return {
        subreddit: sub.name,
        title: title.slice(0, 280),
        body: body.slice(0, 35000),
        hash,
        kind: "self",
        url: utmLink(sub.name, variant),
        joinUrl: utmLink(sub.name, variant),
        campaign: `auto_${variant}`,
      };
    }
  }

  const fallback = generateRedditPost({ history: [] });
  fallback.subreddit = sub.name;
  return fallback;
}

export function shouldPostToday(state, now = new Date()) {
  const minHoursBetween = 20;
  const last = state.lastPostedAt ? new Date(state.lastPostedAt) : null;
  if (last && (now - last) / 3600000 < minHoursBetween) {
    return { ok: false, reason: "too_soon" };
  }

  // GitHub cron 每 4h 触发一次；约 35% 概率发帖 → 日均 ~2 次检查、期望不到 1 帖
  const hour = now.getUTCHours();
  const isQuiet = hour >= 2 && hour <= 5;
  if (isQuiet) return { ok: false, reason: "quiet_hours" };

  const roll = Math.random();
  const day = now.getUTCDay();
  const weekendDampen = day === 0 || day === 6 ? 0.6 : 1;
  if (roll > 0.38 * weekendDampen) {
    return { ok: false, reason: "random_skip" };
  }

  return { ok: true };
}
