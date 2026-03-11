import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { SectionCard } from "@/components/shared/SectionCard";
import { inventoryService } from "../services/inventoryService";
import { mockStores } from "../data/mockInventory";

const mockProducts = [
  { id: "p-1", label: "PRD-001 — Camiseta Branca M" },
  { id: "p-2", label: "PRD-002 — Bermuda Cargo G" },
  { id: "p-3", label: "PRD-003 — Tênis Runner Pro" },
  { id: "p-4", label: "PRD-004 — Meia Esportiva" },
  { id: "p-5", label: "PRD-005 — Boné Preto" },
];

export function InventoryTransferForm() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [productId, setProductId] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [quantity, setQuantity] = useState("");
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");

  const validate = () => {
    if (!productId || !origin || !destination || !quantity || !reason) {
      toast({ title: "Campos obrigatórios", description: "Preencha todos os campos obrigatórios.", variant: "destructive" });
      return false;
    }
    if (origin === destination) {
      toast({ title: "Lojas iguais", description: "A loja de origem e destino não podem ser a mesma.", variant: "destructive" });
      return false;
    }
    if (Number(quantity) <= 0) {
      toast({ title: "Quantidade inválida", description: "Informe uma quantidade maior que zero.", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSaving(true);
    try {
      await inventoryService.createTransfer({
        productId, originStore: origin, destinationStore: destination,
        quantity: Number(quantity), reason, notes,
      });
      toast({ title: "Transferência registrada", description: "A transferência foi salva com sucesso." });
      navigate("/estoque");
    } catch {
      toast({ title: "Erro ao salvar", description: "Não foi possível registrar a transferência.", variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/5 p-4">
        <Info className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
        <p className="text-sm text-muted-foreground">
          A transferência será registrada como saída na origem e entrada no destino.
        </p>
      </div>

      <SectionCard title="Dados da transferência">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5 md:col-span-2">
            <Label>Produto</Label>
            <Select value={productId} onValueChange={setProductId}>
              <SelectTrigger><SelectValue placeholder="Selecione o produto" /></SelectTrigger>
              <SelectContent>
                {mockProducts.map((p) => <SelectItem key={p.id} value={p.id}>{p.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Loja de origem</Label>
            <Select value={origin} onValueChange={setOrigin}>
              <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>
                {mockStores.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Loja de destino</Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>
                {mockStores.filter((s) => s !== origin).map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Quantidade</Label>
            <Input type="number" min={1} placeholder="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label>Motivo</Label>
            <Input placeholder="Ex: Rebalanceamento de estoque" value={reason} onChange={(e) => setReason(e.target.value)} />
          </div>
          <div className="space-y-1.5 md:col-span-2">
            <Label>Observações</Label>
            <Textarea placeholder="Informações adicionais (opcional)" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
          </div>
        </div>
      </SectionCard>

      <div className="flex items-center justify-end gap-3">
        <Button variant="outline" onClick={() => navigate("/estoque")} disabled={saving}>Cancelar</Button>
        <Button onClick={handleSubmit} disabled={saving}>
          {saving ? "Salvando…" : "Confirmar transferência"}
        </Button>
      </div>
    </div>
  );
}
