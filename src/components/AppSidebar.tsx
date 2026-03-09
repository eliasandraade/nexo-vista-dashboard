import {
  LayoutDashboard,
  ShoppingCart,
  FileText,
  Package,
  Warehouse,
  Users,
  Truck,
  UserCog,
  Percent,
  Wallet,
  BarChart3,
  Lightbulb,
  Shield,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "PDV" },
  { icon: FileText, label: "Orçamentos" },
  { icon: Package, label: "Produtos" },
  { icon: Warehouse, label: "Estoque" },
  { icon: Users, label: "Clientes" },
  { icon: Truck, label: "Fornecedores" },
  { icon: UserCog, label: "Usuários" },
  { icon: Percent, label: "Comissões" },
  { icon: Wallet, label: "Caixa" },
  { icon: BarChart3, label: "Relatórios" },
  { icon: Lightbulb, label: "Insights" },
  { icon: Shield, label: "Auditoria" },
  { icon: Settings, label: "Configurações" },
];

export function AppSidebar() {
  return (
    <aside className="w-60 min-h-screen bg-sidebar flex flex-col shrink-0">
      {/* Brand */}
      <div className="px-5 pt-6 pb-4">
        <h1 className="text-xl font-bold tracking-tight text-sidebar-primary-foreground">
          NEXO
        </h1>
        <p className="text-[11px] text-sidebar-muted mt-0.5 leading-tight">
          Gestão inteligente para empresas reais.
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-md text-[13px] font-medium transition-colors",
              item.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-sidebar-border">
        <p className="text-[10px] text-sidebar-muted">
          Andrade Systems © 2026
        </p>
      </div>
    </aside>
  );
}
