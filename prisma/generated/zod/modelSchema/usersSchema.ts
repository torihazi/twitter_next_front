import { z } from 'zod';
import type { tweetsWithRelations } from './tweetsSchema'
import type { tweetsPartialWithRelations } from './tweetsSchema'
import type { tweetsOptionalDefaultsWithRelations } from './tweetsSchema'
import { tweetsWithRelationsSchema } from './tweetsSchema'
import { tweetsPartialWithRelationsSchema } from './tweetsSchema'
import { tweetsOptionalDefaultsWithRelationsSchema } from './tweetsSchema'

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const usersSchema = z.object({
  id: z.bigint(),
  email: z.string().min(1,{message: "Required"}).email(),
  encrypted_password: z.string(),
  name: z.string().min(1,{message: "Required"}),
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
})

export type users = z.infer<typeof usersSchema>

/////////////////////////////////////////
// USERS PARTIAL SCHEMA
/////////////////////////////////////////

export const usersPartialSchema = usersSchema.partial()

export type usersPartial = z.infer<typeof usersPartialSchema>

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const usersOptionalDefaultsSchema = usersSchema.merge(z.object({
  id: z.bigint().optional(),
  email: z.string().min(1,{message: "Required"}).email().optional(),
  encrypted_password: z.string().optional(),
  name: z.string().min(1,{message: "Required"}).optional(),
  jti: z.string().optional(),
}))

export type usersOptionalDefaults = z.infer<typeof usersOptionalDefaultsSchema>

/////////////////////////////////////////
// USERS RELATION SCHEMA
/////////////////////////////////////////

export type usersRelations = {
  tweets: tweetsWithRelations[];
};

export type usersWithRelations = z.infer<typeof usersSchema> & usersRelations

export const usersWithRelationsSchema: z.ZodType<usersWithRelations> = usersSchema.merge(z.object({
  tweets: z.lazy(() => tweetsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type usersOptionalDefaultsRelations = {
  tweets: tweetsOptionalDefaultsWithRelations[];
};

export type usersOptionalDefaultsWithRelations = z.infer<typeof usersOptionalDefaultsSchema> & usersOptionalDefaultsRelations

export const usersOptionalDefaultsWithRelationsSchema: z.ZodType<usersOptionalDefaultsWithRelations> = usersOptionalDefaultsSchema.merge(z.object({
  tweets: z.lazy(() => tweetsOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USERS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type usersPartialRelations = {
  tweets?: tweetsPartialWithRelations[];
};

export type usersPartialWithRelations = z.infer<typeof usersPartialSchema> & usersPartialRelations

export const usersPartialWithRelationsSchema: z.ZodType<usersPartialWithRelations> = usersPartialSchema.merge(z.object({
  tweets: z.lazy(() => tweetsPartialWithRelationsSchema).array(),
})).partial()

export type usersOptionalDefaultsWithPartialRelations = z.infer<typeof usersOptionalDefaultsSchema> & usersPartialRelations

export const usersOptionalDefaultsWithPartialRelationsSchema: z.ZodType<usersOptionalDefaultsWithPartialRelations> = usersOptionalDefaultsSchema.merge(z.object({
  tweets: z.lazy(() => tweetsPartialWithRelationsSchema).array(),
}).partial())

export type usersWithPartialRelations = z.infer<typeof usersSchema> & usersPartialRelations

export const usersWithPartialRelationsSchema: z.ZodType<usersWithPartialRelations> = usersSchema.merge(z.object({
  tweets: z.lazy(() => tweetsPartialWithRelationsSchema).array(),
}).partial())

export default usersSchema;
