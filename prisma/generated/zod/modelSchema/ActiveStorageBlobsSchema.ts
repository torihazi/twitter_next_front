import { z } from 'zod';
import type { ActiveStorageAttachmentsWithRelations } from './ActiveStorageAttachmentsSchema'
import type { ActiveStorageAttachmentsPartialWithRelations } from './ActiveStorageAttachmentsSchema'
import type { ActiveStorageAttachmentsOptionalDefaultsWithRelations } from './ActiveStorageAttachmentsSchema'
import type { ActiveStorageVariantRecordsWithRelations } from './ActiveStorageVariantRecordsSchema'
import type { ActiveStorageVariantRecordsPartialWithRelations } from './ActiveStorageVariantRecordsSchema'
import type { ActiveStorageVariantRecordsOptionalDefaultsWithRelations } from './ActiveStorageVariantRecordsSchema'
import { ActiveStorageAttachmentsWithRelationsSchema } from './ActiveStorageAttachmentsSchema'
import { ActiveStorageAttachmentsPartialWithRelationsSchema } from './ActiveStorageAttachmentsSchema'
import { ActiveStorageAttachmentsOptionalDefaultsWithRelationsSchema } from './ActiveStorageAttachmentsSchema'
import { ActiveStorageVariantRecordsWithRelationsSchema } from './ActiveStorageVariantRecordsSchema'
import { ActiveStorageVariantRecordsPartialWithRelationsSchema } from './ActiveStorageVariantRecordsSchema'
import { ActiveStorageVariantRecordsOptionalDefaultsWithRelationsSchema } from './ActiveStorageVariantRecordsSchema'

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS SCHEMA
/////////////////////////////////////////

export const ActiveStorageBlobsSchema = z.object({
  id: z.bigint(),
  key: z.string(),
  filename: z.string(),
  contentType: z.string().nullable(),
  metadata: z.string().nullable(),
  serviceName: z.string(),
  byteSize: z.bigint(),
  checksum: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type ActiveStorageBlobs = z.infer<typeof ActiveStorageBlobsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS PARTIAL SCHEMA
/////////////////////////////////////////

export const ActiveStorageBlobsPartialSchema = ActiveStorageBlobsSchema.partial()

export type ActiveStorageBlobsPartial = z.infer<typeof ActiveStorageBlobsPartialSchema>

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ActiveStorageBlobsOptionalDefaultsSchema = ActiveStorageBlobsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type ActiveStorageBlobsOptionalDefaults = z.infer<typeof ActiveStorageBlobsOptionalDefaultsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageBlobsRelations = {
  activeStorageAttachments: ActiveStorageAttachmentsWithRelations[];
  activeStorageVariantRecords: ActiveStorageVariantRecordsWithRelations[];
};

export type ActiveStorageBlobsWithRelations = z.infer<typeof ActiveStorageBlobsSchema> & ActiveStorageBlobsRelations

export const ActiveStorageBlobsWithRelationsSchema: z.ZodType<ActiveStorageBlobsWithRelations> = ActiveStorageBlobsSchema.merge(z.object({
  activeStorageAttachments: z.lazy(() => ActiveStorageAttachmentsWithRelationsSchema).array(),
  activeStorageVariantRecords: z.lazy(() => ActiveStorageVariantRecordsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageBlobsOptionalDefaultsRelations = {
  activeStorageAttachments: ActiveStorageAttachmentsOptionalDefaultsWithRelations[];
  activeStorageVariantRecords: ActiveStorageVariantRecordsOptionalDefaultsWithRelations[];
};

export type ActiveStorageBlobsOptionalDefaultsWithRelations = z.infer<typeof ActiveStorageBlobsOptionalDefaultsSchema> & ActiveStorageBlobsOptionalDefaultsRelations

export const ActiveStorageBlobsOptionalDefaultsWithRelationsSchema: z.ZodType<ActiveStorageBlobsOptionalDefaultsWithRelations> = ActiveStorageBlobsOptionalDefaultsSchema.merge(z.object({
  activeStorageAttachments: z.lazy(() => ActiveStorageAttachmentsOptionalDefaultsWithRelationsSchema).array(),
  activeStorageVariantRecords: z.lazy(() => ActiveStorageVariantRecordsOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ACTIVE STORAGE BLOBS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageBlobsPartialRelations = {
  activeStorageAttachments?: ActiveStorageAttachmentsPartialWithRelations[];
  activeStorageVariantRecords?: ActiveStorageVariantRecordsPartialWithRelations[];
};

export type ActiveStorageBlobsPartialWithRelations = z.infer<typeof ActiveStorageBlobsPartialSchema> & ActiveStorageBlobsPartialRelations

export const ActiveStorageBlobsPartialWithRelationsSchema: z.ZodType<ActiveStorageBlobsPartialWithRelations> = ActiveStorageBlobsPartialSchema.merge(z.object({
  activeStorageAttachments: z.lazy(() => ActiveStorageAttachmentsPartialWithRelationsSchema).array(),
  activeStorageVariantRecords: z.lazy(() => ActiveStorageVariantRecordsPartialWithRelationsSchema).array(),
})).partial()

export type ActiveStorageBlobsOptionalDefaultsWithPartialRelations = z.infer<typeof ActiveStorageBlobsOptionalDefaultsSchema> & ActiveStorageBlobsPartialRelations

export const ActiveStorageBlobsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ActiveStorageBlobsOptionalDefaultsWithPartialRelations> = ActiveStorageBlobsOptionalDefaultsSchema.merge(z.object({
  activeStorageAttachments: z.lazy(() => ActiveStorageAttachmentsPartialWithRelationsSchema).array(),
  activeStorageVariantRecords: z.lazy(() => ActiveStorageVariantRecordsPartialWithRelationsSchema).array(),
}).partial())

export type ActiveStorageBlobsWithPartialRelations = z.infer<typeof ActiveStorageBlobsSchema> & ActiveStorageBlobsPartialRelations

export const ActiveStorageBlobsWithPartialRelationsSchema: z.ZodType<ActiveStorageBlobsWithPartialRelations> = ActiveStorageBlobsSchema.merge(z.object({
  activeStorageAttachments: z.lazy(() => ActiveStorageAttachmentsPartialWithRelationsSchema).array(),
  activeStorageVariantRecords: z.lazy(() => ActiveStorageVariantRecordsPartialWithRelationsSchema).array(),
}).partial())

export default ActiveStorageBlobsSchema;
