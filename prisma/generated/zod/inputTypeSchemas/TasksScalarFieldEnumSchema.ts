import { z } from 'zod';

export const TasksScalarFieldEnumSchema = z.enum(['id','title','description','status','created_at','updated_at']);

export default TasksScalarFieldEnumSchema;
