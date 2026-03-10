export type ProductStatus = "active" | "inactive";

export type ProductUnit = "UN" | "KG" | "LT" | "CX" | "PCT" | "MT";

export const productUnitLabels: Record<ProductUnit, string> = {
  UN: "Unidade",
  KG: "Quilograma",
  LT: "Litro",
  CX: "Caixa",
  PCT: "Pacote",
  MT: "Metro",
};

export const productCategories = [
  "Bebidas",
  "Alimentos",
  "Limpeza",
  "Higiene",
  "Eletrônicos",
  "Papelaria",
  "Ferramentas",
  "Outros",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export interface ProductRuleSettings {
  alertNoSaleDays: number;
  alertNoSaleEnabled: boolean;
  alertLowStock: boolean;
  alertHighStockLowTurnover: boolean;
  highStockQuantity: number;
  analysisWindowDays: number;
  alertRecurrentRupture: boolean;
  maxDiscountPercent: number;
  maxDiscountEnabled: boolean;
}

export interface Product {
  id: string;
  code: string;
  barcode: string;
  description: string;
  category: ProductCategory;
  brand: string;
  unit: ProductUnit;
  status: ProductStatus;
  cost: number;
  price: number;
  promoPrice: number | null;
  defaultCommission: number;
  commercialNotes: string;
  minStock: number;
  location: string;
  mainSupplier: string;
  controlsLot: boolean;
  controlsExpiry: boolean;
  rules: ProductRuleSettings;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export const defaultRuleSettings: ProductRuleSettings = {
  alertNoSaleDays: 30,
  alertNoSaleEnabled: true,
  alertLowStock: true,
  alertHighStockLowTurnover: false,
  highStockQuantity: 500,
  analysisWindowDays: 60,
  alertRecurrentRupture: true,
  maxDiscountPercent: 15,
  maxDiscountEnabled: true,
};
