import Link from "next/link";
import {
  CtaSection,
  FaqAccordion,
  FeatureCard,
  FeatureGrid,
  Hero,
  SectionHeading,
  StatsBar,
} from "@/components/nuwa";
import { CityTable, CheckoutButton } from "@/components/ui";
import { faq, features } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <Hero
        badge="已有 1,247 位数字游民在用"
        title="选下一个基地城市，"
        titleAccent="用数据说话"
        description="生活成本、网速、安全、签证友好度——200+ 城市实时排名。不再靠 Reddit 帖子猜，一天搞定选址决策。"
        primaryCta={{ href: "/join", label: "加入会员 ¥699/年" }}
        secondaryCta={{ href: "#rankings", label: "先看免费排名" }}
      />

      <StatsBar
        stats={[
          { label: "覆盖城市", value: "200+" },
          { label: "数据维度", value: "12 项" },
          { label: "更新频率", value: "每日" },
          { label: "会员价格", value: "¥699/年" },
        ]}
      />

      <section id="rankings" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="nuwa-label mb-2 text-indigo-400">排名</p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">2026 年 6 月城市榜</h2>
              <p className="mt-1 text-zinc-400">前 10 名免费查看，完整榜单需会员</p>
            </div>
            <Link
              href="/join"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              解锁全部 200+ 城市 →
            </Link>
          </div>
          <CityTable />
        </div>
      </section>

      <section className="border-y border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="权益" title="会员能做什么" />
          <FeatureGrid>
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} />
            ))}
          </FeatureGrid>
        </div>
      </section>

      <FaqAccordion items={faq} />

      <section className="py-16">
        <div className="mx-auto max-w-lg px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white">一天 ¥1.9，省下数周调研时间</h2>
          <p className="mt-3 text-zinc-400">无免费档。付费即完整访问，支持支付宝/微信/信用卡。</p>
          <div className="mt-8">
            <CheckoutButton />
          </div>
        </div>
      </section>

      <CtaSection
        title="数据驱动选址，不再靠猜"
        description="200+ 城市实时排名，会员社区互助，价格变动提醒。"
        primaryCta={{ href: "/join", label: "加入会员 ¥699/年" }}
        secondaryCta={{ href: "/guide/best-digital-nomad-cities", label: "阅读选址指南" }}
      />
    </div>
  );
}
