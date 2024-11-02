import { UsersPartialSchema } from "@/prisma/generated/zod/modelSchema/UsersSchema";
import { z } from "zod";

//
// signin
//

export const UsersSigninSchema = UsersPartialSchema.merge(
  z.object({
    password: z.string().min(6, "at least 6 characters").optional(),
  })
);

export type usersSignin = z.infer<typeof UsersSigninSchema>;

//
// signup
//

export const UsersSignupSchema = UsersPartialSchema.merge(
  z.object({
    password: z.string().min(6, "at least 6 characters").optional(),
  })
);

export type usersSignup = z.infer<typeof UsersSignupSchema>;
