import { apiClient } from "../lib/api";

export async function analyzeFood(body, childId) {
  const res = await apiClient(`/api/food-scan/analyze/${childId}`, "POST", {
    body: JSON.stringify(body),
  });
  return res;
}

export async function saveFood(body, childId) {
  const res = await apiClient(`/api/food-scan/save/${childId}`, "POST", {
    body: JSON.stringify(body),
  });
  return res;
}

export async function getSafetyCheck(childId) {
  const res = await apiClient(`/api/food-scan/safety-check/${childId}`, "GET", {});
  return res;
}

