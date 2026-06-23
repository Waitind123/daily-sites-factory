import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AI 证件照 — 30 秒生成专业头像",
  description: "上传自拍，AI 生成商务、休闲、创意多种风格专业证件照。年费会员 ¥699，无限生成。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
              <span className="text-2xl">📸</span>
              <span>AI 证件照</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-6 text-sm">
              <Link href="/#styles" className="text-stone-600 hover:text-stone-900 hidden sm:inline">
                风格
              </Link>
              <Link href="/#how" className="text-stone-600 hover:text-stone-900 hidden sm:inline">
                怎么用
              </Link>
              <Link
                href="/join"
                className="bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors font-medium"
              >
                加入会员 ¥699/年
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-stone-200 bg-white mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-stone-500">
            <p>© {new Date().getFullYear()} AI 证件照 · 照片 24h 自动删除</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
