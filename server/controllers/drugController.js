import { getDrugByName, getRecentEvents } from "../services/openfdaService.js";

export async function fetchDrugInfo(req, res) {
  try {
    const { name } = req.params;
    const data = await getDrugByName(name);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export async function fetchEvents(req, res) {
  try {
    const data = await getRecentEvents(10);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
