import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainAppLayout } from "@/app/layouts/MainAppLayout";

// Module pages
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import PdvPage from "@/modules/sales/pages/PdvPage";
import OrcamentosPage from "@/modules/sales/pages/OrcamentosPage";
import ProdutosPage from "@/modules/products/pages/ProdutosPage";
import EstoquePage from "@/modules/inventory/pages/EstoquePage";
import ClientesPage from "@/modules/customers/pages/ClientesPage";
import FornecedoresPage from "@/modules/suppliers/pages/FornecedoresPage";
import UsuariosPage from "@/modules/users/pages/UsuariosPage";
import ComissoesPage from "@/modules/commissions/pages/ComissoesPage";
import CaixaPage from "@/modules/cash/pages/CaixaPage";
import RelatoriosPage from "@/modules/reports/pages/RelatoriosPage";
import InsightsPage from "@/modules/insights/pages/InsightsPage";
import AuditoriaPage from "@/modules/audit/pages/AuditoriaPage";
import ConfiguracoesPage from "@/modules/settings/pages/ConfiguracoesPage";
import NotFoundPage from "@/pages/NotFoundPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Main app routes inside layout */}
        <Route element={<MainAppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/pdv" element={<PdvPage />} />
          <Route path="/orcamentos" element={<OrcamentosPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/estoque" element={<EstoquePage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/fornecedores" element={<FornecedoresPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/comissoes" element={<ComissoesPage />} />
          <Route path="/caixa" element={<CaixaPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/auditoria" element={<AuditoriaPage />} />
          <Route path="/configuracoes" element={<ConfiguracoesPage />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
