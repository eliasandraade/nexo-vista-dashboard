import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Package } from "lucide-react";

export default function ProdutosPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Produtos"
        description="Gerencie seu catálogo de produtos"
      />
      <SectionCard title="Catálogo">
        <EmptyState
          icon={Package}
          title="Nenhum produto cadastrado"
          description="Adicione produtos ao seu catálogo para começar a vender."
        />
      </SectionCard>
    </div>
  );
}
