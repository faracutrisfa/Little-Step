import { apiClient } from "../lib/api";

export async function getProfileUser(token) {
  const res = await apiClient(`/api/profile/me`, "GET", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export async function updateUserProfile(body, token) {
  const res = await apiClient(`/api/profile/me`, "PUT", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
}

export async function deleteUserAccount(token) {
  const res = await apiClient(`/api/profile/me`, "DELETE", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}
