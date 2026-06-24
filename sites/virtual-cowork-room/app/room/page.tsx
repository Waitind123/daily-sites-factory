import { CoworkRoom } from "@/components/CoworkRoom";

export default function RoomPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">虚拟共工室</h1>
        <p className="mt-2 text-stone-500">
          选择模式和环境音，和全球远程工作者一起专注
        </p>
      </div>
      <CoworkRoom />
    </div>
  );
}
