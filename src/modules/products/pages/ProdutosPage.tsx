import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ProductFilters } from "../components/ProductFilters";
import { ProductTable } from "../components/ProductTable";
import { mockProducts } from "../data/mockProducts";

export default function ProdutosPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [unit, setUnit] = useState("all");

  const filtered = useMemo(() => {
    return mockProducts.filter((p) => {
      const q = search.toLowerCase();
      const matchesSearch = !q || p.code.toLowerCase().includes(q) || p.barcode.includes(q) || p.description.toLowerCase().includes(q);
      const matchesCategory = category === "all" || p.category === category;
      const matchesStatus = status === "all" || p.status === status;
      const matchesUnit = unit === "all" || p.unit === unit;
      return matchesSearch && matchesCategory && matchesStatus && matchesUnit;
    });
  }, [search, category, status, unit]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Produtos"
        description="Gerencie o cadastro e as informações comerciais dos produtos."
        actions={
          <Button onClick={() => navigate("/produtos/novo")}>
            <Plus className="h-4 w-4 mr-1" /> Novo produto
          </Button>
        }
      />

      <SectionCard>
        <div className="space-y-4">
          <ProductFilters
            search={search} onSearchChange={setSearch}
            category={category} onCategoryChange={setCategory}
            status={status} onStatusChange={setStatus}
            unit={unit} onUnitChange={setUnit}
          />
          {filtered.length > 0 ? (
            <>
              <ProductTable products={filtered} />
              <div className="flex items-center justify-between pt-2 text-xs text-muted-foreground">
                <span>{filtered.length} produto(s) encontrado(s)</span>
                <span>Página 1 de 1</span>
              </div>
            </>
          ) : (
            <EmptyState
              icon={Package}
              title="Nenhum produto encontrado"
              description="Tente ajustar os filtros ou adicione um novo produto."
            />
          )}
        </div>
      </SectionCard>
    </div>
  );
}
