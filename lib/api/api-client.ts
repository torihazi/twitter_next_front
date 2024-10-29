import { ApiErrorResponse, ApiSuccessResponse } from "@/types";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { camelCase, snakeCase } from "change-case";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const METHOD_WITH_PAYLOAD = ["post", "put"];

const convertToSnakeCase = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(convertToSnakeCase);
  } else if (data !== null && typeof data === "object") {
    return Object.entries(data).reduce(
      (result, [key, value]) => ({
        ...result,
        [snakeCase(key)]: value,
      }),
      {}
    );
  } else {
    return data;
  }
};

const convertToCamelCase = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(convertToCamelCase);
  } else if (data !== null && typeof data === "object") {
    return Object.entries(data).reduce(
      (result, [key, value]) => ({
        ...result,
        [camelCase(key)]: value,
      }),
      {}
    );
  } else {
    return data;
  }
};

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.set("Accept", "application/json");

  if (
    !config.headers.has("Authorization") &&
    config.url !== "/api/v1/users/sign_in"
  ) {
    config.headers.set("Authorization", Cookies.get("token"));
  }

  // リクエストデータの変換（FormData以外）
  const hasRequestData = !!config.data;
  const isNotFormData = !(config.data instanceof FormData);
  const isValidMethod =
    config.method && METHOD_WITH_PAYLOAD.includes(config.method.toLowerCase());

  if (hasRequestData && isNotFormData && isValidMethod) {
    config.data = convertToSnakeCase(config.data);
  }

  return config;
});

api.interceptors.response.use(
  // HTTPコードが2xxの時
  (response: AxiosResponse<ApiSuccessResponse<any>>) => {
    if (response.data.message) {
      toast.info(response.data.message);
    }

    return {
      ...response,
      data: convertToCamelCase(response.data.data),
      meta: response.data.meta,
    };
  },
  // HTTPコードが2xx以外の時
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.status === 401) {
      window.location.href = "/auth";
    }

    toast.error(error.response?.data?.error);
    throw error;
  }
);
