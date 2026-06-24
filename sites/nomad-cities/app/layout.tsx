import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/nuwa";
import { metadata as siteMetadata, webApplicationJsonLd } from "@/lib/seo";
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
        <JsonLd data={webApplicationJsonLd()} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <SiteHeader
          logo={<span className="text-indigo-400">🌍</span>}
          siteName="游民城市榜"
          navItems={[
            { href: "/guide/best-digital-nomad-cities", label: "指南", hidden: true },
            { href: "/#rankings", label: "排名", hidden: true },
          ]}
          ctaHref="/join"
          ctaLabel="加入会员"
        />
        <main>{children}</main>
        <SiteFooter
          siteName="游民城市榜"
          tagline="数据每日更新"
          links={[
            { href: "/guide/best-digital-nomad-cities", label: "2026 最佳游民城市" },
            { href: "/sitemap.xml", label: "Sitemap" },
          ]}
        />
      </body>
    </html>
  );
}
