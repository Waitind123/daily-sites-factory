import type { Metadata } from "next";
import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";
import { FixedContactBar } from "@/components/FixedContactBar";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { FeedbackSection } from "@/components/FeedbackSection";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { loadFeedback } from "@/lib/feedback-store";
import { getLocale } from "@/lib/locale";
import { buildLocaleMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import { siteMeta } from "@/lib/site-meta";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildLocaleMetadata(locale);
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const feedback = await loadFeedback(siteMeta.id);

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <head>
        <JsonLd data={softwareApplicationJsonLd(locale)} />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground pb-11`}>
        <AnalyticsBeacon siteId={siteMeta.id} />
        <SiteHeader meta={siteMeta} locale={locale} />
        <main>{children}</main>
        <FeedbackSection
          siteId={siteMeta.id}
          locale={locale}
          initialMessages={feedback.messages}
        />
        <SiteFooter meta={siteMeta} locale={locale} guideHref={siteMeta.guideHref} />
              <FixedContactBar locale={locale} />
      </body>
    </html>
  );
}
