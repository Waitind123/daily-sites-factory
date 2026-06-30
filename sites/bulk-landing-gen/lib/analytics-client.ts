"use client";

import { ANALYTICS_API_URL } from "./analytics-api-url";

const HUB = process.env.NEXT_PUBLIC_FACTORY_ANALYTICS_URL || ANALYTICS_API_URL;

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

function deviceType() {
  if (typeof window === "undefined") return "unknown";
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

function clientLocale() {
  if (typeof navigator === "undefined") return "unknown";
  return (navigator.language || "unknown").split("-")[0];
}

function clientTimezone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown";
  } catch {
    return "unknown";
  }
}

function utmFields() {
  if (typeof window === "undefined") {
    return { utmSource: "", utmMedium: "", utmCampaign: "" };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
  };
}

export function trackFactoryEvent(
  siteId: string,
  type: "pageview" | "trial" | "checkout" | "purchase",
  extra?: { path?: string }
) {
  if (!HUB || !siteId) return;
  const utm = utmFields();
  const payload = {
    siteId,
    type,
    path: extra?.path ?? (typeof window !== "undefined" ? window.location.pathname : "/"),
    visitorId: visitorId(),
    referrer: typeof document !== "undefined" ? document.referrer : "",
    locale: clientLocale(),
    device: deviceType(),
    timezone: clientTimezone(),
    ...utm,
  };
  fetch(`${HUB.replace(/\/$/, "")}/api/collect`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}
