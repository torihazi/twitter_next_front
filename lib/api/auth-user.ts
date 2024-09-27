import { usersSignup } from "@/features/auth/components/signup-modal";
import { users } from "@/prisma/generated/zod/modelSchema/usersSchema";
import { api } from "./api-client";

export const signupFn = (data: usersSignup): Promise<users> => {
  return api.post("/api/v1/users", data);
};

export const useSignup = ({ onSuccess }: { onSuccess?: () => void }) => {
  const signup = async (data: usersSignup) => {
    try {
      const user = await signupFn(data);

      if (onSuccess) {
        onSuccess();
      }

      return user;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return { signup };
};
