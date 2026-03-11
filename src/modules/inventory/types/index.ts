export type InventoryStatus = "normal" | "low" | "zero" | "high";

export type InventoryMovementType = "entry" | "exit" | "adjustment" | "transfer";

export const inventoryStatusLabels: Record<InventoryStatus, string> = {
  normal: "Normal",
  low: "Baixo",
  zero: "Zerado",
  high: "Alto",
};

export const movementTypeLabels: Record<InventoryMovementType, string> = {
  entry: "Entrada",
  exit: "Saída",
  adjustment: "Ajuste",
  transfer: "Transferência",
};

export interface InventoryItem {
  id: string;
  productId: string;
  code: string;
  description: string;
  category: string;
  unit: string;
  currentStock: number;
  minStock: number;
  status: InventoryStatus;
  lastMovement: string;
}

export interface InventoryMovement {
  id: string;
  date: string;
  productId: string;
  productDescription: string;
  type: InventoryMovementType;
  quantity: number;
  origin: string;
  destination: string;
  user: string;
  reason: string;
}

export type AlertSeverity = "critical" | "warning" | "info";

export interface InventoryAlert {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
  suggestedAction: string;
  productId?: string;
}

export interface InventoryAdjustmentInput {
  productId: string;
  store: string;
  type: "entry" | "exit";
  quantity: number;
  reason: string;
  notes: string;
}

export interface InventoryTransferInput {
  productId: string;
  originStore: string;
  destinationStore: string;
  quantity: number;
  reason: string;
  notes: string;
}

export interface ProductOption {
  id: string;
  label: string;
}
