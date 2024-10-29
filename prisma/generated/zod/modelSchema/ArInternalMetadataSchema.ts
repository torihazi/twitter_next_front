import { z } from 'zod';

/////////////////////////////////////////
// AR INTERNAL METADATA SCHEMA
/////////////////////////////////////////

export const ArInternalMetadataSchema = z.object({
  key: z.string(),
  value: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ArInternalMetadata = z.infer<typeof ArInternalMetadataSchema>

/////////////////////////////////////////
// AR INTERNAL METADATA PARTIAL SCHEMA
/////////////////////////////////////////

export const ArInternalMetadataPartialSchema = ArInternalMetadataSchema.partial()

export type ArInternalMetadataPartial = z.infer<typeof ArInternalMetadataPartialSchema>

/////////////////////////////////////////
// AR INTERNAL METADATA OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ArInternalMetadataOptionalDefaultsSchema = ArInternalMetadataSchema.merge(z.object({
}))

export type ArInternalMetadataOptionalDefaults = z.infer<typeof ArInternalMetadataOptionalDefaultsSchema>

export default ArInternalMetadataSchema;
