import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Warehouse } from "lucide-react";

export default function EstoquePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Estoque"
        description="Controle de entradas, saídas e níveis de estoque"
      />
      <SectionCard title="Visão geral do estoque">
        <EmptyState
          icon={Warehouse}
          title="Estoque vazio"
          description="Cadastre produtos e registre entradas para controlar seu estoque."
        />
      </SectionCard>
    </div>
  );
}
