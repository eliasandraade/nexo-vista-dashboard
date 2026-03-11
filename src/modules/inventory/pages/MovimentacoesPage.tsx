import { useState, useMemo } from "react";
import { ArrowLeft, AlertCircle, History } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Skeleton } from "@/components/ui/skeleton";
import { MovementTable } from "../components/MovementTable";
import { inventoryService } from "../services/inventoryService";
import { Search } from "lucide-react";

export default function MovimentacoesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const { data: movements = [], isLoading, isError } = useQuery({
    queryKey: ["inventory-movements"],
    queryFn: () => inventoryService.listMovements(),
  });

  const filtered = useMemo(() => {
    return movements.filter((m) => {
      const q = search.toLowerCase();
      const matchSearch = !q || m.productDescription.toLowerCase().includes(q) || m.user.toLowerCase().includes(q);
      const matchType = type === "all" || m.type === type;
      return matchSearch && matchType;
    });
  }, [movements, search, type]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Movimentações de estoque"
        description="Consulte entradas, saídas, ajustes e transferências realizadas."
        actions={
          <Button variant="outline" onClick={() => navigate("/estoque")}>
            <ArrowLeft className="h-4 w-4 mr-1" /> Voltar
          </Button>
        }
      />

      <SectionCard>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar por produto ou usuário" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-[180px]"><SelectValue placeholder="Tipo" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="entry">Entrada</SelectItem>
                <SelectItem value="exit">Saída</SelectItem>
                <SelectItem value="adjustment">Ajuste</SelectItem>
                <SelectItem value="transfer">Transferência</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
            </div>
          ) : isError ? (
            <EmptyState icon={AlertCircle} title="Erro ao carregar movimentações" description="Tente novamente mais tarde." />
          ) : filtered.length > 0 ? (
            <>
              <MovementTable movements={filtered} />
              <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                <span>{filtered.length} movimentação(ões)</span>
                <span>Página 1 de 1</span>
              </div>
            </>
          ) : (
            <EmptyState icon={History} title="Nenhuma movimentação encontrada" description="Ajuste os filtros ou aguarde novas movimentações." />
          )}
        </div>
      </SectionCard>
    </div>
  );
}
