import { PriceBrowser } from "@/components/PriceBrowser";

export default function TrackPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">竞品定价追踪</h1>
        <p className="mt-2 text-stone-500">
          选择产品查看 90 天定价变动历史、竞争分析和策略建议
        </p>
      </div>
      <PriceBrowser />
    </div>
  );
}
