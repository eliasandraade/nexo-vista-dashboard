const sellers = [
  { name: "Maria Silva", sales: 42, revenue: "R$ 4.320,00", avatar: "MS" },
  { name: "Carlos Santos", sales: 38, revenue: "R$ 3.890,00", avatar: "CS" },
  { name: "Ana Oliveira", sales: 31, revenue: "R$ 3.210,00", avatar: "AO" },
  { name: "Pedro Lima", sales: 25, revenue: "R$ 2.750,00", avatar: "PL" },
];

export function SellerRanking() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-sm animate-fade-in" style={{ animationDelay: "450ms" }}>
      <h3 className="text-sm font-semibold text-foreground mb-4">Ranking de vendedores</h3>
      <div className="space-y-3">
        {sellers.map((s, i) => (
          <div key={s.name} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-primary">{s.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.sales} vendas</p>
            </div>
            <span className="text-sm font-semibold text-foreground whitespace-nowrap">
              {s.revenue}
            </span>
            {i === 0 && (
              <span className="text-[10px] font-bold bg-warning/10 text-warning px-1.5 py-0.5 rounded">
                🏆
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
