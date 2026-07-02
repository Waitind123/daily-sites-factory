import type { Metadata } from "next";
import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";
import { ReferralCapture } from "@/components/ReferralCapture";
import { PromoCrossSell } from "@/components/PromoCrossSell";
import { JsonLd } from "@/components/JsonLd";
import { FeedbackSection } from "@/components/FeedbackSection";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { loadFeedback } from "@/lib/feedback-store";
import { getLocale } from "@/lib/locale";
import { buildLocaleMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import { siteMeta } from "@/lib/site-meta";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildLocaleMetadata(locale);
}

export default async function ProductLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const feedback = await loadFeedback(siteMeta.id);

  return (
    <div className="bg-background text-foreground">
      <JsonLd data={softwareApplicationJsonLd(locale)} />
      <AnalyticsBeacon siteId={siteMeta.id} />
        <ReferralCapture siteId={siteMeta.id} />
      <SiteHeader meta={siteMeta} locale={locale} />
      <PromoCrossSell locale={locale} siteId={siteMeta.id} />
      <main>{children}</main>
      <FeedbackSection
        siteId={siteMeta.id}
        locale={locale}
        initialMessages={feedback.messages}
      />
      <SiteFooter
        meta={siteMeta}
        locale={locale}
        guideHref={"guideHref" in siteMeta ? siteMeta.guideHref : undefined}
      />
    </div>
  );
}
