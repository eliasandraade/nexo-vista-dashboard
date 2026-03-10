import { SectionCard } from "@/components/shared/SectionCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { format } from "date-fns";
import type { Product } from "../types";

interface Props {
  data: Partial<Product>;
  isNew?: boolean;
}

export function ProductSummaryCard({ data, isNew }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <SectionCard title="Informações do registro">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Criado por</span>
            <span className="font-medium">{isNew ? "—" : data.createdBy ?? "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Criado em</span>
            <span>{data.createdAt ? format(new Date(data.createdAt), "dd/MM/yyyy HH:mm") : "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Última atualização</span>
            <span>{data.updatedAt ? format(new Date(data.updatedAt), "dd/MM/yyyy HH:mm") : "—"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Status</span>
            <StatusBadge
              label={data.status === "active" ? "Ativo" : "Inativo"}
              variant={data.status === "active" ? "success" : "neutral"}
            />
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Indicadores rápidos">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Preço de venda</span>
            <span className="font-medium">{data.price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) ?? "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Custo</span>
            <span>{data.cost?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) ?? "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Margem</span>
            <span className="font-medium">
              {data.price && data.cost
                ? `${(((data.price - data.cost) / data.price) * 100).toFixed(1)}%`
                : "—"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Estoque mínimo</span>
            <span>{data.minStock ?? "—"}</span>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Histórico e auditoria" className="lg:col-span-2">
        <p className="text-sm text-muted-foreground">Área reservada para futura integração com histórico de alterações e log de auditoria do produto.</p>
      </SectionCard>
    </div>
  );
}
