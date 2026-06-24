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
              <span className="text-2xl">🌍</span>
              <span>远程工作板</span>
            </Link>
            <nav className="flex items-center gap-3 sm:gap-6 text-sm">
              <Link href="/guide/find-remote-job-china" className="text-stone-600 hover:text-stone-900 hidden sm:inline">
                指南
              </Link>
              <Link href="/jobs" className="text-stone-600 hover:text-stone-900 hidden sm:inline">
                职位
              </Link>
              <Link href="/post" className="text-stone-600 hover:text-stone-900 hidden sm:inline">
                发帖
              </Link>
              <Link
                href="/join"
                className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors font-medium"
              >
                ¥699/年
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-stone-200 bg-white mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-stone-500">
            <p>© {new Date().getFullYear()} 远程工作板 · 每日更新远程岗位</p>
            <p className="mt-2">
              <Link href="/guide/find-remote-job-china" className="text-brand-600 hover:underline">
                如何找远程工作
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
