import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { FeedbackSection } from "@/components/FeedbackSection";
import { SiteFooter, SiteHeader } from "@/components/SiteShell";
import { loadFeedback } from "@/lib/feedback-store";
import { getLocale } from "@/lib/locale";
import { metadata as siteMetadata, webApplicationJsonLd } from "@/lib/seo";
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
        <JsonLd data={webApplicationJsonLd()} />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <SiteHeader meta={siteMeta} locale={locale} />
        <main>{children}</main>
        <FeedbackSection
          siteId={siteMeta.id}
          locale={locale}
          initialMessages={feedback.messages}
        />
        <SiteFooter meta={siteMeta} locale={locale} guideHref={siteMeta.guideHref} />
      </body>
    </html>
  );
}
