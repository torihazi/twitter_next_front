import { z } from 'zod';
import type { ActiveStorageBlobsWithRelations } from './ActiveStorageBlobsSchema'
import type { ActiveStorageBlobsPartialWithRelations } from './ActiveStorageBlobsSchema'
import type { ActiveStorageBlobsOptionalDefaultsWithRelations } from './ActiveStorageBlobsSchema'
import { ActiveStorageBlobsWithRelationsSchema } from './ActiveStorageBlobsSchema'
import { ActiveStorageBlobsPartialWithRelationsSchema } from './ActiveStorageBlobsSchema'
import { ActiveStorageBlobsOptionalDefaultsWithRelationsSchema } from './ActiveStorageBlobsSchema'

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS SCHEMA
/////////////////////////////////////////

export const ActiveStorageAttachmentsSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  recordType: z.string(),
  recordId: z.bigint(),
  blobId: z.bigint(),
  createdAt: z.coerce.date(),
})

export type ActiveStorageAttachments = z.infer<typeof ActiveStorageAttachmentsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS PARTIAL SCHEMA
/////////////////////////////////////////

export const ActiveStorageAttachmentsPartialSchema = ActiveStorageAttachmentsSchema.partial()

export type ActiveStorageAttachmentsPartial = z.infer<typeof ActiveStorageAttachmentsPartialSchema>

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ActiveStorageAttachmentsOptionalDefaultsSchema = ActiveStorageAttachmentsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type ActiveStorageAttachmentsOptionalDefaults = z.infer<typeof ActiveStorageAttachmentsOptionalDefaultsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageAttachmentsRelations = {
  activeStorageBlobs: ActiveStorageBlobsWithRelations;
};

export type ActiveStorageAttachmentsWithRelations = z.infer<typeof ActiveStorageAttachmentsSchema> & ActiveStorageAttachmentsRelations

export const ActiveStorageAttachmentsWithRelationsSchema: z.ZodType<ActiveStorageAttachmentsWithRelations> = ActiveStorageAttachmentsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageAttachmentsOptionalDefaultsRelations = {
  activeStorageBlobs: ActiveStorageBlobsOptionalDefaultsWithRelations;
};

export type ActiveStorageAttachmentsOptionalDefaultsWithRelations = z.infer<typeof ActiveStorageAttachmentsOptionalDefaultsSchema> & ActiveStorageAttachmentsOptionalDefaultsRelations

export const ActiveStorageAttachmentsOptionalDefaultsWithRelationsSchema: z.ZodType<ActiveStorageAttachmentsOptionalDefaultsWithRelations> = ActiveStorageAttachmentsOptionalDefaultsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE ATTACHMENTS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageAttachmentsPartialRelations = {
  activeStorageBlobs?: ActiveStorageBlobsPartialWithRelations;
};

export type ActiveStorageAttachmentsPartialWithRelations = z.infer<typeof ActiveStorageAttachmentsPartialSchema> & ActiveStorageAttachmentsPartialRelations

export const ActiveStorageAttachmentsPartialWithRelationsSchema: z.ZodType<ActiveStorageAttachmentsPartialWithRelations> = ActiveStorageAttachmentsPartialSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsPartialWithRelationsSchema),
})).partial()

export type ActiveStorageAttachmentsOptionalDefaultsWithPartialRelations = z.infer<typeof ActiveStorageAttachmentsOptionalDefaultsSchema> & ActiveStorageAttachmentsPartialRelations

export const ActiveStorageAttachmentsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ActiveStorageAttachmentsOptionalDefaultsWithPartialRelations> = ActiveStorageAttachmentsOptionalDefaultsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsPartialWithRelationsSchema),
}).partial())

export type ActiveStorageAttachmentsWithPartialRelations = z.infer<typeof ActiveStorageAttachmentsSchema> & ActiveStorageAttachmentsPartialRelations

export const ActiveStorageAttachmentsWithPartialRelationsSchema: z.ZodType<ActiveStorageAttachmentsWithPartialRelations> = ActiveStorageAttachmentsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsPartialWithRelationsSchema),
}).partial())

export default ActiveStorageAttachmentsSchema;
