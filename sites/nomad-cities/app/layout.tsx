import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "游民城市榜 — 数字游民选城数据",
  description:
    "全球 200+ 城市的生活成本、网速、安全、签证友好度实时排名。付费会员解锁完整数据与社区。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold text-stone-900">
              <span className="text-xl">🌍</span>
              <span>游民城市榜</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/#rankings" className="text-stone-600 hover:text-stone-900 hidden sm:inline">
                排名
              </Link>
              <Link
                href="/join"
                className="rounded-full bg-brand-600 px-4 py-1.5 font-medium text-white hover:bg-brand-700 transition-colors"
              >
                加入会员 ¥699/年
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-stone-200 mt-16 py-8 text-center text-sm text-stone-500">
          <p>游民城市榜 · 数据每日更新 · 一人维护，快速迭代</p>
        </footer>
      </body>
    </html>
  );
}
