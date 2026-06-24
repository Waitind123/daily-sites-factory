import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { metadata as siteMetadata, softwareApplicationJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <JsonLd data={softwareApplicationJsonLd()} />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
              <span className="text-2xl">📬</span>
              <span>Newsletter 工具对比</span>
            </Link>
            <nav className="flex items-center gap-3 sm:gap-6 text-sm">
              <Link
                href="/guide/newsletter-tool-comparison-indie"
                className="text-stone-600 hover:text-stone-900 hidden sm:inline"
              >
                指南
              </Link>
              <Link href="/compare" className="text-stone-600 hover:text-stone-900 hidden sm:inline">
                对比
              </Link>
              <Link
                href="/join"
                className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors font-medium"
              >
                $9.9/月
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-stone-200 bg-white mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Newsletter 工具对比 · 邮件营销工具深度评测</p>
            <p className="mt-2">
              <Link
                href="/guide/newsletter-tool-comparison-indie"
                className="text-brand-600 hover:underline"
              >
                Indie 开发者 Newsletter 工具选型指南
              </Link>
              {" · "}
              <Link href="/sitemap.xml" className="hover:underline">
                Sitemap
              </Link>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
