import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildSiteMetadata(siteConfig, {
  title: "LinkedIn 专业头像怎么拍？AI 证件照完整指南 2026",
  description:
    "如何用 AI 生成 LinkedIn 专业头像：光线、角度、着装建议，对比照相馆 vs AI 证件照工具，免费体验 5 次。",
  alternates: {
    canonical: `${siteConfig.url}/guide/linkedin-headshot`,
  },
});

export default function LinkedInHeadshotGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 prose prose-stone">
      <Link href="/" className="text-sm text-brand-600 no-underline">
        ← 返回首页
      </Link>
      <h1 className="text-3xl font-bold mt-4 not-prose">
        LinkedIn 专业头像怎么拍？AI 证件照完整指南
      </h1>
      <p className="lead text-stone-600 not-prose">
        78% 的招聘者会先看 LinkedIn 头像。一张专业头像能让 Profile 浏览量提升 3 倍以上。
        本文教你用 AI 在 30 秒内生成专业证件照，无需去照相馆。
      </p>

      <h2>为什么 LinkedIn 头像很重要？</h2>
      <p>
        专业头像建立信任感。模糊自拍、旅游照、或裁剪过的合影都会降低第一印象分。
        理想头像：正面、光线均匀、背景简洁、着装得体。
      </p>

      <h2>传统照相馆 vs AI 证件照</h2>
      <ul>
        <li>照相馆：¥199–399/次，预约排队 1–2 小时，只给 4–8 张</li>
        <li>AI 证件照：$9.9/月无限生成，30 秒出图，每次 20+ 张可选</li>
      </ul>

      <h2>AI 生成专业头像的步骤</h2>
      <ol>
        <li>准备一张正面自拍，光线充足，露全脸</li>
        <li>上传至 AI 证件照工作室</li>
        <li>选择商务 / 休闲 / 创意 / 学术风格</li>
        <li>下载 PNG，直接用于 LinkedIn、简历</li>
      </ol>

      <h2>免费体验 5 次</h2>
      <p>
        我们提供 5 次免费 AI 头像生成，无需信用卡。体验满意后再订阅 $9.9/月无限使用。
      </p>

      <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/studio"
          className="rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold text-center hover:bg-brand-700"
        >
          免费体验 AI 证件照
        </Link>
        <Link
          href="/join"
          className="rounded-xl border border-stone-300 px-6 py-3 font-semibold text-center hover:bg-stone-50"
        >
          查看订阅方案
        </Link>
      </div>
    </article>
  );
}
