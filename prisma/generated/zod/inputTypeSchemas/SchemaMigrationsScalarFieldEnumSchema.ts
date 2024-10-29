import { z } from 'zod';

export const SchemaMigrationsScalarFieldEnumSchema = z.enum(['version']);

export default SchemaMigrationsScalarFieldEnumSchema;
