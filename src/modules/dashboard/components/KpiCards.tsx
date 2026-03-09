import { DollarSign, TrendingUp, Package, AlertTriangle } from "lucide-react";

const kpis = [
  {
    label: "Vendas do dia",
    value: "R$ 12.450,00",
    change: "+12,5%",
    changeType: "positive" as const,
    icon: DollarSign,
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    label: "Ticket médio",
    value: "R$ 87,30",
    change: "+3,2%",
    changeType: "positive" as const,
    icon: TrendingUp,
    iconBg: "bg-success/10",
    iconColor: "text-success",
  },
  {
    label: "Produtos vendidos",
    value: "143",
    change: "+8,1%",
    changeType: "positive" as const,
    icon: Package,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    label: "Itens em alerta",
    value: "7",
    change: "Estoque baixo",
    changeType: "warning" as const,
    icon: AlertTriangle,
    iconBg: "bg-warning/10",
    iconColor: "text-warning",
  },
];

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, i) => (
        <div
          key={kpi.label}
          className="bg-card rounded-lg border border-border p-5 shadow-sm animate-fade-in"
          style={{ animationDelay: `${i * 75}ms` }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {kpi.label}
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">{kpi.value}</p>
            </div>
            <div className={`w-9 h-9 rounded-lg ${kpi.iconBg} flex items-center justify-center`}>
              <kpi.icon className={`h-4 w-4 ${kpi.iconColor}`} />
            </div>
          </div>
          <p
            className={`text-xs mt-3 font-medium ${
              kpi.changeType === "positive"
                ? "text-success"
                : kpi.changeType === "warning"
                ? "text-warning"
                : "text-destructive"
            }`}
          >
            {kpi.change}
            {kpi.changeType === "positive" && (
              <span className="text-muted-foreground font-normal"> vs. ontem</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
