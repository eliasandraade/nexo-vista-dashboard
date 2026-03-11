import type {
  InventoryItem,
  InventoryMovement,
  InventoryAlert,
  InventoryAdjustmentInput,
  InventoryTransferInput,
  InventoryStatus,
  ProductOption,
} from "../types";
import { mockInventoryItems, mockMovements, mockAlerts, mockStores } from "../data/mockInventory";

// In-memory state for simulation
const items = [...mockInventoryItems];
const movements = [...mockMovements];

function recalcStatus(item: InventoryItem): InventoryStatus {
  if (item.currentStock <= 0) return "zero";
  if (item.currentStock < item.minStock) return "low";
  if (item.currentStock > item.minStock * 5) return "high";
  return "normal";
}

const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

export const inventoryService = {
  async list(): Promise<InventoryItem[]> {
    await delay();
    return [...items];
  },

  async listMovements(): Promise<InventoryMovement[]> {
    await delay();
    return [...movements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  },

  async listAlerts(): Promise<InventoryAlert[]> {
    await delay(200);
    return [...mockAlerts];
  },

  async listProductsForSelection(): Promise<ProductOption[]> {
    await delay(200);
    return items.map((i) => ({ id: i.productId, label: `${i.code} — ${i.description}` }));
  },

  async listStores(): Promise<string[]> {
    await delay(100);
    return [...mockStores];
  },

  async createAdjustment(input: InventoryAdjustmentInput): Promise<void> {
    await delay(600);
    const item = items.find((i) => i.productId === input.productId);
    if (item) {
      const delta = input.type === "entry" ? input.quantity : -input.quantity;
      item.currentStock = Math.max(0, item.currentStock + delta);
      item.status = recalcStatus(item);
      item.lastMovement = new Date().toISOString();
    }
    const product = item ?? items[0];
    movements.unshift({
      id: `mov-${Date.now()}`,
      date: new Date().toISOString(),
      productId: input.productId,
      productDescription: product?.description ?? "Produto",
      type: "adjustment",
      quantity: input.type === "entry" ? input.quantity : -input.quantity,
      origin: input.store,
      destination: "—",
      user: "Usuário atual",
      reason: input.reason,
    });
  },

  async createTransfer(input: InventoryTransferInput): Promise<void> {
    await delay(600);
    const item = items.find((i) => i.productId === input.productId);
    if (item) {
      item.lastMovement = new Date().toISOString();
    }
    const product = item ?? items[0];
    movements.unshift({
      id: `mov-${Date.now()}`,
      date: new Date().toISOString(),
      productId: input.productId,
      productDescription: product?.description ?? "Produto",
      type: "transfer",
      quantity: input.quantity,
      origin: input.originStore,
      destination: input.destinationStore,
      user: "Usuário atual",
      reason: input.reason,
    });
  },
};
