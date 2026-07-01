"use client";

const JOIN_URL = "https://ai-headshots-navy.vercel.app/join?utm_source=share";

export function SharePromoKit({ locale }: { locale: string }) {
  const zh = locale === "zh";
  const title = zh
    ? "AI 证件照 — $9.9/月，30 秒生成 LinkedIn 职业照"
    : "AI headshots — $9.9/mo, LinkedIn-ready in 30 seconds";
  const text = zh
    ? "5 次免费试用，上传自拍即可生成证件照，比 PhotoAI 便宜很多"
    : "5 free tries. Upload a selfie → pro headshots. $9.9/mo flat vs PhotoAI $29+";

  const links = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(JOIN_URL)}`,
    reddit: `https://www.reddit.com/submit?url=${encodeURIComponent(JOIN_URL)}&title=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(JOIN_URL)}`,
    hn: `https://news.ycombinator.com/submitlink?u=${encodeURIComponent(JOIN_URL)}&t=${encodeURIComponent(title)}`,
  };

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(`${title}\n\n${JOIN_URL}\n\n${text}`);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="rounded-xl border border-border bg-surface p-4 space-y-3">
      <h3 className="text-sm font-semibold text-foreground">
        {zh ? "一键分享推广 Share & promote" : "Share & promote"}
      </h3>
      <p className="text-xs text-muted break-all">{JOIN_URL}</p>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["Twitter/X", links.twitter],
            ["Reddit", links.reddit],
            ["LinkedIn", links.linkedin],
            ["HN", links.hn],
          ] as const
        ).map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium hover:bg-surface-muted"
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-brand-700"
        >
          {zh ? "复制文案 Copy" : "Copy"}
        </button>
      </div>
    </div>
  );
}
