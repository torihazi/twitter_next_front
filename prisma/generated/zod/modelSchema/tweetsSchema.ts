import { z } from 'zod';
import type { usersWithRelations } from './usersSchema'
import type { usersPartialWithRelations } from './usersSchema'
import type { usersOptionalDefaultsWithRelations } from './usersSchema'
import { usersWithRelationsSchema } from './usersSchema'
import { usersPartialWithRelationsSchema } from './usersSchema'
import { usersOptionalDefaultsWithRelationsSchema } from './usersSchema'

/////////////////////////////////////////
// TWEETS SCHEMA
/////////////////////////////////////////

export const tweetsSchema = z.object({
  id: z.bigint(),
  content: z.string().max(150,{message: "Maximum 150 characters"}).nullable(),
  user_id: z.bigint(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type tweets = z.infer<typeof tweetsSchema>

/////////////////////////////////////////
// TWEETS PARTIAL SCHEMA
/////////////////////////////////////////

export const tweetsPartialSchema = tweetsSchema.partial()

export type tweetsPartial = z.infer<typeof tweetsPartialSchema>

/////////////////////////////////////////
// TWEETS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const tweetsOptionalDefaultsSchema = tweetsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type tweetsOptionalDefaults = z.infer<typeof tweetsOptionalDefaultsSchema>

/////////////////////////////////////////
// TWEETS RELATION SCHEMA
/////////////////////////////////////////

export type tweetsRelations = {
  users: usersWithRelations;
};

export type tweetsWithRelations = z.infer<typeof tweetsSchema> & tweetsRelations

export const tweetsWithRelationsSchema: z.ZodType<tweetsWithRelations> = tweetsSchema.merge(z.object({
  users: z.lazy(() => usersWithRelationsSchema),
}))

/////////////////////////////////////////
// TWEETS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type tweetsOptionalDefaultsRelations = {
  users: usersOptionalDefaultsWithRelations;
};

export type tweetsOptionalDefaultsWithRelations = z.infer<typeof tweetsOptionalDefaultsSchema> & tweetsOptionalDefaultsRelations

export const tweetsOptionalDefaultsWithRelationsSchema: z.ZodType<tweetsOptionalDefaultsWithRelations> = tweetsOptionalDefaultsSchema.merge(z.object({
  users: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// TWEETS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type tweetsPartialRelations = {
  users?: usersPartialWithRelations;
};

export type tweetsPartialWithRelations = z.infer<typeof tweetsPartialSchema> & tweetsPartialRelations

export const tweetsPartialWithRelationsSchema: z.ZodType<tweetsPartialWithRelations> = tweetsPartialSchema.merge(z.object({
  users: z.lazy(() => usersPartialWithRelationsSchema),
})).partial()

export type tweetsOptionalDefaultsWithPartialRelations = z.infer<typeof tweetsOptionalDefaultsSchema> & tweetsPartialRelations

export const tweetsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<tweetsOptionalDefaultsWithPartialRelations> = tweetsOptionalDefaultsSchema.merge(z.object({
  users: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export type tweetsWithPartialRelations = z.infer<typeof tweetsSchema> & tweetsPartialRelations

export const tweetsWithPartialRelationsSchema: z.ZodType<tweetsWithPartialRelations> = tweetsSchema.merge(z.object({
  users: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export default tweetsSchema;
