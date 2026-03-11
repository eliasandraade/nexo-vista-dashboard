import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ArrowRightLeft, Warehouse, AlertCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Skeleton } from "@/components/ui/skeleton";
import { InventoryKpiCards } from "../components/InventoryKpiCards";
import { InventoryFilters } from "../components/InventoryFilters";
import { InventoryTable } from "../components/InventoryTable";
import { InventoryAlertCard } from "../components/InventoryAlertCard";
import { inventoryService } from "../services/inventoryService";

export default function EstoquePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [unit, setUnit] = useState("all");

  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ["inventory"],
    queryFn: () => inventoryService.list(),
  });

  const { data: alerts = [] } = useQuery({
    queryKey: ["inventory-alerts"],
    queryFn: () => inventoryService.listAlerts(),
  });

  const filtered = useMemo(() => {
    return items.filter((i) => {
      const q = search.toLowerCase();
      const matchSearch = !q || i.code.toLowerCase().includes(q) || i.description.toLowerCase().includes(q);
      const matchCat = category === "all" || i.category === category;
      const matchStatus = status === "all" || i.status === status;
      const matchUnit = unit === "all" || i.unit === unit;
      return matchSearch && matchCat && matchStatus && matchUnit;
    });
  }, [items, search, category, status, unit]);

  const belowMin = items.filter((i) => i.status === "low" || i.status === "zero").length;
  const zeroStock = items.filter((i) => i.status === "zero").length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Estoque"
        description="Acompanhe saldos, alertas e movimentações do estoque."
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate("/estoque/transferencias")}>
              <ArrowRightLeft className="h-4 w-4 mr-1" /> Nova transferência
            </Button>
            <Button onClick={() => navigate("/estoque/ajustes")}>
              <Plus className="h-4 w-4 mr-1" /> Novo ajuste
            </Button>
          </div>
        }
      />

      <InventoryKpiCards
        totalProducts={items.length}
        belowMin={belowMin}
        noTurnover={zeroStock}
        movementsToday={3}
      />

      {alerts.length > 0 && (
        <SectionCard title="Alertas operacionais">
          <div className="space-y-3">
            {alerts.slice(0, 4).map((a) => (
              <InventoryAlertCard key={a.id} alert={a} />
            ))}
          </div>
        </SectionCard>
      )}

      <SectionCard>
        <div className="space-y-4">
          <InventoryFilters
            search={search} onSearchChange={setSearch}
            category={category} onCategoryChange={setCategory}
            status={status} onStatusChange={setStatus}
            unit={unit} onUnitChange={setUnit}
          />

          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
          ) : isError ? (
            <EmptyState
              icon={AlertCircle}
              title="Erro ao carregar estoque"
              description="Não foi possível carregar os dados de estoque. Tente novamente."
            />
          ) : filtered.length > 0 ? (
            <>
              <InventoryTable items={filtered} />
              <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                <span>{filtered.length} item(ns) encontrado(s)</span>
                <span>Página 1 de 1</span>
              </div>
            </>
          ) : (
            <EmptyState
              icon={Warehouse}
              title="Nenhum item encontrado"
              description="Tente ajustar os filtros ou cadastre produtos para controlar o estoque."
            />
          )}
        </div>
      </SectionCard>
    </div>
  );
}
