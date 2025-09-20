import axios, { type AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosConfig);

const apiClient = {
  get: (url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get(url, config),
  post: <T = unknown>(url: string, data?: T, config?: AxiosRequestConfig) =>
    axiosInstance.post(url, data, config),
  put: <T = unknown>(url: string, data?: T, config?: AxiosRequestConfig) =>
    axiosInstance.put(url, data, config),
  patch: <T = unknown>(url: string, data?: T, config?: AxiosRequestConfig) =>
    axiosInstance.patch(url, data, config),
  delete: (url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete(url, config),
};

export default apiClient;
