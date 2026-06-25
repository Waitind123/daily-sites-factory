import Link from "next/link";
import { FeatureGrid, SpacePreviewTable } from "@/components/ui";
import { spaces, testimonials } from "@/lib/data";
import { HomeHero } from "@/components/HomeHero";

export default function HomePage() {
  const featured = spaces.filter((s) => s.featured);

  return (
    <div>
      <HomeHero />

<section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl font-bold mb-6 text-center">精选空间预览</h2>
          <SpacePreviewTable />
          <p className="text-center text-sm text-muted mt-4">
            完整 WiFi 数据、内部贴士和预订方式需{" "}
            <Link href="/spaces" className="text-brand-500 hover:underline">
              查看详情
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步找到靠谱工位</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "选城市", desc: "40+ 城市筛选，从清迈到柏林，出差前提前规划" },
              { step: "2", title: "看详情", desc: "日票价格、WiFi 实测、视频会议友好度，一目了然" },
              { step: "3", title: "直接订", desc: "内部贴士告诉你最佳时段和隐藏福利，官网一键预订" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-100 text-brand-500 font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-muted mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {featured.map((space) => (
              <div key={space.id} className="rounded-xl border border-border p-5 bg-background">
                <span className="text-3xl">{space.logo}</span>
                <h3 className="font-semibold mt-2">{space.name}</h3>
                <p className="text-sm text-muted">{space.city}, {space.country}</p>
                <p className="text-sm text-brand-500 font-medium mt-2">{space.dayPassPrice} · {space.wifiMbps} Mbps</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-border p-5 bg-surface">
                <p className="text-foreground text-sm">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">会员功能</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Coworker.com 没实时库存，酒店会议室太贵</h2>
          <p className="mt-4 text-brand-100 text-lg">
            我们只要 $9.9/月。日票价格 + WiFi 实测 + 内部贴士，帮你 10 分钟找到靠谱工位。第一天收费，因为数据验证有成本。
          </p>
          <Link
            href="/join"
            className="inline-block mt-8 bg-surface text-brand-500 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-600/10 transition-colors"
          >
            立即订阅 $9.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
