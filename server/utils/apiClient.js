export async function apiRequest(endpoint, params = {}) {
  const base = "https://api.fda.gov";
  const url = new URL(base + endpoint);

  Object.entries(params).forEach(([key, val]) =>
    url.searchParams.append(key, val)
  );
  url.searchParams.append("api_key", process.env.OPENFDA_API_KEY);

  const r = await fetch(url);
  if (r.status === 429) {
    await new Promise((s) => setTimeout(s, 1500));
    return apiRequest(endpoint, params);
  }
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}
