import { api } from "./api";

export const DashboardService = {
  async getStats() {
    const { data } = await api.get("/dashboard/stats");
    return data;
  },
};
