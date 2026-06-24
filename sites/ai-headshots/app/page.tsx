import Link from "next/link";
import { FeatureGrid, StyleGrid, UploadDemo } from "@/components/ui";
import { testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-4 text-sm font-medium text-brand-600">
              已有 3,521 位职场人换过头像
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              自拍变
              <span className="text-brand-600"> 专业证件照</span>
              <br />
              只要 30 秒
            </h1>
            <p className="mt-6 text-lg text-stone-500 text-balance">
              不用去照相馆排队、不用花 ¥299 拍一组。上传一张自拍，AI 生成 20+ 张商务、休闲、创意风格头像，LinkedIn、简历、证件照直接用。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/join"
                className="rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors text-center"
              >
                加入会员 · $9.9/月
              </Link>
              <a
                href="#how"
                className="rounded-xl border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 hover:bg-stone-100 transition-colors text-center"
              >
                看看怎么用
              </a>
            </div>
            <p className="mt-4 text-sm text-stone-400">免费体验 5 次 · 之后 $9.9/月</p>
          </div>
          <UploadDemo />
        </div>
      </section>

      <section id="styles" className="bg-white border-y border-stone-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">四种专业风格</h2>
          <p className="text-stone-500 text-center mb-10">会员解锁全部风格 + 自定义背景</p>
          <StyleGrid />
        </div>
      </section>

      <section id="how" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">三步搞定</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "上传自拍", desc: "正面照，光线好，露全脸" },
              { step: "2", title: "选风格", desc: "商务 / 休闲 / 创意 / 学术" },
              { step: "3", title: "下载使用", desc: "高清 PNG，多种尺寸" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold text-lg flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-stone-500 mt-1 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-stone-200 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">用户怎么说</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-xl border border-stone-200 p-5 bg-stone-50">
                <p className="text-stone-700 text-sm">&ldquo;{t.text}&rdquo;</p>
                <footer className="mt-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-stone-400"> · {t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center mb-10">会员权益</h2>
          <FeatureGrid />
        </div>
      </section>

      <section className="bg-brand-600 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">照相馆一次 ¥299，我们只要 $9.9/月</h2>
          <p className="mt-4 text-brand-100 text-lg">
            无限生成、全部风格、高清下载。第一天收费，因为 GPU 算力不免费。
          </p>
          <Link
            href="/join"
            className="inline-block mt-8 bg-white text-brand-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-brand-50 transition-colors"
          >
            立即加入 $9.9/月
          </Link>
        </div>
      </section>
    </div>
  );
}
