import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Settings } from "lucide-react";

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Configurações"
        description="Configurações gerais do sistema"
      />
      <SectionCard title="Preferências">
        <EmptyState
          icon={Settings}
          title="Configurações em breve"
          description="As configurações do sistema estarão disponíveis em uma próxima atualização."
        />
      </SectionCard>
    </div>
  );
}
