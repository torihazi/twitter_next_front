import { z } from 'zod';
import type { TweetsWithRelations } from './TweetsSchema'
import type { TweetsPartialWithRelations } from './TweetsSchema'
import type { TweetsOptionalDefaultsWithRelations } from './TweetsSchema'
import { TweetsWithRelationsSchema } from './TweetsSchema'
import { TweetsPartialWithRelationsSchema } from './TweetsSchema'
import { TweetsOptionalDefaultsWithRelationsSchema } from './TweetsSchema'

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const UsersSchema = z.object({
  id: z.bigint(),
  email: z.string().min(1,{message: "Required"}).email(),
  encryptedPassword: z.string(),
  name: z.string().min(1,{message: "Required"}),
  profile: z.string().nullable(),
  place: z.string().nullable(),
  web: z.string().nullable(),
  birth: z.string().nullable(),
  resetPasswordToken: z.string().nullable(),
  resetPasswordSentAt: z.coerce.date().nullable(),
  rememberCreatedAt: z.coerce.date().nullable(),
  confirmationToken: z.string().nullable(),
  confirmedAt: z.coerce.date().nullable(),
  confirmationSentAt: z.coerce.date().nullable(),
  unconfirmedEmail: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  jti: z.string(),
})

export type Users = z.infer<typeof UsersSchema>

/////////////////////////////////////////
// USERS PARTIAL SCHEMA
/////////////////////////////////////////

export const UsersPartialSchema = UsersSchema.partial()

export type UsersPartial = z.infer<typeof UsersPartialSchema>

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UsersOptionalDefaultsSchema = UsersSchema.merge(z.object({
  id: z.bigint().optional(),
  email: z.string().min(1,{message: "Required"}).email().optional(),
  encryptedPassword: z.string().optional(),
  name: z.string().min(1,{message: "Required"}).optional(),
  jti: z.string().optional(),
}))

export type UsersOptionalDefaults = z.infer<typeof UsersOptionalDefaultsSchema>

/////////////////////////////////////////
// USERS RELATION SCHEMA
/////////////////////////////////////////

export type UsersRelations = {
  tweets: TweetsWithRelations[];
};

export type UsersWithRelations = z.infer<typeof UsersSchema> & UsersRelations

export const UsersWithRelationsSchema: z.ZodType<UsersWithRelations> = UsersSchema.merge(z.object({
  tweets: z.lazy(() => TweetsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UsersOptionalDefaultsRelations = {
  tweets: TweetsOptionalDefaultsWithRelations[];
};

export type UsersOptionalDefaultsWithRelations = z.infer<typeof UsersOptionalDefaultsSchema> & UsersOptionalDefaultsRelations

export const UsersOptionalDefaultsWithRelationsSchema: z.ZodType<UsersOptionalDefaultsWithRelations> = UsersOptionalDefaultsSchema.merge(z.object({
  tweets: z.lazy(() => TweetsOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USERS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UsersPartialRelations = {
  tweets?: TweetsPartialWithRelations[];
};

export type UsersPartialWithRelations = z.infer<typeof UsersPartialSchema> & UsersPartialRelations

export const UsersPartialWithRelationsSchema: z.ZodType<UsersPartialWithRelations> = UsersPartialSchema.merge(z.object({
  tweets: z.lazy(() => TweetsPartialWithRelationsSchema).array(),
})).partial()

export type UsersOptionalDefaultsWithPartialRelations = z.infer<typeof UsersOptionalDefaultsSchema> & UsersPartialRelations

export const UsersOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UsersOptionalDefaultsWithPartialRelations> = UsersOptionalDefaultsSchema.merge(z.object({
  tweets: z.lazy(() => TweetsPartialWithRelationsSchema).array(),
}).partial())

export type UsersWithPartialRelations = z.infer<typeof UsersSchema> & UsersPartialRelations

export const UsersWithPartialRelationsSchema: z.ZodType<UsersWithPartialRelations> = UsersSchema.merge(z.object({
  tweets: z.lazy(() => TweetsPartialWithRelationsSchema).array(),
}).partial())

export default UsersSchema;
