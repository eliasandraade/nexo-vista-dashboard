import type { User, UserFormInput, PermissionMatrix, UserRole } from "../types";
import { mockUsers, mockStores, rolePresets } from "../data/mockUsers";

const users = [...mockUsers];
const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

export const userService = {
  async list(): Promise<User[]> {
    await delay();
    return [...users];
  },

  async getById(id: string): Promise<User | undefined> {
    await delay();
    return users.find((u) => u.id === id);
  },

  async create(input: UserFormInput): Promise<User> {
    await delay(600);
    const user: User = {
      id: `usr-${Date.now()}`,
      name: input.name,
      email: input.email,
      login: input.login,
      phone: input.phone,
      role: input.role,
      company: input.company || "Andrade Systems",
      store: input.store,
      status: input.status,
      lastAccess: null,
      lastPasswordChange: null,
      requirePasswordChange: input.requirePasswordChange,
      notes: input.notes,
      createdAt: new Date().toISOString(),
      createdBy: "Usuário atual",
      updatedAt: new Date().toISOString(),
    };
    users.unshift(user);
    return user;
  },

  async update(id: string, input: Partial<UserFormInput>): Promise<User> {
    await delay(600);
    const idx = users.findIndex((u) => u.id === id);
    if (idx === -1) throw new Error("Usuário não encontrado");
    const current = users[idx];
    const updated: User = {
      ...current,
      ...input,
      updatedAt: new Date().toISOString(),
    } as User;
    users[idx] = updated;
    return updated;
  },

  async listStores(): Promise<string[]> {
    await delay(100);
    return [...mockStores];
  },

  async getPermissionsByRole(role: UserRole): Promise<PermissionMatrix> {
    await delay(200);
    const preset = rolePresets.find((p) => p.role === role);
    return preset ? { ...preset.permissions } : {};
  },

  async updatePermissions(role: UserRole, permissions: PermissionMatrix): Promise<void> {
    await delay(400);
    const preset = rolePresets.find((p) => p.role === role);
    if (preset) {
      preset.permissions = { ...permissions };
    }
  },
};
