import { api } from "./api";

export const RequestService = {
  async getAll() {
    const { data } = await api.get("/requests");
    return data;
  },

  async getById(id: number) {
    const { data } = await api.get(`/requests/${id}`);
    return data;
  },
};
