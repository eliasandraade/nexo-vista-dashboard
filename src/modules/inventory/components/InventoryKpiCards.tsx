import { Package, AlertTriangle, TrendingDown, ArrowUpDown } from "lucide-react";

interface InventoryKpiCardsProps {
  totalProducts: number;
  belowMin: number;
  noTurnover: number;
  movementsToday: number;
}

export function InventoryKpiCards({ totalProducts, belowMin, noTurnover, movementsToday }: InventoryKpiCardsProps) {
  const cards = [
    { label: "Produtos cadastrados", value: totalProducts, icon: Package, color: "text-primary" },
    { label: "Abaixo do mínimo", value: belowMin, icon: AlertTriangle, color: "text-warning" },
    { label: "Sem giro", value: noTurnover, icon: TrendingDown, color: "text-destructive" },
    { label: "Movimentações hoje", value: movementsToday, icon: ArrowUpDown, color: "text-success" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div key={c.label} className="bg-card rounded-lg border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-muted-foreground">{c.label}</span>
            <c.icon className={`h-4 w-4 ${c.color}`} />
          </div>
          <p className="text-2xl font-bold text-foreground">{c.value}</p>
        </div>
      ))}
    </div>
  );
}
