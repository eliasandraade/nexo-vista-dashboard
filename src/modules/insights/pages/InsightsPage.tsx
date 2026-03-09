import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Lightbulb } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Insights"
        description="Recomendações inteligentes baseadas nos seus dados"
      />
      <SectionCard title="Insights recentes">
        <EmptyState
          icon={Lightbulb}
          title="Nenhum insight disponível"
          description="Insights serão gerados automaticamente conforme seus dados crescem."
        />
      </SectionCard>
    </div>
  );
}
