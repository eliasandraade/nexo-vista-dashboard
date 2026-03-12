import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import type { CustomerFormInput } from "../types";
import type { Customer } from "../types";

interface Props {
  data: CustomerFormInput;
  onChange: (field: keyof CustomerFormInput, value: unknown) => void;
  existing?: Customer | null;
}

function formatCurrency(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function CustomerCommercialSection({ data, onChange, existing }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="space-y-1.5">
        <Label>Limite de crédito (R$)</Label>
        <Input type="number" step="0.01" value={data.creditLimit} onChange={(e) => onChange("creditLimit", e.target.value)} placeholder="Opcional" />
      </div>
      <div className="space-y-1.5 flex items-end gap-3">
        <div className="flex items-center gap-2">
          <Switch checked={data.preferential} onCheckedChange={(v) => onChange("preferential", v)} />
          <Label className="mb-0">Cliente preferencial</Label>
        </div>
      </div>
      <div className="space-y-1.5 flex items-end gap-3">
        <div className="flex items-center gap-2">
          <Switch checked={data.emailBilling} onCheckedChange={(v) => onChange("emailBilling", v)} />
          <Label className="mb-0">Recebe cobrança por e-mail</Label>
        </div>
      </div>
      {existing && (
        <>
          <div className="space-y-1.5">
            <Label>Última compra</Label>
            <Input value={existing.lastPurchase ? new Date(existing.lastPurchase).toLocaleDateString("pt-BR") : "Nenhuma"} readOnly className="bg-muted" />
          </div>
          <div className="space-y-1.5">
            <Label>Total comprado</Label>
            <Input value={formatCurrency(existing.totalPurchased)} readOnly className="bg-muted" />
          </div>
        </>
      )}
      <div className="space-y-1.5 md:col-span-2 lg:col-span-3">
        <Label>Observações comerciais</Label>
        <Textarea value={data.commercialNotes} onChange={(e) => onChange("commercialNotes", e.target.value)} rows={3} placeholder="Informações sobre condições, prazos, histórico..." />
      </div>
    </div>
  );
}
