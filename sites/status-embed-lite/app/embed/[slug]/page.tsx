import { notFound } from "next/navigation";
import { getPageBySlug } from "@/lib/status-pages";
import { getPublicStatusCopy } from "@/lib/copy-app";
import type { Locale } from "@/lib/i18n-shared";

function getOverallStatus(page: ReturnType<typeof getPageBySlug>, locale: Locale) {
  const t = getPublicStatusCopy(locale);
  if (!page) return { label: t.allOperational, color: "bg-emerald-500" };
  const hasDown = page.components.some((c) => c.status === "down");
  const hasDegraded = page.components.some((c) => c.status === "degraded");
  if (hasDown) return { label: t.down, color: "bg-red-500" };
  if (hasDegraded) return { label: t.degraded, color: "bg-amber-500" };
  return { label: t.allOperational, color: "bg-emerald-500" };
}

export default async function EmbedWidgetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const locale: Locale = "en";
  const status = getOverallStatus(page, locale);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: "4px 8px",
          background: "transparent",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <a
          href={`/s/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#e5e5e5",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: status.color === "bg-emerald-500" ? "#10b981" : status.color === "bg-amber-500" ? "#f59e0b" : "#ef4444",
              flexShrink: 0,
            }}
          />
          {status.label}
        </a>
      </body>
    </html>
  );
}
