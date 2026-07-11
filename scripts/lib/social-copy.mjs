/**
 * 真人风格推广文案 + 每日随机发帖时刻
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
  "Built a PhotoAI alternative at a flat $29/mo",
  "30-second LinkedIn headshots from a selfie (indie project)",
  "Anyone else hate paying for AI headshot subscriptions?",
  "Weekend project: pro headshots without a photo studio",
  "Launched: flat $29/mo headshots after my own LinkedIn refresh",
  "Tried to keep this simple — upload selfie, get 4 styles",
];

const TITLE_SUFFIXES = [
  "",
  " — feedback welcome",
  " ($29/mo flat)",
  ", 5 free tries",
  " [bootstrapped]",
];

const BODY_HOOKS = [
  "I've been updating my LinkedIn photo forever and didn't want to book a studio.",
  "PhotoAI pricing kept creeping up so I hacked together my own version.",
  "Needed a decent headshot for job apps — studio quotes were wild.",
  "Shipped this last week between client work. Still rough around the edges.",
  "Not trying to be the next unicorn — just something useful at a fair price.",
  "Built this for myself first, then added Stripe when hosting bills showed up.",
];

const BODY_FEATURES = [
  "Upload one selfie → corporate / casual / creative / academic styles in ~30s.",
  "5 free generations, then $29/mo unlimited. No per-image fees.",
  "Runs in the browser. Photos auto-delete in 24h (privacy thing I cared about).",
  "Compared to PhotoAI ($49+) it's intentionally boring and affordable.",
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

const BLUESKY_HOOKS = [
  "Shipped AI LinkedIn headshots — selfie → pro portrait in ~30s.",
  "Flat $29/mo alternative to PhotoAI for headshots.",
  "5 free tries on my indie headshot tool — then $29/mo unlimited.",
  "Built this for my own LinkedIn refresh. Side project, honest pricing.",
];

/** Bluesky / Mastodon 等短帖共用 */
const MICROBLOG_HOOKS = BLUESKY_HOOKS;

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

function hashString(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function hashText(s) {
  return String(hashString(s));
}

function utmLink(source, medium, variant) {
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    utm_campaign: `auto_${variant}`,
  });
  return `${JOIN_BASE}?${params}`;
}

/** 每天固定一个随机 UTC 发帖时刻（同一天内所有 workflow 运行结果一致） */
export function getDailySchedule(dayKey) {
  const h = hashString(dayKey);
  // 8–20 UTC：覆盖欧美白天 + 中国晚间
  const hourUtc = 8 + (h % 13);
  const minuteUtc = h % 60;
  const jitterMinutes = (h >> 4) % 12;
  return { day: dayKey, hourUtc, minuteUtc, jitterMinutes };
}

/**
 * 每小时 cron 检查：未到点跳过，到点后当天发一次
 */
export function shouldPostNow(state, now = new Date()) {
  const dayKey = now.toISOString().slice(0, 10);

  if (state.lastPostedDay === dayKey) {
    return { ok: false, reason: "already_posted_today", dayKey };
  }

  const minHoursBetween = 20;
  const last = state.lastPostedAt ? new Date(state.lastPostedAt) : null;
  if (last && (now - last) / 3600000 < minHoursBetween) {
    return { ok: false, reason: "too_soon", dayKey };
  }

  const schedule =
    state.todaySchedule?.day === dayKey ? state.todaySchedule : getDailySchedule(dayKey);

  const nowMins = now.getUTCHours() * 60 + now.getUTCMinutes();
  const schedMins = schedule.hourUtc * 60 + schedule.minuteUtc;

  if (nowMins < schedMins) {
    return {
      ok: false,
      reason: `waiting_until_${String(schedule.hourUtc).padStart(2, "0")}:${String(schedule.minuteUtc).padStart(2, "0")}Z`,
      schedule,
      dayKey,
    };
  }

  return { ok: true, schedule, dayKey, reason: "go" };
}

/** @deprecated 兼容旧脚本 */
export function shouldPostToday(state, now = new Date()) {
  return shouldPostNow(state, now);
}

export function generateRedditPost(state = { history: [] }) {
  const usedHashes = new Set((state.history || []).map((h) => h.hash));
  const sub = pickWeighted(SUBREDDITS);
  const variant = Date.now().toString(36).slice(-5);

  for (let attempt = 0; attempt < 12; attempt++) {
    const title = `${pick(TITLE_OPENERS)}${pick(TITLE_SUFFIXES)}`.trim();
    const link = utmLink("reddit", sub.name.toLowerCase(), variant);
    const paragraphs = [pick(BODY_HOOKS), pick(BODY_FEATURES), link, pick(BODY_CLOSERS)].filter(Boolean);
    const body = paragraphs.join("\n\n");
    const hash = hashText(`${title}|${body}`);

    if (!usedHashes.has(hash)) {
      return {
        subreddit: sub.name,
        title: title.slice(0, 280),
        body: body.slice(0, 35000),
        hash,
        kind: "self",
        url: link,
        joinUrl: link,
        campaign: `auto_${variant}`,
      };
    }
  }

  const fallback = generateRedditPost({ history: [] });
  fallback.subreddit = sub.name;
  return fallback;
}

export function generateBlueskyPost(state = { history: [] }) {
  return generateMicroblogPost(state, "bluesky", "feed");
}

export function generateMastodonPost(state = { history: [] }) {
  return generateMicroblogPost(state, "mastodon", "public");
}

function generateMicroblogPost(state, source, medium) {
  const usedHashes = new Set((state.history || []).map((h) => h.hash));
  const variant = Date.now().toString(36).slice(-5);
  const link = utmLink(source, medium, variant);

  for (let attempt = 0; attempt < 8; attempt++) {
    const text = `${pick(MICROBLOG_HOOKS)} ${link}`.slice(0, 480);
    const hash = hashText(text);
    if (!usedHashes.has(hash)) {
      return { text, hash, url: link, joinUrl: link, campaign: `auto_${variant}` };
    }
  }

  return {
    text: `${MICROBLOG_HOOKS[0]} ${link}`.slice(0, 480),
    hash: hashText(link),
    url: link,
    joinUrl: link,
    campaign: `auto_${variant}`,
  };
}
