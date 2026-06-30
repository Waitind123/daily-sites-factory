import type { Metadata } from "next";
import { LiveFactoryDashboard } from "@/components/LiveFactoryDashboard";
import { getLocale } from "@/lib/locale";
import type { Locale } from "@/lib/i18n-shared";

export const metadata: Metadata = {
  title: "全站运营看板 Factory Dashboard · Daily Sites Factory",
  description: "56+ 站点 PV、UV、SEO、付费转化一览 · Traffic, conversion & revenue across all sites",
};

export const dynamic = "force-dynamic";

export default async function FactoryDashboardPage() {
  const locale = await getLocale();
  return <LiveFactoryDashboard locale={locale as Locale} />;
}
