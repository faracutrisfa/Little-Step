import { apiClient } from "../../../lib/api";

export async function FoodScanAnalyzePost(childId, body) {
  const res = await apiClient(`/api/food-scan/analyze/${childId}`, "POST", {
    body: JSON.stringify(body),
  });
  return res;
}

export async function FoodScanSave(childId, body) {
  const res = await apiClient(`/api/food-scan/save/${childId}`, "POST", {
    body: JSON.stringify(body),
  });
  return res;
}

export async function getSafetyCheckById(id) {
  const res = await apiClient(
    `/api/food-scan/safety-check/${childId}`,
    "GET",
    {}
  );
  return res;
}
