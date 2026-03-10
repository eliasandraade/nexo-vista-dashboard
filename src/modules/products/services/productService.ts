import type { Product } from "../types";
import { mockProducts } from "../data/mockProducts";

/**
 * Product service – placeholder for future .NET API integration.
 * Currently returns mock data synchronously wrapped in promises.
 */
export const productService = {
  async list(): Promise<Product[]> {
    return mockProducts;
  },

  async getById(id: string): Promise<Product | undefined> {
    return mockProducts.find((p) => p.id === id);
  },

  async create(data: Omit<Product, "id" | "createdAt" | "updatedAt" | "createdBy">): Promise<Product> {
    const now = new Date().toISOString();
    return { ...data, id: crypto.randomUUID(), createdBy: "Admin", createdAt: now, updatedAt: now } as Product;
  },

  async update(id: string, data: Partial<Product>): Promise<Product> {
    const existing = mockProducts.find((p) => p.id === id);
    if (!existing) throw new Error("Product not found");
    return { ...existing, ...data, updatedAt: new Date().toISOString() };
  },
};
