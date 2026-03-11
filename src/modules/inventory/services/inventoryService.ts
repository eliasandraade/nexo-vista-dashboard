import type {
  InventoryItem,
  InventoryMovement,
  InventoryAlert,
  InventoryAdjustmentInput,
  InventoryTransferInput,
} from "../types";
import { mockInventoryItems, mockMovements, mockAlerts } from "../data/mockInventory";

const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

export const inventoryService = {
  async list(): Promise<InventoryItem[]> {
    await delay();
    return [...mockInventoryItems];
  },

  async listMovements(): Promise<InventoryMovement[]> {
    await delay();
    return [...mockMovements];
  },

  async listAlerts(): Promise<InventoryAlert[]> {
    await delay(200);
    return [...mockAlerts];
  },

  async createAdjustment(input: InventoryAdjustmentInput): Promise<void> {
    await delay(600);
    console.log("[inventoryService] createAdjustment", input);
  },

  async createTransfer(input: InventoryTransferInput): Promise<void> {
    await delay(600);
    console.log("[inventoryService] createTransfer", input);
  },
};
