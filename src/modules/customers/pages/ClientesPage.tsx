import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionCard } from "@/components/shared/SectionCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus, Users } from "lucide-react";
import { customerService } from "../services/customerService";
import { CustomerFilters } from "../components/CustomerFilters";
import { CustomerTable } from "../components/CustomerTable";

export default function ClientesPage() {
  const navigate = useNavigate();
  const { data: customers, isLoading, isError } = useQuery({
    queryKey: ["customers"],
    queryFn: customerService.list,
  });

  const [search, setSearch] = useState("");
  const [personType, setPersonType] = useState("all");
  const [status, setStatus] = useState("all");
  const [city, setCity] = useState("all");

  const cities = useMemo(() => {
    if (!customers) return [];
    return [...new Set(customers.map((c) => c.city))].sort();
  }, [customers]);

  const filtered = useMemo(() => {
    if (!customers) return [];
    return customers.filter((c) => {
      const q = search.toLowerCase();
      const matchSearch = !q || c.name.toLowerCase().includes(q) || c.document.includes(q) || c.phone.includes(q) || c.email.toLowerCase().includes(q);
      const matchType = personType === "all" || c.personType === personType;
      const matchStatus = status === "all" || c.status === status;
      const matchCity = city === "all" || c.city === city;
      return matchSearch && matchType && matchStatus && matchCity;
    });
  }, [customers, search, personType, status, city]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Clientes"
        description="Gerencie os cadastros e informações comerciais dos clientes."
        actions={
          <Button onClick={() => navigate("/clientes/novo")}>
            <Plus className="h-4 w-4 mr-2" /> Novo cliente
          </Button>
        }
      />

      <SectionCard>
        <div className="space-y-4">
          <CustomerFilters
            search={search} onSearchChange={setSearch}
            personType={personType} onPersonTypeChange={setPersonType}
            status={status} onStatusChange={setStatus}
            city={city} onCityChange={setCity}
            cities={cities}
          />

          {isLoading && (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => <Skeleton key={i} className="h-12 w-full" />)}
            </div>
          )}

          {isError && (
            <EmptyState icon={Users} title="Erro ao carregar clientes" description="Tente novamente mais tarde." />
          )}

          {!isLoading && !isError && filtered.length === 0 && (
            <EmptyState
              icon={Users}
              title="Nenhum cliente encontrado"
              description="Adicione clientes para acompanhar vendas e relacionamento."
              action={
                <Button variant="outline" onClick={() => navigate("/clientes/novo")}>
                  <Plus className="h-4 w-4 mr-2" /> Cadastrar cliente
                </Button>
              }
            />
          )}

          {!isLoading && !isError && filtered.length > 0 && (
            <>
              <p className="text-xs text-muted-foreground">{filtered.length} cliente(s) encontrado(s)</p>
              <CustomerTable customers={filtered} />
            </>
          )}
        </div>
      </SectionCard>
    </div>
  );
}
