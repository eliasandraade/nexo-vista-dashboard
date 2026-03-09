import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { FileText } from "lucide-react";

export default function OrcamentosPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Orçamentos"
        description="Crie e gerencie orçamentos para seus clientes"
      />
      <SectionCard title="Orçamentos recentes">
        <EmptyState
          icon={FileText}
          title="Nenhum orçamento encontrado"
          description="Crie seu primeiro orçamento para começar."
        />
      </SectionCard>
    </div>
  );
}
