const products = [
  { name: "Camiseta Básica P", qty: 32, revenue: "R$ 1.280,00" },
  { name: "Calça Jeans Slim", qty: 18, revenue: "R$ 2.340,00" },
  { name: "Tênis Esportivo", qty: 15, revenue: "R$ 3.750,00" },
  { name: "Jaqueta Corta-Vento", qty: 12, revenue: "R$ 2.160,00" },
  { name: "Boné Trucker", qty: 28, revenue: "R$ 840,00" },
];

export function TopProducts() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-sm animate-fade-in" style={{ animationDelay: "375ms" }}>
      <h3 className="text-sm font-semibold text-foreground mb-4">Produtos mais vendidos</h3>
      <div className="space-y-3">
        {products.map((p, i) => (
          <div key={p.name} className="flex items-center gap-3">
            <span className="text-xs font-bold text-muted-foreground w-5 text-right">
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{p.name}</p>
              <p className="text-xs text-muted-foreground">{p.qty} un.</p>
            </div>
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">
              {p.revenue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
