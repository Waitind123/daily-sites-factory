import { EventBrowser } from "@/components/EventBrowser";

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900">活动 RSVP 管理</h1>
        <p className="mt-2 text-stone-500">
          查看参与者名单、候补队列、提醒模板和签到指南。免费体验 5 次，之后 $9.9/月。
        </p>
      </div>
      <EventBrowser />
    </div>
  );
}
