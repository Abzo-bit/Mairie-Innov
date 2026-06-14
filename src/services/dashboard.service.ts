import api from "../lib/axios";

export const dashboardService = {
  async getStatistics() {
    const response = await api.get("/dashboard/statistics");
    return response.data;
  },
};
