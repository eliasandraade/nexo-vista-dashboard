import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { CustomerFormInput } from "../types";

interface Props {
  data: CustomerFormInput;
  onChange: (field: keyof CustomerFormInput, value: unknown) => void;
}

export function CustomerMainDataSection({ data, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="space-y-1.5">
        <Label>Tipo de pessoa *</Label>
        <Select value={data.personType} onValueChange={(v) => onChange("personType", v)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="fisica">Pessoa física</SelectItem>
            <SelectItem value="juridica">Pessoa jurídica</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-1.5">
        <Label>{data.personType === "juridica" ? "Razão social *" : "Nome completo *"}</Label>
        <Input value={data.name} onChange={(e) => onChange("name", e.target.value)} placeholder={data.personType === "juridica" ? "Razão social da empresa" : "Nome completo do cliente"} />
      </div>
      {data.personType === "juridica" && (
        <div className="space-y-1.5">
          <Label>Nome fantasia</Label>
          <Input value={data.tradeName} onChange={(e) => onChange("tradeName", e.target.value)} placeholder="Nome fantasia" />
        </div>
      )}
      <div className="space-y-1.5">
        <Label>{data.personType === "juridica" ? "CNPJ *" : "CPF *"}</Label>
        <Input value={data.document} onChange={(e) => onChange("document", e.target.value)} placeholder={data.personType === "juridica" ? "00.000.000/0000-00" : "000.000.000-00"} />
      </div>
      {data.personType === "juridica" && (
        <div className="space-y-1.5">
          <Label>Inscrição estadual</Label>
          <Input value={data.stateRegistration} onChange={(e) => onChange("stateRegistration", e.target.value)} placeholder="Opcional" />
        </div>
      )}
      {data.personType === "fisica" && (
        <div className="space-y-1.5">
          <Label>Data de nascimento</Label>
          <Input type="date" value={data.birthDate} onChange={(e) => onChange("birthDate", e.target.value)} />
        </div>
      )}
      <div className="space-y-1.5">
        <Label>Status *</Label>
        <Select value={data.status} onValueChange={(v) => onChange("status", v)}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Ativo</SelectItem>
            <SelectItem value="inactive">Inativo</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
