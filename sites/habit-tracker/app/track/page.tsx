import { HabitTracker } from "@/components/HabitTracker";

export default function TrackPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">今日打卡</h1>
        <p className="mt-2 text-muted text-sm">点一下就算完成，Streak 自动 +1</p>
      </div>
      <HabitTracker />
    </div>
  );
}
