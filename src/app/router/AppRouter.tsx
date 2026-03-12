import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainAppLayout } from "@/app/layouts/MainAppLayout";

// Module pages
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import PdvPage from "@/modules/sales/pages/PdvPage";
import OrcamentosPage from "@/modules/sales/pages/OrcamentosPage";
import ProdutosPage from "@/modules/products/pages/ProdutosPage";
import ProductFormPage from "@/modules/products/pages/ProductFormPage";
import EstoquePage from "@/modules/inventory/pages/EstoquePage";
import MovimentacoesPage from "@/modules/inventory/pages/MovimentacoesPage";
import AjustesPage from "@/modules/inventory/pages/AjustesPage";
import TransferenciasPage from "@/modules/inventory/pages/TransferenciasPage";
import ClientesPage from "@/modules/customers/pages/ClientesPage";
import CustomerFormPage from "@/modules/customers/pages/CustomerFormPage";
import FornecedoresPage from "@/modules/suppliers/pages/FornecedoresPage";
import UsuariosPage from "@/modules/users/pages/UsuariosPage";
import UserFormPage from "@/modules/users/pages/UserFormPage";
import PermissoesPage from "@/modules/users/pages/PermissoesPage";
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
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<MainAppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/pdv" element={<PdvPage />} />
          <Route path="/orcamentos" element={<OrcamentosPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/produtos/novo" element={<ProductFormPage />} />
          <Route path="/produtos/:id" element={<ProductFormPage />} />
          <Route path="/estoque" element={<EstoquePage />} />
          <Route path="/estoque/movimentacoes" element={<MovimentacoesPage />} />
          <Route path="/estoque/ajustes" element={<AjustesPage />} />
          <Route path="/estoque/transferencias" element={<TransferenciasPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/clientes/novo" element={<CustomerFormPage />} />
          <Route path="/clientes/:id" element={<CustomerFormPage />} />
          <Route path="/fornecedores" element={<FornecedoresPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/usuarios/novo" element={<UserFormPage />} />
          <Route path="/usuarios/:id" element={<UserFormPage />} />
          <Route path="/usuarios/permissoes" element={<PermissoesPage />} />
          <Route path="/comissoes" element={<ComissoesPage />} />
          <Route path="/caixa" element={<CaixaPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/auditoria" element={<AuditoriaPage />} />
          <Route path="/configuracoes" element={<ConfiguracoesPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
