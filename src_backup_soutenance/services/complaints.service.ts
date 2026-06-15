import api from "../lib/axios";

export const complaintsService = {
  async getAll() {
    const response = await api.get("/complaints");
    return response.data;
  },

  async getById(id: string) {
    const response = await api.get(
      `/complaints/${id}`
    );

    return response.data;
  },
};
