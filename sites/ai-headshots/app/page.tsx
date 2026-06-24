import {
  CtaSection,
  FaqAccordion,
  FeatureCard,
  FeatureGrid,
  Hero,
  SectionHeading,
} from "@/components/nuwa";
import { StyleGrid, UploadDemo } from "@/components/ui";
import { faq, features, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <Hero
        badge="已有 3,521 位职场人换过头像"
        title="自拍变"
        titleAccent="专业证件照"
        rotatingItems={["LinkedIn 第一印象", "30 秒 AI 生成", "四种专业风格"]}
        description="不用去照相馆排队、不用花 ¥299 拍一组。上传一张自拍，AI 生成 20+ 张商务、休闲、创意风格头像，LinkedIn、简历、证件照直接用。"
        primaryCta={{ href: "/join", label: "加入会员 · $9.9/月" }}
        secondaryCta={{ href: "#how", label: "看看怎么用" }}
        footnote="免费体验 5 次 · 之后 $9.9/月"
      >
        <UploadDemo />
      </Hero>

      <section id="styles" className="border-y border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            label="风格"
            title="四种专业风格"
            description="会员解锁全部风格 + 自定义背景"
          />
          <StyleGrid />
        </div>
      </section>

      <section id="how" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="三步搞定" />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", title: "上传自拍", desc: "正面照，光线好，露全脸" },
              { step: "02", title: "选风格", desc: "商务 / 休闲 / 创意 / 学术" },
              { step: "03", title: "下载使用", desc: "高清 PNG，多种尺寸" },
            ].map((s) => (
              <div key={s.step} className="card-glow card-glow-hover p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 font-mono text-sm text-indigo-400">
                  {s.step}
                </div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading title="用户怎么说" />
          <div className="grid gap-4 sm:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card-glow p-5">
                <p className="text-sm text-zinc-300">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-3 text-sm">
                  <span className="font-medium text-white">{t.name}</span>
                  <span className="text-zinc-500"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading label="权益" title="会员权益" />
          <FeatureGrid>
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.desc} />
            ))}
          </FeatureGrid>
        </div>
      </section>

      <FaqAccordion items={faq} />

      <CtaSection
        title="照相馆一次 ¥299，我们只要 $9.9/月"
        description="无限生成、全部风格、高清下载。第一天收费，因为 GPU 算力不免费。"
        primaryCta={{ href: "/join", label: "立即加入 $9.9/月" }}
        secondaryCta={{ href: "/studio", label: "免费体验 5 次" }}
      />
    </div>
  );
}
