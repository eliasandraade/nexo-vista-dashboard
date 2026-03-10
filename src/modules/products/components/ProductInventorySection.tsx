import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { Product } from "../types";

interface Props {
  data: Partial<Product>;
  onChange: (field: string, value: unknown) => void;
}

export function ProductInventorySection({ data, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="space-y-1.5">
        <Label>Estoque mínimo</Label>
        <Input type="number" value={data.minStock ?? ""} onChange={(e) => onChange("minStock", parseInt(e.target.value) || 0)} />
      </div>
      <div className="space-y-1.5">
        <Label>Localização</Label>
        <Input value={data.location ?? ""} onChange={(e) => onChange("location", e.target.value)} placeholder="Ex.: Corredor A - Prateleira 2" />
      </div>
      <div className="space-y-1.5">
        <Label>Fornecedor principal</Label>
        <Input value={data.mainSupplier ?? ""} onChange={(e) => onChange("mainSupplier", e.target.value)} />
      </div>
      <div className="flex items-center gap-3 pt-5">
        <Switch checked={data.controlsLot ?? false} onCheckedChange={(v) => onChange("controlsLot", v)} />
        <Label>Controla lote</Label>
      </div>
      <div className="flex items-center gap-3 pt-5">
        <Switch checked={data.controlsExpiry ?? false} onCheckedChange={(v) => onChange("controlsExpiry", v)} />
        <Label>Controla validade</Label>
      </div>
    </div>
  );
}
