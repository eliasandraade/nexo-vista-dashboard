export type CustomerStatus = "active" | "inactive";
export type CustomerPersonType = "fisica" | "juridica";

export interface Customer {
  id: string;
  personType: CustomerPersonType;
  name: string;
  tradeName: string | null;
  document: string;
  stateRegistration: string | null;
  birthDate: string | null;
  status: CustomerStatus;
  email: string;
  phone: string;
  phoneSecondary: string | null;
  zipCode: string;
  address: string;
  addressNumber: string;
  addressComplement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  creditLimit: number | null;
  commercialNotes: string;
  preferential: boolean;
  emailBilling: boolean;
  lastPurchase: string | null;
  totalPurchased: number;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface CustomerFormInput {
  personType: CustomerPersonType;
  name: string;
  tradeName: string;
  document: string;
  stateRegistration: string;
  birthDate: string;
  status: CustomerStatus;
  email: string;
  phone: string;
  phoneSecondary: string;
  zipCode: string;
  address: string;
  addressNumber: string;
  addressComplement: string;
  neighborhood: string;
  city: string;
  state: string;
  creditLimit: string;
  commercialNotes: string;
  preferential: boolean;
  emailBilling: boolean;
}
