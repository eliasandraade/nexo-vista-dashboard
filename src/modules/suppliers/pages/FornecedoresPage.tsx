import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Truck } from "lucide-react";

export default function FornecedoresPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Fornecedores"
        description="Gerencie seus fornecedores e compras"
      />
      <SectionCard title="Lista de fornecedores">
        <EmptyState
          icon={Truck}
          title="Nenhum fornecedor cadastrado"
          description="Adicione fornecedores para gerenciar compras e reposição."
        />
      </SectionCard>
    </div>
  );
}
