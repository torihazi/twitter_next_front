import { z } from "zod";

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const usersSchema = z.object({
  id: z.string(),
  email: z.string().min(1, { message: "Required" }).email(),
  encrypted_password: z.string(),
  name: z.string().min(1, { message: "Required" }),
  profile: z.string().nullable(),
  place: z.string().nullable(),
  web: z.string().nullable(),
  birth: z.string().nullable(),
  reset_password_token: z.string().nullable(),
  reset_password_sent_at: z.coerce.date().nullable(),
  remember_created_at: z.coerce.date().nullable(),
  confirmation_token: z.string().nullable(),
  confirmed_at: z.coerce.date().nullable(),
  confirmation_sent_at: z.coerce.date().nullable(),
  unconfirmed_email: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  jti: z.string(),
});

export type users = z.infer<typeof usersSchema>;

/////////////////////////////////////////
// USERS PARTIAL SCHEMA
/////////////////////////////////////////

export const usersPartialSchema = usersSchema.partial();

export type usersPartial = z.infer<typeof usersPartialSchema>;

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const usersOptionalDefaultsSchema = usersSchema.merge(
  z.object({
    id: z.string().optional(),
    email: z.string().min(1, { message: "Required" }).email().optional(),
    encrypted_password: z.string().optional(),
    name: z.string().min(1, { message: "Required" }).optional(),
  })
);

export type usersOptionalDefaults = z.infer<typeof usersOptionalDefaultsSchema>;

export default usersSchema;
