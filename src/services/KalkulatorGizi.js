import { apiClient } from "../lib/api";

export async function getAllChildren() {
  const res = await apiClient("/api/children", "GET", {});
  return res;
}

export async function getChildByid(id) {
  const res = await apiClient(`/api/children/${id}`, "GET", {});
  return res;
}

export async function createChild(body) {
  const token = localStorage.getItem("token");
  const res = await apiClient("/api/children", "POST", {
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export async function updateChild(id) {
  const res = await apiClient(`/api/children/${id}`, "PUT", {});
  return res;
}

export async function deleteChild(id) {
  const res = await apiClient(`/api/children/${id}`, "DELETE", {});
  return res;
}

export async function getGrowthRecordsByChildId(childId) {
  const res = await apiClient(
    `/api/growth-records/child/${childId}`,
    "GET",
    {}
  );
  return res;
}

export async function getGrowthRecordById(id) {
  const res = await apiClient(`/api/growth-records/${id}`, "GET", {});
  return res;
}

export async function createGrowthRecord(body, childId) {
  const token = localStorage.getItem("token");
  const res = await apiClient(`/api/growth-records/child/${childId}`, "POST", {
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
}

export async function updateGrowthRecord(id) {
  const res = await apiClient(`/api/growth-records/${id}`, "PUT", {});
  return res;
}

export async function deleteGrowthRecord(id) {
  const res = await apiClient(`/api/growth-records/${id}`, "DELETE", {});
  return res;
}

export async function getGrowthChartData(childId) {
  const res = await apiClient(
    `/api/growth-records/chart/child/${childId}`,
    "GET",
    {}
  );
  return res;
}
