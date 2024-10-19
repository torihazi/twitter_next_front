import { ApiErrorResponse } from "@/types/api";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEVELOPMENT_URL,
});

// リクエストを送る前の処理
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // サーバ側にブラウザが受け取れるデータ形式を設定
  config.headers.set("Accept", "application/json");

  // Authorizationの項目に値が入っていなかった場合、設定
  if (
    !config.headers.has("Authorization") &&
    config.url !== "/api/v1/users/sign_in"
  ) {
    config.headers.set("Authorization", Cookies.get("token"));
  }
  return config;
});

// レスポンスを受け取った後の処理
api.interceptors.response.use(
  // HTTPコードが2xxの時
  (response: AxiosResponse) => {
    if (response.data.message) {
      toast.info(response.data.message);
    }
    console.log(response);
    return response;
  },
  // HTTPコードが2xx以外の時
  (error: AxiosError<ApiErrorResponse>) => {
    toast.error(error.response?.data?.error);
    console.log(error);
    throw error;
  }
);
