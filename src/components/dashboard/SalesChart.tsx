import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "08h", vendas: 1200 },
  { name: "09h", vendas: 2100 },
  { name: "10h", vendas: 3400 },
  { name: "11h", vendas: 4200 },
  { name: "12h", vendas: 5800 },
  { name: "13h", vendas: 5200 },
  { name: "14h", vendas: 6100 },
  { name: "15h", vendas: 7800 },
  { name: "16h", vendas: 9200 },
  { name: "17h", vendas: 10400 },
  { name: "18h", vendas: 11800 },
  { name: "19h", vendas: 12450 },
];

export function SalesChart() {
  return (
    <div className="bg-card rounded-lg border border-border p-5 shadow-sm animate-fade-in" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Vendas do dia</h3>
          <p className="text-xs text-muted-foreground">Evolução acumulada por hora</p>
        </div>
        <div className="flex gap-1">
          {["Hoje", "7d", "30d"].map((period, i) => (
            <button
              key={period}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "hsl(215, 16%, 47%)" }}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222, 47%, 11%)",
              border: "none",
              borderRadius: 8,
              fontSize: 12,
              color: "#fff",
            }}
            formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, "Vendas"]}
          />
          <Area
            type="monotone"
            dataKey="vendas"
            stroke="hsl(217, 91%, 60%)"
            strokeWidth={2}
            fill="url(#salesGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
