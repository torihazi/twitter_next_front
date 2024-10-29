import { z } from 'zod';
import type { UsersWithRelations } from './UsersSchema'
import type { UsersPartialWithRelations } from './UsersSchema'
import type { UsersOptionalDefaultsWithRelations } from './UsersSchema'
import { UsersWithRelationsSchema } from './UsersSchema'
import { UsersPartialWithRelationsSchema } from './UsersSchema'
import { UsersOptionalDefaultsWithRelationsSchema } from './UsersSchema'

/////////////////////////////////////////
// TWEETS SCHEMA
/////////////////////////////////////////

export const TweetsSchema = z.object({
  id: z.bigint(),
  content: z.string().max(150,{message: "Maximum 150 characters"}).nullable(),
  userId: z.bigint(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tweets = z.infer<typeof TweetsSchema>

/////////////////////////////////////////
// TWEETS PARTIAL SCHEMA
/////////////////////////////////////////

export const TweetsPartialSchema = TweetsSchema.partial()

export type TweetsPartial = z.infer<typeof TweetsPartialSchema>

/////////////////////////////////////////
// TWEETS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TweetsOptionalDefaultsSchema = TweetsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type TweetsOptionalDefaults = z.infer<typeof TweetsOptionalDefaultsSchema>

/////////////////////////////////////////
// TWEETS RELATION SCHEMA
/////////////////////////////////////////

export type TweetsRelations = {
  users: UsersWithRelations;
};

export type TweetsWithRelations = z.infer<typeof TweetsSchema> & TweetsRelations

export const TweetsWithRelationsSchema: z.ZodType<TweetsWithRelations> = TweetsSchema.merge(z.object({
  users: z.lazy(() => UsersWithRelationsSchema),
}))

/////////////////////////////////////////
// TWEETS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type TweetsOptionalDefaultsRelations = {
  users: UsersOptionalDefaultsWithRelations;
};

export type TweetsOptionalDefaultsWithRelations = z.infer<typeof TweetsOptionalDefaultsSchema> & TweetsOptionalDefaultsRelations

export const TweetsOptionalDefaultsWithRelationsSchema: z.ZodType<TweetsOptionalDefaultsWithRelations> = TweetsOptionalDefaultsSchema.merge(z.object({
  users: z.lazy(() => UsersOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// TWEETS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type TweetsPartialRelations = {
  users?: UsersPartialWithRelations;
};

export type TweetsPartialWithRelations = z.infer<typeof TweetsPartialSchema> & TweetsPartialRelations

export const TweetsPartialWithRelationsSchema: z.ZodType<TweetsPartialWithRelations> = TweetsPartialSchema.merge(z.object({
  users: z.lazy(() => UsersPartialWithRelationsSchema),
})).partial()

export type TweetsOptionalDefaultsWithPartialRelations = z.infer<typeof TweetsOptionalDefaultsSchema> & TweetsPartialRelations

export const TweetsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<TweetsOptionalDefaultsWithPartialRelations> = TweetsOptionalDefaultsSchema.merge(z.object({
  users: z.lazy(() => UsersPartialWithRelationsSchema),
}).partial())

export type TweetsWithPartialRelations = z.infer<typeof TweetsSchema> & TweetsPartialRelations

export const TweetsWithPartialRelationsSchema: z.ZodType<TweetsWithPartialRelations> = TweetsSchema.merge(z.object({
  users: z.lazy(() => UsersPartialWithRelationsSchema),
}).partial())

export default TweetsSchema;
