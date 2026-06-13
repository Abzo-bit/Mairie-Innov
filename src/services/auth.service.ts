import api from "../lib/axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export const authService = {
  async login(payload: LoginPayload) {
    const response = await api.post(
      "/auth/login",
      payload
    );

    return response.data;
  },

  async me() {
    const response = await api.get("/auth/me");

    return response.data;
  },
};
