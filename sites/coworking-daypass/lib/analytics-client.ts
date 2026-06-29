"use client";

const HUB =
  process.env.NEXT_PUBLIC_FACTORY_ANALYTICS_URL || "https://daily-sites-analytics.vercel.app";

function visitorId() {
  if (typeof window === "undefined") return "";
  const key = "factory_vid";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export function trackFactoryEvent(
  siteId: string,
  type: "pageview" | "trial" | "checkout" | "purchase",
  extra?: { path?: string }
) {
  if (!HUB || !siteId) return;
  const payload = {
    siteId,
    type,
    path: extra?.path ?? (typeof window !== "undefined" ? window.location.pathname : "/"),
    visitorId: visitorId(),
    referrer: typeof document !== "undefined" ? document.referrer : "",
  };
  fetch(`${HUB.replace(/\/$/, "")}/api/collect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}
