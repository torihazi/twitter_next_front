import { api } from "./api-client";

import { users } from "@/prisma/generated/zod/modelSchema/usersSchema";
import { usersSignup } from "@/features/auth/components/signup-modal";
import { usersSignin } from "@/features/auth/components/signin-modal";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";

//
// signup
//

export const signupFn = (data: usersSignup): Promise<AxiosResponse> => {
  return api.post("/api/v1/users", data);
};

export const useSignup = ({ onSuccess }: { onSuccess?: () => void }) => {
  const signup = async (data: usersSignup) => {
    try {
      const response = await signupFn(data);

      if (onSuccess) {
        onSuccess();
      }

      return response;
    } catch (err) {
      return err;
    }
  };

  return { signup };
};

//
// signin
//

export const signinFn = (data: usersSignin): Promise<AxiosResponse> => {
  const newData = {
    api_v1_user: { ...data },
  };

  return api.post("/api/v1/users/sign_in", newData);
};

export const useSignin = ({ onSuccess }: { onSuccess?: () => void }) => {
  const signin = async (data: usersSignin) => {
    try {
      const { headers, ...response } = await signinFn(data);

      // 取得したAuthoriazationをcookieにセットする
      if (headers.authorization) {
        Cookies.set("token", headers.authorization);
      }
      if (onSuccess) {
        onSuccess();
      }

      return response.data?.data;
    } catch (err) {
      return err;
    }
  };

  return { signin };
};
