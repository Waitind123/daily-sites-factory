import type { Metadata } from "next";
import { LiveFactoryDashboard } from "@/components/LiveFactoryDashboard";

export const metadata: Metadata = {
  title: "全站运营看板 · Daily Sites Factory",
  description: "56+ 站点 PV、UV、SEO、付费转化一览",
};

export const dynamic = "force-dynamic";

export default function FactoryDashboardPage() {
  return <LiveFactoryDashboard />;
}
