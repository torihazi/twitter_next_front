import { z } from 'zod';

export const TasksScalarFieldEnumSchema = z.enum(['id','title','description','status','createdAt','updatedAt']);

export default TasksScalarFieldEnumSchema;
