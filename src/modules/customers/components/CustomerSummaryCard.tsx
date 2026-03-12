import { SectionCard } from "@/components/shared/SectionCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import type { Customer } from "../types";

interface Props {
  customer: Customer | null;
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export function CustomerSummaryCard({ customer }: Props) {
  if (!customer) return null;

  const items = [
    { label: "Criado por", value: customer.createdBy },
    { label: "Criado em", value: formatDate(customer.createdAt) },
    { label: "Última atualização", value: formatDate(customer.updatedAt) },
    { label: "Tipo", value: customer.personType === "fisica" ? "Pessoa física" : "Pessoa jurídica" },
    { label: "Documento", value: customer.document },
    { label: "Cidade", value: `${customer.city}/${customer.state}` },
  ];

  return (
    <SectionCard title="Resumo">
      <div className="space-y-3">
        {items.map((i) => (
          <div key={i.label} className="flex justify-between text-sm">
            <span className="text-muted-foreground">{i.label}</span>
            <span className="font-medium text-foreground">{i.value}</span>
          </div>
        ))}
        <div className="flex justify-between text-sm items-center">
          <span className="text-muted-foreground">Status</span>
          <StatusBadge label={customer.status === "active" ? "Ativo" : "Inativo"} variant={customer.status === "active" ? "success" : "neutral"} />
        </div>
      </div>
    </SectionCard>
  );
}
