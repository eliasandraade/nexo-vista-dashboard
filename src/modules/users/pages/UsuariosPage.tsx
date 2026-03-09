import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { UserCog } from "lucide-react";

export default function UsuariosPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Usuários"
        description="Gerencie usuários e permissões do sistema"
      />
      <SectionCard title="Usuários do sistema">
        <EmptyState
          icon={UserCog}
          title="Nenhum usuário adicional"
          description="Adicione usuários e defina permissões de acesso."
        />
      </SectionCard>
    </div>
  );
}
