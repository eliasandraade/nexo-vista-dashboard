import type { Customer, CustomerFormInput } from "../types";
import { mockCustomers } from "../data/mockCustomers";

const customers = [...mockCustomers];
const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

export const customerService = {
  async list(): Promise<Customer[]> {
    await delay();
    return [...customers];
  },

  async getById(id: string): Promise<Customer | undefined> {
    await delay();
    return customers.find((c) => c.id === id);
  },

  async create(input: CustomerFormInput): Promise<Customer> {
    await delay(600);
    const now = new Date().toISOString();
    const customer: Customer = {
      id: `cli-${Date.now()}`,
      personType: input.personType,
      name: input.name,
      tradeName: input.personType === "juridica" ? input.tradeName || null : null,
      document: input.document,
      stateRegistration: input.stateRegistration || null,
      birthDate: input.birthDate || null,
      status: input.status,
      email: input.email,
      phone: input.phone,
      phoneSecondary: input.phoneSecondary || null,
      zipCode: input.zipCode,
      address: input.address,
      addressNumber: input.addressNumber,
      addressComplement: input.addressComplement || null,
      neighborhood: input.neighborhood,
      city: input.city,
      state: input.state,
      creditLimit: input.creditLimit ? parseFloat(input.creditLimit) : null,
      commercialNotes: input.commercialNotes,
      preferential: input.preferential,
      emailBilling: input.emailBilling,
      lastPurchase: null,
      totalPurchased: 0,
      createdBy: "Usuário atual",
      createdAt: now,
      updatedAt: now,
    };
    customers.unshift(customer);
    return customer;
  },

  async update(id: string, input: Partial<CustomerFormInput>): Promise<Customer> {
    await delay(600);
    const idx = customers.findIndex((c) => c.id === id);
    if (idx === -1) throw new Error("Cliente não encontrado");
    const current = customers[idx];
    const updated: Customer = {
      ...current,
      ...input,
      tradeName: (input.personType ?? current.personType) === "juridica" ? (input.tradeName ?? current.tradeName) : null,
      creditLimit: input.creditLimit !== undefined ? (input.creditLimit ? parseFloat(input.creditLimit) : null) : current.creditLimit,
      updatedAt: new Date().toISOString(),
    } as Customer;
    customers[idx] = updated;
    return updated;
  },
};
