import { HttpStatusCode } from "axios";
import apiClient from "../../utils/api-client";
import type { User } from "../../store/authStore/api";
import { router } from "react-query-kit";
const API_URL = "http://localhost:3000/api";

export interface RegisterRequest {
  email: string;
  fname: string;
  birthday: string | null;
  password: string;
  confirmPassword: string;
}

const registerUser = async (userData: RegisterRequest) => {
  const response = await apiClient.post(`${API_URL}/users/register`, userData);
  if (response.status === HttpStatusCode.Created) {
    return response.data;
  }
};

const login = async (credentials: { email: string; password: string }) => {
  const response = await apiClient.post(`${API_URL}/user/login`, credentials);
  if (response.status === HttpStatusCode.Ok) {
    return response.data;
  }
};

export const registerRouter = router("register", {
  register: router.mutation({ mutationFn: registerUser }),
  login: router.mutation({ mutationFn: login }),
});
