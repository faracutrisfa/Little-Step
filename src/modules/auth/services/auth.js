import { apiClient } from "../../../lib/api";


export async function login(body) {
  const res = await apiClient("/api/auth/login", "POST", {
    body: JSON.stringify(body),
  });
  return res;
}

export async function register(body) {
  const res = await apiClient("/api/auth/register", "POST", {
    body: JSON.stringify(body),
  });
  return res;
}
