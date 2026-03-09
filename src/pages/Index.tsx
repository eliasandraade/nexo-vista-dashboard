import { DashboardLayout } from "@/components/DashboardLayout";
import { KpiCards } from "@/components/dashboard/KpiCards";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { SellerRanking } from "@/components/dashboard/SellerRanking";
import { RecentInsights } from "@/components/dashboard/RecentInsights";
import { StockAlerts } from "@/components/dashboard/StockAlerts";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page title */}
        <div>
          <h2 className="text-xl font-semibold text-foreground">Dashboard</h2>
          <p className="text-sm text-muted-foreground">Visão geral do seu negócio hoje</p>
        </div>

        {/* KPI Cards */}
        <KpiCards />

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <TopProducts />
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SellerRanking />
          <RecentInsights />
          <StockAlerts />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
