import { z } from 'zod';

/////////////////////////////////////////
// TASKS SCHEMA
/////////////////////////////////////////

export const TasksSchema = z.object({
  id: z.bigint(),
  title: z.string(),
  description: z.string(),
  status: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Tasks = z.infer<typeof TasksSchema>

/////////////////////////////////////////
// TASKS PARTIAL SCHEMA
/////////////////////////////////////////

export const TasksPartialSchema = TasksSchema.partial()

export type TasksPartial = z.infer<typeof TasksPartialSchema>

/////////////////////////////////////////
// TASKS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const TasksOptionalDefaultsSchema = TasksSchema.merge(z.object({
  id: z.bigint().optional(),
}))

export type TasksOptionalDefaults = z.infer<typeof TasksOptionalDefaultsSchema>

export default TasksSchema;
