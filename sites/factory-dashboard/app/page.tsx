import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dashboard } from "@/components/Dashboard";
import { loadRollup } from "@/lib/analytics-store";
import { loadSitesFromState } from "@/lib/sites-registry";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Factory Dashboard — 全站数据看板",
  description: "daily-sites-factory 所有站点的 PV、UV、SEO 与付费转化",
};

export default async function HomePage() {
  const [sites, rollup] = await Promise.all([Promise.resolve(loadSitesFromState()), loadRollup()]);

  return (
    <div className={`${inter.variable} font-sans min-h-screen bg-[#0a0a0f] text-zinc-100`}>
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-400">Daily Sites Factory</p>
            <h1 className="text-2xl font-bold mt-1">全站运营看板</h1>
          </div>
          <div className="text-right text-xs text-zinc-500">
            <p>PV · UV · SEO · 转化漏斗</p>
            <p className="mt-1">更新 {rollup.updatedAt ? new Date(rollup.updatedAt).toLocaleString("zh-CN") : "暂无数据"}</p>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Dashboard sites={sites} rollup={rollup} />
      </main>
    </div>
  );
}
