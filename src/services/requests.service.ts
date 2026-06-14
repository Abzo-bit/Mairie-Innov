import api from "../lib/axios";

export const requestsService = {
  async getAll() {
    const response = await api.get("/administrative-requests");
    return response.data;
  },

  async getById(id: string) {
    const response = await api.get(
      `/administrative-requests/${id}`
    );

    return response.data;
  },
};
