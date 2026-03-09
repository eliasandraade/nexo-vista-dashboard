import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Shield } from "lucide-react";

export default function AuditoriaPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Auditoria"
        description="Registro de ações e alterações no sistema"
      />
      <SectionCard title="Log de auditoria">
        <EmptyState
          icon={Shield}
          title="Nenhum registro de auditoria"
          description="Ações dos usuários serão registradas aqui automaticamente."
        />
      </SectionCard>
    </div>
  );
}
