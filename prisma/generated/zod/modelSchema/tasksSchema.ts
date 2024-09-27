import { z } from 'zod';

/////////////////////////////////////////
// TASKS SCHEMA
/////////////////////////////////////////

export const tasksSchema = z.object({
  id: z.bigint(),
  title: z.string(),
  description: z.string(),
  status: z.number().int(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export type tasks = z.infer<typeof tasksSchema>

/////////////////////////////////////////
// TASKS PARTIAL SCHEMA
/////////////////////////////////////////

export const tasksPartialSchema = tasksSchema.partial()

export type tasksPartial = z.infer<typeof tasksPartialSchema>

/////////////////////////////////////////
// TASKS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const tasksOptionalDefaultsSchema = tasksSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type tasksOptionalDefaults = z.infer<typeof tasksOptionalDefaultsSchema>

export default tasksSchema;
