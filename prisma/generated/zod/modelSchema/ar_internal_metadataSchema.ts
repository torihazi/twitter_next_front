import { z } from 'zod';

/////////////////////////////////////////
// AR INTERNAL METADATA SCHEMA
/////////////////////////////////////////

export const ar_internal_metadataSchema = z.object({
  key: z.string(),
  value: z.string().nullable(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type ar_internal_metadata = z.infer<typeof ar_internal_metadataSchema>

/////////////////////////////////////////
// AR INTERNAL METADATA PARTIAL SCHEMA
/////////////////////////////////////////

export const ar_internal_metadataPartialSchema = ar_internal_metadataSchema.partial()

export type ar_internal_metadataPartial = z.infer<typeof ar_internal_metadataPartialSchema>

/////////////////////////////////////////
// AR INTERNAL METADATA OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ar_internal_metadataOptionalDefaultsSchema = ar_internal_metadataSchema.merge(z.object({
}))

export type ar_internal_metadataOptionalDefaults = z.infer<typeof ar_internal_metadataOptionalDefaultsSchema>

export default ar_internal_metadataSchema;
