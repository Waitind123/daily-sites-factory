import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/nuwa";
import { metadata as siteMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <JsonLd data={softwareApplicationJsonLd()} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <SiteHeader
          logo={<span className="text-indigo-400">📸</span>}
          siteName="AI 证件照"
          navItems={[
            { href: "/guide/linkedin-headshot", label: "指南", hidden: true },
            { href: "/studio", label: "工作室", hidden: true },
          ]}
          ctaHref="/join"
          ctaLabel="加入会员"
        />
        <main>{children}</main>
        <SiteFooter
          siteName="AI 证件照"
          tagline="照片 24h 自动删除"
          links={[
            { href: "/guide/linkedin-headshot", label: "LinkedIn 头像指南" },
            { href: "/sitemap.xml", label: "Sitemap" },
          ]}
        />
      </body>
    </html>
  );
}
