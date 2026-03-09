import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Percent } from "lucide-react";

export default function ComissoesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Comissões"
        description="Acompanhe comissões de vendedores"
      />
      <SectionCard title="Comissões do período">
        <EmptyState
          icon={Percent}
          title="Nenhuma comissão registrada"
          description="Comissões serão calculadas automaticamente com base nas vendas."
        />
      </SectionCard>
    </div>
  );
}
