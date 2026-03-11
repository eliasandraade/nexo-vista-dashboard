import { PageHeader } from "@/components/shared/PageHeader";
import { InventoryAdjustmentForm } from "../components/InventoryAdjustmentForm";

export default function AjustesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ajuste de estoque"
        description="Registre correções manuais de saldo com rastreabilidade."
      />
      <InventoryAdjustmentForm />
    </div>
  );
}
