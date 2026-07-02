import type { Metadata } from "next";
import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";
import { ReferralCapture } from "@/components/ReferralCapture";
import { PromoCrossSell } from "@/components/PromoCrossSell";
import { FixedContactBar } from "@/components/FixedContactBar";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { FeedbackSection } from "@/components/FeedbackSection";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { loadFeedback } from "@/lib/feedback-store";
import { getLocale } from "@/lib/locale";
import { metadata as siteMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import { siteMeta } from "@/lib/site-meta";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const feedback = await loadFeedback(siteMeta.id);

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <head>
        <JsonLd data={softwareApplicationJsonLd()} />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground pb-11`}>
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
              <FixedContactBar locale={locale} />
      </body>
    </html>
  );
}
