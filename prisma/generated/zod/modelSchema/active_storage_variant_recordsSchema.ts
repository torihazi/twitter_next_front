import { z } from 'zod';
import type { active_storage_blobsWithRelations } from './active_storage_blobsSchema'
import type { active_storage_blobsPartialWithRelations } from './active_storage_blobsSchema'
import type { active_storage_blobsOptionalDefaultsWithRelations } from './active_storage_blobsSchema'
import { active_storage_blobsWithRelationsSchema } from './active_storage_blobsSchema'
import { active_storage_blobsPartialWithRelationsSchema } from './active_storage_blobsSchema'
import { active_storage_blobsOptionalDefaultsWithRelationsSchema } from './active_storage_blobsSchema'

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS SCHEMA
/////////////////////////////////////////

export const active_storage_variant_recordsSchema = z.object({
  id: z.bigint(),
  blob_id: z.bigint(),
  variation_digest: z.string(),
})

export type active_storage_variant_records = z.infer<typeof active_storage_variant_recordsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS PARTIAL SCHEMA
/////////////////////////////////////////

export const active_storage_variant_recordsPartialSchema = active_storage_variant_recordsSchema.partial()

export type active_storage_variant_recordsPartial = z.infer<typeof active_storage_variant_recordsPartialSchema>

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const active_storage_variant_recordsOptionalDefaultsSchema = active_storage_variant_recordsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type active_storage_variant_recordsOptionalDefaults = z.infer<typeof active_storage_variant_recordsOptionalDefaultsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_variant_recordsRelations = {
  active_storage_blobs: active_storage_blobsWithRelations;
};

export type active_storage_variant_recordsWithRelations = z.infer<typeof active_storage_variant_recordsSchema> & active_storage_variant_recordsRelations

export const active_storage_variant_recordsWithRelationsSchema: z.ZodType<active_storage_variant_recordsWithRelations> = active_storage_variant_recordsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_variant_recordsOptionalDefaultsRelations = {
  active_storage_blobs: active_storage_blobsOptionalDefaultsWithRelations;
};

export type active_storage_variant_recordsOptionalDefaultsWithRelations = z.infer<typeof active_storage_variant_recordsOptionalDefaultsSchema> & active_storage_variant_recordsOptionalDefaultsRelations

export const active_storage_variant_recordsOptionalDefaultsWithRelationsSchema: z.ZodType<active_storage_variant_recordsOptionalDefaultsWithRelations> = active_storage_variant_recordsOptionalDefaultsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_variant_recordsPartialRelations = {
  active_storage_blobs?: active_storage_blobsPartialWithRelations;
};

export type active_storage_variant_recordsPartialWithRelations = z.infer<typeof active_storage_variant_recordsPartialSchema> & active_storage_variant_recordsPartialRelations

export const active_storage_variant_recordsPartialWithRelationsSchema: z.ZodType<active_storage_variant_recordsPartialWithRelations> = active_storage_variant_recordsPartialSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsPartialWithRelationsSchema),
})).partial()

export type active_storage_variant_recordsOptionalDefaultsWithPartialRelations = z.infer<typeof active_storage_variant_recordsOptionalDefaultsSchema> & active_storage_variant_recordsPartialRelations

export const active_storage_variant_recordsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<active_storage_variant_recordsOptionalDefaultsWithPartialRelations> = active_storage_variant_recordsOptionalDefaultsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsPartialWithRelationsSchema),
}).partial())

export type active_storage_variant_recordsWithPartialRelations = z.infer<typeof active_storage_variant_recordsSchema> & active_storage_variant_recordsPartialRelations

export const active_storage_variant_recordsWithPartialRelationsSchema: z.ZodType<active_storage_variant_recordsWithPartialRelations> = active_storage_variant_recordsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsPartialWithRelationsSchema),
}).partial())

export default active_storage_variant_recordsSchema;
