import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface InventoryFiltersProps {
  search: string;
  onSearchChange: (v: string) => void;
  category: string;
  onCategoryChange: (v: string) => void;
  status: string;
  onStatusChange: (v: string) => void;
  unit: string;
  onUnitChange: (v: string) => void;
}

const categories = ["Vestuário", "Calçados", "Acessórios"];
const units = ["UN", "PCT", "KG", "CX"];

export function InventoryFilters({
  search, onSearchChange,
  category, onCategoryChange,
  status, onStatusChange,
  unit, onUnitChange,
}: InventoryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative flex-1 min-w-[240px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por código ou descrição"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <Select value={category} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[160px]"><SelectValue placeholder="Categoria" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas categorias</SelectItem>
          {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={status} onValueChange={onStatusChange}>
        <SelectTrigger className="w-[150px]"><SelectValue placeholder="Status" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="normal">Normal</SelectItem>
          <SelectItem value="low">Baixo</SelectItem>
          <SelectItem value="zero">Zerado</SelectItem>
          <SelectItem value="high">Alto</SelectItem>
        </SelectContent>
      </Select>
      <Select value={unit} onValueChange={onUnitChange}>
        <SelectTrigger className="w-[140px]"><SelectValue placeholder="Unidade" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas unidades</SelectItem>
          {units.map((u) => <SelectItem key={u} value={u}>{u}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}
