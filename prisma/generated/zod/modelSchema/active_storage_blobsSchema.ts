import { z } from 'zod';
import type { active_storage_attachmentsWithRelations } from './active_storage_attachmentsSchema'
import type { active_storage_attachmentsPartialWithRelations } from './active_storage_attachmentsSchema'
import type { active_storage_attachmentsOptionalDefaultsWithRelations } from './active_storage_attachmentsSchema'
import type { active_storage_variant_recordsWithRelations } from './active_storage_variant_recordsSchema'
import type { active_storage_variant_recordsPartialWithRelations } from './active_storage_variant_recordsSchema'
import type { active_storage_variant_recordsOptionalDefaultsWithRelations } from './active_storage_variant_recordsSchema'
import { active_storage_attachmentsWithRelationsSchema } from './active_storage_attachmentsSchema'
import { active_storage_attachmentsPartialWithRelationsSchema } from './active_storage_attachmentsSchema'
import { active_storage_attachmentsOptionalDefaultsWithRelationsSchema } from './active_storage_attachmentsSchema'
import { active_storage_variant_recordsWithRelationsSchema } from './active_storage_variant_recordsSchema'
import { active_storage_variant_recordsPartialWithRelationsSchema } from './active_storage_variant_recordsSchema'
import { active_storage_variant_recordsOptionalDefaultsWithRelationsSchema } from './active_storage_variant_recordsSchema'

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS SCHEMA
/////////////////////////////////////////

export const active_storage_blobsSchema = z.object({
  id: z.bigint(),
  key: z.string(),
  filename: z.string(),
  content_type: z.string().nullable(),
  metadata: z.string().nullable(),
  service_name: z.string(),
  byte_size: z.bigint(),
  checksum: z.string().nullable(),
  created_at: z.coerce.date(),
})

export type active_storage_blobs = z.infer<typeof active_storage_blobsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS PARTIAL SCHEMA
/////////////////////////////////////////

export const active_storage_blobsPartialSchema = active_storage_blobsSchema.partial()

export type active_storage_blobsPartial = z.infer<typeof active_storage_blobsPartialSchema>

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const active_storage_blobsOptionalDefaultsSchema = active_storage_blobsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type active_storage_blobsOptionalDefaults = z.infer<typeof active_storage_blobsOptionalDefaultsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_blobsRelations = {
  active_storage_attachments: active_storage_attachmentsWithRelations[];
  active_storage_variant_records: active_storage_variant_recordsWithRelations[];
};

export type active_storage_blobsWithRelations = z.infer<typeof active_storage_blobsSchema> & active_storage_blobsRelations

export const active_storage_blobsWithRelationsSchema: z.ZodType<active_storage_blobsWithRelations> = active_storage_blobsSchema.merge(z.object({
  active_storage_attachments: z.lazy(() => active_storage_attachmentsWithRelationsSchema).array(),
  active_storage_variant_records: z.lazy(() => active_storage_variant_recordsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_blobsOptionalDefaultsRelations = {
  active_storage_attachments: active_storage_attachmentsOptionalDefaultsWithRelations[];
  active_storage_variant_records: active_storage_variant_recordsOptionalDefaultsWithRelations[];
};

export type active_storage_blobsOptionalDefaultsWithRelations = z.infer<typeof active_storage_blobsOptionalDefaultsSchema> & active_storage_blobsOptionalDefaultsRelations

export const active_storage_blobsOptionalDefaultsWithRelationsSchema: z.ZodType<active_storage_blobsOptionalDefaultsWithRelations> = active_storage_blobsOptionalDefaultsSchema.merge(z.object({
  active_storage_attachments: z.lazy(() => active_storage_attachmentsOptionalDefaultsWithRelationsSchema).array(),
  active_storage_variant_records: z.lazy(() => active_storage_variant_recordsOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type active_storage_blobsPartialRelations = {
  active_storage_attachments?: active_storage_attachmentsPartialWithRelations[];
  active_storage_variant_records?: active_storage_variant_recordsPartialWithRelations[];
};

export type active_storage_blobsPartialWithRelations = z.infer<typeof active_storage_blobsPartialSchema> & active_storage_blobsPartialRelations

export const active_storage_blobsPartialWithRelationsSchema: z.ZodType<active_storage_blobsPartialWithRelations> = active_storage_blobsPartialSchema.merge(z.object({
  active_storage_attachments: z.lazy(() => active_storage_attachmentsPartialWithRelationsSchema).array(),
  active_storage_variant_records: z.lazy(() => active_storage_variant_recordsPartialWithRelationsSchema).array(),
})).partial()

export type active_storage_blobsOptionalDefaultsWithPartialRelations = z.infer<typeof active_storage_blobsOptionalDefaultsSchema> & active_storage_blobsPartialRelations

export const active_storage_blobsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<active_storage_blobsOptionalDefaultsWithPartialRelations> = active_storage_blobsOptionalDefaultsSchema.merge(z.object({
  active_storage_attachments: z.lazy(() => active_storage_attachmentsPartialWithRelationsSchema).array(),
  active_storage_variant_records: z.lazy(() => active_storage_variant_recordsPartialWithRelationsSchema).array(),
}).partial())

export type active_storage_blobsWithPartialRelations = z.infer<typeof active_storage_blobsSchema> & active_storage_blobsPartialRelations

export const active_storage_blobsWithPartialRelationsSchema: z.ZodType<active_storage_blobsWithPartialRelations> = active_storage_blobsSchema.merge(z.object({
  active_storage_attachments: z.lazy(() => active_storage_attachmentsPartialWithRelationsSchema).array(),
  active_storage_variant_records: z.lazy(() => active_storage_variant_recordsPartialWithRelationsSchema).array(),
}).partial())

export default active_storage_blobsSchema;
