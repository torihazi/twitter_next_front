import { z } from 'zod';
import type { ActiveStorageBlobsWithRelations } from './ActiveStorageBlobsSchema'
import type { ActiveStorageBlobsPartialWithRelations } from './ActiveStorageBlobsSchema'
import type { ActiveStorageBlobsOptionalDefaultsWithRelations } from './ActiveStorageBlobsSchema'
import { ActiveStorageBlobsWithRelationsSchema } from './ActiveStorageBlobsSchema'
import { ActiveStorageBlobsPartialWithRelationsSchema } from './ActiveStorageBlobsSchema'
import { ActiveStorageBlobsOptionalDefaultsWithRelationsSchema } from './ActiveStorageBlobsSchema'

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS SCHEMA
/////////////////////////////////////////

export const ActiveStorageVariantRecordsSchema = z.object({
  id: z.bigint(),
  blobId: z.bigint(),
  variationDigest: z.string(),
})

export type ActiveStorageVariantRecords = z.infer<typeof ActiveStorageVariantRecordsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS PARTIAL SCHEMA
/////////////////////////////////////////

export const ActiveStorageVariantRecordsPartialSchema = ActiveStorageVariantRecordsSchema.partial()

export type ActiveStorageVariantRecordsPartial = z.infer<typeof ActiveStorageVariantRecordsPartialSchema>

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ActiveStorageVariantRecordsOptionalDefaultsSchema = ActiveStorageVariantRecordsSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type ActiveStorageVariantRecordsOptionalDefaults = z.infer<typeof ActiveStorageVariantRecordsOptionalDefaultsSchema>

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageVariantRecordsRelations = {
  activeStorageBlobs: ActiveStorageBlobsWithRelations;
};

export type ActiveStorageVariantRecordsWithRelations = z.infer<typeof ActiveStorageVariantRecordsSchema> & ActiveStorageVariantRecordsRelations

export const ActiveStorageVariantRecordsWithRelationsSchema: z.ZodType<ActiveStorageVariantRecordsWithRelations> = ActiveStorageVariantRecordsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageVariantRecordsOptionalDefaultsRelations = {
  activeStorageBlobs: ActiveStorageBlobsOptionalDefaultsWithRelations;
};

export type ActiveStorageVariantRecordsOptionalDefaultsWithRelations = z.infer<typeof ActiveStorageVariantRecordsOptionalDefaultsSchema> & ActiveStorageVariantRecordsOptionalDefaultsRelations

export const ActiveStorageVariantRecordsOptionalDefaultsWithRelationsSchema: z.ZodType<ActiveStorageVariantRecordsOptionalDefaultsWithRelations> = ActiveStorageVariantRecordsOptionalDefaultsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// ACTIVE STORAGE VARIANT RECORDS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ActiveStorageVariantRecordsPartialRelations = {
  activeStorageBlobs?: ActiveStorageBlobsPartialWithRelations;
};

export type ActiveStorageVariantRecordsPartialWithRelations = z.infer<typeof ActiveStorageVariantRecordsPartialSchema> & ActiveStorageVariantRecordsPartialRelations

export const ActiveStorageVariantRecordsPartialWithRelationsSchema: z.ZodType<ActiveStorageVariantRecordsPartialWithRelations> = ActiveStorageVariantRecordsPartialSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsPartialWithRelationsSchema),
})).partial()

export type ActiveStorageVariantRecordsOptionalDefaultsWithPartialRelations = z.infer<typeof ActiveStorageVariantRecordsOptionalDefaultsSchema> & ActiveStorageVariantRecordsPartialRelations

export const ActiveStorageVariantRecordsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ActiveStorageVariantRecordsOptionalDefaultsWithPartialRelations> = ActiveStorageVariantRecordsOptionalDefaultsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsPartialWithRelationsSchema),
}).partial())

export type ActiveStorageVariantRecordsWithPartialRelations = z.infer<typeof ActiveStorageVariantRecordsSchema> & ActiveStorageVariantRecordsPartialRelations

export const ActiveStorageVariantRecordsWithPartialRelationsSchema: z.ZodType<ActiveStorageVariantRecordsWithPartialRelations> = ActiveStorageVariantRecordsSchema.merge(z.object({
  activeStorageBlobs: z.lazy(() => ActiveStorageBlobsPartialWithRelationsSchema),
}).partial())

export default ActiveStorageVariantRecordsSchema;
