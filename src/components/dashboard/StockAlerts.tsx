import { AlertTriangle } from "lucide-react";

const alerts = [
  { product: "Camiseta Branca M", stock: 3, min: 10 },
  { product: "Meia Esportiva", stock: 5, min: 15 },
  { product: "Boné Preto", stock: 2, min: 8 },
  { product: "Bermuda Cargo G", stock: 1, min: 5 },
];

export function StockAlerts() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-sm animate-fade-in" style={{ animationDelay: "600ms" }}>
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="h-4 w-4 text-warning" />
        <h3 className="text-sm font-semibold text-foreground">Alertas de estoque</h3>
      </div>
      <div className="space-y-3">
        {alerts.map((a) => {
          const pct = Math.round((a.stock / a.min) * 100);
          return (
            <div key={a.product}>
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-foreground truncate">{a.product}</p>
                <span className="text-xs font-semibold text-destructive whitespace-nowrap">
                  {a.stock}/{a.min}
                </span>
              </div>
              <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${pct}%`,
                    backgroundColor:
                      pct <= 25
                        ? "hsl(0, 84%, 60%)"
                        : pct <= 50
                        ? "hsl(38, 92%, 50%)"
                        : "hsl(160, 84%, 39%)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
