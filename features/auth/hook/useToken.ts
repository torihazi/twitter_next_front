// レスポンスのheaderにあるauthorizationと
// cookieにあるtokenをやればいいのか。

import Cookies from "js-cookie";
import { Cookie } from "next/font/google";

export const useToken = () => {
  // authorizationを格納する
  const token = Cookies.get("token");

  const setToken = (authorization: string) => {
    Cookies.set("token", authorization);
  };
};
