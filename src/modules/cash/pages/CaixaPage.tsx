import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Wallet } from "lucide-react";

export default function CaixaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Caixa"
        description="Controle de abertura, fechamento e movimentações"
      />
      <SectionCard title="Caixa atual">
        <EmptyState
          icon={Wallet}
          title="Nenhum caixa aberto"
          description="Abra o caixa para registrar movimentações do dia."
        />
      </SectionCard>
    </div>
  );
}
