import { TimezonePlanner } from "@/components/TimezonePlanner";

export default function PlannerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">跨时区会议规划器</h1>
        <p className="mt-2 text-stone-500 text-sm sm:text-base">
          添加团队成员，自动扫描未来 7 天工作时段重叠，推荐最公平的会议时间。
        </p>
      </div>
      <TimezonePlanner />
    </div>
  );
}
