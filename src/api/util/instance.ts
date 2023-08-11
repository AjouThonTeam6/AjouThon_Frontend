import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8000/";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const baseApi = axios.create(axiosConfig);
