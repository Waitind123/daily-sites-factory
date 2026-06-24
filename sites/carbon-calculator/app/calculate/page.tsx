import { CarbonCalculator } from "@/components/CarbonCalculator";

export default function CalculatePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">碳足迹计算器</h1>
        <p className="mt-2 text-stone-500 text-sm sm:text-base">
          输入通勤参数，对比全勤、混合、完全远程三种场景的年度 CO₂e 排放。
        </p>
      </div>
      <CarbonCalculator />
    </div>
  );
}
