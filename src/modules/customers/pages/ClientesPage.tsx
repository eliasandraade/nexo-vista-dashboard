import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Users } from "lucide-react";

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Clientes"
        description="Gerencie sua base de clientes"
      />
      <SectionCard title="Lista de clientes">
        <EmptyState
          icon={Users}
          title="Nenhum cliente cadastrado"
          description="Adicione clientes para acompanhar vendas e relacionamento."
        />
      </SectionCard>
    </div>
  );
}
