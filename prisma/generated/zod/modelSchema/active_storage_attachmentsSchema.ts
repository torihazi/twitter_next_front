import { z } from 'zod';
import type { active_storage_blobsWithRelations } from './active_storage_blobsSchema'
import type { active_storage_blobsPartialWithRelations } from './active_storage_blobsSchema'
import type { active_storage_blobsOptionalDefaultsWithRelations } from './active_storage_blobsSchema'
import { active_storage_blobsWithRelationsSchema } from './active_storage_blobsSchema'
import { active_storage_blobsPartialWithRelationsSchema } from './active_storage_blobsSchema'
import { active_storage_blobsOptionalDefaultsWithRelationsSchema } from './active_storage_blobsSchema'

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS SCHEMA
/////////////////////////////////////////

export const active_storage_attachmentsSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  record_type: z.string(),
  record_id: z.bigint(),
  blob_id: z.bigint(),
  created_at: z.coerce.date(),
})

export type active_storage_attachments = z.infer<typeof active_storage_attachmentsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS PARTIAL SCHEMA
/////////////////////////////////////////

export const active_storage_attachmentsPartialSchema = active_storage_attachmentsSchema.partial()

export type active_storage_attachmentsPartial = z.infer<typeof active_storage_attachmentsPartialSchema>

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const active_storage_attachmentsOptionalDefaultsSchema = active_storage_attachmentsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type active_storage_attachmentsOptionalDefaults = z.infer<typeof active_storage_attachmentsOptionalDefaultsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_attachmentsRelations = {
  active_storage_blobs: active_storage_blobsWithRelations;
};

export type active_storage_attachmentsWithRelations = z.infer<typeof active_storage_attachmentsSchema> & active_storage_attachmentsRelations

export const active_storage_attachmentsWithRelationsSchema: z.ZodType<active_storage_attachmentsWithRelations> = active_storage_attachmentsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_attachmentsOptionalDefaultsRelations = {
  active_storage_blobs: active_storage_blobsOptionalDefaultsWithRelations;
};

export type active_storage_attachmentsOptionalDefaultsWithRelations = z.infer<typeof active_storage_attachmentsOptionalDefaultsSchema> & active_storage_attachmentsOptionalDefaultsRelations

export const active_storage_attachmentsOptionalDefaultsWithRelationsSchema: z.ZodType<active_storage_attachmentsOptionalDefaultsWithRelations> = active_storage_attachmentsOptionalDefaultsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_attachmentsPartialRelations = {
  active_storage_blobs?: active_storage_blobsPartialWithRelations;
};

export type active_storage_attachmentsPartialWithRelations = z.infer<typeof active_storage_attachmentsPartialSchema> & active_storage_attachmentsPartialRelations

export const active_storage_attachmentsPartialWithRelationsSchema: z.ZodType<active_storage_attachmentsPartialWithRelations> = active_storage_attachmentsPartialSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsPartialWithRelationsSchema),
})).partial()

export type active_storage_attachmentsOptionalDefaultsWithPartialRelations = z.infer<typeof active_storage_attachmentsOptionalDefaultsSchema> & active_storage_attachmentsPartialRelations

export const active_storage_attachmentsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<active_storage_attachmentsOptionalDefaultsWithPartialRelations> = active_storage_attachmentsOptionalDefaultsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsPartialWithRelationsSchema),
}).partial())

export type active_storage_attachmentsWithPartialRelations = z.infer<typeof active_storage_attachmentsSchema> & active_storage_attachmentsPartialRelations

export const active_storage_attachmentsWithPartialRelationsSchema: z.ZodType<active_storage_attachmentsWithPartialRelations> = active_storage_attachmentsSchema.merge(z.object({
  active_storage_blobs: z.lazy(() => active_storage_blobsPartialWithRelationsSchema),
}).partial())

export default active_storage_attachmentsSchema;
