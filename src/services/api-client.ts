/**
 * API Client abstraction for future backend integration.
 *
 * This module provides a thin wrapper around fetch() that can be
 * configured to point at a local .NET backend API or any REST service.
 *
 * Usage:
 *   import { apiClient } from '@/services/api-client';
 *   const products = await apiClient.get<Product[]>('/products');
 */

interface ApiClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

const defaultConfig: ApiClientConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
};

async function request<T>(
  method: string,
  path: string,
  body?: unknown,
  config: ApiClientConfig = defaultConfig
): Promise<T> {
  const url = `${config.baseUrl}${path}`;

  const res = await fetch(url, {
    method,
    headers: config.headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export const apiClient = {
  get: <T>(path: string) => request<T>("GET", path),
  post: <T>(path: string, body: unknown) => request<T>("POST", path, body),
  put: <T>(path: string, body: unknown) => request<T>("PUT", path, body),
  patch: <T>(path: string, body: unknown) => request<T>("PATCH", path, body),
  delete: <T>(path: string) => request<T>("DELETE", path),
};
