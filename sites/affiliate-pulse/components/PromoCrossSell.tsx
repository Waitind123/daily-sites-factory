"use client";

const PROMO_URL = "https://ai-headshots-navy.vercel.app/join";

const SKIP_SITES = new Set(["ai-headshots", "team-headshots", "factory-dashboard"]);

export function PromoCrossSell({
  locale,
  siteId,
}: {
  locale: string;
  siteId: string;
}) {
  if (SKIP_SITES.has(siteId)) return null;

  const href = `${PROMO_URL}?utm_source=${encodeURIComponent(siteId)}&utm_medium=crosssell`;
  const zh = locale === "zh";

  return (
    <aside className="border-b border-indigo-200/60 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/40 dark:to-violet-950/30 dark:border-indigo-800/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-2.5 sm:flex-row">
        <p className="text-center text-sm text-indigo-900 dark:text-indigo-100 sm:text-left">
          <span className="font-semibold">
            {zh ? "🔥 限时 $9.9/月：AI 职业证件照" : "🔥 $9.9/mo: AI professional headshots"}
          </span>
          <span className="mx-2 text-indigo-400">·</span>
          <span className="text-indigo-700 dark:text-indigo-200">
            {zh ? "5 次免费 · 30 秒出 LinkedIn 头像" : "5 free tries · LinkedIn-ready in 30s"}
          </span>
        </p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
        >
          {zh ? "立即试用 Try free →" : "Try free →"}
        </a>
      </div>
    </aside>
  );
}
