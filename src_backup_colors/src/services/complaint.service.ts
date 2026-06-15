import { api } from "./api";

export const ComplaintService = {
  async getAll() {
    const { data } = await api.get("/complaints");
    return data;
  },

  async getById(id: number) {
    const { data } = await api.get(`/complaints/${id}`);
    return data;
  },
};
