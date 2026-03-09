import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { BarChart3 } from "lucide-react";

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Relatórios"
        description="Relatórios detalhados de vendas, estoque e desempenho"
      />
      <SectionCard title="Relatórios disponíveis">
        <EmptyState
          icon={BarChart3}
          title="Nenhum relatório gerado"
          description="Selecione um tipo de relatório e período para gerar análises."
        />
      </SectionCard>
    </div>
  );
}
