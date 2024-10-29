import { z } from 'zod';

/////////////////////////////////////////
// SCHEMA MIGRATIONS SCHEMA
/////////////////////////////////////////

export const SchemaMigrationsSchema = z.object({
  version: z.string(),
})

export type SchemaMigrations = z.infer<typeof SchemaMigrationsSchema>

/////////////////////////////////////////
// SCHEMA MIGRATIONS PARTIAL SCHEMA
/////////////////////////////////////////

export const SchemaMigrationsPartialSchema = SchemaMigrationsSchema.partial()

export type SchemaMigrationsPartial = z.infer<typeof SchemaMigrationsPartialSchema>

/////////////////////////////////////////
// SCHEMA MIGRATIONS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const SchemaMigrationsOptionalDefaultsSchema = SchemaMigrationsSchema.merge(z.object({
}))

export type SchemaMigrationsOptionalDefaults = z.infer<typeof SchemaMigrationsOptionalDefaultsSchema>

export default SchemaMigrationsSchema;
