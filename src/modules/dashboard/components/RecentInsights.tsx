import { Lightbulb, TrendingUp, AlertTriangle } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    color: "text-success",
    bg: "bg-success/10",
    title: "Vendas em alta",
    desc: "Camisetas básicas tiveram aumento de 23% esta semana.",
    time: "Há 2h",
  },
  {
    icon: Lightbulb,
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Oportunidade de cross-sell",
    desc: "85% dos compradores de tênis também buscam meias esportivas.",
    time: "Há 5h",
  },
  {
    icon: AlertTriangle,
    color: "text-warning",
    bg: "bg-warning/10",
    title: "Margem reduzida",
    desc: "Calça Jeans Slim está com margem 8% abaixo do ideal.",
    time: "Há 1d",
  },
];

export function RecentInsights() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-sm animate-fade-in" style={{ animationDelay: "525ms" }}>
      <h3 className="text-sm font-semibold text-foreground mb-4">Insights recentes</h3>
      <div className="space-y-4">
        {insights.map((item) => (
          <div key={item.title} className="flex gap-3">
            <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
