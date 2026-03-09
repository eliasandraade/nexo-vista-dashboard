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
  type LucideIcon,
} from "lucide-react";

export interface AppRoute {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const appRoutes: AppRoute[] = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/pdv", label: "PDV", icon: ShoppingCart },
  { path: "/orcamentos", label: "Orçamentos", icon: FileText },
  { path: "/produtos", label: "Produtos", icon: Package },
  { path: "/estoque", label: "Estoque", icon: Warehouse },
  { path: "/clientes", label: "Clientes", icon: Users },
  { path: "/fornecedores", label: "Fornecedores", icon: Truck },
  { path: "/usuarios", label: "Usuários", icon: UserCog },
  { path: "/comissoes", label: "Comissões", icon: Percent },
  { path: "/caixa", label: "Caixa", icon: Wallet },
  { path: "/relatorios", label: "Relatórios", icon: BarChart3 },
  { path: "/insights", label: "Insights", icon: Lightbulb },
  { path: "/auditoria", label: "Auditoria", icon: Shield },
  { path: "/configuracoes", label: "Configurações", icon: Settings },
];
