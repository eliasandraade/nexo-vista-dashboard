import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ShoppingCart } from "lucide-react";

export default function PdvPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ponto de Venda"
        description="Registre vendas e emita comprovantes"
      />
      <SectionCard title="Nova venda">
        <EmptyState
          icon={ShoppingCart}
          title="Nenhuma venda em andamento"
          description="Adicione produtos para iniciar uma nova venda."
        />
      </SectionCard>
    </div>
  );
}
