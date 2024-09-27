import { z } from 'zod';

/////////////////////////////////////////
// SCHEMA MIGRATIONS SCHEMA
/////////////////////////////////////////

export const schema_migrationsSchema = z.object({
  version: z.string(),
})

export type schema_migrations = z.infer<typeof schema_migrationsSchema>

/////////////////////////////////////////
// SCHEMA MIGRATIONS PARTIAL SCHEMA
/////////////////////////////////////////

export const schema_migrationsPartialSchema = schema_migrationsSchema.partial()

export type schema_migrationsPartial = z.infer<typeof schema_migrationsPartialSchema>

/////////////////////////////////////////
// SCHEMA MIGRATIONS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const schema_migrationsOptionalDefaultsSchema = schema_migrationsSchema.merge(z.object({
}))

export type schema_migrationsOptionalDefaults = z.infer<typeof schema_migrationsOptionalDefaultsSchema>

export default schema_migrationsSchema;
