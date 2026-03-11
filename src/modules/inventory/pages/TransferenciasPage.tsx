import { PageHeader } from "@/components/shared/PageHeader";
import { InventoryTransferForm } from "../components/InventoryTransferForm";

export default function TransferenciasPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Transferência de estoque"
        description="Transfira produtos entre lojas com registro completo da operação."
      />
      <InventoryTransferForm />
    </div>
  );
}
