import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { getLocale } from "@/lib/locale";
import { getHomeCopy } from "@/lib/copy";

/**
 * 首页模板 — 所有可见文案必须从 copy.ts 读取，禁止硬编码英文/中文。
 * 新站复制此文件为 app/page.tsx，并按 docs/UI-DESIGN-STANDARD.md 补 productDemo 区。
 */
export default async function HomePage() {
  const locale = await getLocale();
  const c = getHomeCopy(locale);

  return (
    <div>
      <HomeHero />

      {/* Stats */}
      {"stats" in c && (
        <section className="bg-surface border-y border-border py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {c.stats.map((item: { stat: string; label: string }) => (
                <div key={item.label} className="rounded-xl border border-border p-6">
                  <p className="text-3xl font-bold text-brand-500">{item.stat}</p>
                  <p className="text-sm text-muted mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Product demo — 对标 nuwa/photoai，必须有 mock UI */}
      {"productDemo" in c && (
        <section className="py-16 border-b border-border">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-center mb-8">{c.productDemo.title}</h2>
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-lg">
              <p className="text-sm text-muted mb-4">{c.productDemo.caption}</p>
              <div className="rounded-xl bg-background border border-border p-4 font-mono text-sm text-brand-400">
                {c.productDemo.preview}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      {"closing" in c && (
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 text-center">
          <h2 className="text-2xl font-bold">{c.closing.title}</h2>
          <p className="mt-3 text-muted">{c.closing.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={c.closing.ctaPrimaryHref ?? "/join"}
              className="rounded-xl bg-brand-600 px-8 py-3.5 font-semibold text-white hover:bg-brand-700"
            >
              {c.closing.ctaPrimary}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
