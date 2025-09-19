import { apiRequest } from "../utils/apiClient.js";

export async function getDrugByName(name) {
  return apiRequest("/drug/label.json", {
    search: `openfda.brand_name:"${name}"`,
    limit: "1",
  });
}

export async function getRecentEvents(limit = 5) {
  return apiRequest("/drug/event.json", {
    sort: "receivedate:desc",
    limit: limit.toString(),
  });
}
