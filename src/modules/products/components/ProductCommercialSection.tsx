import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Product } from "../types";

interface Props {
  data: Partial<Product>;
  onChange: (field: string, value: unknown) => void;
}

export function ProductCommercialSection({ data, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="space-y-1.5">
        <Label>Custo (R$)</Label>
        <Input type="number" step="0.01" value={data.cost ?? ""} onChange={(e) => onChange("cost", parseFloat(e.target.value) || 0)} />
      </div>
      <div className="space-y-1.5">
        <Label>Preço de venda (R$)</Label>
        <Input type="number" step="0.01" value={data.price ?? ""} onChange={(e) => onChange("price", parseFloat(e.target.value) || 0)} />
      </div>
      <div className="space-y-1.5">
        <Label>Preço promocional (R$)</Label>
        <Input type="number" step="0.01" value={data.promoPrice ?? ""} onChange={(e) => onChange("promoPrice", parseFloat(e.target.value) || null)} placeholder="Opcional" />
      </div>
      <div className="space-y-1.5">
        <Label>Comissão padrão (%)</Label>
        <Input type="number" step="0.5" value={data.defaultCommission ?? ""} onChange={(e) => onChange("defaultCommission", parseFloat(e.target.value) || 0)} />
      </div>
      <div className="space-y-1.5 md:col-span-2">
        <Label>Observações comerciais</Label>
        <Textarea value={data.commercialNotes ?? ""} onChange={(e) => onChange("commercialNotes", e.target.value)} rows={3} placeholder="Notas sobre condições comerciais, margens, promoções..." />
      </div>
    </div>
  );
}
